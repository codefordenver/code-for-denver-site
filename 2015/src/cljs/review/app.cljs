(ns review.app
  (:require [reagent.core :as r]
            [cljsjs.jquery :as $]
            [ajax.core :refer [GET]]
            [cljsjs.chartist]
            [timothypratley.reanimated.core :as anim]))

(enable-console-print!)

;; -------------------------------
;; define app state & app-state utils

(def colors {:primary   "white"
             :secondary "rgba(100,100,100, 1.00)"})

(def app-state (r/atom {:banner-title "is proud to present"
                        :banner-style "banner-dark"
                        :logo-url     "cfdlogo.png"}))

(def chart-titles ["Code Across 2015"
                   "Sol Cavp"
                   "Fresh Food Connect API"
                   "Fresh Food Connect"
                   "Code for Denver Site"
                   "Denver Sustainability"
                   "RMFU Feed"])

(def chart-data {:labels   chart-titles
                 :datasets [{
                             :label           "Code for Denver Contributors"
                             :fillColor       "#E44D50"
                             :strokeColor     "#E44D50"
                             :highlightFill   "#E44D50"
                             :highlightStroke "black"
                             :data            [4 5 114 216 105 135 199]}]})


(defn refresh! [title style & [logo-url]]
      (swap! app-state assoc :banner-title title)
      (swap! app-state assoc :banner-style style)
      (swap! app-state assoc :logo-url (or logo-url "cfdlogo-sm.png")))

(def positions [200 201 762 1394 1800 2910 3800])

(add-watch anim/scroll :y-scroll-watcher
           (fn [_ _ _ y]
               (cond

                 (< y 200) (refresh! "is proud to present" "banner-dark" "cfdlogo.png")

                 (and (> y 201) (<= y 762)) (refresh! "the story of how we embarked on 7 major projects.." "banner-light")

                 (and (>= y 762) (< y 1394)) (refresh! "our contributors spent a total of:" "banner-dark")

                 (and (>= y 1394) (< y 1800)) (refresh! "organized a total of:" "banner-light")

                 (and (>= y 1800) (< y 2910)) (refresh! "wrote a ton of documentation & design specs:" "banner-light")

                 (and (>= y 2910) (< y 3800)) (refresh! "ate a lot of pizza..." "banner-dark")

                 (> y 3800) (refresh! "all possible because of you.." "banner-light"))))

(defn doc-generator [many]
      (for [n (range many)]
           ^{:key n} [:div.icon.red
                      [:span.doc-icon.doc "☰"]
                      [:span.doc-type "DOC"]]))

