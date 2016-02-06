// Compiled by ClojureScript 1.7.122 {:static-fns true, :optimize-constants true}
goog.provide('review.app');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('timothypratley.reanimated.core');
cljs.core.enable_console_print_BANG_();
review.app.colors = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$primary,"white",cljs.core.cst$kw$secondary,"rgba(100,100,100, 1.00)"], null);
review.app.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$colors,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$titles,cljs.core.cst$kw$primary.cljs$core$IFn$_invoke$arity$1(review.app.colors),cljs.core.cst$kw$body,cljs.core.cst$kw$secondary.cljs$core$IFn$_invoke$arity$1(review.app.colors)], null),cljs.core.cst$kw$copy,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$banner_DASH_title,"is proud to present"], null),cljs.core.cst$kw$banner_DASH_style,"banner-dark",cljs.core.cst$kw$logo_DASH_url,"cfdlogo.png"], null));
review.app.chart_titles = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Code Across 2015","Sol Cavp","Fresh Food Connect API","Fresh Food Connect","Code for Denver Site","Denver Sustainability","RMFU Feed"], null);
review.app.chart_data = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$labels,review.app.chart_titles,cljs.core.cst$kw$datasets,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$label,"Code for Denver Contributors",cljs.core.cst$kw$fillColor,"#E44D50",cljs.core.cst$kw$strokeColor,"#E44D50",cljs.core.cst$kw$highlightFill,"#E44D50",cljs.core.cst$kw$highlightStroke,"black",cljs.core.cst$kw$data,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(5),(114),(216),(105),(135),(199)], null)], null)], null)], null);
review.app.refresh_BANG_ = (function review$app$refresh_BANG_(var_args){
var args__5973__auto__ = [];
var len__5966__auto___8500 = arguments.length;
var i__5967__auto___8501 = (0);
while(true){
if((i__5967__auto___8501 < len__5966__auto___8500)){
args__5973__auto__.push((arguments[i__5967__auto___8501]));

var G__8502 = (i__5967__auto___8501 + (1));
i__5967__auto___8501 = G__8502;
continue;
} else {
}
break;
}

var argseq__5974__auto__ = ((((2) < args__5973__auto__.length))?(new cljs.core.IndexedSeq(args__5973__auto__.slice((2)),(0))):null);
return review.app.refresh_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5974__auto__);
});

review.app.refresh_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (title,style,p__8498){
var vec__8499 = p__8498;
var logo_url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8499,(0),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(review.app.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$copy,cljs.core.cst$kw$banner_DASH_title], null),title);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(review.app.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$banner_DASH_style], null),style);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(review.app.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$logo_DASH_url], null),(function (){var or__4908__auto__ = logo_url;
if(cljs.core.truth_(or__4908__auto__)){
return or__4908__auto__;
} else {
return "cfdlogo-sm.png";
}
})());
});

review.app.refresh_BANG_.cljs$lang$maxFixedArity = (2);

