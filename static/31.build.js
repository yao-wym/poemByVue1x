webpackJsonp([31],{57:function(e,t,i){"use strict";e.exports={components:{"flex-scroll-view":function(e){!function(){var t=[i(3)];e.apply(null,t)}.call(this)},"app-header":function(e){!function(){var t=[i(4)];e.apply(null,t)}.call(this)}},data:function(){return{title:"",points:90,comments:[],curpage:1,filtedComments:[],activeA:1,activeB:0,activeC:0}},methods:{getCommentsList:function(){$.poemPost(COMMENT_LIST_API,{order:"asc",page:10,curpage:this.curpage,goods_id:this.$route.params.id}).done(this.getCommentListDone)},getCommentListDone:function(e){this.comments=this.comments.concat(e),this.filtedComments=this.comments,console.log(this.comments),this.curpage++,this.$nextTick(function(){this.$broadcast("refresh")})},filterComments:function(e){this.filtedComments=[];var t=this.comments;if(0==e){for(var i=0;i<t.length;i++)t[i].geval_scores>=4&&this.filtedComments.push(t[i]);this.activeA=1,this.activeB=0,this.activeC=0}if(1==e){for(var i=0;i<t.length;i++)3==t[i].geval_scores&&this.filtedComments.push(t[i]);this.activeA=0,this.activeB=1,this.activeC=0}if(2==e){for(var i=0;i<t.length;i++)t[i].geval_scores<=2&&this.filtedComments.push(t[i]);this.activeA=0,this.activeB=0,this.activeC=1}}},ready:function(){this.getCommentsList()}}},171:function(e,t,i){t=e.exports=i(1)(),t.push([e.id,".view[_v-e73ed50e]{-webkit-transition:all .4s ease;transition:all .4s ease;position:absolute}.view.v-enter[_v-e73ed50e]{opacity:0;-webkit-transform:translate3d(100px,0,0);transform:translate3d(100px,0,0)}.view.v-leave[_v-e73ed50e]{opacity:0;-webkit-transform:translate3d(-100px,0,0);transform:translate3d(-100px,0,0)}.comments[_v-e73ed50e]{padding:.2rem 0}.comments-sg[_v-e73ed50e]{padding:.2rem;border-bottom:1px solid #dbdbdb}.user-info[_v-e73ed50e]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.avatar[_v-e73ed50e]{width:1.5rem;height:1.5rem;border-radius:50%;border:1px solid #dbdbdb;margin-right:.4rem}.order-info[_v-e73ed50e]{color:#ccc;font-size:.3rem}.comments-img[_v-e73ed50e],.order-info[_v-e73ed50e]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.comments-img[_v-e73ed50e]{margin:15px 0}.comments-img li[_v-e73ed50e]{width:1.5rem;height:1.5rem;border-radius:.3rem;overflow:hidden;margin-right:.3rem}.comments-img li img[_v-e73ed50e]{width:100%}.tab-header[_v-e73ed50e]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:1.5rem;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;border-bottom:1px solid #dbdbdb}.tab-header li[_v-e73ed50e]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;text-align:center;font-size:.4rem;border-right:3px solid #55b66f;line-height:270%}.tab-header li[_v-e73ed50e]:last-child{border-right:none}.tab-header li.active[_v-e73ed50e]{border-bottom:10px solid #55b66f}",""])},269:function(e,t){e.exports='<div class=flex-view v-transition="" _v-e73ed50e=""> <app-header title=评论列表 :left-label=leftLabel :right-label=rightLabel :left-link=leftLink :right-link=rightLink :left-icon=leftIcon :right-icon=rightIcon _v-e73ed50e=""></app-header> <flex-scroll-view _v-e73ed50e=""> <ul class=tab-header _v-e73ed50e=""> <li :class="{\'active\': activeA}" @click=filterComments(0) _v-e73ed50e="">好评</li> <li :class="{\'active\': activeB}" @click=filterComments(1) _v-e73ed50e="">中评</li> <li :class="{\'active\': activeC}" @click=filterComments(2) _v-e73ed50e="">差评</li> </ul> <div class=comments _v-e73ed50e=""> <ul _v-e73ed50e=""> <li class=comments-sg v-for="comment in filtedComments" _v-e73ed50e=""> <div class=user-info _v-e73ed50e=""> <img class=avatar src="{{ comment.geval_useravatar }}" alt="" _v-e73ed50e=""> <p _v-e73ed50e="">{{ comment.geval_username }}</p> </div> <p _v-e73ed50e="">{{ comment.geval_content }}</p> <div class=order-info _v-e73ed50e=""> <time _v-e73ed50e="">{{ comment.geval_addtime }}</time> </div> <ul class=comments-img _v-e73ed50e=""> <li v-for="img in comment.geval_image_array" _v-e73ed50e=""> <img src="{{ img }}" alt="" _v-e73ed50e=""> </li> </ul> </li> </ul> </div> </flex-scroll-view> </div>'},287:function(e,t,i){var s,o;i(380),s=i(57),o=i(269),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports["default"]),o&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=o)},380:function(e,t,i){var s=i(171);"string"==typeof s&&(s=[[e.id,s,""]]);i(2)(s,{});s.locals&&(e.exports=s.locals)}});