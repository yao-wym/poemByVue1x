webpackJsonp([16],{57:function(e,t,i){"use strict";e.exports={components:{"flex-scroll-view":function(e){!function(){var t=[i(3)];e.apply(null,t)}.call(this)},"app-header":function(e){!function(){var t=[i(4)];e.apply(null,t)}.call(this)},"yellow-bottom":function(e){!function(){var t=[i(5)];e.apply(null,t)}.call(this)}},data:function(){return{title:"游记",xid:"0988776",curpage:1,articleList:[]}},methods:{getTravelNoteList:function(){$.poemGet(TRAVELNOTE_LIST_API,{order:"asc",page:10,curpage:this.curpage,class_id:this.$route.params.id}).done(this.getTravelNoteListDone)},getTravelNoteListDone:function(e){this.articleList=this.articleList.concat(e.article_list),this.curpage++,this.$nextTick(function(){this.$broadcast("refresh")}),setTimeout(function(e){return function(){e.$broadcast("refresh")}}(this),1e3)}},ready:function(){this.getTravelNoteList()}}},141:function(e,t,i){t=e.exports=i(1)(),t.push([e.id,".view[_v-1c5e103c]{-webkit-transition:all .4s ease;transition:all .4s ease;position:absolute}.view.v-enter[_v-1c5e103c]{opacity:0;-webkit-transform:translate3d(100px,0,0);transform:translate3d(100px,0,0)}.view.v-leave[_v-1c5e103c]{opacity:0;-webkit-transform:translate3d(-100px,0,0);transform:translate3d(-100px,0,0)}.article a[_v-1c5e103c]{display:block;overflow:hidden;padding:.2rem;border-bottom:1px solid #dbdbdb}.article-img[_v-1c5e103c]{float:left;width:3rem;height:2.5rem;margin-right:.4rem}.article-img img[_v-1c5e103c]{width:100%}.article-detail h2[_v-1c5e103c]{color:#55b66f;font-size:.33rem;margin-top:0;font-weight:400}.article-detail p[_v-1c5e103c]{font-size:.3rem}.info[_v-1c5e103c]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}",""])},233:function(e,t){e.exports='<div class=flex-view v-transition="" _v-1c5e103c=""> <flex-scroll-view _v-1c5e103c=""> <app-header :title=title :left-label=leftLabel :right-label=rightLabel :left-link=leftLink :right-link=rightLink :left-icon=leftIcon :right-icon=rightIcon _v-1c5e103c=""></app-header> <ul _v-1c5e103c=""> <li class=article v-for="article in articleList" _v-1c5e103c=""> <a href="#/TravelNote/{{ article.article_id }}" _v-1c5e103c=""> <div class=article-img _v-1c5e103c=""> <img src={{article.article_image}} alt="" _v-1c5e103c=""> </div> <div class=article-detail _v-1c5e103c=""> <h2 _v-1c5e103c="">{{ article.article_title }}</h2> <p _v-1c5e103c="">{{ article.article_abstract }}代替代替代替代替代替代替代替代替代替代替代替代替代替代替代替代替代替代替代替替代替代替代替</p> <div class=info _v-1c5e103c=""> <div _v-1c5e103c="">阅读量：{{ article.article_click }}</div> <div _v-1c5e103c="">评论：{{ article.article_comment_flag }}</div> <time _v-1c5e103c="">{{ article.article_publish_time }}</time> </div> </div> </a> </li> </ul> </flex-scroll-view></div>'},274:function(e,t,i){var c,l;i(336),c=i(57),l=i(233),e.exports=c||{},e.exports.__esModule&&(e.exports=e.exports["default"]),l&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=l)},336:function(e,t,i){var c=i(141);"string"==typeof c&&(c=[[e.id,c,""]]);i(2)(c,{});c.locals&&(e.exports=c.locals)}});