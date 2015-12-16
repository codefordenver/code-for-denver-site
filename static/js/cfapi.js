/*
* All data-related Code for America API(CFAPI) work.
* For the most part, this script is responsible for wiring
* handlebars.js templates to the right data.
*
* See https://github.com/codeforamerica/cfapi for an overview
* See http://codeforamerica.org/api/ for full documentation
*/
(function($, window) {
  $.getJSON( "http://codeforamerica.org/api/organizations/Code-for-Denver", function( data ) {
    var events = [];

    //  Custom helper. usage: {{dateFormat myDateString}}
    Handlebars.registerHelper('dateFormat', function(context, block) {
      return new Date(context).toLocaleString();
    });
console.log(data);
    // Wire data to templates
    var meetupsTemplate  = Handlebars.templates['events.hbs'],
        projectsTemplate = Handlebars.templates['projects.hbs'],
        meetups          = meetupsTemplate(data);

    // Place templates in Dom
    $('div#meetups-container').append(meetups);

    var nextEvent = data.current_events[0];

    $('header.intro').append('<div class="upcoming">' +
        '<h4>Next Event: ' + new Date(nextEvent.start_time).toLocaleDateString() + '</h4>' +
        '<h2><a href="' + nextEvent.event_url + '">' + nextEvent.name + '</a></h2>' +
    '</div>');

  });
})($, window);
