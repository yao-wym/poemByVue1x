webpackJsonp([23],{75:function(t,e,i){"use strict";t.exports={components:{"flex-scroll-view":function(t){!function(){var e=[i(3)];t.apply(null,e)}.call(this)},"app-header":function(t){!function(){var e=[i(4)];t.apply(null,e)}.call(this)},"yellow-bottom":function(t){i.e(43,function(e){var i=[e(6)];t.apply(null,i)}.bind(this))}},data:function(){return{articleTitle:"",content:"",pubishTime:"",commentList:[]}},methods:{getDate:function(t){var e=new Date(parseInt(1e3*t));return e.getFullYear()+"-"+e.getMonth()+"-"+e.getDate()},getTravelNote:function(){$.poemGet(TRAVELNOTE_DETAIL_API,{article_id:this.$route.params.id}).done(this.getTravelNoteDone)},getTravelNoteDone:function(t){var e=t.article_detail;this.articleTitle=e.article_title,this.content=e.article_content,this.pubishTime=e.article_publish_time,this.$nextTick(function(){this.$broadcast("refresh")}),setInterval(function(t){return function(){t.$broadcast("refresh")}}(this),2e3)},getCommentList:function(){$.poemGet(TRAVEL_COMMENT_LIST_API,{article_id:this.$route.params.id}).done(this.getCommentListDone)},getCommentListDone:function(t){this.commentList=t}},route:{data:function(){this.getTravelNote(),this.getCommentList()}},ready:function(){}}},183:function(t,e,i){e=t.exports=i(1)(),e.push([t.id,".view[_v-b49b4504]{-webkit-transition:all .4s ease;transition:all .4s ease;position:absolute}.view.v-enter[_v-b49b4504]{opacity:0;-webkit-transform:translate3d(100px,0,0);transform:translate3d(100px,0,0)}.view.v-leave[_v-b49b4504]{opacity:0;-webkit-transform:translate3d(-100px,0,0);transform:translate3d(-100px,0,0)}.container[_v-b49b4504]{padding:.2rem}time[_v-b49b4504]{display:block;width:100%;text-align:right;font-size:.3rem}h1[_v-b49b4504]{font-size:.5rem;font-weight:400;text-align:center}",""])},284:function(t,e){t.exports=' <div class=flex-view v-transition="" _v-b49b4504=""> <app-header :title=title :left-label=leftLabel :right-label=rightLabel :left-link=leftLink :right-link=rightLink :left-icon=leftIcon :right-icon=rightIcon _v-b49b4504=""></app-header> <flex-scroll-view _v-b49b4504=""> <div class=container _v-b49b4504=""> <h1 _v-b49b4504="">{{ articleTitle }}</h1> <time _v-b49b4504="">{{ publishTime }}</time> <img src="{{ travelImg }}" alt="" _v-b49b4504=""> <p _v-b49b4504="">{{{ content }}}</p> <div class=comments _v-b49b4504=""> <ul _v-b49b4504=""> <li style="border-top:1px solid #eeeeee;padding:10px" v-for="comment in commentList" _v-b49b4504=""> <img style=height:50px;width:50px;display:inline-blocks src={{comment.member_avatar}} _v-b49b4504=""> <span _v-b49b4504="">{{comment.member_name}}:</span> {{comment.comment_message}} <div _v-b49b4504="">{{getDate(comment.comment_time)}}</div> </li> </ul> </div> </div> </flex-scroll-view> </div> '},322:function(t,e,i){var n,o;i(405),n=i(75),o=i(284),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)},405:function(t,e,i){var n=i(183);"string"==typeof n&&(n=[[t.id,n,""]]);i(2)(n,{});n.locals&&(t.exports=n.locals)}});