review.app.refresh_BANG_.cljs$lang$applyTo = (function (seq8495){
var G__8496 = cljs.core.first(seq8495);
var seq8495__$1 = cljs.core.next(seq8495);
var G__8497 = cljs.core.first(seq8495__$1);
var seq8495__$2 = cljs.core.next(seq8495__$1);
return review.app.refresh_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8496,G__8497,seq8495__$2);
});
review.app.positions = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(201),(762),(1394),(1800),(2910),(3800)], null);
cljs.core.add_watch(timothypratley.reanimated.core.scroll,cljs.core.cst$kw$y_DASH_scroll_DASH_watcher,(function (_,___$1,___$2,y){
if((y < (200))){
return review.app.refresh_BANG_.cljs$core$IFn$_invoke$arity$variadic("is proud to present","banner-dark",cljs.core.array_seq(["cfdlogo.png"], 0));
} else {
if(((y > (201))) && ((y <= (762)))){
return review.app.refresh_BANG_("the story of how we embarked on 7 major projects..","banner-light");
} else {
if(((y >= (762))) && ((y < (1394)))){
return review.app.refresh_BANG_("our contributors spent a total of:","banner-dark");
} else {
if(((y >= (1394))) && ((y < (1800)))){
return review.app.refresh_BANG_("organized a total of:","banner-light");
} else {
if(((y >= (1800))) && ((y < (2910)))){
return review.app.refresh_BANG_("wrote a ton of documentation & design specs:","banner-dark");
} else {
if(((y >= (2910))) && ((y < (3800)))){
return review.app.refresh_BANG_("ate a lot of pizza...","banner-light");
} else {
if((y > (3800))){
return review.app.refresh_BANG_("all possible because of you..","banner-dark");
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
var iter__5680__auto__ = (function review$app$doc_generator_$_iter__8509(s__8510){
return (new cljs.core.LazySeq(null,(function (){
var s__8510__$1 = s__8510;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__8510__$1);
if(temp__4425__auto__){
var s__8510__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__8510__$2)){
var c__5678__auto__ = cljs.core.chunk_first(s__8510__$2);
var size__5679__auto__ = cljs.core.count(c__5678__auto__);
var b__8512 = cljs.core.chunk_buffer(size__5679__auto__);
if((function (){var i__8511 = (0);
while(true){
if((i__8511 < size__5679__auto__)){
var n = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5678__auto__,i__8511);
cljs.core.chunk_append(b__8512,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$icon$red,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$doc_DASH_icon$doc,"\u2630"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$doc_DASH_type,"DOC"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,n], null)));

var G__8515 = (i__8511 + (1));
i__8511 = G__8515;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8512),review$app$doc_generator_$_iter__8509(cljs.core.chunk_rest(s__8510__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8512),null);
}
} else {
var n = cljs.core.first(s__8510__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$icon$red,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$doc_DASH_icon$doc,"\u2630"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$doc_DASH_type,"DOC"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,n], null)),review$app$doc_generator_$_iter__8509(cljs.core.rest(s__8510__$2)));
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
var scroll_to = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0)));
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$component_DASH_will_DASH_mount,((function (circle_scale,scroll_y,contributors,scroll_to){
return (function (){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic("./data/github.json",cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$response_DASH_format,cljs.core.cst$kw$json,cljs.core.cst$kw$keywords_QMARK_,true,cljs.core.cst$kw$handler,((function (circle_scale,scroll_y,contributors,scroll_to){
return (function (p1__8516_SHARP_){
var G__8525 = contributors;
var G__8526 = cljs.core.cst$kw$contributors.cljs$core$IFn$_invoke$arity$1(p1__8516_SHARP_);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__8525,G__8526) : cljs.core.reset_BANG_.call(null,G__8525,G__8526));
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
], null)),cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["screen and (min-width: 640px)",new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$height,(250),cljs.core.cst$kw$labelOffset,(-34),cljs.core.cst$kw$chartPadding,(50),cljs.core.cst$kw$labelPosition,"outside",cljs.core.cst$kw$labelDirection,"explode",cljs.core.cst$kw$labelInterpolationFnc,((function (ctx,pie_chart_data,circle_scale,scroll_y,contributors,scroll_to){
return (function (v){
return v;
});})(ctx,pie_chart_data,circle_scale,scroll_y,contributors,scroll_to))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["screen and (min-width: 1024px)",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$height,(300),cljs.core.cst$kw$labelOffset,(-40),cljs.core.cst$kw$chartPadding,(70)], null)], null)], null)));

return (new Chart(ctx)).Bar(cljs.core.clj__GT_js(review.app.chart_data),{"scaleFontColor": "rgba(100,100,100, 1.00)"});
});})(circle_scale,scroll_y,contributors,scroll_to))
,cljs.core.cst$kw$reagent_DASH_render,((function (circle_scale,scroll_y,contributors,scroll_to){
return (function (){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$main,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$banner_DASH_style.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(review.app.app_state) : cljs.core.deref.call(null,review.app.app_state)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_lg_DASH_9,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img$logo,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,[cljs.core.str("images/"),cljs.core.str(cljs.core.cst$kw$logo_DASH_url.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(review.app.app_state) : cljs.core.deref.call(null,review.app.app_state))))].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(review.app.app_state) : cljs.core.deref.call(null,review.app.app_state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$copy,cljs.core.cst$kw$banner_DASH_title], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_lg_DASH_3,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$arrow_DASH_wrap,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$onClick,((function (circle_scale,scroll_y,contributors,scroll_to){
return (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(scroll_to) : cljs.core.deref.call(null,scroll_to)),cljs.core.count(review.app.positions))){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(scroll_to,(0)) : cljs.core.reset_BANG_.call(null,scroll_to,(0)));
} else {
$("html, body").animate({"scrollTop": [cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(review.app.positions,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(scroll_to) : cljs.core.deref.call(null,scroll_to)))),cljs.core.str("px")].join('')});

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(scroll_to,cljs.core.inc);
}
});})(circle_scale,scroll_y,contributors,scroll_to))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,((((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(scroll_y) : cljs.core.deref.call(null,scroll_y)) >= cljs.core.last(review.app.positions)))?"arrow-up":"arrow-down")], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$hint], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container_DASH_fluid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row$part_DASH_one,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_lg_DASH_12,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1$super$text_DASH_center,"2015"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2$subtitles$text_DASH_center,"END OF YEAR SUMMARY"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container_DASH_fluid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row$part_DASH_two,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_lg_DASH_12$col_DASH_lg_DASH_push_DASH_3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$canvas,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"myChart",cljs.core.cst$kw$width,"400",cljs.core.cst$kw$height,"400"], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container_DASH_fluid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row$part_DASH_three,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_lg_DASH_12,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3$text_DASH_center,"3000 hours /"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3$text_DASH_center,"75 work weeks /"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3$text_DASH_center,"1.5 years"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$timeline,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$cursor,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$left,(cljs.core.mod((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(scroll_y) : cljs.core.deref.call(null,scroll_y)),$(".timeline").width()) / (2))], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4$text_DASH_center,"tracked by ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"http://sparktime.org/",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"white"], null)], null),"sparktime.org"], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container_DASH_fluid,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row$part_DASH_four,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_circle,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,[cljs.core.str("scale("),cljs.core.str(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(circle_scale) : cljs.core.deref.call(null,circle_scale)) / (150))),cljs.core.str(")")].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_lg_DASH_12,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3$super$text_DASH_center,"47"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2$subtitles$text_DASH_center,"meetup events"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container_DASH_fluid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row$part_DASH_five,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_lg_DASH_12,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$gdocs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$box,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3$text_DASH_left,"\u20033 Drawings ",review.app.doc_generator((3))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$box,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3$text_DASH_left,"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A08 PDFs ",review.app.doc_generator((8))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$box,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3$text_DASH_left,"\u200A\u00A0\u00A0\u00A0\u00A010 Slides ",review.app.doc_generator((10))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$box,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3$text_DASH_left,"\u200A\u200A\u200A\u00A0\u00A0\u00A021 Forms ",review.app.doc_generator((21))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$box,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3$text_DASH_left,"\u200A\u200A\u200A\u00A0\u00A025 Sheets ",review.app.doc_generator((25))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$box,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3$text_DASH_left,"\u200A\u200A\u200A\u00A0\u00A0\u00A0166 Docs ",review.app.doc_generator((166))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4$text_DASH_right,"shared on Google Drive"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container_DASH_fluid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row$part_DASH_six,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_lg_DASH_12,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3$text_DASH_center,"budget distribution"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_pieChart], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container_DASH_fluid,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row$thanks,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_lg_DASH_12,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1$text_DASH_center,"MADE POSSIBLE BY"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$text_DASH_center,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"Core Team @ Code For Denver"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_lg_DASH_10$col_DASH_lg_DASH_offset_DASH_1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$grid,(function (){var iter__5680__auto__ = ((function (circle_scale,scroll_y,contributors,scroll_to){
return (function review$app$main_component_$_iter__8527(s__8528){
return (new cljs.core.LazySeq(null,((function (circle_scale,scroll_y,contributors,scroll_to){
return (function (){
var s__8528__$1 = s__8528;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__8528__$1);
if(temp__4425__auto__){
var s__8528__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__8528__$2)){
var c__5678__auto__ = cljs.core.chunk_first(s__8528__$2);
var size__5679__auto__ = cljs.core.count(c__5678__auto__);
var b__8530 = cljs.core.chunk_buffer(size__5679__auto__);
if((function (){var i__8529 = (0);
while(true){
if((i__8529 < size__5679__auto__)){
var user = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5678__auto__,i__8529);
var id = cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(user);
var avatar_url = cljs.core.cst$kw$avatar_url.cljs$core$IFn$_invoke$arity$1(user);
var login = cljs.core.cst$kw$login.cljs$core$IFn$_invoke$arity$1(user);
var html_url = cljs.core.cst$kw$html_url.cljs$core$IFn$_invoke$arity$1(user);
var username = cljs.core.cst$kw$login.cljs$core$IFn$_invoke$arity$1(user);
cljs.core.chunk_append(b__8530,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$element_DASH_item$wrapper,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,html_url,cljs.core.cst$kw$target,"_blank"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,avatar_url], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$tooltip,username], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,id], null)));

var G__8533 = (i__8529 + (1));
i__8529 = G__8533;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8530),review$app$main_component_$_iter__8527(cljs.core.chunk_rest(s__8528__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8530),null);
}
} else {
var user = cljs.core.first(s__8528__$2);
var id = cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(user);
var avatar_url = cljs.core.cst$kw$avatar_url.cljs$core$IFn$_invoke$arity$1(user);
var login = cljs.core.cst$kw$login.cljs$core$IFn$_invoke$arity$1(user);
var html_url = cljs.core.cst$kw$html_url.cljs$core$IFn$_invoke$arity$1(user);
var username = cljs.core.cst$kw$login.cljs$core$IFn$_invoke$arity$1(user);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$element_DASH_item$wrapper,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,html_url,cljs.core.cst$kw$target,"_blank"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,avatar_url], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$tooltip,username], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,id], null)),review$app$main_component_$_iter__8527(cljs.core.rest(s__8528__$2)));
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
})()], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_lg_DASH_12,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$text_DASH_center,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"The Core Team @ Code For Denver"], null),", sincerely thanks you for your kind contributions towards",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b," strengthening our community."], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hr], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4$join$text_DASH_center,"JOIN US!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row$text_DASH_center,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_lg_DASH_12,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"http://www.meetup.com/CodeForDenver/",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"white"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img$text_DASH_center$text_DASH_center,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,"images/meetup-icon.png",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,[cljs.core.str("scale("),cljs.core.str(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(circle_scale) : cljs.core.deref.call(null,circle_scale)) / (5000))),cljs.core.str(")")].join('')], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$text_DASH_center,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"Partners"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$text_DASH_center,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"Sponsors"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$footer,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img$img_DASH_full,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,"images/4.jpg"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img$img_DASH_full,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,"images/5.jpg"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img$img_DASH_full,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,"images/6.jpg"], null)], null)], null)], null);
});})(circle_scale,scroll_y,contributors,scroll_to))
], null));
});
review.app.parent_component = (function review$app$parent_component(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [review.app.main_component], null)], null);
});
review.app.init = (function review$app$init(){
var G__8536 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [review.app.parent_component], null);
var G__8537 = document.getElementById("mount");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__8536,G__8537) : reagent.core.render_component.call(null,G__8536,G__8537));
});
