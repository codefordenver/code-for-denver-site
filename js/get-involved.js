(function(){

  "use strict";

  var ele = $('#is-this-you');
  var roles = ['a developer','a community organizer', 'a graphic-designer', 'a facilitator', 'a project-manager', 'a government representative', 'a student', 'an ally', 'curious about Code For Denver', 'a technical writer'] ;

  var randomRole = function() {
    return roles[0 | Math.random() * roles.length];
  };

  function insertRoleText() {
    var role = randomRole();
    var template = "<span id=\"role\"\n\t\t\t\t\tclass=\"label label-default\n\t\t\t\t\textra-top-margin\">" + role + "</span>?";
    ele.html(template);
  };

  function animateRoles () {
    snabbt(ele, {
      position: [0,-200,0],
      easing: function(val){ return Math.sin(Math.PI * val);},
      loop: 1,
      delay: 3000,
      callback: function() {
        insertRoleText();
        animateRoles();
      }
    });
  };

  animateRoles();

})();