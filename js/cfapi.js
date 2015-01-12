/*
* All data-related Code for America API(CFAPI) work.
* See https://github.com/codeforamerica/cfapi for an overview
* See http://codeforamerica.org/api/ for full documentation
*/

(function($, window) {
  $.getJSON( "http://codeforamerica.org/api/organizations/Code-for-Denver", function( data ) {
    var events = [];

    $(data.current_events).each( function() {
      var mEvent = this, name, time, image, link, linkText, tile;
      name = "<div class='event-name'>" + mEvent.name + "</div>";
      time = "<time datetime="+mEvent.start_time+">" + mEvent.start_time + "</time>";
      image = "<img src='img/meetup-icon.png'/>";
      linkText = "<p>view on meetup.com</p>";
      link = "<a href=" + mEvent.event_url + " >" + image + linkText + "</a>";
      tile = name + time + link;
      events.push("<li class='event'>" + tile + "</li>");
    });

    $( "<ul/>", {
      "class": "my-new-list",
      html: events.join("")
    }).appendTo("div#meetups-container");

  });
})($, window);
