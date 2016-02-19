// Compiled by ClojureScript 1.7.122 {:static-fns true, :optimize-constants true}
goog.provide('timothypratley.reanimated.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('goog.events');
goog.require('goog.events.EventType');
goog.require('goog.dom');
timothypratley.reanimated.core.now = (function timothypratley$reanimated$core$now(){
return (new Date());
});
/**
 * Calculates a value between a and b relative to t in duration.
 */
timothypratley.reanimated.core.interpolate = (function timothypratley$reanimated$core$interpolate(a,b,duration,t){
if((t <= (0))){
return a;
} else {
if((t >= duration)){
return b;
} else {
return (a + ((t * (b - a)) / duration));

}
}
});
/**
 * Wraps a component to animate creation and destruction.
 *   Takes a condition ratom and a vector or value to be rendered.
 *   Options can contain duration (milliseconds)
 *   and easing (a function that takes a b duration t).
 */
timothypratley.reanimated.core.pop_when = (function timothypratley$reanimated$core$pop_when(var_args){
var args8950 = [];
var len__5966__auto___8963 = arguments.length;
var i__5967__auto___8964 = (0);
while(true){
if((i__5967__auto___8964 < len__5966__auto___8963)){
args8950.push((arguments[i__5967__auto___8964]));

var G__8965 = (i__5967__auto___8964 + (1));
i__5967__auto___8964 = G__8965;
continue;
} else {
}
break;
}

var G__8952 = args8950.length;
switch (G__8952) {
case 2:
return timothypratley.reanimated.core.pop_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return timothypratley.reanimated.core.pop_when.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8950.length)].join('')));

}
});

timothypratley.reanimated.core.pop_when.cljs$core$IFn$_invoke$arity$2 = (function (condition,then){
return timothypratley.reanimated.core.pop_when.cljs$core$IFn$_invoke$arity$3(condition,then,cljs.core.PersistentArrayMap.EMPTY);
});

timothypratley.reanimated.core.pop_when.cljs$core$IFn$_invoke$arity$3 = (function (condition,then,options){
var anim = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$from,condition], null));
return ((function (anim){
return (function timothypratley$reanimated$core$a_pop_when(condition__$1,then__$1,options__$1){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(condition__$1,cljs.core.cst$kw$from.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(anim) : cljs.core.deref.call(null,anim))))){
var G__8958_8967 = anim;
var G__8959_8968 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$start,timothypratley.reanimated.core.now(),cljs.core.cst$kw$from,condition__$1,cljs.core.cst$kw$frame,(0)], null);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__8958_8967,G__8959_8968) : cljs.core.reset_BANG_.call(null,G__8958_8967,G__8959_8968));
} else {
}

var map__8960 = options__$1;
var map__8960__$1 = ((((!((map__8960 == null)))?((((map__8960.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8960.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8960):map__8960);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__8960__$1,cljs.core.cst$kw$duration,(200));
var easing = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__8960__$1,cljs.core.cst$kw$easing,timothypratley.reanimated.core.interpolate);
var t = (timothypratley.reanimated.core.now() - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(anim) : cljs.core.deref.call(null,anim))));
var scale = (easing.cljs$core$IFn$_invoke$arity$4 ? easing.cljs$core$IFn$_invoke$arity$4((0),(1),duration,t) : easing.call(null,(0),(1),duration,t));
var scale__$1 = (cljs.core.truth_(condition__$1)?scale:((1) - scale));
if((t < duration)){
var G__8962_8969 = ((function (map__8960,map__8960__$1,duration,easing,t,scale,scale__$1,anim){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(anim,cljs.core.update,cljs.core.cst$kw$frame,cljs.core.inc);
});})(map__8960,map__8960__$1,duration,easing,t,scale,scale__$1,anim))
;
setTimeout(G__8962_8969);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transform,[cljs.core.str("scale("),cljs.core.str(scale__$1),cljs.core.str(")")].join(''),cljs.core.cst$kw$opacity,scale__$1], null)], null),then__$1], null);
} else {
if(cljs.core.truth_(condition__$1)){
return then__$1;
} else {
return null;
}
}
});
;})(anim))
});

timothypratley.reanimated.core.pop_when.cljs$lang$maxFixedArity = 3;
/**
 * Creates an event handler that will toggle a given ratom.
 */
