webpackJsonp([23],{60:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}var o=n(6),a=i(o);t.exports={replace:!0,components:{"techan-list-item":function(t){n.e(39,function(e){var n=[e(33)];t.apply(null,n)}.bind(this))},"list-view":function(t){n.e(2,function(e){var n=[e(24)];t.apply(null,n)}.bind(this))},"flex-scroll-view":function(t){!function(){var e=[n(3)];t.apply(null,e)}.call(this)},"return-top":function(t){n.e(0,function(e){var n=[e(8)];t.apply(null,n)}.bind(this))},"filter-tab":function(t){n.e(1,function(e){var n=[e(16)];t.apply(null,n)}.bind(this))},"app-header":function(t){!function(){var e=[n(4)];t.apply(null,e)}.call(this)}},data:function(){return{curpage:1,pageNum:1,techanList:[],storeName:""}},methods:{getTechanList:function(){$.getJSON(STORE_GOODS_API,{store_id:this.$route.params.id,page:10,curpage:this.curpage}).done(this.getTechanListDone)},getTechanListDone:function(t){console.log((0,a["default"])(t)),isEmpty(t.datas.goods_list)||(this.pageNum=t.page_total,this.techanList=this.techanList.concat(t.datas.goods_list),this.curpage++,this.$nextTick(function(){}),setTimeout(function(t){return function(){t.$broadcast("refresh")}}(this),500))}},created:function(){},ready:function(){},attached:function(){},compiled:function(){},route:{data:function(){this.storeName=this.$route.query.storeName,this.getTechanList()}},events:{scrollEnd:function(t){return this.curpage>this.pageNum?void poemUI.toast("没有更多了"):void this.getTechanList()}}}},112:function(t,e,n){e=t.exports=n(1)(),e.push([t.id,".view{-webkit-transition:all .4s ease;transition:all .4s ease;position:absolute}.view.v-enter{opacity:0;-webkit-transform:translate3d(100px,0,0);transform:translate3d(100px,0,0)}.view.v-leave{opacity:0;-webkit-transform:translate3d(-100px,0,0);transform:translate3d(-100px,0,0)}.goods-img{width:2rem;height:2rem;float:left;margin-right:.3rem}.goods-info{overflow:hidden}.goods-item{background-color:#eee;overflow:auto;resize:horizontal}",""])},216:function(t,e){t.exports='<div class=flex-view v-transition> <app-header :title=storeName></app-header> <flex-scroll-view> <ul id=techan-list-view style=font-size:.3rem> <techan-list-item v-for="techan in techanList" :techan=techan :index=$index></techan-list-item> </ul> </flex-scroll-view> </div>'},295:function(t,e,n){var i,o;n(325),i=n(60),o=n(216),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)},325:function(t,e,n){var i=n(112);"string"==typeof i&&(i=[[t.id,i,""]]);n(2)(i,{});i.locals&&(t.exports=i.locals)}});