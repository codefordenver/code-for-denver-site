function init(){{var e={zoom:15,center:new google.maps.LatLng(40.67,-73.94),disableDefaultUI:!0,scrollwheel:!1,draggable:!1,styles:[{featureType:"water",elementType:"geometry",stylers:[{color:"#000000"},{lightness:17}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:17}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:29},{weight:.2}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#000000"},{lightness:18}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#000000"},{lightness:16}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#000000"},{lightness:21}]},{elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#000000"},{lightness:16}]},{elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#000000"},{lightness:40}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#000000"},{lightness:19}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:17},{weight:1.2}]}]},t=document.getElementById("map"),a=new google.maps.Map(t,e),n="img/map-marker.png",o=new google.maps.LatLng(40.67,-73.94);new google.maps.Marker({position:o,map:a,icon:n})}}!function(e){e.getJSON("http://codeforamerica.org/api/organizations/Code-for-Denver",function(t){Handlebars.registerHelper("dateFormat",function(e){return new Date(e).toLocaleString()});var a=CodeForDenver.templates.application,n=a(t);e("div#application-container").append(n)})}($),$(window).scroll(function(){$(".navbar").offset().top>50?$(".navbar-fixed-top").addClass("top-nav-collapse"):$(".navbar-fixed-top").removeClass("top-nav-collapse")}),$(function(){$("a.page-scroll").bind("click",function(e){var t=$(this);$("html, body").stop().animate({scrollTop:$(t.attr("href")).offset().top},1500,"easeInOutExpo"),e.preventDefault()})}),$(".navbar-collapse ul li a").click(function(){$(".navbar-toggle:visible").click()}),function(e,t){"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?module.exports=t():e.Handlebars=e.Handlebars||t()}(this,function(){var e=function(){"use strict";function e(e){this.string=e}var t;return e.prototype.toString=function(){return""+this.string},t=e}(),t=function(e){"use strict";function t(e){return s[e]}function a(e){for(var t=1;t<arguments.length;t++)for(var a in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],a)&&(e[a]=arguments[t][a]);return e}function n(e){return e instanceof i?e.toString():null==e?"":e?(e=""+e,c.test(e)?e.replace(l,t):e):e+""}function o(e){return e||0===e?m(e)&&0===e.length?!0:!1:!0}function r(e,t){return(e?e+".":"")+t}var p={},i=e,s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},l=/[&<>"'`]/g,c=/[&<>"'`]/;p.extend=a;var g=Object.prototype.toString;p.toString=g;var u=function(e){return"function"==typeof e};u(/x/)&&(u=function(e){return"function"==typeof e&&"[object Function]"===g.call(e)});var u;p.isFunction=u;var m=Array.isArray||function(e){return e&&"object"==typeof e?"[object Array]"===g.call(e):!1};return p.isArray=m,p.escapeExpression=n,p.isEmpty=o,p.appendContextPath=r,p}(e),a=function(){"use strict";function e(e,t){var n;t&&t.firstLine&&(n=t.firstLine,e+=" - "+n+":"+t.firstColumn);for(var o=Error.prototype.constructor.call(this,e),r=0;r<a.length;r++)this[a[r]]=o[a[r]];n&&(this.lineNumber=n,this.column=t.firstColumn)}var t,a=["description","fileName","lineNumber","message","name","number","stack"];return e.prototype=new Error,t=e}(),n=function(e,t){"use strict";function a(e,t){this.helpers=e||{},this.partials=t||{},n(this)}function n(e){e.registerHelper("helperMissing",function(){if(1===arguments.length)return void 0;throw new p("Missing helper: '"+arguments[arguments.length-1].name+"'")}),e.registerHelper("blockHelperMissing",function(t,a){var n=a.inverse,o=a.fn;if(t===!0)return o(this);if(t===!1||null==t)return n(this);if(c(t))return t.length>0?(a.ids&&(a.ids=[a.name]),e.helpers.each(t,a)):n(this);if(a.data&&a.ids){var p=f(a.data);p.contextPath=r.appendContextPath(a.data.contextPath,a.name),a={data:p}}return o(t,a)}),e.registerHelper("each",function(e,t){if(!t)throw new p("Must pass iterator to #each");var a,n,o=t.fn,i=t.inverse,s=0,l="";if(t.data&&t.ids&&(n=r.appendContextPath(t.data.contextPath,t.ids[0])+"."),g(e)&&(e=e.call(this)),t.data&&(a=f(t.data)),e&&"object"==typeof e)if(c(e))for(var u=e.length;u>s;s++)a&&(a.index=s,a.first=0===s,a.last=s===e.length-1,n&&(a.contextPath=n+s)),l+=o(e[s],{data:a});else for(var m in e)e.hasOwnProperty(m)&&(a&&(a.key=m,a.index=s,a.first=0===s,n&&(a.contextPath=n+m)),l+=o(e[m],{data:a}),s++);return 0===s&&(l=i(this)),l}),e.registerHelper("if",function(e,t){return g(e)&&(e=e.call(this)),!t.hash.includeZero&&!e||r.isEmpty(e)?t.inverse(this):t.fn(this)}),e.registerHelper("unless",function(t,a){return e.helpers["if"].call(this,t,{fn:a.inverse,inverse:a.fn,hash:a.hash})}),e.registerHelper("with",function(e,t){g(e)&&(e=e.call(this));var a=t.fn;if(r.isEmpty(e))return t.inverse(this);if(t.data&&t.ids){var n=f(t.data);n.contextPath=r.appendContextPath(t.data.contextPath,t.ids[0]),t={data:n}}return a(e,t)}),e.registerHelper("log",function(t,a){var n=a.data&&null!=a.data.level?parseInt(a.data.level,10):1;e.log(n,t)}),e.registerHelper("lookup",function(e,t){return e&&e[t]})}var o={},r=e,p=t,i="2.0.0";o.VERSION=i;var s=6;o.COMPILER_REVISION=s;var l={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1"};o.REVISION_CHANGES=l;var c=r.isArray,g=r.isFunction,u=r.toString,m="[object Object]";o.HandlebarsEnvironment=a,a.prototype={constructor:a,logger:d,log:h,registerHelper:function(e,t){if(u.call(e)===m){if(t)throw new p("Arg not supported with multiple helpers");r.extend(this.helpers,e)}else this.helpers[e]=t},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,t){u.call(e)===m?r.extend(this.partials,e):this.partials[e]=t},unregisterPartial:function(e){delete this.partials[e]}};var d={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(e,t){if(d.level<=e){var a=d.methodMap[e];"undefined"!=typeof console&&console[a]&&console[a].call(console,t)}}};o.logger=d;var h=d.log;o.log=h;var f=function(e){var t=r.extend({},e);return t._parent=e,t};return o.createFrame=f,o}(t,a),o=function(e,t,a){"use strict";function n(e){var t=e&&e[0]||1,a=u;if(t!==a){if(a>t){var n=m[a],o=m[t];throw new g("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+n+") or downgrade your runtime to an older version ("+o+").")}throw new g("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")}}function o(e,t){if(!t)throw new g("No environment passed to template");if(!e||!e.main)throw new g("Unknown template object: "+typeof e);t.VM.checkRevision(e.compiler);var a=function(a,n,o,r,p,i,s,l,u){p&&(r=c.extend({},r,p));var m=t.VM.invokePartial.call(this,a,o,r,i,s,l,u);if(null==m&&t.compile){var d={helpers:i,partials:s,data:l,depths:u};s[o]=t.compile(a,{data:void 0!==l,compat:e.compat},t),m=s[o](r,d)}if(null!=m){if(n){for(var h=m.split("\n"),f=0,v=h.length;v>f&&(h[f]||f+1!==v);f++)h[f]=n+h[f];m=h.join("\n")}return m}throw new g("The partial "+o+" could not be compiled when running in runtime-only mode")},n={lookup:function(e,t){for(var a=e.length,n=0;a>n;n++)if(e[n]&&null!=e[n][t])return e[n][t]},lambda:function(e,t){return"function"==typeof e?e.call(t):e},escapeExpression:c.escapeExpression,invokePartial:a,fn:function(t){return e[t]},programs:[],program:function(e,t,a){var n=this.programs[e],o=this.fn(e);return t||a?n=r(this,e,o,t,a):n||(n=this.programs[e]=r(this,e,o)),n},data:function(e,t){for(;e&&t--;)e=e._parent;return e},merge:function(e,t){var a=e||t;return e&&t&&e!==t&&(a=c.extend({},t,e)),a},noop:t.VM.noop,compilerInfo:e.compiler},o=function(t,a){a=a||{};var r=a.data;o._setup(a),!a.partial&&e.useData&&(r=s(t,r));var p;return e.useDepths&&(p=a.depths?[t].concat(a.depths):[t]),e.main.call(n,t,n.helpers,n.partials,r,p)};return o.isTop=!0,o._setup=function(a){a.partial?(n.helpers=a.helpers,n.partials=a.partials):(n.helpers=n.merge(a.helpers,t.helpers),e.usePartial&&(n.partials=n.merge(a.partials,t.partials)))},o._child=function(t,a,o){if(e.useDepths&&!o)throw new g("must pass parent depths");return r(n,t,e[t],a,o)},o}function r(e,t,a,n,o){var r=function(t,r){return r=r||{},a.call(e,t,e.helpers,e.partials,r.data||n,o&&[t].concat(o))};return r.program=t,r.depth=o?o.length:0,r}function p(e,t,a,n,o,r,p){var i={partial:!0,helpers:n,partials:o,data:r,depths:p};if(void 0===e)throw new g("The partial "+t+" could not be found");return e instanceof Function?e(a,i):void 0}function i(){return""}function s(e,t){return t&&"root"in t||(t=t?d(t):{},t.root=e),t}var l={},c=e,g=t,u=a.COMPILER_REVISION,m=a.REVISION_CHANGES,d=a.createFrame;return l.checkRevision=n,l.template=o,l.program=r,l.invokePartial=p,l.noop=i,l}(t,a,n),r=function(e,t,a,n,o){"use strict";var r,p=e,i=t,s=a,l=n,c=o,g=function(){var e=new p.HandlebarsEnvironment;return l.extend(e,p),e.SafeString=i,e.Exception=s,e.Utils=l,e.escapeExpression=l.escapeExpression,e.VM=c,e.template=function(t){return c.template(t,e)},e},u=g();return u.create=g,u["default"]=u,r=u}(n,e,a,t,o);return r});var PageTransitions=function(){function e(){r.each(function(){var e=$(this);e.data("originalClassList",e.attr("class"))}),r.eq(l).addClass("pt-page-current"),setInterval(function(){t(30)},2e3);var e=function(){return c?!1:(i>f.max?i=1:1>i&&(i=f.max),i)};$("body").keyup(function(a){{var n=a.which;$("#dl-menu").data().dlmenu.$el.data("animation")}(n==v.RIGHT||n==v.SPACE||n==v.ENTER||n==v.DOWN||n==v.PAGE_DOWN)&&(t(e()),++i),(n==v.LEFT||n==v.BACKSPACE||n==v.PAGE_UP)&&(--i,t(e()))}),p.on("click",function(){t(e()),++i})}function t(e){var t=e.animation?e.animation:e;if(c)return!1;c=!0;var n=r.eq(l);e.showPage?l=e.showPage<s-1?e.showPage:0:s-1>l?++l:l=0;var o=r.eq(l).addClass("pt-page-current"),p="",i="";switch(t){case 1:p="pt-page-moveToLeft",i="pt-page-moveFromRight";break;case 2:p="pt-page-moveToRight",i="pt-page-moveFromLeft";break;case 3:p="pt-page-moveToTop",i="pt-page-moveFromBottom";break;case 4:p="pt-page-moveToBottom",i="pt-page-moveFromTop";break;case 5:p="pt-page-fade",i="pt-page-moveFromRight pt-page-ontop";break;case 6:p="pt-page-fade",i="pt-page-moveFromLeft pt-page-ontop";break;case 7:p="pt-page-fade",i="pt-page-moveFromBottom pt-page-ontop";break;case 8:p="pt-page-fade",i="pt-page-moveFromTop pt-page-ontop";break;case 9:p="pt-page-moveToLeftFade",i="pt-page-moveFromRightFade";break;case 10:p="pt-page-moveToRightFade",i="pt-page-moveFromLeftFade";break;case 11:p="pt-page-moveToTopFade",i="pt-page-moveFromBottomFade";break;case 12:p="pt-page-moveToBottomFade",i="pt-page-moveFromTopFade";break;case 13:p="pt-page-moveToLeftEasing pt-page-ontop",i="pt-page-moveFromRight";break;case 14:p="pt-page-moveToRightEasing pt-page-ontop",i="pt-page-moveFromLeft";break;case 15:p="pt-page-moveToTopEasing pt-page-ontop",i="pt-page-moveFromBottom";break;case 16:p="pt-page-moveToBottomEasing pt-page-ontop",i="pt-page-moveFromTop";break;case 17:p="pt-page-scaleDown",i="pt-page-moveFromRight pt-page-ontop";break;case 18:p="pt-page-scaleDown",i="pt-page-moveFromLeft pt-page-ontop";break;case 19:p="pt-page-scaleDown",i="pt-page-moveFromBottom pt-page-ontop";break;case 20:p="pt-page-scaleDown",i="pt-page-moveFromTop pt-page-ontop";break;case 21:p="pt-page-scaleDown",i="pt-page-scaleUpDown pt-page-delay300";break;case 22:p="pt-page-scaleDownUp",i="pt-page-scaleUp pt-page-delay300";break;case 23:p="pt-page-moveToLeft pt-page-ontop",i="pt-page-scaleUp";break;case 24:p="pt-page-moveToRight pt-page-ontop",i="pt-page-scaleUp";break;case 25:p="pt-page-moveToTop pt-page-ontop",i="pt-page-scaleUp";break;case 26:p="pt-page-moveToBottom pt-page-ontop",i="pt-page-scaleUp";break;case 27:p="pt-page-scaleDownCenter",i="pt-page-scaleUpCenter pt-page-delay400";break;case 28:p="pt-page-rotateRightSideFirst",i="pt-page-moveFromRight pt-page-delay200 pt-page-ontop";break;case 29:p="pt-page-rotateLeftSideFirst",i="pt-page-moveFromLeft pt-page-delay200 pt-page-ontop";break;case 30:p="pt-page-rotateTopSideFirst",i="pt-page-moveFromTop pt-page-delay200 pt-page-ontop";break;case 31:p="pt-page-rotateBottomSideFirst",i="pt-page-moveFromBottom pt-page-delay200 pt-page-ontop";break;case 32:p="pt-page-flipOutRight",i="pt-page-flipInLeft pt-page-delay500";break;case 33:p="pt-page-flipOutLeft",i="pt-page-flipInRight pt-page-delay500";break;case 34:p="pt-page-flipOutTop",i="pt-page-flipInBottom pt-page-delay500";break;case 35:p="pt-page-flipOutBottom",i="pt-page-flipInTop pt-page-delay500";break;case 36:p="pt-page-rotateFall pt-page-ontop",i="pt-page-scaleUp";break;case 37:p="pt-page-rotateOutNewspaper",i="pt-page-rotateInNewspaper pt-page-delay500";break;case 38:p="pt-page-rotatePushLeft",i="pt-page-moveFromRight";break;case 39:p="pt-page-rotatePushRight",i="pt-page-moveFromLeft";break;case 40:p="pt-page-rotatePushTop",i="pt-page-moveFromBottom";break;case 41:p="pt-page-rotatePushBottom",i="pt-page-moveFromTop";break;case 42:p="pt-page-rotatePushLeft",i="pt-page-rotatePullRight pt-page-delay180";break;case 43:p="pt-page-rotatePushRight",i="pt-page-rotatePullLeft pt-page-delay180";break;case 44:p="pt-page-rotatePushTop",i="pt-page-rotatePullBottom pt-page-delay180";break;case 45:p="pt-page-rotatePushBottom",i="pt-page-rotatePullTop pt-page-delay180";break;case 46:p="pt-page-rotateFoldLeft",i="pt-page-moveFromRightFade";break;case 47:p="pt-page-rotateFoldRight",i="pt-page-moveFromLeftFade";break;case 48:p="pt-page-rotateFoldTop",i="pt-page-moveFromBottomFade";break;case 49:p="pt-page-rotateFoldBottom",i="pt-page-moveFromTopFade";break;case 50:p="pt-page-moveToRightFade",i="pt-page-rotateUnfoldLeft";break;case 51:p="pt-page-moveToLeftFade",i="pt-page-rotateUnfoldRight";break;case 52:p="pt-page-moveToBottomFade",i="pt-page-rotateUnfoldTop";break;case 53:p="pt-page-moveToTopFade",i="pt-page-rotateUnfoldBottom";break;case 54:p="pt-page-rotateRoomLeftOut pt-page-ontop",i="pt-page-rotateRoomLeftIn";break;case 55:p="pt-page-rotateRoomRightOut pt-page-ontop",i="pt-page-rotateRoomRightIn";break;case 56:p="pt-page-rotateRoomTopOut pt-page-ontop",i="pt-page-rotateRoomTopIn";break;case 57:p="pt-page-rotateRoomBottomOut pt-page-ontop",i="pt-page-rotateRoomBottomIn";break;case 58:p="pt-page-rotateCubeLeftOut pt-page-ontop",i="pt-page-rotateCubeLeftIn";break;case 59:p="pt-page-rotateCubeRightOut pt-page-ontop",i="pt-page-rotateCubeRightIn";break;case 60:p="pt-page-rotateCubeTopOut pt-page-ontop",i="pt-page-rotateCubeTopIn";break;case 61:p="pt-page-rotateCubeBottomOut pt-page-ontop",i="pt-page-rotateCubeBottomIn";break;case 62:p="pt-page-rotateCarouselLeftOut pt-page-ontop",i="pt-page-rotateCarouselLeftIn";break;case 63:p="pt-page-rotateCarouselRightOut pt-page-ontop",i="pt-page-rotateCarouselRightIn";break;case 64:p="pt-page-rotateCarouselTopOut pt-page-ontop",i="pt-page-rotateCarouselTopIn";break;case 65:p="pt-page-rotateCarouselBottomOut pt-page-ontop",i="pt-page-rotateCarouselBottomIn";break;case 66:p="pt-page-rotateSidesOut",i="pt-page-rotateSidesIn pt-page-delay200";break;case 67:p="pt-page-rotateSlideOut",i="pt-page-rotateSlideIn"}n.addClass(p).on(d,function(){n.off(d),g=!0,u&&a(n,o)}),o.addClass(i).on(d,function(){o.off(d),u=!0,g&&a(n,o)}),h||a(n,o)}function a(e,t){g=!1,u=!1,n(e,t),c=!1}function n(e,t){e.attr("class",e.data("originalClassList")),t.attr("class",t.data("originalClassList")+" pt-page-current")}var o=$("#pt-main"),r=o.children("div.pt-page"),p=$("#iterateEffects"),i=1,s=r.length,l=0,c=!1,g=!1,u=!1,m={WebkitAnimation:"webkitAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd",animation:"animationend"},d=m[Modernizr.prefixed("animation")],h=Modernizr.cssanimations,f={max:67},v={BACKSPACE:8,DOWN:40,ENTER:13,LEFT:37,RIGHT:39,SPACE:32,PAGE_DOWN:34,PAGE_UP:33};return e(),{init:e,nextPage:t}}();!function(){for(var e,t=function(){},a=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"],n=a.length,o=window.console=window.console||{};n--;)e=a[n],o[e]||(o[e]=t)}(),this.CodeForDenver=this.CodeForDenver||{},this.CodeForDenver.templates=this.CodeForDenver.templates||{},this.CodeForDenver.templates.application=Handlebars.template({1:function(e,t,a,n){var o,r="function",p=t.helperMissing,i=this.escapeExpression;return"      <li>\n        <h1>"+i((o=null!=(o=t.name||(null!=e?e.name:e))?o:p,typeof o===r?o.call(e,{name:"name",hash:{},data:n}):o))+"</h1>\n      </li>\n"},3:function(e,t,a,n){var o,r="function",p=t.helperMissing,i=this.escapeExpression;return"      <li class='event'>\n        <div class='event-name'>"+i((o=null!=(o=t.name||(null!=e?e.name:e))?o:p,typeof o===r?o.call(e,{name:"name",hash:{},data:n}):o))+"</div>\n        <time datetime="+i((o=null!=(o=t.start_time||(null!=e?e.start_time:e))?o:p,typeof o===r?o.call(e,{name:"start_time",hash:{},data:n}):o))+">"+i((t.dateFormat||e&&e.dateFormat||p).call(e,null!=e?e.start_time:e,{name:"dateFormat",hash:{},data:n}))+"</time>\n        <a href='"+i((o=null!=(o=t.event_url||(null!=e?e.event_url:e))?o:p,typeof o===r?o.call(e,{name:"event_url",hash:{},data:n}):o))+"'>\n          <img src='img/meetup-icon.png'/>\n          <p>view on meetup.com</p>\n        </a>\n      </li>\n"},compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,a,n){var o,r,p,i="function",s=t.helperMissing,l=t.blockHelperMissing,c='<!-- Navigation -->\n<nav class="navbar navbar-custom navbar-fixed-top" role="navigation">\n  <div class="container">\n    <div class="navbar-header">\n      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">\n        <i class="fa fa-bars"></i>\n      </button>\n      <a class="navbar-brand page-scroll" href="#page-top">\n        Code for Denver\n      </a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class="collapse navbar-collapse navbar-right navbar-main-collapse">\n      <ul class="nav navbar-nav">\n        <!-- Hidden li included to remove active class from about link when scrolled up past about section -->\n        <li class="hidden">\n          <a href="#page-top"></a>\n        </li>\n        <li>\n          <a class="page-scroll" href="#about">About</a>\n        </li>\n        <li>\n          <a class="page-scroll" href="#projects">Projects</a>\n        </li>\n        <li>\n          <a class="page-scroll" href="#get-involved">Get Involved</a>\n        </li>\n        <li>\n          <a class="page-scroll" href="#partnerships">Partnerships</a>\n        </li>\n        <li>\n          <a class="page-scroll" href="#data-resources">Data Resources</a>\n        </li>\n        <li>\n          <a class="page-scroll" href="#meetups">Meetups</a>\n        </li>\n      </ul>\n    </div>\n    <!-- /.navbar-collapse -->\n  </div>\n  <!-- /.container -->\n</nav>\n\n<!-- Intro Header -->\n<header class="intro">\n  <div class="intro-body">\n    <div class="container">\n      <div class="row">\n        <div class="col-md-10 col-md-offset-1">\n          <h1 class="brand-heading">Code for Denver</h1>\n          <p class="intro-text">Strengthening Our Community</p>\n          <a href="#about" class="btn btn-circle page-scroll">\n            <i class="fa fa-angle-double-down animated"></i>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class="upcoming">\n    <h4>Upcoming:</h4>\n\n    <h2><a href="/CodeAcross">CodeAcross Denver</a></h2>\n  </div>\n</header>\n\n<!--[if lt IE 7]>\n<p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>\n<![endif]-->\n\n<section id="about" class="container content-section">\n  <h1>About</h1>\n  <p>\n    We believe technology and innovation are powerful tools we can all use to make our community an even more spectacular place to live.\n  </p>\n  <p>\n    We are a diverse group of volunteers who are passionate about leveraging the power of technology to benefit the people of our Denver community.\n  </p>\n  <p>\n    We tap into the potential of technology to tackle issues like food systems, food security, economic development, safety and justice.\n  </p>\n  <p>\n    We recognize that we are a part of a much larger movement to address some of the challenges that face our planet. In order to collectively have the biggest impact, we work in partnership and collaboration with both local government, and the international network of Code for America brigades of which we are a part.\n  </p>\n  <p>\n    We also team up with local nonprofits and other active community members to make sure we understand the issues, to brainstorm technology-based solutions, and to actualize our ideas in ways that aim for measurable community benefit.\n  </p>\n</section>\n\n<section id="projects" class="container content-section">\n  <h2>Projects</h2>\n  <div id="projects-container">\n    <ul>\n';return r=null!=(r=t.current_projects||(null!=e?e.current_projects:e))?r:s,p={name:"current_projects",hash:{},fn:this.program(1,n),inverse:this.noop,data:n},o=typeof r===i?r.call(e,p):r,t.current_projects||(o=l.call(e,o,p)),null!=o&&(c+=o),c+='    </ul>\n  </div>\n  <!-- <ul>\n    <li>\n      CutePetsDenver\n      <a href="https://twitter.com/CutePetsDenver">Twitter</a>\n      <a href="https://github.com/codeforamerica/CutePetsDenver">Source</a>\n    </li>\n    <li>\n      Denver Street Sweeping\n    </li>\n  </ul> -->\n</section>\n\n<section id="get-involved" class="container content-section">\n  <h1>Get Involved</h1>\n  <div class="row">\n    <div class="container">\n      <h1 class="sliding-thing">\n        <span>Are you </span>\n        <div id="pt-main" class="pt-perspective">\n          <div class="pt-page">an Artist?</div>\n          <div class="pt-page">a Writer?</div>\n          <div class="pt-page">a Designer?</div>\n          <div class="pt-page">a Community Organizer?</div>\n          <div class="pt-page">a Developer?</div>\n          <div class="pt-page">a Community Organizer?</div>\n          <div class="pt-page">a Graphic Designer?</div>\n          <div class="pt-page">a Facilitator?</div>\n          <div class="pt-page">a Project Manager?</div>\n          <div class="pt-page">a Government Representative?</div>\n          <div class="pt-page">a Student?</div>\n          <div class="pt-page">an Ally?</div>\n          <div class="pt-page">Curious about Code For Denver?</div>\n        </div>\n      </h1>\n      <p>Contact <a href="mailto:codefordenver@gmail.com">codefordenver@gmail.com</a> about how you can get involved</p>\n      <p>Follow us on <a href="https://github.com/codefordenver">Github</a></p>\n    </div>\n  </div>\n  <p>Here are some ways our volunteers are already getting involved:</p>\n  <iframe src="http://codeforamerica.org/geeks/civicissues/widget?organization_name=Code-for-Denver&number=6" width="100%" height="600" frameBorder="0"></iframe>\n</section>\n\n\n\n<section id="partnerships" class="container content-section">\n  <h3>Non-Profit Partnerships</h3>\n  <ul>\n    <li>\n      SparkRelief\n      <ul>\n        <li>\n          <a href="https://sparkhelp.org">SparkHelp</a>\n        </li>\n        <li>\n          <a href="http://sparktime.org">SparkTime</a>\n        </li>\n        <li>\n          SparkFund\n        </li>\n      </ul>\n    </li>\n  </ul>\n</section>\n\n<section id="data-resources" class="container content-section">\n  <h2>Data Resources</h2>\n  <ul>\n    <li><a href="http://opencolorado.org" target="_blank">OpenColorado</a></li>\n    <li><a href="http://codataengine.org" target="_blank">Colorado Data Engine</a></li>\n  </ul>\n</section>\n\n<section id="meetups" class="container content-section">\n  <h2>Meetups</h2>\n  <p>\n    We meet often. Come join us! View our Meetups <a href="http://www.meetup.com/Colorado-Code-for-Communities/">here</a>\n  </p>\n\n  <div id="meetups-container">\n    <ul>\n',r=null!=(r=t.current_events||(null!=e?e.current_events:e))?r:s,p={name:"current_events",hash:{},fn:this.program(3,n),inverse:this.noop,data:n},o=typeof r===i?r.call(e,p):r,t.current_events||(o=l.call(e,o,p)),null!=o&&(c+=o),c+"    </ul>\n  </div>\n\n</section>\n"},useData:!0}),this.CodeForDenver.templates.events=Handlebars.template({1:function(e,t,a,n){var o,r="function",p=t.helperMissing,i=this.escapeExpression;return"    <li class='event'>\n      <div class='event-name'>"+i((o=null!=(o=t.name||(null!=e?e.name:e))?o:p,typeof o===r?o.call(e,{name:"name",hash:{},data:n}):o))+"</div>\n      <time datetime="+i((o=null!=(o=t.start_time||(null!=e?e.start_time:e))?o:p,typeof o===r?o.call(e,{name:"start_time",hash:{},data:n}):o))+">"+i((t.dateFormat||e&&e.dateFormat||p).call(e,null!=e?e.start_time:e,{name:"dateFormat",hash:{},data:n}))+"</time>\n      <a href='"+i((o=null!=(o=t.event_url||(null!=e?e.event_url:e))?o:p,typeof o===r?o.call(e,{name:"event_url",hash:{},data:n}):o))+"'>\n        <img src='img/meetup-icon.png'/>\n        <p>view on meetup.com</p>\n      </a>\n    </li>\n"},compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,a,n){var o,r,p,i="function",s=t.helperMissing,l=t.blockHelperMissing,c="<ul>\n";return r=null!=(r=t.current_events||(null!=e?e.current_events:e))?r:s,p={name:"current_events",hash:{},fn:this.program(1,n),inverse:this.noop,data:n},o=typeof r===i?r.call(e,p):r,t.current_events||(o=l.call(e,o,p)),null!=o&&(c+=o),c+"</ul>\n"},useData:!0}),this.CodeForDenver.templates.projects=Handlebars.template({1:function(e,t,a,n){var o,r="function",p=t.helperMissing,i=this.escapeExpression;return"    <li>\n      From Handlbars template: "+i((o=null!=(o=t.name||(null!=e?e.name:e))?o:p,typeof o===r?o.call(e,{name:"name",hash:{},data:n}):o))+"\n    </li>\n"},compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,a,n){var o,r,p,i="function",s=t.helperMissing,l=t.blockHelperMissing,c="<ul>\n";return r=null!=(r=t.current_projects||(null!=e?e.current_projects:e))?r:s,p={name:"current_projects",hash:{},fn:this.program(1,n),inverse:this.noop,data:n},o=typeof r===i?r.call(e,p):r,t.current_projects||(o=l.call(e,o,p)),null!=o&&(c+=o),c+"</ul>\n"},useData:!0});