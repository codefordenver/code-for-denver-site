// Compiled by ClojureScript 1.7.122 {:static-fns true, :optimize-constants true}
goog.provide('review.app');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('timothypratley.reanimated.core');
cljs.core.enable_console_print_BANG_();
review.app.colors = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$primary,"white",cljs.core.cst$kw$secondary,"rgba(100,100,100, 1.00)"], null);
review.app.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$banner_DASH_title,"is proud to present",cljs.core.cst$kw$banner_DASH_style,"banner-dark",cljs.core.cst$kw$logo_DASH_url,"cfdlogo.png"], null));
review.app.chart_titles = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Code Across 2015","Sol Cavp","Fresh Food Connect API","Fresh Food Connect","Code for Denver Site","Denver Sustainability","RMFU Feed"], null);
review.app.chart_data = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$labels,review.app.chart_titles,cljs.core.cst$kw$datasets,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$label,"Code for Denver Contributors",cljs.core.cst$kw$fillColor,"#E44D50",cljs.core.cst$kw$strokeColor,"#E44D50",cljs.core.cst$kw$highlightFill,"#E44D50",cljs.core.cst$kw$highlightStroke,"black",cljs.core.cst$kw$data,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(5),(114),(216),(105),(135),(199)], null)], null)], null)], null);
review.app.refresh_BANG_ = (function review$app$refresh_BANG_(var_args){
var args__5973__auto__ = [];
var len__5966__auto___8504 = arguments.length;
var i__5967__auto___8505 = (0);
while(true){
if((i__5967__auto___8505 < len__5966__auto___8504)){
args__5973__auto__.push((arguments[i__5967__auto___8505]));

var G__8506 = (i__5967__auto___8505 + (1));
i__5967__auto___8505 = G__8506;
continue;
} else {
}
break;
}

var argseq__5974__auto__ = ((((2) < args__5973__auto__.length))?(new cljs.core.IndexedSeq(args__5973__auto__.slice((2)),(0))):null);
return review.app.refresh_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5974__auto__);
});

review.app.refresh_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (title,style,p__8502){
var vec__8503 = p__8502;
var logo_url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8503,(0),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(review.app.app_state,cljs.core.assoc,cljs.core.cst$kw$banner_DASH_title,title);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(review.app.app_state,cljs.core.assoc,cljs.core.cst$kw$banner_DASH_style,style);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(review.app.app_state,cljs.core.assoc,cljs.core.cst$kw$logo_DASH_url,(function (){var or__4908__auto__ = logo_url;
if(cljs.core.truth_(or__4908__auto__)){
return or__4908__auto__;
} else {
return "cfdlogo-sm.png";
}
})());
});

review.app.refresh_BANG_.cljs$lang$maxFixedArity = (2);

