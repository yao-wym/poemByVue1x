webpackJsonp([25],{54:function(t,i,e){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}var o=e(6),s=n(o);t.exports={replace:!0,components:{"scenic-list-item":function(t){e.e(3,function(i){var e=[i(32)];t.apply(null,e)}.bind(this))},"flex-scroll-view":function(t){!function(){var i=[e(3)];t.apply(null,i)}.call(this)},"return-top":function(t){e.e(0,function(i){var e=[i(8)];t.apply(null,e)}.bind(this))},"filter-tab":function(t){e.e(1,function(i){var e=[i(16)];t.apply(null,e)}.bind(this))},"app-header":function(t){!function(){var i=[e(4)];t.apply(null,i)}.call(this)}},data:function(){return{pageNum:1,curpage:1,scenicList:[],condition:{sc_id:3,page:20}}},methods:{getScenicList:function(){$.getJSON(SCENIC_LIST_API,this.condition).done(this.getScenicListDone)},getScenicListDone:function(t){this.pageNum=t.page_total,this.scenicList=this.scenicList.concat(t.datas.store_list),this.curpage++,this.$nextTick(function(){this.$broadcast("refresh")}),setTimeout(function(t){return function(){t.$broadcast("refresh")}}(this),1e3)}},created:function(){},events:{showAll:function(){this.scenicList=[],this.condition={page:20},this.condition.curpage=1,this.condition.gc_id=3,this.getScenicList()},scrollEnd:function(t){return this.curpage>this.pageNum?void poemUI.toast("没有更多了"):void this.getScenicList()},conditionChange:function(t){t.curpage=1,this.scenicList=[],$.extend(this.condition,t),console.log((0,s["default"])(this.condition)),this.getScenicList()}},ready:function(){this.getScenicList()},attached:function(){},compiled:function(){}}},110:function(t,i,e){i=t.exports=e(1)(),i.push([t.id,".view{-webkit-transition:all .4s ease;transition:all .4s ease;position:absolute}.view.v-enter{opacity:0;-webkit-transform:translate3d(100px,0,0);transform:translate3d(100px,0,0)}.view.v-leave{opacity:0;-webkit-transform:translate3d(-100px,0,0);transform:translate3d(-100px,0,0)}.goods-img{width:2rem;height:2rem;float:left;margin-right:.3rem}.goods-info{overflow:hidden}.goods-item{background-color:#eee;overflow:auto;resize:horizontal}",""])},211:function(t,i){t.exports="<div class=flex-view v-transition> <app-header title=景点列表></app-header> <flex-scroll-view> <ul id=scienic-list-view style=font-size:.3rem> <scenic-list-item v-for=\"scenic in scenicList\" :scenic=scenic :index=$index></scenic-list-item> </ul> </flex-scroll-view> <filter-tab :filter-items=\"[{'word':'景区','gc_id':'1061'},{'word':'娱乐项目','gc_id':'1062'}]\" :order-items=\"[{'word':'评价','key':'store_credit','order':'desc'},{'word':'销量','key':'store_sales','order':'desc'}]\"></filter-tab> </div>"},286:function(t,i,e){var n,o;e(320),n=e(54),o=e(211),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)},320:function(t,i,e){var n=e(110);"string"==typeof n&&(n=[[t.id,n,""]]);e(2)(n,{});n.locals&&(t.exports=n.locals)}});