(ns review.app
  (:require [reagent.core :as r]
            [cljsjs.enquire :as enquire]))

(enable-console-print!)

;; -------------------------------
;; define app state

(def colors {:primary   "ghostwhite"
             :secondary "rgba(100,100,100,1.0)"})

(def app-state (r/atom {:titles (:primary colors)
                        :body   (:secondary colors)}))

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

(add-watch app-state :logger #(-> %4 clj->js js/console.log))

(defn some-component []
      (let []
           [:div.main
            [:div.row.intro
             [:div.col-lg-12
              [:p.lead "Code For Denver is proud to present:"]
              [:h1.super {:style {:color (:titles @app-state)}} "2015"]
              [:h2 {:style {:color (:titles @app-state)}} "END OF YEAR SUMMARY"]]]
            [:div.row.part-two
             [:div.col-lg-12
              [:p.lead.text-center "where we started.."]
              [:h3 "STAT 1"]
              [:p.lead
               "Lorem ipsum dolor sit amet,
               consectetur adipiscing elit.
                Duis pharetra varius quam sit
                 amet vulputate. Quisque mauris
                  augue, molestie tincidunt
                  condimentum vitae, gravida a
                   libero. Aenean sit amet felis
                   dolor, in sagittis nisi. Sed
                   ac orci quis tortor imperdiet
                    venenatis. Duis elementum
                    auctor accumsan. Aliquam in
                    felis sit amet augue."]]]
            [:div.row
             [:div.col-lg-12
              [:h3.text-center "STAT 2"]
              [:p.lead
               "Lorem ipsum dolor sit amet,
               consectetur adipiscing elit.
                Duis pharetra varius quam sit
                 amet vulputate. Quisque mauris
                  augue, molestie tincidunt
                  condimentum vitae, gravida a
                   libero. Aenean sit amet felis
                   dolor, in sagittis nisi. Sed
                   ac orci quis tortor imperdiet
                    venenatis. Duis elementum
                    auctor accumsan. Aliquam in
                    felis sit amet augue."]]]
            [:div.row
             [:div.col-lg-12
              [:h3.text-right "STAT 3"]
              [:p.lead
               "Lorem ipsum dolor sit amet,
               consectetur adipiscing elit.
                Duis pharetra varius quam sit
                 amet vulputate. Quisque mauris
                  augue, molestie tincidunt
                  condimentum vitae, gravida a
                   libero. Aenean sit amet felis
                   dolor, in sagittis nisi. Sed
                   ac orci quis tortor imperdiet
                    venenatis. Duis elementum
                    auctor accumsan. Aliquam in
                    felis sit amet augue."]]]

            [:div.row.thanks
             [:div.col-lg-12
              [:h3.text-center.page-header "MANY THANKS!"]
              [:div.list-group
               [:button.list-group-item.btn-default "test"]]]]]))

(defn main-component []
      [:div [some-component]])

(defn init []
      (r/render-component [main-component]
                          (.getElementById js/document "container")))
