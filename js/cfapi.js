/*
* All data-related Code for America API(CFAPI) work.
* For the most part, this script is responsible for wiring
* handlebars.js templates to the right data and registering
* handlebars helpers.
*
* See https://github.com/codeforamerica/cfapi for an overview
* See http://codeforamerica.org/api/ for full documentation
*/
(function($) {
  $.getJSON( "http://codeforamerica.org/api/organizations/Code-for-Denver", function( data ) {
    var events = [];

    //  Custom helper. usage: {{dateFormat myDateString}}
    Handlebars.registerHelper('dateFormat', function(context, block) {
      return new Date(context).toLocaleString();
    });

    // Wire data to templates
    var appTemplate = CodeForDenver.templates.application,
        content     = appTemplate(data);
 
    // Place templates in Dom
    $('div#application-container').append(content);
  });
})($);
