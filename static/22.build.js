webpackJsonp([22],{60:function(t,i,e){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}var o=e(6),s=n(o);t.exports={replace:!0,components:{"techan-list-item":function(t){e.e(38,function(i){var e=[i(33)];t.apply(null,e)}.bind(this))},"list-view":function(t){e.e(2,function(i){var e=[i(24)];t.apply(null,e)}.bind(this))},"flex-scroll-view":function(t){!function(){var i=[e(3)];t.apply(null,i)}.call(this)},"return-top":function(t){e.e(0,function(i){var e=[i(8)];t.apply(null,e)}.bind(this))},"filter-tab":function(t){e.e(1,function(i){var e=[i(16)];t.apply(null,e)}.bind(this))},"app-header":function(t){!function(){var i=[e(4)];t.apply(null,i)}.call(this)}},data:function(){return{techanList:[],condition:{gc_id:1,curpage:1}}},methods:{getTechanList:function(){return this.condition.curpage>this.pageNum?void poemUI.toast("没有更多了"):void $.getJSON(TECHAN_LIST_API,this.condition).done(this.getTechanListDone)},getTechanListDone:function(t){console.log((0,s["default"])(t)),this.pageNum=t.page_total,isEmpty(t.datas.goods_list)||(this.techanList=this.techanList.concat(t.datas.goods_list),this.condition.curpage++,this.$nextTick(function(){}),setTimeout(function(t){return function(){t.$broadcast("refresh")}}(this),50))}},created:function(){},ready:function(){this.getTechanList()},attached:function(){},compiled:function(){},events:{showAll:function(){this.techanList=[],this.condition={},this.condition.curpage=1,this.condition.gc_id=1,this.getTechanList()},scrollEnd:function(t){return this.curpage>this.pageNum?void poemUI.toast("没有更多了"):void this.getTechanList()},conditionChange:function(t){this.condition.curpage=1,this.techanList=[],$.extend(this.condition,t),$.getJSON(TECHAN_LIST_API,this.condition).done(this.getTechanListDone)}}}},113:function(t,i,e){i=t.exports=e(1)(),i.push([t.id,".view{-webkit-transition:all .4s ease;transition:all .4s ease;position:absolute}.view.v-enter{opacity:0;-webkit-transform:translate3d(100px,0,0);transform:translate3d(100px,0,0)}.view.v-leave{opacity:0;-webkit-transform:translate3d(-100px,0,0);transform:translate3d(-100px,0,0)}.goods-img{width:2rem;height:2rem;float:left;margin-right:.3rem}.goods-info{overflow:hidden}.goods-item{background-color:#eee;overflow:auto;resize:horizontal}",""])},215:function(t,i){t.exports="<div class=flex-view> <app-header title=特产列表 right-icon=home-icon right-link=#/index/home></app-header> <flex-scroll-view> <ul id=techan-list-view style=font-size:.3rem> <techan-list-item v-for=\"techan in techanList\" :techan=techan :index=$index></techan-list-item> </ul> </flex-scroll-view> <filter-tab :filter-items=\"[{'word':'工艺品','gc_id':'1063'},{'word':'肉制品','gc_id':'5'},{'word':'奶制品','gc_id':'4'},{'word':'酒类','gc_id':'1064'},{'word':'其他','gc_id':'1065'}]\" :order-items=\"[{'word':'销量','key':'1','order':'2'},{'word':'浏览量','key':'2','order':'2'},{'word':'价格从低到高','order':'1','key':'3'}]\"></filter-tab> </div>"},292:function(t,i,e){var n,o;e(323),n=e(60),o=e(215),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)},323:function(t,i,e){var n=e(113);"string"==typeof n&&(n=[[t.id,n,""]]);e(2)(n,{});n.locals&&(t.exports=n.locals)}});