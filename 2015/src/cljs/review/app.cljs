(ns review.app
  (:require [reagent.core :as r]
            [cljsjs.enquire :as enquire]))

(enable-console-print!)

;; -------------------------------
;; define app state

(def colors {:primary   "white"
             :secondary "rgba(100,100,100, 1.00)"})

(def app-state (r/atom {:titles (:primary colors)
                        :body   (:secondary colors)}))

(def titles ["Code Across 2015" "Sol Cavp"
             "Fresh Food Connect API"
             "Fresh Food Connect" "Code for Denver Site"
             "Denver Sustainability" "RMFU Feed"])          ;

(def contributors [3, 5, 8, 9, 9, 10, 14])

#_(let []
     (.global (.defaults js/Chart)
              (clj->js {:scaleLineColor "white"
                        :scaleFontColor "white"})))

(def data {:labels   titles
           :datasets [{
                       :label           "Code for Denver Contributors"
                       :fillColor       "white"
                       :strokeColor     "white"
                       :highlightFill   "white"
                       :highlightStroke "rgba(220,220,220,1)"
                       :data            contributors}]})

;; -------------------------------
;; register media queries triggers

(.register js/enquire "screen and (max-width:722px)"
           (clj->js {:setup   (fn []
                                  (print "ran setup"))
                     :match   (fn []
                                  (swap! app-state assoc-in [:titles] (:secondary colors))
                                  (print "matched"))
                     :unmatch (fn []
                                  (swap! app-state assoc-in [:titles] (:primary colors))
                                  (print "unmatched"))}))

;(add-watch app-state :logger #(-> %4 clj->js js/console.log))

(defn some-component []
      (r/create-class
        {:component-did-mount
         (fn []
             (let [ctx (.getContext (.getElementById js/document "myChart") "2d")]
                  (.Bar (js/Chart. ctx) (clj->js data))))
         :reagent-render
         (fn []
             [:div.main
              [:div.row.intro
               [:div.col-lg-12
                [:p.lead [:img {:src   "images/cfdlogo.png"
                                :width "220px"}]
                 [:span "is proud to present"]]
                [:h1.super {:style {:color (:titles @app-state)}} "2015"]
                [:h2 "END OF YEAR SUMMARY"]]]

              [:div.row.part-two
               [:div.col-lg-12
                [:p.lead.text-center "Embarked on 7 major projects.."]
                [:h3 "contributors"]

                [:canvas {:id     "myChart"
                          :width  "400"
                          :height "400"}]
                [:p.lead
                 "..."]]]

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
                [:h3.text-right "47"]
                [:p.lead.text-right
                 "meetup events"]]]

              [:div.row.thanks
               [:div.col-lg-12
                [:h3.text-center.page-header "MANY THANKS!"]
                [:div.list-group
                 [:button.list-group-item.btn-default "test"]]]]])}))

(defn main-component []
      [:div [some-component]])

(defn init []
      (r/render-component [main-component]
                          (.getElementById js/document "container")))
