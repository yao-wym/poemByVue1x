webpackJsonp([19],{78:function(e,t){"use strict";e.exports={replace:!0,props:["hotel"]}},144:function(e,t,o){t=e.exports=o(1)(),t.push([e.id,".view[_v-266951f0]{-webkit-transition:all .4s ease;transition:all .4s ease;position:absolute}.view.v-enter[_v-266951f0]{opacity:0;-webkit-transform:translate3d(100px,0,0);transform:translate3d(100px,0,0)}.view.v-leave[_v-266951f0]{opacity:0;-webkit-transform:translate3d(-100px,0,0);transform:translate3d(-100px,0,0)}.hotel-item[_v-266951f0]{height:2.2rem;color:#a0a0a0;background-color:#fff;overflow:auto;resize:horizontal;padding:.1rem;border-bottom:1px solid #dbdbdb}.hotel-item .hotel-img[_v-266951f0]{width:2.3rem;height:2.3rem;float:left;margin-right:.3rem}.hotel-item .hotel-info[_v-266951f0]{overflow:hidden;height:2.3rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.hotel-item p[_v-266951f0],.hotel-item span[_v-266951f0]{color:#a0a0a0;margin:0}.hotel-item .hotel-name[_v-266951f0]{color:#a0a0a0;font-size:.4rem;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;overflow:hidden}",""])},242:function(e,t){e.exports='<li class=hotel-item _v-266951f0=""> <a style=overflow:hidden v-link="{name:\'hoteldetail\',params:{hotelId:hotel.store_id}}" _v-266951f0=""> <img v-bind:src=hotel.store_label class=hotel-img _v-266951f0=""> <div class=hotel-info _v-266951f0=""> <div class=hotel-name _v-266951f0=""> <p style=color:#505050 _v-266951f0="">{{hotel.store_name}}</p> <p style=margin-top:4px _v-266951f0=""> <span v-if=hotel.store_star style=color:red _v-266951f0="">{{hotel.store_star}}分</span> <span style=color:red v-else="" _v-266951f0="">5分</span> </p> </div> <div style=margin-top:0 _v-266951f0=""> <div style=float:left;font-size:.35rem _v-266951f0=""> <p _v-266951f0=""> <span style=color:green v-if=hotel.eval_num _v-266951f0="">{{hotel.eval_num}}条评论</span> <span style=color:green v-else="" _v-266951f0="">暂无评价</span> </p> </div> <div style=float:right;margin-right:10px v-if=hotel.min_price _v-266951f0=""> <span style=font-size:.3rem;color:#ff4500 _v-266951f0="">¥</span> <span style=font-size:.45rem;color:#ff4500 _v-266951f0="">{{hotel.min_price}}</span> <span style=color:#ff4500 _v-266951f0="">起</span> </div> <div style=float:right;margin-right:10px v-else="" _v-266951f0=""> <span style=font-size:.3rem;color:#ff4500 _v-266951f0="">暂无报价</span> </div> </div> <p style=margin-top:10px _v-266951f0="">{{hotel.store_address}}</p> </div> </a> </li>'},302:function(e,t,o){var l,i;o(351),l=o(78),i=o(242),e.exports=l||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=i)},351:function(e,t,o){var l=o(144);"string"==typeof l&&(l=[[e.id,l,""]]);o(2)(l,{});l.locals&&(e.exports=l.locals)}});