webpackJsonp([21],{78:function(t,i,e){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}var n=e(5),r=o(n);t.exports={replace:!0,components:{"trip-list-item":function(t){e.e(46,function(i){var e=[i(339)];t.apply(null,e)}.bind(this))},"flex-scroll-view":function(t){!function(){var i=[e(3)];t.apply(null,i)}.call(this)},"return-top":function(t){e.e(0,function(i){var e=[i(8)];t.apply(null,e)}.bind(this))},"filter-tab":function(t){e.e(1,function(i){var e=[i(11)];t.apply(null,e)}.bind(this))},"app-header":function(t){!function(){var i=[e(4)];t.apply(null,i)}.call(this)}},data:function(){return{curpage:1,pageNum:1,tripList:[],storeName:"",condition:{store_id:this.$route.params.id,curpage:1,page:20}}},methods:{getTripList:function(){$.getJSON(STORE_GOODS_API,this.condition).done(this.getTripListDone)},getTripListDone:function(t){console.log((0,r["default"])(t)),isEmpty(t.datas.goods_list)||(this.pageNum=t.page_total,this.tripList=this.tripList.concat(t.datas.goods_list),this.curpage++,this.$nextTick(function(){}),setTimeout(function(t){return function(){t.$broadcast("refresh")}}(this),500))}},created:function(){},ready:function(){},attached:function(){},compiled:function(){},route:{data:function(){this.storeName=this.$route.query.storeName,this.curpage=1,this.tripList=[],this.getTripList()}},events:{scrollEnd:function(t){return this.curpage>this.pageNum?void poemUI.toast("没有更多了"):void this.getTripList()},conditionChange:function(t){this.condition.curpage=1,this.tripList=[],$.extend(this.condition,t),$.getJSON(STORE_GOODS_API,this.condition).done(this.getTripListDone)}}}},136:function(t,i,e){i=t.exports=e(1)(),i.push([t.id,".view{-webkit-transition:all .4s ease;transition:all .4s ease;position:absolute}.view.v-enter{opacity:0;-webkit-transform:translate3d(100px,0,0);transform:translate3d(100px,0,0)}.view.v-leave{opacity:0;-webkit-transform:translate3d(-100px,0,0);transform:translate3d(-100px,0,0)}",""])},240:function(t,i){t.exports=" <div class=flex-view v-transition> <app-header :title=storeName></app-header> <flex-scroll-view> <ul id=trip-list-view style=\"font-size: 0.3rem\"> <trip-list-item v-for=\"trip in tripList\" :trip=trip :index=$index></trip-list-item> </ul> </flex-scroll-view> <filter-tab :filter-items=\"[{'word':'线路套餐','op':'goods_list','gc_id':'1123'},{'word':'旅游套餐','op':'goods_list','gc_id':'1124'}]\" :order-items=\"[{'word':'销量','key':'1','order':'2'},{'word':'浏览量','key':'2','order':'2'},{'word':'价格从低到高','order':'1','key':'3'},{'word':'评价从低到高','order':'1','key':'4'},{'word':'评价从高到低','order':'2','key':'4'}]\"></filter-tab> </div> "},325:function(t,i,e){var o,n;e(358),o=e(78),n=e(240),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},358:function(t,i,e){var o=e(136);"string"==typeof o&&(o=[[t.id,o,""]]);e(2)(o,{});o.locals&&(t.exports=o.locals)}});