timothypratley.reanimated.core.toggle_handler = (function timothypratley$reanimated$core$toggle_handler(ratom){
return (function timothypratley$reanimated$core$toggle_handler_$_a_toggle_handler(e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ratom,cljs.core.not);

return e;
});
});
/**
 * Returns a map suitable for merging with component properties,
 *   that will keep a given ratom updated with the mouseover status.
 */
timothypratley.reanimated.core.mouse_watcher = (function timothypratley$reanimated$core$mouse_watcher(ratom){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_mouse_DASH_over,(function timothypratley$reanimated$core$mouse_watcher_$_timeline_mouse_over(e){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(ratom,true) : cljs.core.reset_BANG_.call(null,ratom,true));

return e;
}),cljs.core.cst$kw$on_DASH_mouse_DASH_out,(function timothypratley$reanimated$core$mouse_watcher_$_timeline_mouse_out(e){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(ratom,false) : cljs.core.reset_BANG_.call(null,ratom,false));

return e;
})], null);
});
/**
 * Interpolates between two values when the conditon changes.
 *   Takes a condition ratom to watch, and 2 vectors or values to render.
 *   Options can contain duration (in milliseconds)
 *   and easing (a function of a b duration t).
 */
timothypratley.reanimated.core.interpolate_if = (function timothypratley$reanimated$core$interpolate_if(var_args){
var args8970 = [];
var len__5966__auto___8978 = arguments.length;
var i__5967__auto___8979 = (0);
while(true){
if((i__5967__auto___8979 < len__5966__auto___8978)){
args8970.push((arguments[i__5967__auto___8979]));

var G__8980 = (i__5967__auto___8979 + (1));
i__5967__auto___8979 = G__8980;
continue;
} else {
}
break;
}

var G__8972 = args8970.length;
switch (G__8972) {
case 3:
return timothypratley.reanimated.core.interpolate_if.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return timothypratley.reanimated.core.interpolate_if.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8970.length)].join('')));

}
});

timothypratley.reanimated.core.interpolate_if.cljs$core$IFn$_invoke$arity$3 = (function (condition,a,b){
return timothypratley.reanimated.core.interpolate_if.cljs$core$IFn$_invoke$arity$4(condition,a,b,cljs.core.PersistentArrayMap.EMPTY);
});

timothypratley.reanimated.core.interpolate_if.cljs$core$IFn$_invoke$arity$4 = (function (condition,a,b,options){
var anim = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$from,a], null));
var map__8973 = options;
var map__8973__$1 = ((((!((map__8973 == null)))?((((map__8973.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8973.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8973):map__8973);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__8973__$1,cljs.core.cst$kw$duration,(200));
var easing = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__8973__$1,cljs.core.cst$kw$easing,timothypratley.reanimated.core.interpolate);
return reagent.ratom.make_reaction(((function (anim,map__8973,map__8973__$1,duration,easing){
return (function (){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(condition) : cljs.core.deref.call(null,condition)),cljs.core.cst$kw$condition.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(anim) : cljs.core.deref.call(null,anim))))){
var G__8975_8982 = anim;
var G__8976_8983 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$start,timothypratley.reanimated.core.now(),cljs.core.cst$kw$condition,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(condition) : cljs.core.deref.call(null,condition)),cljs.core.cst$kw$from,a,cljs.core.cst$kw$frame,(0)], null);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__8975_8982,G__8976_8983) : cljs.core.reset_BANG_.call(null,G__8975_8982,G__8976_8983));
} else {
}

var t = (timothypratley.reanimated.core.now() - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(anim) : cljs.core.deref.call(null,anim))));
var scale = (easing.cljs$core$IFn$_invoke$arity$4 ? easing.cljs$core$IFn$_invoke$arity$4((0),(1),duration,t) : easing.call(null,(0),(1),duration,t));
var scale__$1 = (cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(condition) : cljs.core.deref.call(null,condition)))?scale:((1) - scale));
if((t < duration)){
var G__8977_8984 = ((function (t,scale,scale__$1,anim,map__8973,map__8973__$1,duration,easing){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(anim,cljs.core.update,cljs.core.cst$kw$frame,cljs.core.inc);
});})(t,scale,scale__$1,anim,map__8973,map__8973__$1,duration,easing))
;
setTimeout(G__8977_8984);

