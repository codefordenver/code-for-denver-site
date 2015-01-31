/*
* All data-related Code for America API(CFAPI) work.
* See https://github.com/codeforamerica/cfapi for an overview
* See http://codeforamerica.org/api/ for full documentation
*/
(function($, window) {
  $.getJSON( "http://codeforamerica.org/api/organizations/Code-for-Denver", function( data ) {
    var events = [];

    //  usage: {{dateFormat myDateString}}
    Handlebars.registerHelper('dateFormat', function(context, block) {
      return new Date(context).toLocaleString();
    });

    var meetupTemplate = "<ul>{{#current_events}}<li class='event'>"+
      "<div class='event-name'>{{name}}</div>"+
      "<time datetime={{start_time}}>{{dateFormat start_time}}</time>" +
      "<a href='{{event_url}}'><img src='img/meetup-icon.png'/><p>view on meetup.com</p></a>" +
      "</li>{{/current_events}}</ul>";
    var template = Handlebars.compile(meetupTemplate);

    var result = template(data);

    $(result).appendTo("div#meetups-container");

  });
})($, window);