review.app.refresh_BANG_.cljs$lang$applyTo = (function (seq8499){
var G__8500 = cljs.core.first(seq8499);
var seq8499__$1 = cljs.core.next(seq8499);
var G__8501 = cljs.core.first(seq8499__$1);
var seq8499__$2 = cljs.core.next(seq8499__$1);
return review.app.refresh_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8500,G__8501,seq8499__$2);
});
review.app.positions = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(201),(1200),(1750),(2370),(3420),(4150)], null);
cljs.core.add_watch(timothypratley.reanimated.core.scroll,cljs.core.cst$kw$y_DASH_scroll_DASH_watcher,(function (_,___$1,___$2,y){
if((y < (200))){
return review.app.refresh_BANG_.cljs$core$IFn$_invoke$arity$variadic("is proud to present","banner-dark",cljs.core.array_seq(["cfdlogo.png"], 0));
} else {
if(((y > (201))) && ((y <= (1200)))){
return review.app.refresh_BANG_("the story of how we embarked on 7 major projects..","banner-light");
} else {
if(((y >= (1200))) && ((y < (1750)))){
return review.app.refresh_BANG_("our contributors spent a total of:","banner-dark");
} else {
if(((y >= (1750))) && ((y < (2370)))){
return review.app.refresh_BANG_("organized a total of:","banner-light");
} else {
if(((y >= (2370))) && ((y < (3240)))){
return review.app.refresh_BANG_("wrote a ton of documentation & design specs:","banner-light");
} else {
if(((y >= (3420))) && ((y < (4110)))){
return review.app.refresh_BANG_("ate a lot of pizza...","banner-dark");
} else {
if((y > (4150))){
return review.app.refresh_BANG_("Thank you!","banner-light");
} else {
return null;
}
}
}
}
}
}
}
}));
review.app.doc_generator = (function review$app$doc_generator(many){
var iter__5680__auto__ = (function review$app$doc_generator_$_iter__8513(s__8514){
return (new cljs.core.LazySeq(null,(function (){
var s__8514__$1 = s__8514;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__8514__$1);
if(temp__4425__auto__){
var s__8514__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__8514__$2)){
var c__5678__auto__ = cljs.core.chunk_first(s__8514__$2);
var size__5679__auto__ = cljs.core.count(c__5678__auto__);
var b__8516 = cljs.core.chunk_buffer(size__5679__auto__);
if((function (){var i__8515 = (0);
while(true){
if((i__8515 < size__5679__auto__)){
var n = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5678__auto__,i__8515);
cljs.core.chunk_append(b__8516,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$icon$red,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$doc_DASH_icon$doc,"\u2630"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$doc_DASH_type,"DOC"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,n], null)));

var G__8519 = (i__8515 + (1));
i__8515 = G__8519;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8516),review$app$doc_generator_$_iter__8513(cljs.core.chunk_rest(s__8514__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8516),null);
}
} else {
var n = cljs.core.first(s__8514__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$icon$red,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$doc_DASH_icon$doc,"\u2630"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$doc_DASH_type,"DOC"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,n], null)),review$app$doc_generator_$_iter__8513(cljs.core.rest(s__8514__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5680__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(many));
});
review.app.main_component = (function review$app$main_component(){
var circle_scale = timothypratley.reanimated.core.spring.cljs$core$IFn$_invoke$arity$1(timothypratley.reanimated.core.scroll);
var scroll_y = timothypratley.reanimated.core.interpolate_to.cljs$core$IFn$_invoke$arity$1(timothypratley.reanimated.core.scroll);
var contributors = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var scroll_to = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$component_DASH_will_DASH_mount,((function (circle_scale,scroll_y,contributors,scroll_to){
return (function (){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic("./data/github.json",cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$response_DASH_format,cljs.core.cst$kw$json,cljs.core.cst$kw$keywords_QMARK_,true,cljs.core.cst$kw$handler,((function (circle_scale,scroll_y,contributors,scroll_to){
return (function (p1__8520_SHARP_){
var G__8531 = contributors;
var G__8532 = cljs.core.cst$kw$contributors.cljs$core$IFn$_invoke$arity$1(p1__8520_SHARP_);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__8531,G__8532) : cljs.core.reset_BANG_.call(null,G__8531,G__8532));
});})(circle_scale,scroll_y,contributors,scroll_to))
], null)], 0));
});})(circle_scale,scroll_y,contributors,scroll_to))
,cljs.core.cst$kw$component_DASH_did_DASH_mount,((function (circle_scale,scroll_y,contributors,scroll_to){
return (function (){
var ctx = document.getElementById("myChart").getContext("2d");
var pie_chart_data = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$labels,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pizza (84%)","Everything else (16%)"], null),cljs.core.cst$kw$series,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$className,"pizza light",cljs.core.cst$kw$value,(84)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$className,"else",cljs.core.cst$kw$value,(16)], null)], null)], null);
Chartist.Pie("#pieChart",cljs.core.clj__GT_js(pie_chart_data),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$labelInterpolationFnc,((function (ctx,pie_chart_data,circle_scale,scroll_y,contributors,scroll_to){
return (function (value){
return value;
});})(ctx,pie_chart_data,circle_scale,scroll_y,contributors,scroll_to))
], null)),cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["screen and (min-width: 380px)",new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$height,(200),cljs.core.cst$kw$labelOffset,(-3),cljs.core.cst$kw$chartPadding,(10),cljs.core.cst$kw$labelPosition,"outside",cljs.core.cst$kw$labelDirection,"explode"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["screen and (min-width: 640px)",new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$height,(450),cljs.core.cst$kw$labelOffset,(-34),cljs.core.cst$kw$chartPadding,(50),cljs.core.cst$kw$labelPosition,"outside",cljs.core.cst$kw$labelDirection,"explode"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["screen and (min-width: 1024px)",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$height,(600),cljs.core.cst$kw$labelOffset,(-20),cljs.core.cst$kw$chartPadding,(60)], null)], null)], null)));