return ((a * ((1) - scale__$1)) + (b * scale__$1));
} else {
if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(condition) : cljs.core.deref.call(null,condition)))){
return b;
} else {
return a;
}
}
});})(anim,map__8973,map__8973__$1,duration,easing))
);
});

timothypratley.reanimated.core.interpolate_if.cljs$lang$maxFixedArity = 4;
/**
 * Interpolates toward new values.
 *   Takes a ratom which stores a numeric value.
 *   Options can contain duration (in milliseconds)
 *   and easing (a function of a b duration t).
 */
timothypratley.reanimated.core.interpolate_to = (function timothypratley$reanimated$core$interpolate_to(var_args){
var args8985 = [];
var len__5966__auto___8991 = arguments.length;
var i__5967__auto___8992 = (0);
while(true){
if((i__5967__auto___8992 < len__5966__auto___8991)){
args8985.push((arguments[i__5967__auto___8992]));

var G__8993 = (i__5967__auto___8992 + (1));
i__5967__auto___8992 = G__8993;
continue;
} else {
}
break;
}

var G__8987 = args8985.length;
switch (G__8987) {
case 1:
return timothypratley.reanimated.core.interpolate_to.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return timothypratley.reanimated.core.interpolate_to.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8985.length)].join('')));

}
});

timothypratley.reanimated.core.interpolate_to.cljs$core$IFn$_invoke$arity$1 = (function (x){
return timothypratley.reanimated.core.interpolate_to.cljs$core$IFn$_invoke$arity$2(x,cljs.core.PersistentArrayMap.EMPTY);
});

timothypratley.reanimated.core.interpolate_to.cljs$core$IFn$_invoke$arity$2 = (function (x,options){
var anim = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$from,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(x) : cljs.core.deref.call(null,x)),cljs.core.cst$kw$at,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(x) : cljs.core.deref.call(null,x)),cljs.core.cst$kw$to,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(x) : cljs.core.deref.call(null,x)),cljs.core.cst$kw$start,timothypratley.reanimated.core.now()], null));
var map__8988 = options;
var map__8988__$1 = ((((!((map__8988 == null)))?((((map__8988.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8988.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8988):map__8988);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__8988__$1,cljs.core.cst$kw$duration,(200));
var easing = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__8988__$1,cljs.core.cst$kw$easing,timothypratley.reanimated.core.interpolate);
return reagent.ratom.make_reaction(((function (anim,map__8988,map__8988__$1,duration,easing){
return (function (){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$to.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(anim) : cljs.core.deref.call(null,anim))),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(x) : cljs.core.deref.call(null,x)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(anim,cljs.core.assoc,cljs.core.cst$kw$start,timothypratley.reanimated.core.now(),cljs.core.array_seq([cljs.core.cst$kw$to,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(x) : cljs.core.deref.call(null,x)),cljs.core.cst$kw$from,cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(anim) : cljs.core.deref.call(null,anim))),cljs.core.cst$kw$frame,(0)], 0));
} else {
}

var t = (timothypratley.reanimated.core.now() - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(anim) : cljs.core.deref.call(null,anim))));
var scale = (easing.cljs$core$IFn$_invoke$arity$4 ? easing.cljs$core$IFn$_invoke$arity$4((0),(1),duration,t) : easing.call(null,(0),(1),duration,t));
var a = cljs.core.cst$kw$from.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(anim) : cljs.core.deref.call(null,anim)));
var b = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(x) : cljs.core.deref.call(null,x));
if((t < duration)){
var at = ((a * ((1) - scale)) + (b * scale));
var G__8990_8995 = ((function (at,t,scale,a,b,anim,map__8988,map__8988__$1,duration,easing){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(anim,cljs.core.assoc,cljs.core.cst$kw$at,at,cljs.core.array_seq([cljs.core.cst$kw$frame,(cljs.core.cst$kw$frame.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(anim) : cljs.core.deref.call(null,anim))) + (1))], 0));
});})(at,t,scale,a,b,anim,map__8988,map__8988__$1,duration,easing))
;
setTimeout(G__8990_8995);

return at;
} else {
return b;
}
});})(anim,map__8988,map__8988__$1,duration,easing))
);
});

