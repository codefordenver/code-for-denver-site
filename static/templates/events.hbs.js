(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['events.hbs'] = template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "    <li class='event'>\n      <div class='event-name'>"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</div>\n      <time datetime="
    + escapeExpression(((helper = (helper = helpers.start_time || (depth0 != null ? depth0.start_time : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"start_time","hash":{},"data":data}) : helper)))
    + ">"
    + escapeExpression(((helpers.dateFormat || (depth0 && depth0.dateFormat) || helperMissing).call(depth0, (depth0 != null ? depth0.start_time : depth0), {"name":"dateFormat","hash":{},"data":data})))
    + "</time>\n      <a href='"
    + escapeExpression(((helper = (helper = helpers.event_url || (depth0 != null ? depth0.event_url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"event_url","hash":{},"data":data}) : helper)))
    + "'>\n        <img src='static/img/meetup-icon.png'/>\n        <p>view on meetup.com</p>\n      </a>\n    </li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, options, functionType="function", helperMissing=helpers.helperMissing, blockHelperMissing=helpers.blockHelperMissing, buffer = "<ul>\n";
  stack1 = ((helper = (helper = helpers.current_events || (depth0 != null ? depth0.current_events : depth0)) != null ? helper : helperMissing),(options={"name":"current_events","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers.current_events) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</ul>\n";
},"useData":true});
})();
