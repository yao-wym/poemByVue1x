webpackJsonp([26],{52:function(t,e,i){"use strict";t.exports={components:{"flex-scroll-view":function(t){!function(){var e=[i(3)];t.apply(null,e)}.call(this)},"app-header":function(t){!function(){var e=[i(4)];t.apply(null,e)}.call(this)},"yellow-bottom":function(t){i.e(37,function(e){var i=[e(5)];t.apply(null,i)}.bind(this))}},data:function(){return{title:"景点详情",scenicImg:"",mapImg:"",scenicDetail:"",notice:"",transportation:""}},methods:{initPage:function(t){console.log(t),this.scenicDetail=t.store_info.store_description,setTimeout(function(t){return function(){t.$broadcast("refresh")}}(this),500)}},route:{data:function(){$.poemGet(SCENIC_DETAIL_API,{store_id:this.$route.params.id}).done(this.initPage)}}}},142:function(t,e,i){e=t.exports=i(1)(),e.push([t.id,".view[_v-2d181c62]{-webkit-transition:all .4s ease;transition:all .4s ease;position:absolute}.view.v-enter[_v-2d181c62]{opacity:0;-webkit-transform:translate3d(100px,0,0);transform:translate3d(100px,0,0)}.view.v-leave[_v-2d181c62]{opacity:0;-webkit-transform:translate3d(-100px,0,0);transform:translate3d(-100px,0,0)}.section[_v-2d181c62]{margin:15px 0;background:#fff;padding:.4rem 0}.section h2[_v-2d181c62]{font-size:.4rem;font-weight:400;margin:0 15px;padding:.1rem .2rem;border-left:.2rem solid #55b66f}.section p[_v-2d181c62]{padding:.2rem;line-height:170%}.section img[_v-2d181c62]{width:100%;display:block}",""])},242:function(t,e){t.exports='<div class=flex-view v-transition="" _v-2d181c62=""> <app-header :title=title :left-label=leftLabel :right-label=rightLabel :left-link=leftLink :right-link=rightLink :left-icon=leftIcon :right-icon=rightIcon _v-2d181c62=""></app-header> <flex-scroll-view _v-2d181c62=""> <div class=section _v-2d181c62=""> <h2 _v-2d181c62="">景点详情</h2> <img :src="{{ scenicImg }}" alt="" _v-2d181c62=""> <p _v-2d181c62="">{{ scenicDetail }}</p> </div> <div class=section _v-2d181c62=""> <h2 _v-2d181c62="">温馨提示</h2> <p _v-2d181c62="">{{ notice }}</p> </div> <div class=section _v-2d181c62=""> <h2 _v-2d181c62="">交通与到达</h2> <img :src="{{ mapImg }}" alt="" _v-2d181c62=""> <p _v-2d181c62="">{{ transportation }}</p> </div> </flex-scroll-view> </div>'},284:function(t,e,i){var n,o;i(352),n=i(52),o=i(242),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)},352:function(t,e,i){var n=i(142);"string"==typeof n&&(n=[[t.id,n,""]]);i(2)(n,{});n.locals&&(t.exports=n.locals)}});