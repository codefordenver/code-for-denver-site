(ns review.app
  (:require-macros
    [cljs.core.async.macros :refer [go alt!]])
  (:require [reagent.core :as r]
            [cljsjs.jquery :as $]
            [ajax.core :refer [GET]]
            [cljs.core.async :refer [chan close! put!]]
            [timothypratley.reanimated.core :as anim]))

(enable-console-print!)

(defn fetch! [url]
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

(def titles ["Code Across 2015"
             "Sol Cavp"
             "Fresh Food Connect API"
             "Fresh Food Connect"
             "Code for Denver Site"
             "Denver Sustainability"
             "RMFU Feed"])

(def data {:labels   titles
           :datasets [{
                       :label           "Code for Denver Contributors"
                       :fillColor       "#E44D50"
                       :strokeColor     "#E44D50"
                       :highlightFill   "#E44D50"
                       :highlightStroke "black"
                       :data            [3 5 8 9 9 10 14]}]})

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

                   (and (> new-state 201) (<= new-state 962)) (refresh! "the story of how we embarked on 7 major projects.." "banner-light")

                   (and (>= new-state 962) (< new-state 1494)) (refresh! "our contributors spent a total of:" "banner-dark")

                   (and (>= new-state 1494) (< new-state 2157)) (refresh! "organized a total of:" "banner-light")

                   (and (>= new-state 2157) (< new-state 2665)) (refresh! "wrote a ton of documentation & design specs:" "banner-dark")

                   (> new-state 2665) (refresh! "all possible because of you.." "banner-light")))))

(defn main-component []
      (let [;; animation state transitions
            circle-scale (anim/spring anim/scroll)
            scroll-y (anim/interpolate-to anim/scroll)
            contributors (atom [])]
           (r/create-class
             {:component-will-mount
              (fn []
                  (let [c (fetch! "./data/contributors.json")]
                       (go (reset! contributors (:data (<! c))))))
              :component-did-mount
              (fn []
                  (let [ctx (.getContext (.getElementById js/document "myChart") "2d")]
                       (.Bar (js/Chart. ctx)
                             (clj->js data)
                             (clj->js {:scaleFontColor "rgba(100,100,100, 1.00)"}))))
              :reagent-render
              (fn []

                  [:div.main
                   [:div.container
                    [:div.row {:class (:banner-style @app-state)}
                     [:div.col-lg-3.col-md-4.col-sm-4.col-xs-2
                      [:img.logo {:src (str "images/" (:logo-url @app-state))}]]
                     [:div.col-lg-9.col-md-8.col-sm-4.col-xs-10
                      [:p [:span (get-in @app-state [:copy :banner-title])]]]]]

                   [:div.container-fluid
                    [:div.row.part-one
                     [:div.col-lg-12
                      [:h1.super.text-center "2015"]
                      [:h2.text-center "END OF YEAR SUMMARY"]]]]

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
                      [:h2.text-center "meetup events"]]]]

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
                      [:hr]
                      [:div.grid
                       (for [user @contributors
                             :let [id (:id user)
                                   avatar_url (:avatar_url user)
                                   login (:login user)
                                   html_url (:html_url user)
                                   username (:login user)]]
                            ^{:key id}
                            [:div {:class         "img-thumbnail element-item transition"
                                   :data-category "transition"}
                             [:a {:href   html_url
                                  :target "_blank"}
                              [:img {:src avatar_url}]
                              ;; TODO: fix css so that we can
                              ;; display username
                              ;; username ;; <-- uncomment this line for username
                              ]])]
                      [:br]
                      [:p.text-center
                       [:b "The Core Team @ Code For Denver"]
                       ", sincerely thanks you for your kind contributions towards"
                       [:b " strengthening our community."]]
                      [:hr]]]]

                   [:div.footer
                    [:img.img-full {:src "images/4.jpg"}]]])})))

(defn parent-component []
      [:div [main-component]])

(defn init []
      (r/render-component [parent-component]
                          (.getElementById js/document "mount")))
