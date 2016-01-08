(ns review.app
  (:require [reagent.core :as reagent :refer [atom]]))

(defn some-component []
      [:div.main
       [:div.row.intro
        [:div.col-lg-12
         [:p.lead "Code For Denver is proud to present:"]
         [:h1.super "2015"]
         [:h2 "END OF YEAR SUMMARY"]]]
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
          [:button.list-group-item.btn-default "test"]]]]

       ])

(defn calling-component []
      [:div [some-component]])

(defn init []
      (reagent/render-component [calling-component]
                                (.getElementById js/document "container")))
