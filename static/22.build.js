webpackJsonp([22],{76:function(t,e,i){"use strict";t.exports={components:{"flex-scroll-view":function(t){!function(){var e=[i(3)];t.apply(null,e)}.call(this)},"app-header":function(t){!function(){var e=[i(4)];t.apply(null,e)}.call(this)},"yellow-bottom":function(t){i.e(43,function(e){var i=[e(6)];t.apply(null,i)}.bind(this))},banner:function(t){!function(){var e=[i(10)];t.apply(null,e)}.call(this)}},data:function(){return{title:"游记",xid:"0988776",curpage:1,articleList:[],articleImgArr:[]}},methods:{getTravelNoteList:function(){$.poemGet(TRAVELNOTE_LIST_API,{order:"asc",page:100,curpage:this.curpage,class_id:this.$route.params.id}).done(this.getTravelNoteListDone)},getTravelNoteListDone:function(t){this.articleList=this.articleList.concat(t.article_list),this.curpage++,setTimeout(function(t){return function(){t.$broadcast("refresh")}}(this),500)},getTripArticleSlide:function(){$.poemGet(ARTICLE_SLIDE_API).done(this.getArticleSlideDone)},getArticleSlideDone:function(t){this.articleImgArr=t[0].adv_list.item,setTimeout(function(t){return function(){t.$broadcast("refresh")}}(this),500)}},ready:function(){this.getTravelNoteList(),this.getTripArticleSlide()}}},134:function(t,e,i){e=t.exports=i(1)(),e.push([t.id,".view{-webkit-transition:all .4s ease;transition:all .4s ease;position:absolute}.view.v-enter{opacity:0;-webkit-transform:translate3d(100px,0,0);transform:translate3d(100px,0,0)}.view.v-leave{opacity:0;-webkit-transform:translate3d(-100px,0,0);transform:translate3d(-100px,0,0)}.article a{display:block;overflow:hidden;padding:.2rem;border-bottom:1px solid #dbdbdb}.article-img{float:left;width:3rem;height:2.5rem;margin-right:.4rem}.article-img img{width:100%;height:100%}.article-detail h2{color:#55b66f;font-size:.33rem;margin-top:0;font-weight:400;margin-bottom:2px}.article-detail p{overflow:hidden;font-size:.3rem;margin:15px 0}.info{display:-webkit-box;display:-ms-flexbox;display:flex;font-size:.25rem}",""])},238:function(t,e){t.exports=' <div class=flex-view v-transition> <flex-scroll-view> <app-header :title=title :left-label=leftLabel :right-label=rightLabel :left-link=leftLink :right-link=rightLink :left-icon=leftIcon :right-icon=rightIcon></app-header> <div style="height:auto;width: 100%"> <banner banner-height=3rem :img-item-arr=articleImgArr></banner> </div> <ul style=margin-top:50px> <li class=article v-for="article in articleList"> <a href="#/TravelNote/{{ article.article_id }}"> <div class=article-img> <img src={{article.article_image}} alt=""> </div> <div class=article-detail> <h2>{{ article.article_title }}</h2> <p style=height:1.1rem>{{ article.article_abstract }}</p> <div style="font-size: .3rem" class=info> <div>阅读量：{{ article.article_click }}</div> <div style="margin:0 20px" div>评论：{{ article.article_comment_flag }}</div> <time>{{ (new Date(article.article_publish_time*1000)).getFullYear()+\'-\'+(new Date(article.article_publish_time*1000)).getMonth()+\'-\'+ (new Date(article.article_publish_time*1000)).getDate() }}</time> </div> </div> </a> </li> </ul> </flex-scroll-view></div> '},323:function(t,e,i){var l,r;i(356),l=i(76),r=i(238),t.exports=l||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)},356:function(t,e,i){var l=i(134);"string"==typeof l&&(l=[[t.id,l,""]]);i(2)(l,{});l.locals&&(t.exports=l.locals)}});