timothypratley.reanimated.core.interpolate_to.cljs$lang$maxFixedArity = 2;
/**
 * Interpolates the argument of a component to x.
 *   Will call the given component with values approaching x.
 *   Options can contain duration (in milliseconds)
 *   and easing (a function of a b duration t).
 */
timothypratley.reanimated.core.interpolate_arg = (function timothypratley$reanimated$core$interpolate_arg(var_args){
var args8996 = [];
var len__5966__auto___9013 = arguments.length;
var i__5967__auto___9014 = (0);
while(true){
if((i__5967__auto___9014 < len__5966__auto___9013)){
args8996.push((arguments[i__5967__auto___9014]));

var G__9015 = (i__5967__auto___9014 + (1));
i__5967__auto___9014 = G__9015;
continue;
} else {
}
break;
}

var G__8998 = args8996.length;
switch (G__8998) {
case 2:
return timothypratley.reanimated.core.interpolate_arg.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return timothypratley.reanimated.core.interpolate_arg.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8996.length)].join('')));

}
});

timothypratley.reanimated.core.interpolate_arg.cljs$core$IFn$_invoke$arity$2 = (function (component,x){
return timothypratley.reanimated.core.interpolate_arg.cljs$core$IFn$_invoke$arity$3(component,x,cljs.core.PersistentArrayMap.EMPTY);
});

timothypratley.reanimated.core.interpolate_arg.cljs$core$IFn$_invoke$arity$3 = (function (component,x,options){
var anim = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$start,(0),cljs.core.cst$kw$to,x,cljs.core.cst$kw$frame,(0),cljs.core.cst$kw$current,x], null));
return ((function (anim){
return (function timothypratley$reanimated$core$an_interpolate_arg(component__$1,x__$1,options__$1){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,cljs.core.cst$kw$to.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(anim) : cljs.core.deref.call(null,anim))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(anim,cljs.core.assoc,cljs.core.cst$kw$start,timothypratley.reanimated.core.now(),cljs.core.array_seq([cljs.core.cst$kw$from,cljs.core.cst$kw$current.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(anim) : cljs.core.deref.call(null,anim))),cljs.core.cst$kw$to,x__$1,cljs.core.cst$kw$frame,(0)], 0));
} else {
}

var map__9006 = options__$1;
var map__9006__$1 = ((((!((map__9006 == null)))?((((map__9006.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9006.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9006):map__9006);
var easing = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__9006__$1,cljs.core.cst$kw$easing,timothypratley.reanimated.core.interpolate);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__9006__$1,cljs.core.cst$kw$duration,(200));
var t = (timothypratley.reanimated.core.now() - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(anim) : cljs.core.deref.call(null,anim))));
if((t < duration)){
var G__9008_9017 = ((function (map__9006,map__9006__$1,easing,duration,t,anim){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(anim,cljs.core.update,cljs.core.cst$kw$frame,cljs.core.inc);
});})(map__9006,map__9006__$1,easing,duration,t,anim))
;
setTimeout(G__9008_9017);

var i = (function (){var G__9009 = cljs.core.cst$kw$from.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(anim) : cljs.core.deref.call(null,anim)));
var G__9010 = x__$1;
var G__9011 = duration;
var G__9012 = t;
return (easing.cljs$core$IFn$_invoke$arity$4 ? easing.cljs$core$IFn$_invoke$arity$4(G__9009,G__9010,G__9011,G__9012) : easing.call(null,G__9009,G__9010,G__9011,G__9012));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(anim,cljs.core.assoc,cljs.core.cst$kw$current,i);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component__$1,i], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component__$1,x__$1], null);
}
});
;})(anim))
});

timothypratley.reanimated.core.interpolate_arg.cljs$lang$maxFixedArity = 3;
timothypratley.reanimated.core.mass = (10);
timothypratley.reanimated.core.stiffness = (1);
timothypratley.reanimated.core.damping = (1);
/**
 * This is where the spring physics formula is applied.
 */