(defn main-component []
      (let [circle-scale (anim/spring anim/scroll)
            scroll-y (anim/interpolate-to anim/scroll)
            contributors (r/atom [])
            scroll-to (r/atom 0)]
           (r/create-class
             {:component-will-mount
              (fn []
                  (GET "./data/github.json"
                       {:response-format :json
                        :keywords?       true
                        :handler         #(reset! contributors (:contributors %))}))

              :component-did-mount
              (fn []
                  (let [ctx (.getContext (.getElementById js/document "myChart") "2d")

                        pie-chart-data {:labels ["Pizza (84%)" "Everything else (16%)"]
                                        :series [{:className "pizza light"
                                                  :value     84}
                                                 {:className "else"
                                                  :value     16}]}]

                       (.Pie js/Chartist
                             "#pieChart"
                             (clj->js pie-chart-data)
                             (clj->js {:labelInterpolationFnc (fn [value] value)})
                             (clj->js [["screen and (min-width: 380px)", {:height                200
                                                                          :labelOffset           -3
                                                                          :chartPadding          10
                                                                          :labelPosition         "outside"
                                                                          :labelDirection        "explode"}]
                                       ["screen and (min-width: 640px)", {:height                450
                                                                          :labelOffset           -34
                                                                          :chartPadding          50
                                                                          :labelPosition         "outside"
                                                                          :labelDirection        "explode"}]
                                       ["screen and (min-width: 1024px)", {:height       600
                                                                           :labelOffset  -20
                                                                           :chartPadding 60}]]))
                       (.Bar (js/Chart. ctx)
                             (clj->js chart-data)
                             #js {:scaleFontColor "rgba(100,100,100, 1.00)"})))
              :reagent-render
              (fn []
                  [:div.main
                   [:div.container
                    [:div.row {:class (:banner-style @app-state)}
                     [:div.col-lg-9
                      [:a {:href "http://www.codefordenver.org/" :target "_blank"} [:img.logo {:src (str "images/" (:logo-url @app-state))}]]
                      [:span (@app-state :banner-title)]]
                     [:div.col-lg-3
                      [:a.arrow-wrap
                       {:onClick #(if (= @scroll-to (count positions))
                                   (reset! scroll-to 0)
                                   (do
                                     (-> (js/$ "html, body")
                                         (.animate #js {:scrollTop (str (positions @scroll-to) "px")}))
                                     (swap! scroll-to inc)))}
                       [:span {:class (if (>= @scroll-y (last positions))
                                        "arrow-up"
                                        "arrow-down")}]
                       [:span.hint]]]]]

                   [:div.container-fluid
                    [:div.row.part-one
                     [:div.col-lg-12
                      [:h1.super.text-center "2015"]
                      [:h2.subtitles.text-center "END OF YEAR SUMMARY"]]]]

                   [:div.container-fluid
                    [:div.row.part-two
                     [:div.col-lg-12.col-lg-push-3
                      [:canvas {:id     "myChart"
                                :width  "400"
                                :height "400"}]]]]

                   [:div.container-fluid
                    [:div.row.part-three
                     [:div.col-lg-12
                      [:h3.text-center "3000 hours"]
                      [:h3.text-center "75 work weeks"]
                      [:h3.text-center "1.5 years"]
                      [:div.timeline
                       [:ol
                        [:span.cursor {:style {:left (/ (mod @scroll-y (.width (js/$ ".timeline"))) 2)}}]]]
                      [:h4.text-center "tracked by "
                       [:a {:href  "http://sparktime.org/"
                            :style {:color "white"}} "sparktime.org"]]]]]

                   [:div.container-fluid
                    [:div.row.part-four
                     [:div#circle {:style {:transform (str "scale(" (/ @circle-scale 150) ")")}}]
                     [:div.col-lg-12
                      [:h3.super.text-center "47"]
                      [:h2.subtitles.text-center "meetup events"]]]]

                   [:div.container-fluid
                    [:div.row.part-five
                     [:div.col-lg-12
                      [:div.gdocs

                       [:div.box
                        [:h3.text-left "\u20033 Drawings "
                         (doc-generator 3)]]

                       [:div.box
                        [:h3.text-left "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A08 PDFs "
                         (doc-generator 8)]]

                       [:div.box
                        [:h3.text-left "\u200A\u00A0\u00A0\u00A0\u00A010 Slides "
                         (doc-generator 10)]]

                       [:div.box
                        [:h3.text-left "\u200A\u200A\u200A\u00A0\u00A0\u00A021 Forms "
                         (doc-generator 21)]]

                       [:div.box
                        [:h3.text-left "\u200A\u200A\u200A\u00A0\u00A025 Sheets "
                         (doc-generator 25)]]

                       [:div.box
                        [:h3.text-left "\u200A\u200A\u200A\u00A0\u00A0\u00A0166 Docs "
                         (doc-generator 166)]]]

                      [:h4.text-right "shared on Google Drive"]]]]

                   [:div.container-fluid
                    [:div.row.part-six
                     [:div.col-lg-12
                      [:h3.text-center "budget distribution"]
                      [:div#pieChart]]]]

                   [:div.container-fluid
                    [:div.row.thanks
                     [:div.col-lg-12
                      [:h1.text-center "MADE POSSIBLE BY"]]

                     [:p.text-center
                      [:b "Core Team @ Code For Denver"]]

                     [:div.row
                      [:div.col-lg-10.col-lg-offset-1
                       [:div.grid
                        (for [user @contributors
                              :let [id (:id user)
                                    avatar_url (:avatar_url user)
                                    login (:login user)
                                    html_url (:html_url user)
                                    username (:login user)]]
                             ^{:key id}
                             [:div.element-item.wrapper
                              [:a {:href   html_url
                                   :target "_blank"}
                               [:img {:src avatar_url}]]
                              [:div.tooltip username]])]]]

                     [:div.row
                      [:div.col-lg-12
                       [:p.text-center
                        [:b "The Core Team @ Code For Denver"]
                        ", sincerely thanks you for your kind contributions towards"
                        [:b " strengthening our community."]]
                       [:hr]]]]]


                   [:h4.join.text-center "JOIN US!"]
                   [:div.row.text-center
                    [:div.col-lg-12
                     [:a {:href  "http://www.meetup.com/CodeForDenver/"
                          :style {:color "white"}}
                      [:img.text-center.text-center
                       {:src   "images/meetup-icon.png"
                        :style {:transform (str "scale(" (/ @circle-scale 5000) ")")}}]]]]

                   [:p.text-center
                    [:b "Partners"]]

                   [:p.text-center
                    [:b "Sponsors"]]

                   [:div.footer
                    [:img.img-full {:src "images/4.jpg"}]
                    [:img.img-full {:src "images/5.jpg"}]
                    [:img.img-full {:src "images/6.jpg"}]]])})))

(defn parent-component []
      [:div [main-component]])

(defn init []
      (r/render-component [parent-component]
                          (.getElementById js/document "mount")))
