webpackJsonp([40],{75:function(o,e,t){"use strict";function d(o){return o&&o.__esModule?o:{"default":o}}var s=t(6),i=d(s);o.exports={replace:!0,props:["food"],methods:{buyGoods:function(){var o={scenicName:this.food.storeName,goodsName:this.food.goods_name,goodsPrice:this.food.goods_price,goodsId:this.food.goods_id};this.$route.router.go({path:"/ScenicOrderForm?goodsInfo="+(0,i["default"])(o)})}}}},143:function(o,e,t){e=o.exports=t(1)(),e.push([o.id,".view[_v-12216cd4]{-webkit-transition:all .4s ease;transition:all .4s ease;position:absolute}.view.v-enter[_v-12216cd4]{opacity:0;-webkit-transform:translate3d(100px,0,0);transform:translate3d(100px,0,0)}.view.v-leave[_v-12216cd4]{opacity:0;-webkit-transform:translate3d(-100px,0,0);transform:translate3d(-100px,0,0)}.goods-item[_v-12216cd4]{border-bottom:1px solid #ccc;resize:horizontal;overflow:auto}.goods-item .goods-img[_v-12216cd4]{width:2rem;height:2rem;margin-right:.3rem}.goods-item .goods-info[_v-12216cd4]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;overflow:hidden}.goods-item button[_v-12216cd4]{background-color:#f7b52b;border:none;font-size:.3rem;border-radius:5px;padding:5px 10px}",""])},244:function(o,e){o.exports='<li class=goods-item style="padding:10px 20px" _v-12216cd4=""> <a style=overflow:hidden;display:flex @click=buyGoods _v-12216cd4=""> <img v-bind:src=food.goods_image_url class=goods-img _v-12216cd4=""> <div class=goods-info _v-12216cd4=""> <div class=goods-name _v-12216cd4="">{{food.goods_name}}</div> <div style=margin-top:10px;color:#ff4500 class=goods-name _v-12216cd4="">{{food.evaluation_good_star}}分</div> <div style=margin-top:10px;color:#28ad28 class=goods-name _v-12216cd4="">{{food.evaluation_count}}人评价</div> <div style=margin-top:10px class=goods-name _v-12216cd4="">{{food.goods_jingle}}</div> </div> <div _v-12216cd4=""> <div style=color:red;font-size:.4rem _v-12216cd4="">¥{{food.goods_price}}</div> <button style=float:right;margin-top:50px;color:#fff _v-12216cd4="">预定</button> </div> </a> </li>'},306:function(o,e,t){var d,s;t(356),d=t(75),s=t(244),o.exports=d||{},o.exports.__esModule&&(o.exports=o.exports["default"]),s&&(("function"==typeof o.exports?o.exports.options||(o.exports.options={}):o.exports).template=s)},356:function(o,e,t){var d=t(143);"string"==typeof d&&(d=[[o.id,d,""]]);t(2)(d,{});d.locals&&(o.exports=d.locals)}});