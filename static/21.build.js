webpackJsonp([21],{61:function(t,e,i){"use strict";t.exports={components:{"flex-scroll-view":function(t){!function(){var e=[i(3)];t.apply(null,e)}.call(this)},"app-header":function(t){!function(){var e=[i(4)];t.apply(null,e)}.call(this)},"yellow-bottom":function(t){i.e(37,function(e){var i=[e(5)];t.apply(null,i)}.bind(this))}},data:function(){return{articleTitle:"",content:"",pubishTime:""}},methods:{getTravelNote:function(){$.poemGet(TRAVELNOTE_DETAIL_API,{article_id:this.$route.params.id}).done(this.getTravelNoteDone)},getTravelNoteDone:function(t){var e=t.article_detail;this.articleTitle=e.article_title,this.content=e.article_content,this.pubishTime=e.article_publish_time,this.$nextTick(function(){this.$broadcast("refresh")})}},ready:function(){this.getTravelNote()}}},165:function(t,e,i){e=t.exports=i(1)(),e.push([t.id,".view[_v-f1e6dc6a]{-webkit-transition:all .4s ease;transition:all .4s ease;position:absolute}.view.v-enter[_v-f1e6dc6a]{opacity:0;-webkit-transform:translate3d(100px,0,0);transform:translate3d(100px,0,0)}.view.v-leave[_v-f1e6dc6a]{opacity:0;-webkit-transform:translate3d(-100px,0,0);transform:translate3d(-100px,0,0)}.container[_v-f1e6dc6a]{padding:.2rem}time[_v-f1e6dc6a]{display:block;width:100%;text-align:right;font-size:.3rem}h1[_v-f1e6dc6a]{font-size:.5rem;font-weight:400;text-align:center}",""])},265:function(t,e){t.exports='<div class=flex-view v-transition="" _v-f1e6dc6a=""> <app-header :title=title :left-label=leftLabel :right-label=rightLabel :left-link=leftLink :right-link=rightLink :left-icon=leftIcon :right-icon=rightIcon _v-f1e6dc6a=""></app-header> <flex-scroll-view _v-f1e6dc6a=""> <div class=container _v-f1e6dc6a=""> <h1 _v-f1e6dc6a="">{{ articleTitle }}</h1> <time _v-f1e6dc6a="">{{ publishTime }}</time> <img src="{{ travelImg }}" alt="" _v-f1e6dc6a=""> <p _v-f1e6dc6a="">{{{ content }}}</p> <div class=comments _v-f1e6dc6a=""></div> </div> </flex-scroll-view> </div>'},293:function(t,e,i){var a,n;i(375),a=i(61),n=i(265),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},375:function(t,e,i){var a=i(165);"string"==typeof a&&(a=[[t.id,a,""]]);i(2)(a,{});a.locals&&(t.exports=a.locals)}});