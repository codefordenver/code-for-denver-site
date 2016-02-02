(ns review.app
  (:require-macros
    [cljs.core.async.macros :refer [go alt!]])
  (:require [reagent.core :as r]
            [cljsjs.jquery :as $]
            [ajax.core :refer [GET]]
            [cljs.core.async :refer [chan close! put!]]
            [timothypratley.reanimated.core :as anim]))

(enable-console-print!)

(defn <fetch [url]
      (let [ch (chan 1)]
           (GET url
                {:response-format :json
                 :keywords?       true
                 :handler         (fn [res]
                                      (do (put! ch res)
                                          (close! ch)))})
           ch))

;; -------------------------------
;; define app state & app-state utils

(def colors {:primary   "white"
             :secondary "rgba(100,100,100, 1.00)"})

(def app-state (r/atom {:colors       {:titles (:primary colors)
                                       :body   (:secondary colors)}
                        :copy         {:banner-title "is proud to present"}
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
      (swap! app-state assoc-in [:copy :banner-title] title)
      (swap! app-state assoc-in [:banner-style] style)
      (swap! app-state assoc-in [:logo-url] (or logo-url "cfdlogo-sm.png")))

(add-watch anim/scroll :y-scroll-watcher
           (fn [_ _ _ new-state]
               (do
                 ;; (print new-state)
                 (cond

                   (< new-state 200) (refresh! "is proud to present" "banner-dark" "cfdlogo.png")

                   (and (> new-state 201) (<= new-state 762)) (refresh! "the story of how we embarked on 7 major projects.." "banner-light")

                   (and (>= new-state 762) (< new-state 1394)) (refresh! "our contributors spent a total of:" "banner-dark")

                   (and (>= new-state 1394) (< new-state 1800)) (refresh! "organized a total of:" "banner-light")

                   (and (>= new-state 1800) (< new-state 2555)) (refresh! "wrote a ton of documentation & design specs:" "banner-dark")

                   (> new-state 2555) (refresh! "all possible because of you.." "banner-light")))))

(defn main-component []
      (let [;; animation state transitions
            circle-scale (anim/spring anim/scroll)
            scroll-y (anim/interpolate-to anim/scroll)
            contributors (r/atom [])]
           (r/create-class
             {:component-will-mount
              (fn []
                  (let [c (<fetch "./data/github.json")]
                       (go
                         (let [data (<! c)]
                              (reset! contributors (:contributors data))))))
              :component-did-mount
              (fn []
                  (let [ctx (.getContext (.getElementById js/document "myChart") "2d")]
                       (.Bar (js/Chart. ctx)
                             (clj->js chart-data)
                             #js {:scaleFontColor "rgba(100,100,100, 1.00)"})))
              :reagent-render
              (fn []

                  [:div.main
                   [:div.container
                    [:div.row {:class (:banner-style @app-state)}
                     [:div.col-lg-12
                      [:img.logo {:src (str "images/" (:logo-url @app-state))}]
                      [:span (get-in @app-state [:copy :banner-title])]]
                     ]]

                   [:div.container-fluid
                    [:div.row.part-one
                     [:div.col-lg-12
                      [:h1.super.text-center "2015"]
                      [:h2.subtitles.text-center "END OF YEAR SUMMARY"]]]]

                   [:div.container-fluid
                    [:div.row.part-two
                     [:div.col-lg-12
                      [:canvas {:id     "myChart"
                                :width  "400"
                                :height "400"}]]]]

                   [:div.container-fluid
                    [:div.row.part-three
                     [:div.col-lg-12
                      [:h3.text-center "3000 hours /"]
                      [:h3.text-center "75 work weeks /"]
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
                      [:h3.text-left "166 Docs"]
                      [:h3.text-left "25 Sheets"]
                      [:h3.text-left "21 Forms"]
                      [:h3.text-left "10 Slides"]
                      [:h3.text-left "8 PDFs"]
                      [:h3.text-left "3 Drawings"]
                      [:h4.text-left "Google Drive"]]]]

                   [:div.container-fluid
                    [:div.row.thanks
                     [:div.col-lg-12
                      [:h1.text-center "MANY THANKS!"]
                      [:hr]]
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
                         :style {:color "white"}}  [:img.text-center.text-center {:src "images/meetup-icon.png" :style {:transform (str "scale(" (/ @circle-scale 5000) ")")} }]
                     ]]]
                   [:div.footer
                    [:img.img-full {:src "images/4.jpg"}]]])})))

(defn parent-component []
      [:div [main-component]])

(defn init []
      (r/render-component [parent-component]
                          (.getElementById js/document "mount")))
