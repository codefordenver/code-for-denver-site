// Compiled by ClojureScript 1.7.122 {:static-fns true, :optimize-constants true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__9624,handler){
var map__9625 = p__9624;
var map__9625__$1 = ((((!((map__9625 == null)))?((((map__9625.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9625.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9625):map__9625);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9625__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9625__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9625__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9625__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__9625__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__9625__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9625__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__9625,map__9625__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__9623_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__9623_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__9625,map__9625__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___9633 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___9633)){
var response_type_9634 = temp__4425__auto___9633;
this$__$1.responseType = cljs.core.name(response_type_9634);
} else {
}

var seq__9627_9635 = cljs.core.seq(headers);
var chunk__9628_9636 = null;
var count__9629_9637 = (0);
var i__9630_9638 = (0);
while(true){
if((i__9630_9638 < count__9629_9637)){
var vec__9631_9639 = chunk__9628_9636.cljs$core$IIndexed$_nth$arity$2(null,i__9630_9638);
var k_9640 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9631_9639,(0),null);
var v_9641 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9631_9639,(1),null);
this$__$1.setRequestHeader(k_9640,v_9641);

var G__9642 = seq__9627_9635;
var G__9643 = chunk__9628_9636;
var G__9644 = count__9629_9637;
var G__9645 = (i__9630_9638 + (1));
seq__9627_9635 = G__9642;
chunk__9628_9636 = G__9643;
count__9629_9637 = G__9644;
i__9630_9638 = G__9645;
continue;
} else {
var temp__4425__auto___9646 = cljs.core.seq(seq__9627_9635);
if(temp__4425__auto___9646){
var seq__9627_9647__$1 = temp__4425__auto___9646;
if(cljs.core.chunked_seq_QMARK_(seq__9627_9647__$1)){
var c__5711__auto___9648 = cljs.core.chunk_first(seq__9627_9647__$1);
var G__9649 = cljs.core.chunk_rest(seq__9627_9647__$1);
var G__9650 = c__5711__auto___9648;
var G__9651 = cljs.core.count(c__5711__auto___9648);
var G__9652 = (0);
seq__9627_9635 = G__9649;
chunk__9628_9636 = G__9650;
count__9629_9637 = G__9651;
i__9630_9638 = G__9652;
continue;
} else {
var vec__9632_9653 = cljs.core.first(seq__9627_9647__$1);
var k_9654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9632_9653,(0),null);
var v_9655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9632_9653,(1),null);
this$__$1.setRequestHeader(k_9654,v_9655);

var G__9656 = cljs.core.next(seq__9627_9647__$1);
var G__9657 = null;
var G__9658 = (0);
var G__9659 = (0);
seq__9627_9635 = G__9656;
chunk__9628_9636 = G__9657;
count__9629_9637 = G__9658;
i__9630_9638 = G__9659;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4908__auto__ = body;
if(cljs.core.truth_(or__4908__auto__)){
return or__4908__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
});
