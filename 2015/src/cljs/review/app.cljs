(ns review.app
  (:require-macros [cljs.core.async.macros :refer [go-loop]])
  (:require [cljs.core.async :refer [<! put! chan timeout]]
            [reagent.core :as r]
            [cljsjs.enquire :as enquire]
            [goog.events :as events]
            [goog.events.EventType :as EventType]
            [goog.dom :as dom]))

(enable-console-print!)

;; -------------------------------
;; y-scroll event channel
;; http://www.mattgreer.org/articles/scrolling-animations-with-reagent/

(def current-y-scroll (r/atom 0))

(def prev-y-scroll (r/atom 0))

(defn get-scroll []
      (-> (dom/getDocumentScroll)
          (.-y)))

(defn events->chan [el event-type c]
      (events/listen el event-type #(put! c %))
      c)

(defn scroll-chan []
      (events->chan js/window EventType/SCROLL (chan 1 (map get-scroll))))

(defn listen! []
      (let [chan (scroll-chan)]
           (go-loop []
                    (let [new-y (<! chan)]
                         (reset! prev-y-scroll @current-y-scroll)
                         ;; dont include negative values
                         (reset! current-y-scroll (max 0 new-y)))
                    (recur))))

(listen!)

;; -------------------------------
;; define app state & app-state utils

(def colors {:primary   "white"
             :secondary "rgba(100,100,100, 1.00)"})

(def app-state (r/atom {:colors {:titles (:primary colors)
                                 :body   (:secondary colors)}
                        :copy   {:banner-title "is proud to present"}}))

(def titles ["Code Across 2015"
             "Sol Cavp"
             "Fresh Food Connect API"
             "Fresh Food Connect"
             "Code for Denver Site"
             "Denver Sustainability"
             "RMFU Feed"])

(def contributors [3, 5, 8, 9, 9, 10, 14])

(def data {:labels   titles
           :datasets [{
                       :label           "Code for Denver Contributors"
                       :fillColor       "#E44D50"
                       :strokeColor     "#E44D50"
                       :highlightFill   "#E44D50"
                       :highlightStroke "black"
                       :data            contributors}]})

(defn swap-title! [title]
      (swap! app-state assoc-in [:copy :banner-title] title))

;; -------------------------------
;; register media queries triggers and app-state change listeners

(.register js/enquire "screen and (max-width:722px)"
           (clj->js {;;:setup   (fn [])
                     :match   #(swap! app-state assoc-in [:colors :titles] (:secondary colors))
                     :unmatch #(swap! app-state assoc-in [:colors :titles] (:primary colors))}))

(add-watch current-y-scroll :y-scroll-watcher
           (fn [_ _ _ new-state]
               (print new-state)
               (cond
                 (< new-state 200) (swap-title! "is proud to present")
                 (and (> new-state 201) (<= new-state 600)) (swap-title! "the story of how we embarked on 7 major projects..")
                 (and (>= new-state 601) (< new-state 1000)) (swap-title! "our contributors spent a total of:")
                 (and (>= new-state 1218) (< new-state 1500)) (swap-title! "organized a total of:")
                 (and (>= new-state 1678) (< new-state 1880)) (swap-title! "wrote a ton of documentation & design specs:")
                 (> new-state 1881) (swap-title! "all possible because of you.."))))


;; (add-watch app-state :logger #(-> %4 clj->js js/console.log))

(defn some-component []
      (r/create-class
        {:component-did-mount
         (fn []
             (let [ctx (.getContext (.getElementById js/document "myChart") "2d")]
                  (.Bar (js/Chart. ctx)
                        (clj->js data)
                        (clj->js {:scaleFontColor "rgba(100,100,100, 1.00)"}))))
         :reagent-render
         (fn []
             [:div.main

              [:div.row.banner
               [:div.col-lg-12
                [:p.lead [:img {:src   "images/cfdlogo.png"
                                :width "220px"}]
                 [:span (get-in @app-state [:copy :banner-title])]]]]

              [:div.row.part-one
               [:div.col-lg-12
                [:p.lead
                 [:h1.super {:style {:color (get-in @app-state [:colors :titles])}} "2015"]
                 [:h2 "END OF YEAR SUMMARY"]]
                [:p.lead ""]]]

              [:div.row.part-two
               [:div.col-lg-12
                [:canvas {:id     "myChart"
                          :width  "400"
                          :height "400"}]
                [:p.lead ""]]]

              [:div.row.part-three
               [:div.col-lg-12
                [:h3.text-center "3000 hours or"]
                [:h3.text-center "75 work weeks or"]
                [:h3.text-center "1.5 years"]
                [:p.lead.text-center
                 [:a {:href  "http://sparktime.org/"
                      :style {:color "white"}} "sparktime.org"]]]]

              [:div.row.part-four
               [:div.col-lg-12
                [:h3.text-right.super "47"]
                [:p.lead.text-right
                 "meetup events"]]]

              [:div.row.part-five
               [:div.col-lg-12
                [:h3.text-right "166 Docs, 25 Sheets, 21 Forms, 10 Slides, 8 PDFs, 3 Drawings"]
                [:p.lead.text-right
                 "Google Drive"]]]

              [:div.row.thanks
               [:div.col-lg-12
                [:h3.text-center "MANY THANKS!"]
                [:p.lead.text-center "Core Team @ Code For Denver, sincerely thanks you for your kind contributions to a better xyz"]]]


              [:div.row.thanks
               [:div.col-lg-12
                [:img.img-responsive {:src "images/1.png"}]
                [:img.img-responsive {:src "images/2.png"}]
                ]]
              ])}))

(defn main-component []
      [:div [some-component]])

(defn init []
      (r/render-component [main-component]
                          (.getElementById js/document "container")))