timothypratley.reanimated.core.evaluate = (function timothypratley$reanimated$core$evaluate(x2,dt,x,v,a,p__9018){
var map__9021 = p__9018;
var map__9021__$1 = ((((!((map__9021 == null)))?((((map__9021.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9021.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9021):map__9021);
var mass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9021__$1,cljs.core.cst$kw$mass);
var stiffness = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9021__$1,cljs.core.cst$kw$stiffness);
var damping = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9021__$1,cljs.core.cst$kw$damping);
var x__$1 = (x + (v * dt));
var v__$1 = (v + (a * dt));
var f = ((stiffness * (x2 - x__$1)) - (damping * v__$1));
var a__$1 = (f / mass);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__$1,a__$1], null);
});
/**
 * Takes an itegration step from numbers x to x2 over time dt,
 *   with a present velocity v.
 */
timothypratley.reanimated.core.integrate_rk4 = (function timothypratley$reanimated$core$integrate_rk4(x2,dt,x,v,options){
var dt2 = (dt * 0.5);
var vec__9027 = timothypratley.reanimated.core.evaluate(x2,0.0,x,v,0.0,options);
var av = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9027,(0),null);
var aa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9027,(1),null);
var vec__9028 = timothypratley.reanimated.core.evaluate(x2,dt2,x,av,aa,options);
var bv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9028,(0),null);
var ba = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9028,(1),null);
var vec__9029 = timothypratley.reanimated.core.evaluate(x2,dt2,x,bv,ba,options);
var cv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9029,(0),null);
var ca = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9029,(1),null);
var vec__9030 = timothypratley.reanimated.core.evaluate(x2,dt,x,cv,ca,options);
var dv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9030,(0),null);
var da = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9030,(1),null);
var dx = (((av + (2.0 * (bv + cv))) + dv) / 6.0);
var dv__$1 = (((aa + (2.0 * (ba + ca))) + da) / 6.0);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (dx * dt)),(v + (dv__$1 * dt))], null);
});
timothypratley.reanimated.core.small = (function timothypratley$reanimated$core$small(x){
return (Math.abs(x) < 0.1);
});
/**
 * Useful for wrapping a value in your component to make it springy.
 *   Returns a reaction that will take values approaching x2,
 *   updating every time Reagent calls requestAnimationFrame.
 *   Integrates a physical spring simulation for each step.
 *   Options can contain:
 *   from - a value to start from (initial value is used if absent).
 *   velocity of the mass on the spring (initially 0 if absent).
 *   mass, stiffness, damping of the spring.
 */
timothypratley.reanimated.core.spring = (function timothypratley$reanimated$core$spring(var_args){
var args9031 = [];
var len__5966__auto___9044 = arguments.length;
var i__5967__auto___9045 = (0);
while(true){
if((i__5967__auto___9045 < len__5966__auto___9044)){
args9031.push((arguments[i__5967__auto___9045]));

var G__9046 = (i__5967__auto___9045 + (1));
i__5967__auto___9045 = G__9046;
continue;
} else {
}
break;
}

var G__9033 = args9031.length;
switch (G__9033) {
case 1:
return timothypratley.reanimated.core.spring.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return timothypratley.reanimated.core.spring.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9031.length)].join('')));

}
});

timothypratley.reanimated.core.spring.cljs$core$IFn$_invoke$arity$1 = (function (x2){
return timothypratley.reanimated.core.spring.cljs$core$IFn$_invoke$arity$2(x2,cljs.core.PersistentArrayMap.EMPTY);
});

