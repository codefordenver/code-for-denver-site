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

    var template = Handlebars.templates['events.hbs'],
        meetups  = template(data);

    $('div#meetups-container').append(meetups);

  });
})($, window);
