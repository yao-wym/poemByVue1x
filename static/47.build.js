webpackJsonp([47],{94:function(e,i){"use strict";e.exports={replace:!0,props:["scenic"]}},145:function(e,i,s){i=e.exports=s(1)(),i.push([e.id,".view{-webkit-transition:all .4s ease;transition:all .4s ease;position:absolute}.view.v-enter{opacity:0;-webkit-transform:translate3d(100px,0,0);transform:translate3d(100px,0,0)}.view.v-leave{opacity:0;-webkit-transform:translate3d(-100px,0,0);transform:translate3d(-100px,0,0)}.scenic-item{height:2.2 rm;color:#a0a0a0;background-color:#fff;overflow:auto;resize:horizontal;padding:.2rem;border-bottom:1px solid #dbdbdb}.scenic-item .scenic-img{width:2.3rem;height:2.3rem;float:left;margin-right:.3rem}.scenic-item .scenic-info{overflow:hidden;height:2.3rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.scenic-item p,.scenic-item span{color:#a0a0a0;margin:0}.scenic-item .scenic-name{color:#a0a0a0;font-size:.35rem;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}",""])},247:function(e,i){e.exports="<li class=scenic-item> <a style=overflow:hidden v-link=\"{path:'ScenicDetail/'+scenic.store_id}\"> <img v-bind:src=scenic.store_label class=scenic-img> <div class=scenic-info> <div class=scenic-name> <p style=color:#888>{{scenic.store_name}}</p> </div> <div class=scenic-name> <p style=margin-top:10px> <span style=color:red>{{scenic.store_star}}分</span> </p> </div> <div style=margin-top:10px> <p style=float:left;font-size:.3rem> <span style=color:#50b464 v-if=scenic.eval_num>共有{{scenic.eval_num}}人评价</span> <span style=color:#50b464 v-else>暂无评价</span> </p> <div v-if=scenic.min_price style=float:right;margin-right:10px> <span style=font-size:.4rem;color:#ff4500>¥</span> <span style=font-size:.4rem;color:#ff4500>{{scenic.min_price}}</span> <span>起</span> </div> <div v-else style=float:right;margin-right:10px> <span style=font-size:.4rem;color:red>暂无报价</span> </div> </div> <div class=scenic-name> <div style=float:left;font-size:.3rem> <p style=margin-top:10px>{{scenic.store_address}}</p> </div> </div> </div> </a> </li>"},328:function(e,i,s){var t,n;s(361),t=s(94),n=s(247),e.exports=t||{},e.exports.__esModule&&(e.exports=e.exports["default"]),n&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=n)},361:function(e,i,s){var t=s(145);"string"==typeof t&&(t=[[e.id,t,""]]);s(2)(t,{});t.locals&&(e.exports=t.locals)}});