webpackJsonp([27],{51:function(e,t,o){"use strict";e.exports={components:{"flex-scroll-view":function(e){!function(){var t=[o(3)];e.apply(null,t)}.call(this)},"app-header":function(e){!function(){var t=[o(4)];e.apply(null,t)}.call(this)},"yellow-bottom":function(e){o.e(37,function(t){var o=[t(5)];e.apply(null,o)}.bind(this))}},route:{data:function(){this.address=poem.getObj("address")}},data:function(){var e=[];return{address:poem.getObj("address"),title:"积分商城",points:null,itemList:e}},methods:{getPointsStoreList:function(){$.poemPost(POINTS_STORE_API,{order:"asc",curpage:this.curpage,key:poem.getItem("key")}).done(this.getPointsStoreListDone)},getPointsStoreListDone:function(e){console.log(e),this.itemList=this.itemList.concat(e),setTimeout(function(e){return function(){e.$broadcast("refresh")}}(this),50)},buy:function(e){var t=confirm("使用默认地址——收货人："+this.address.true_name+"联系电话："+this.address.mob_phone+"详细地址："+this.address.address+"——您也可以点击取消选择其他地址购买");1==t?$.poemPost(POINTS_BUY_API,{key:poem.getItem("key"),pgoods_id:e,quantity:1}).done(this.buyDone):this.$route.router.go({path:"/AddressList?action=chooseAddr&refer="+location.hash})},buyDone:function(e){return e.error?void poemUI.toast(e.error):void poemUI.toast("兑换成功")}},ready:function(){var e=this;$.poemPost(USER_INFO_API,{key:poem.getItem("key")}).done(function(t){e.points=t.member_info.point}),this.getPointsStoreList()}}},150:function(e,t,o){t=e.exports=o(1)(),t.push([e.id,".view[_v-2e7711a2]{-webkit-transition:all .4s ease;transition:all .4s ease;position:absolute}.view.v-enter[_v-2e7711a2]{opacity:0;-webkit-transform:translate3d(100px,0,0);transform:translate3d(100px,0,0)}.view.v-leave[_v-2e7711a2]{opacity:0;-webkit-transform:translate3d(-100px,0,0);transform:translate3d(-100px,0,0)}.owned-points[_v-2e7711a2]{color:red;background:#fff;padding:.2rem;margin:0}.item-list[_v-2e7711a2]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.item[_v-2e7711a2]{width:45%;padding:.2rem}.img-wrapper[_v-2e7711a2]{border:1px solid #dbdbdb;background:#fff}.img-wrapper img[_v-2e7711a2]{width:4.5rem;height:4.5rem}.score-price[_v-2e7711a2]{color:red}button[_v-2e7711a2]{background:#ccc;color:#fff;width:1.5rem;height:.5rem;font-size:.3rem;border:none;border-radius:10px;vertical-align:middle;float:right}button.active[_v-2e7711a2]{background:#55b66f}",""])},250:function(e,t){e.exports='<div class=flex-view v-transition="" _v-2e7711a2=""> <app-header left-link=#/index/ucenter :title=title :left-label=leftLabel :right-label=rightLabel :right-link=rightLink :left-icon=leftIcon :right-icon=rightIcon _v-2e7711a2=""></app-header> <flex-scroll-view _v-2e7711a2=""> <p class=owned-points _v-2e7711a2="">可用积分 {{ points }}</p> <div class=item-list _v-2e7711a2=""> <div class=item v-for="item in itemList" _v-2e7711a2=""> <div class=img-wrapper _v-2e7711a2=""><img src={{item.pgoods_image_small}} alt="" _v-2e7711a2=""></div> <p _v-2e7711a2="">{{item.pgoods_name}}</p> <p _v-2e7711a2=""><span class=score-price _v-2e7711a2="">{{item.pgoods_points}}</span>积分<button @click=buy(item.pgoods_id) :class="{\'active\': item.pgoods_show}" _v-2e7711a2="">立即兑换</button></p> </div> </div> </flex-scroll-view> </div>'},283:function(e,t,o){var i,s;o(360),i=o(51),s=o(250),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},360:function(e,t,o){var i=o(150);"string"==typeof i&&(i=[[e.id,i,""]]);o(2)(i,{});i.locals&&(e.exports=i.locals)}});