timothypratley.reanimated.core.spring.cljs$core$IFn$_invoke$arity$2 = (function (x2,options){
var map__9034 = options;
var map__9034__$1 = ((((!((map__9034 == null)))?((((map__9034.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9034.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9034):map__9034);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__9034__$1,cljs.core.cst$kw$from,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(x2) : cljs.core.deref.call(null,x2)));
var velocity = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__9034__$1,cljs.core.cst$kw$velocity,(0));
var anim = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$t,timothypratley.reanimated.core.now(),cljs.core.cst$kw$x,from,cljs.core.cst$kw$v,velocity], null));
return reagent.ratom.make_reaction(((function (map__9034,map__9034__$1,from,velocity,anim){
return (function (){
var map__9036 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(anim) : cljs.core.deref.call(null,anim));
var map__9036__$1 = ((((!((map__9036 == null)))?((((map__9036.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9036.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9036):map__9036);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9036__$1,cljs.core.cst$kw$x);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9036__$1,cljs.core.cst$kw$v);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9036__$1,cljs.core.cst$kw$t);
var t2 = timothypratley.reanimated.core.now();
var dt = (function (){var x__5246__auto__ = (1);
var y__5247__auto__ = ((t2 - t) / 10.0);
return ((x__5246__auto__ < y__5247__auto__) ? x__5246__auto__ : y__5247__auto__);
})();
if(cljs.core.truth_((function (){var and__4896__auto__ = timothypratley.reanimated.core.small((x - (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(x2) : cljs.core.deref.call(null,x2))));
if(cljs.core.truth_(and__4896__auto__)){
return timothypratley.reanimated.core.small(v);
} else {
return and__4896__auto__;
}
})())){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(x2) : cljs.core.deref.call(null,x2));
} else {
var vec__9038 = timothypratley.reanimated.core.integrate_rk4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(x2) : cljs.core.deref.call(null,x2)),dt,x,v,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$mass,timothypratley.reanimated.core.mass,cljs.core.cst$kw$stiffness,timothypratley.reanimated.core.stiffness,cljs.core.cst$kw$damping,timothypratley.reanimated.core.damping], null));
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9038,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9038,(1),null);
var G__9041_9048 = ((function (vec__9038,x__$1,v__$1,map__9036,map__9036__$1,x,v,t,t2,dt,map__9034,map__9034__$1,from,velocity,anim){
return (function (){
var G__9042 = anim;
var G__9043 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$t,t2,cljs.core.cst$kw$x,x__$1,cljs.core.cst$kw$v,v__$1], null);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__9042,G__9043) : cljs.core.reset_BANG_.call(null,G__9042,G__9043));
});})(vec__9038,x__$1,v__$1,map__9036,map__9036__$1,x,v,t,t2,dt,map__9034,map__9034__$1,from,velocity,anim))
;
setTimeout(G__9041_9048);

return x__$1;
}
});})(map__9034,map__9034__$1,from,velocity,anim))
);
});

timothypratley.reanimated.core.spring.cljs$lang$maxFixedArity = 2;
/**
 * Watch a ref only while mounted in the DOM.
 */
timothypratley.reanimated.core.watch = (function timothypratley$reanimated$core$watch(r,f){
var k = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("watch"));
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display_DASH_name,"watch",cljs.core.cst$kw$component_DASH_did_DASH_mount,((function (k){
return (function timothypratley$reanimated$core$watch_$_watch_did_mount(this$){
return cljs.core.add_watch(r,k,f);
});})(k))
,cljs.core.cst$kw$component_DASH_will_DASH_unmount,((function (k){
return (function timothypratley$reanimated$core$watch_$_watch_will_unmount(this$){
return cljs.core.remove_watch(r,k);
});})(k))
,cljs.core.cst$kw$reagent_DASH_render,((function (k){
return (function timothypratley$reanimated$core$watch_$_watch_render(r__$1,f__$1){
return null;
});})(k))
], null));
});
/**
 * Call function f every period t while mounted in the DOM.
 */
timothypratley.reanimated.core.interval = (function timothypratley$reanimated$core$interval(f,t){
var id = (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display_DASH_name,"interval",cljs.core.cst$kw$component_DASH_did_DASH_mount,((function (id){
return (function timothypratley$reanimated$core$interval_$_interval_did_mount(this$){
var G__9057 = id;
var G__9058 = setInterval(f,t);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__9057,G__9058) : cljs.core.reset_BANG_.call(null,G__9057,G__9058));
});})(id))
,cljs.core.cst$kw$component_DASH_will_DASH_unmount,((function (id){
return (function timothypratley$reanimated$core$interval_$_interval_will_unmount(this$){
var G__9060 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(id) : cljs.core.deref.call(null,id));
return clearInterval(G__9060);
});})(id))
,cljs.core.cst$kw$reagent_DASH_render,((function (id){
return (function timothypratley$reanimated$core$interval_$_interval_render(){
return null;
});})(id))
], null));
});
/**
 * Call function f period t in milliseconds after being mounted in the DOM,
 *   only if still mounted.
 */