return (new Chart(ctx)).Bar(cljs.core.clj__GT_js(review.app.chart_data),{"scaleFontColor": "rgba(100,100,100, 1.00)"});
});})(circle_scale,scroll_y,contributors,scroll_to))
,cljs.core.cst$kw$reagent_DASH_render,((function (circle_scale,scroll_y,contributors,scroll_to){
return (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$main,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$banner_DASH_style.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(review.app.app_state) : cljs.core.deref.call(null,review.app.app_state)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_lg_DASH_9,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"http://www.codefordenver.org/",cljs.core.cst$kw$target,"_blank"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img$logo,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,[cljs.core.str("images/"),cljs.core.str(cljs.core.cst$kw$logo_DASH_url.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(review.app.app_state) : cljs.core.deref.call(null,review.app.app_state))))].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(review.app.app_state) : cljs.core.deref.call(null,review.app.app_state)).call(null,cljs.core.cst$kw$banner_DASH_title)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_lg_DASH_3,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$arrow_DASH_wrap,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$onClick,((function (circle_scale,scroll_y,contributors,scroll_to){
return (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(scroll_to) : cljs.core.deref.call(null,scroll_to)),cljs.core.count(review.app.positions))){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(scroll_to,(0)) : cljs.core.reset_BANG_.call(null,scroll_to,(0)));

return $("html, body").animate({"scrollTop": [cljs.core.str((function (){var G__8533 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(scroll_to) : cljs.core.deref.call(null,scroll_to));
return (review.app.positions.cljs$core$IFn$_invoke$arity$1 ? review.app.positions.cljs$core$IFn$_invoke$arity$1(G__8533) : review.app.positions.call(null,G__8533));
})()),cljs.core.str("px")].join('')});
} else {
$("html, body").animate({"scrollTop": [cljs.core.str((function (){var G__8534 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(scroll_to) : cljs.core.deref.call(null,scroll_to));
return (review.app.positions.cljs$core$IFn$_invoke$arity$1 ? review.app.positions.cljs$core$IFn$_invoke$arity$1(G__8534) : review.app.positions.call(null,G__8534));
})()),cljs.core.str("px")].join('')});

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(scroll_to,cljs.core.inc);
}
});})(circle_scale,scroll_y,contributors,scroll_to))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,((((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(scroll_y) : cljs.core.deref.call(null,scroll_y)) >= cljs.core.last(review.app.positions)))?"arrow-up":"arrow-down")], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$hint], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container_DASH_fluid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row$part_DASH_one,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_lg_DASH_12,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1$super$text_DASH_center,"2015"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2$subtitles$text_DASH_center,"END OF YEAR SUMMARY"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container_DASH_fluid,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row$part_DASH_two,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_lg_DASH_6$jumbotron,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4$subtitles$text_DASH_center,"Projects"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$legend$y_DASH_axis,"# of Commits*"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$canvas,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"myChart",cljs.core.cst$kw$width,"350",cljs.core.cst$kw$height,"350"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$text_DASH_center,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$small,"* In the GitHub workflow, a commit is an individual\n                       contribution to a project file (or set of files)."], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hr], null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_lg_DASH_6$jumbotron,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4$subtitles$text_DASH_center,"Testimonials"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$blockquote,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Code for Denver not only provided an invaluable service to our organization,\n                       they helped us build a new understanding about teamwork.  As a grassroots\n                       organization, we\u2019re used to working with volunteers to solve challenges.\n                       Code for Denver created an exceptional volunteer environment with outstanding\n                       results.  The final product was both beautiful and functional.\n                       I can\u2019t express highly enough my gratitude for Code for Denver."], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cite,"Harrison Topp"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cite,"Membership Director"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cite,"Rocky Mountain Farmers Union"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h5$text_DASH_right,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"http://www.codefordenver.org"], null),"See more at codefordenver.org"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hr], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container_DASH_fluid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row$part_DASH_three,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_lg_DASH_12,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3$text_DASH_center,"3000 hours"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3$text_DASH_center,"75 work weeks"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3$text_DASH_center,"1.5 years"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$timeline,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$cursor,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$left,(cljs.core.mod((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(scroll_y) : cljs.core.deref.call(null,scroll_y)),$(".timeline").width()) / (2))], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4$text_DASH_center,"tracked by ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"http://sparktime.org/",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"white"], null)], null),"sparktime.org"], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container_DASH_fluid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row$circle_DASH_row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_circle,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,[cljs.core.str("scale("),cljs.core.str(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(circle_scale) : cljs.core.deref.call(null,circle_scale)) / (150))),cljs.core.str(")")].join('')], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row$part_DASH_four,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_lg_DASH_12,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3$super$text_DASH_center,"47"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2$subtitles$text_DASH_center,"meetup events"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container_DASH_fluid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row$part_DASH_five,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_lg_DASH_12,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$gdocs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$box,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3$text_DASH_left,"\u20033 Drawings ",review.app.doc_generator((3))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$box,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3$text_DASH_left,"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A08 PDFs ",review.app.doc_generator((8))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$box,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3$text_DASH_left,"\u200A\u00A0\u00A0\u00A0\u00A010 Slides ",review.app.doc_generator((10))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$box,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3$text_DASH_left,"\u200A\u200A\u200A\u00A0\u00A0\u00A021 Forms ",review.app.doc_generator((21))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$box,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3$text_DASH_left,"\u200A\u200A\u200A\u00A0\u00A025 Sheets ",review.app.doc_generator((25))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$box,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3$text_DASH_left,"\u200A\u200A\u200A\u00A0\u00A0\u00A0166 Docs ",review.app.doc_generator((166))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4$text_DASH_right,"shared on Google Drive"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container_DASH_fluid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row$part_DASH_six,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_lg_DASH_12,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3$text_DASH_center,"budget distribution"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_pieChart], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container_DASH_fluid,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row$thanks,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_lg_DASH_12,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1$text_DASH_center,"MADE POSSIBLE BY"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$text_DASH_center,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"Core Team @ Code For Denver"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_lg_DASH_10$col_DASH_lg_DASH_offset_DASH_1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$grid,(function (){var iter__5680__auto__ = ((function (circle_scale,scroll_y,contributors,scroll_to){
return (function review$app$main_component_$_iter__8535(s__8536){
return (new cljs.core.LazySeq(null,((function (circle_scale,scroll_y,contributors,scroll_to){
return (function (){
var s__8536__$1 = s__8536;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__8536__$1);
if(temp__4425__auto__){
var s__8536__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__8536__$2)){
var c__5678__auto__ = cljs.core.chunk_first(s__8536__$2);
var size__5679__auto__ = cljs.core.count(c__5678__auto__);
var b__8538 = cljs.core.chunk_buffer(size__5679__auto__);
if((function (){var i__8537 = (0);
while(true){
if((i__8537 < size__5679__auto__)){
var user = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5678__auto__,i__8537);
var id = cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(user);
var avatar_url = cljs.core.cst$kw$avatar_url.cljs$core$IFn$_invoke$arity$1(user);
var login = cljs.core.cst$kw$login.cljs$core$IFn$_invoke$arity$1(user);
var html_url = cljs.core.cst$kw$html_url.cljs$core$IFn$_invoke$arity$1(user);
var username = cljs.core.cst$kw$login.cljs$core$IFn$_invoke$arity$1(user);
cljs.core.chunk_append(b__8538,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$element_DASH_item$wrapper,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,html_url,cljs.core.cst$kw$target,"_blank"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,avatar_url], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$tooltip,username], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,id], null)));

var G__8541 = (i__8537 + (1));
i__8537 = G__8541;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8538),review$app$main_component_$_iter__8535(cljs.core.chunk_rest(s__8536__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8538),null);
}
} else {
var user = cljs.core.first(s__8536__$2);
var id = cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(user);
var avatar_url = cljs.core.cst$kw$avatar_url.cljs$core$IFn$_invoke$arity$1(user);
var login = cljs.core.cst$kw$login.cljs$core$IFn$_invoke$arity$1(user);
var html_url = cljs.core.cst$kw$html_url.cljs$core$IFn$_invoke$arity$1(user);
var username = cljs.core.cst$kw$login.cljs$core$IFn$_invoke$arity$1(user);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$element_DASH_item$wrapper,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,html_url,cljs.core.cst$kw$target,"_blank"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,avatar_url], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$tooltip,username], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,id], null)),review$app$main_component_$_iter__8535(cljs.core.rest(s__8536__$2)));
}
} else {
return null;
}
break;
}
});})(circle_scale,scroll_y,contributors,scroll_to))
,null,null));
});})(circle_scale,scroll_y,contributors,scroll_to))
;
return iter__5680__auto__((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(contributors) : cljs.core.deref.call(null,contributors)));
})()], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_lg_DASH_12,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$text_DASH_center,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"The Core Team @ Code For Denver"], null),", sincerely thanks you for your kind contributions towards",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b," strengthening our community."], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hr], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4$join$text_DASH_center,"JOIN US!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row$text_DASH_center,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_lg_DASH_12,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"http://www.meetup.com/CodeForDenver/",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"white"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img$text_DASH_center$text_DASH_center,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,"images/meetup-icon.png",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,[cljs.core.str("scale("),cljs.core.str(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(circle_scale) : cljs.core.deref.call(null,circle_scale)) / (5000))),cljs.core.str(")")].join('')], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container_DASH_fluid,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row$text_DASH_center,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background,"#fff"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_lg_DASH_12,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$text_DASH_center,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"Partners"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row$text_DASH_center,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background,"#fff"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_lg_DASH_3,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_top,"20px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$src,"images/grow-local-co-logo.jpg",cljs.core.cst$kw$width,"150px",cljs.core.cst$kw$height,"45px"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_lg_DASH_3,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_top,"20px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$src,"images/rmfu-logo.png",cljs.core.cst$kw$width,"150px",cljs.core.cst$kw$height,"45px"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_lg_DASH_3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$src,"images/co-avp-logo.png",cljs.core.cst$kw$width,"150px",cljs.core.cst$kw$height,"85px"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_lg_DASH_3,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_top,"10px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$src,"images/rmmfi-logo.jpg",cljs.core.cst$kw$width,"150px",cljs.core.cst$kw$height,"65px"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row$text_DASH_center,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background,"#fff"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_lg_DASH_12,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$text_DASH_center,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"Sponsors"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row$text_DASH_center,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background,"#fff"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_lg_DASH_3,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_top,"35px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$src,"images/cfa-logo.png",cljs.core.cst$kw$width,"150px",cljs.core.cst$kw$height,"55px"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_lg_DASH_3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$src,"images/ca-technologies-logo.jpg",cljs.core.cst$kw$width,"150px",cljs.core.cst$kw$height,"125px"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_lg_DASH_3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$src,"images/galvanize-logo.png",cljs.core.cst$kw$width,"150px",cljs.core.cst$kw$height,"125px"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_lg_DASH_3,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_top,"40px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$src,"images/vlizz-logo.png",cljs.core.cst$kw$width,"150px",cljs.core.cst$kw$height,"45px"], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$footer,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img$img_DASH_full,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,"images/4.jpg"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img$img_DASH_full,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,"images/5.jpg"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img$img_DASH_full,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,"images/6.jpg"], null)], null)], null)], null);
});})(circle_scale,scroll_y,contributors,scroll_to))
], null));
});
review.app.parent_component = (function review$app$parent_component(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [review.app.main_component], null)], null);
});
review.app.init = (function review$app$init(){
var G__8544 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [review.app.parent_component], null);
var G__8545 = document.getElementById("mount");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__8544,G__8545) : reagent.core.render_component.call(null,G__8544,G__8545));
});
