webpackJsonp([34],{42:function(t,o,e){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}var n=e(6),s=i(n);t.exports={replace:!0,components:{"food-list-item":function(t){e.e(42,function(o){var e=[o(301)];t.apply(null,e)}.bind(this))},"flex-scroll-view":function(t){!function(){var o=[e(3)];t.apply(null,o)}.call(this)},"return-top":function(t){e.e(0,function(o){var e=[o(9)];t.apply(null,e)}.bind(this))},"app-header":function(t){!function(){var o=[e(4)];t.apply(null,o)}.call(this)},"filter-tab":function(t){e.e(1,function(o){var e=[o(17)];t.apply(null,e)}.bind(this))}},data:function(){return{curpage:1,pageNum:1,hotelList:[]}},methods:{getGoodsList:function(){$.getJSON(STORE_GOODS_API,{curpage:this.curpage,store_id:this.$route.params.id,page:20}).done(this.getGoodsListDone)},getGoodsListDone:function(t){console.log((0,s["default"])(t)),isEmpty(t.datas.goods_list)||(this.pageNum=t.page_total,this.hotelList=this.hotelList.concat(t.datas.goods_list),this.curpage++,this.$nextTick(function(){this.$broadcast("refresh")}),setTimeout(function(t){return function(){t.$broadcast("refresh")}}(this),50))}},route:{data:function(t){t.next({curpage:1,pageNum:1,hotelList:[]}),this.getGoodsList()}},events:{scrollEnd:function(t){return this.curpage>this.pageNum?void poemUI.toast("没有更多了"):void this.getGoodsList()},conditionChange:function(t){this.getGoodsList()}},ready:function(){},attached:function(){},compiled:function(){}}},146:function(t,o,e){o=t.exports=e(1)(),o.push([t.id,".view[_v-2da37b7b]{-webkit-transition:all .4s ease;transition:all .4s ease;position:absolute}.view.v-enter[_v-2da37b7b]{opacity:0;-webkit-transform:translate3d(100px,0,0);transform:translate3d(100px,0,0)}.view.v-leave[_v-2da37b7b]{opacity:0;-webkit-transform:translate3d(-100px,0,0);transform:translate3d(-100px,0,0)}.goods-img[_v-2da37b7b]{width:2rem;height:2rem;float:left;margin-right:.3rem}.goods-info[_v-2da37b7b]{overflow:hidden}.goods-item[_v-2da37b7b]{background-color:#fff;overflow:auto;resize:horizontal}",""])},244:function(t,o){t.exports='<div class=flex-view v-transition="" _v-2da37b7b=""> <app-header title=吃喝玩乐 _v-2da37b7b=""></app-header> <flex-scroll-view _v-2da37b7b=""> <ul id=hotel-list-view style=font-size:.3rem _v-2da37b7b=""> <food-list-item v-if="food[\'gc_id\']==1113" v-for="food in hotelList" :food=food :index=$index _v-2da37b7b=""></food-list-item> </ul> </flex-scroll-view> </div>'},270:function(t,o,e){var i,n;e(353),i=e(42),n=e(244),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},353:function(t,o,e){var i=e(146);"string"==typeof i&&(i=[[t.id,i,""]]);e(2)(i,{});i.locals&&(t.exports=i.locals)}});