timothypratley.reanimated.core.timeout = (function timothypratley$reanimated$core$timeout(f,t){
var id = (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display_DASH_name,"timeout",cljs.core.cst$kw$component_DASH_did_DASH_mount,((function (id){
return (function timothypratley$reanimated$core$timeout_$_timeout_did_mount(this$){
var G__9069 = id;
var G__9070 = setTimeout(f,t);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__9069,G__9070) : cljs.core.reset_BANG_.call(null,G__9069,G__9070));
});})(id))
,cljs.core.cst$kw$component_DASH_will_DASH_unmount,((function (id){
return (function timothypratley$reanimated$core$timeout_$_timeout_will_unmount(this$){
var G__9072 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(id) : cljs.core.deref.call(null,id));
return clearTimeout(G__9072);
});})(id))
,cljs.core.cst$kw$reagent_DASH_render,((function (id){
return (function timothypratley$reanimated$core$timeout_$_timeout_render(){
return null;
});})(id))
], null));
});
/**
 * Use timeline instead of this function directly.
 *   Provides a way to express a sequence of actions and pauses.
 *   Takes an id atom, element ratom,
 *   and a sequence of numbers and/or callback functions and/or vectors.
 *   Treats numbers as a wait timeout in milliseconds,
 *   calls callbacks after the elapsed time.
 *   id is reset as the timeout reference for cleanup.
 *   element is reset to vectors for rendering. 
 */
timothypratley.reanimated.core.and_then = (function timothypratley$reanimated$core$and_then(var_args){
var args__5973__auto__ = [];
var len__5966__auto___9083 = arguments.length;
var i__5967__auto___9084 = (0);
while(true){
if((i__5967__auto___9084 < len__5966__auto___9083)){
args__5973__auto__.push((arguments[i__5967__auto___9084]));

var G__9085 = (i__5967__auto___9084 + (1));
i__5967__auto___9084 = G__9085;
continue;
} else {
}
break;
}

var argseq__5974__auto__ = ((((3) < args__5973__auto__.length))?(new cljs.core.IndexedSeq(args__5973__auto__.slice((3)),(0))):null);
return timothypratley.reanimated.core.and_then.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5974__auto__);
});

timothypratley.reanimated.core.and_then.cljs$core$IFn$_invoke$arity$variadic = (function (id,element,x,more){
if(typeof x === 'number'){
if(cljs.core.seq(more)){
var G__9079 = id;
var G__9080 = (function (){var G__9081 = ((function (G__9079){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(timothypratley.reanimated.core.and_then,id,element,more);
});})(G__9079))
;
var G__9082 = x;
return setTimeout(G__9081,G__9082);
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__9079,G__9080) : cljs.core.reset_BANG_.call(null,G__9079,G__9080));
} else {
return null;
}
} else {
if(cljs.core.vector_QMARK_(x)){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(element,x) : cljs.core.reset_BANG_.call(null,element,x));

if(cljs.core.seq(more)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(timothypratley.reanimated.core.and_then,id,element,more);
} else {
return null;
}
} else {
if((cljs.core.ifn_QMARK_(x)) && (!(cljs.core.coll_QMARK_(x))) && (!(cljs.core.map_QMARK_(x)))){
(x.cljs$core$IFn$_invoke$arity$0 ? x.cljs$core$IFn$_invoke$arity$0() : x.call(null));

if(cljs.core.seq(more)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(timothypratley.reanimated.core.and_then,id,element,more);
} else {
return null;
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(timothypratley.reanimated.core.and_then,id,element,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,[cljs.core.str("timeline encountered unexpected type "),cljs.core.str(cljs.core.type(x))].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0))], null)], null),more);

}
}
}
});

timothypratley.reanimated.core.and_then.cljs$lang$maxFixedArity = (3);

timothypratley.reanimated.core.and_then.cljs$lang$applyTo = (function (seq9073){
var G__9074 = cljs.core.first(seq9073);
var seq9073__$1 = cljs.core.next(seq9073);
var G__9075 = cljs.core.first(seq9073__$1);
var seq9073__$2 = cljs.core.next(seq9073__$1);
var G__9076 = cljs.core.first(seq9073__$2);
var seq9073__$3 = cljs.core.next(seq9073__$2);
return timothypratley.reanimated.core.and_then.cljs$core$IFn$_invoke$arity$variadic(G__9074,G__9075,G__9076,seq9073__$3);
});
/**
 * Given a sequence of inputs, will consume them depending on their type:
 *   numbers will be a sleep in milliseconds
 *   functions will be called with no arguments
 *   vectors will be rendered as reagent components.
 */
