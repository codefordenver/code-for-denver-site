/*
* All data-related Code for America API(CFAPI) work.
* See https://github.com/codeforamerica/cfapi for an overview
* See http://codeforamerica.org/api/ for full documentation
*/

(function($, window) {
  $.getJSON( "http://codeforamerica.org/api/organizations/Code-for-Denver", function( data ) {
    var events = [];
    $.each( data, function( key, val ) {
      events.push("<li class='event'>" + val + "</li>");
    });
    console.log(data.current_events);
    $( "<ul/>", {
      "class": "my-new-list",
      html: events.join("")
    });//.appendTo("div#meetups-container");
  });
})($, window);
