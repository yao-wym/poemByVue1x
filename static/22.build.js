webpackJsonp([22],{47:function(t,e,i){"use strict";t.exports={components:{"flex-scroll-view":function(t){!function(){var e=[i(3)];t.apply(null,e)}.call(this)},"app-header":function(t){!function(){var e=[i(4)];t.apply(null,e)}.call(this)},"yellow-bottom":function(t){!function(){var e=[i(5)];t.apply(null,e)}.call(this)}},data:function(){var t=[];return{title:"积分商城",points:null,itemList:t}},methods:{getPointsStoreList:function(){$.poemPost(POINTS_STORE_API,{order:"asc",curpage:this.curpage,key:"60669c1838e2613754ea9a466d50b89f"}).done(this.getPointsStoreListDone)},getPointsStoreListDone:function(t){console.log(t),this.itemList=this.itemList.concat(t)},buy:function(t){$.poemPost(POINTS_BUY_API,{key:"60669c1838e2613754ea9a466d50b89f",pgoods_id:t,quantity:1}).done(this.buyDone)},buyDone:function(t){return t.error?void alert(t.error):alert("兑换成功")}},ready:function(){var t=this;$.poemPost(USER_INFO_API,{key:"60669c1838e2613754ea9a466d50b89f"}).done(function(e){t.points=e.member_info.point}),this.getPointsStoreList()}}},153:function(t,e,i){e=t.exports=i(1)(),e.push([t.id,".view[_v-c24fbc48]{-webkit-transition:all .4s ease;transition:all .4s ease;position:absolute}.view.v-enter[_v-c24fbc48]{opacity:0;-webkit-transform:translate3d(100px,0,0);transform:translate3d(100px,0,0)}.view.v-leave[_v-c24fbc48]{opacity:0;-webkit-transform:translate3d(-100px,0,0);transform:translate3d(-100px,0,0)}.owned-points[_v-c24fbc48]{color:red;background:#fff;padding:.4rem;margin:0}.item-list[_v-c24fbc48]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.item[_v-c24fbc48]{width:50%;padding:.4rem}.img-wrapper[_v-c24fbc48]{padding:.8rem .4rem;border:1px solid #dbdbdb;background:#fff}.img-wrapper img[_v-c24fbc48]{width:100%}.score-price[_v-c24fbc48]{color:red}button[_v-c24fbc48]{background:#ccc;color:#fff;width:1.5rem;height:.5rem;font-size:.3rem;border:none;border-radius:10px;vertical-align:middle;float:right}button.active[_v-c24fbc48]{background:#55b66f}",""])},245:function(t,e){t.exports='<div class=flex-view v-transition="" _v-c24fbc48=""> <app-header :title=title :left-label=leftLabel :right-label=rightLabel :left-link=leftLink :right-link=rightLink :left-icon=leftIcon :right-icon=rightIcon _v-c24fbc48=""></app-header> <flex-scroll-view _v-c24fbc48=""> <p class=owned-points _v-c24fbc48="">可用积分 {{ points }}</p> <div class=item-list _v-c24fbc48=""> <div class=item v-for="item in itemList" _v-c24fbc48=""> <div class=img-wrapper _v-c24fbc48=""><img src={{item.pgoods_image_small}} alt="" _v-c24fbc48=""></div> <p _v-c24fbc48="">{{item.pgoods_name}}</p> <p _v-c24fbc48=""><span class=score-price _v-c24fbc48="">{{item.pgoods_points}}</span>积分<button @click=buy(item.pgoods_id) :class="{\'active\': item.pgoods_show}" _v-c24fbc48="">立即兑换</button></p> </div> </div> </flex-scroll-view> </div>'},264:function(t,e,i){var o,c;i(348),o=i(47),c=i(245),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),c&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=c)},348:function(t,e,i){var o=i(153);"string"==typeof o&&(o=[[t.id,o,""]]);i(2)(o,{});o.locals&&(t.exports=o.locals)}});