timothypratley.reanimated.core.timeline = (function timothypratley$reanimated$core$timeline(var_args){
var args__5973__auto__ = [];
var len__5966__auto___9090 = arguments.length;
var i__5967__auto___9091 = (0);
while(true){
if((i__5967__auto___9091 < len__5966__auto___9090)){
args__5973__auto__.push((arguments[i__5967__auto___9091]));

var G__9092 = (i__5967__auto___9091 + (1));
i__5967__auto___9091 = G__9092;
continue;
} else {
}
break;
}

var argseq__5974__auto__ = ((((1) < args__5973__auto__.length))?(new cljs.core.IndexedSeq(args__5973__auto__.slice((1)),(0))):null);
return timothypratley.reanimated.core.timeline.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5974__auto__);
});

timothypratley.reanimated.core.timeline.cljs$core$IFn$_invoke$arity$variadic = (function (x,xs){
var id = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var element = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display_DASH_name,"interval",cljs.core.cst$kw$component_DASH_did_DASH_mount,((function (id,element){
return (function timothypratley$reanimated$core$timeout_did_mount(this$){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(timothypratley.reanimated.core.and_then,id,element,x,xs);
});})(id,element))
,cljs.core.cst$kw$component_DASH_will_DASH_unmount,((function (id,element){
return (function timothypratley$reanimated$core$timeout_will_unmount(this$){
if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(id) : cljs.core.deref.call(null,id)))){
var G__9089 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(id) : cljs.core.deref.call(null,id));
return clearTimeout(G__9089);
} else {
return null;
}
});})(id,element))
,cljs.core.cst$kw$reagent_DASH_render,((function (id,element){
return (function timothypratley$reanimated$core$timeout_render(){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(element) : cljs.core.deref.call(null,element));
});})(id,element))
], null));
});

timothypratley.reanimated.core.timeline.cljs$lang$maxFixedArity = (1);

timothypratley.reanimated.core.timeline.cljs$lang$applyTo = (function (seq9086){
var G__9087 = cljs.core.first(seq9086);
var seq9086__$1 = cljs.core.next(seq9086);
return timothypratley.reanimated.core.timeline.cljs$core$IFn$_invoke$arity$variadic(G__9087,seq9086__$1);
});
/**
 * Gets the current document y scroll position.
 */
timothypratley.reanimated.core.get_scroll_y = (function timothypratley$reanimated$core$get_scroll_y(){
return goog.dom.getDocumentScroll().y;
});
/**
 * Gets the current document y scroll position.
 */
timothypratley.reanimated.core.get_scroll = timothypratley.reanimated.core.get_scroll_y;
/**
 * Gets the current document x scroll position.
 */
timothypratley.reanimated.core.get_scroll_x = (function timothypratley$reanimated$core$get_scroll_x(){
return goog.dom.getDocumentScroll().x;
});
/**
 * A ratom for watching the current document y scroll,
 *   will be updated when there is a scroll event.
 */
timothypratley.reanimated.core.scroll_y = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(timothypratley.reanimated.core.get_scroll_y());
/**
 * A ratom for watching the current document y scroll,
 *   will be updated when there is a scroll event.
 */
timothypratley.reanimated.core.scroll = timothypratley.reanimated.core.scroll_y;
/**
 * A ratom for watching the current document x scroll,
 *   will be updated when there is a scroll event.
 */
timothypratley.reanimated.core.scroll_x = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(timothypratley.reanimated.core.get_scroll_x());
var G__9101_9112 = window;
var G__9102_9113 = goog.events.EventType.SCROLL;
var G__9103_9114 = ((function (G__9101_9112,G__9102_9113){
return (function timothypratley$reanimated$core$a_scroll(e){
var G__9108_9115 = timothypratley.reanimated.core.scroll_y;
var G__9109_9116 = timothypratley.reanimated.core.get_scroll_y();
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__9108_9115,G__9109_9116) : cljs.core.reset_BANG_.call(null,G__9108_9115,G__9109_9116));

var G__9110 = timothypratley.reanimated.core.scroll_x;
var G__9111 = timothypratley.reanimated.core.get_scroll_x();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__9110,G__9111) : cljs.core.reset_BANG_.call(null,G__9110,G__9111));
});})(G__9101_9112,G__9102_9113))
;
goog.events.listen(G__9101_9112,G__9102_9113,G__9103_9114);
