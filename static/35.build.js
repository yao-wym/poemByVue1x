webpackJsonp([35],{40:function(t,e,o){"use strict";t.exports={components:{"flex-scroll-view":function(t){!function(){var e=[o(3)];t.apply(null,e)}.call(this)},"app-header":function(t){!function(){var e=[o(4)];t.apply(null,e)}.call(this)},"yellow-bottom":function(t){o.e(39,function(e){var o=[e(6)];t.apply(null,o)}.bind(this))}},data:function(){return{title:"意见反馈",xid:"0988776",consult_content:"",contact:""}},methods:{postFeedback:function(){this.consult_content&&$.poemPost(FEEDBACK_API,{key:"60669c1838e2613754ea9a466d50b89f",consult_content:this.consult_content}).done(function(t){poemUI.toast(t),history.go(-1)})}},ready:function(){}}},153:function(t,e,o){e=t.exports=o(1)(),e.push([t.id,".view[_v-710738f7]{-webkit-transition:all .4s ease;transition:all .4s ease;position:absolute}.view.v-enter[_v-710738f7]{opacity:0;-webkit-transform:translate3d(100px,0,0);transform:translate3d(100px,0,0)}.view.v-leave[_v-710738f7]{opacity:0;-webkit-transform:translate3d(-100px,0,0);transform:translate3d(-100px,0,0)}.flex-view[_v-710738f7]{background:#fafafa}.feedback-form textarea[_v-710738f7]{width:100%;border:none;display:block;margin-bottom:.6rem;font-size:.4rem;padding:.2rem}.feedback-form input[type=text][_v-710738f7]{width:100%;height:1rem;line-height:1rem;border:none;display:block;font-size:.4rem;padding:0 .2rem}.feedback-form .submit[_v-710738f7]{background:#55b66f;width:70%;height:1rem;font-size:.4rem;color:#fff;margin:.8rem auto;display:block;border-radius:10px;border:none}.notice[_v-710738f7]{margin:1rem 15px}",""])},251:function(t,e){t.exports='<div class=flex-view v-transition="" _v-710738f7=""> <app-header :title=title :left-label=leftLabel :right-label=rightLabel :left-link=leftLink :right-link=rightLink :left-icon=leftIcon :right-icon=rightIcon _v-710738f7=""></app-header> <flex-scroll-view _v-710738f7=""> <div class=feedback-form action="" method=post _v-710738f7=""> <textarea v-model=consult_content name=consult_content id="" rows=20 placeholder=输入您的反馈意见不超过500字 _v-710738f7=""></textarea> <input v-model=contact type=text name=contact placeholder=输入您的手机和邮箱非必填 _v-710738f7=""> <button class=submit @click=postFeedback() _v-710738f7="">提交</button> </div> <p class=notice _v-710738f7="">我们的进步离不开您的每一个建议与创意</p> </flex-scroll-view> </div>'},268:function(t,e,o){var n,i;o(360),n=o(40),i=o(251),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=i)},360:function(t,e,o){var n=o(153);"string"==typeof n&&(n=[[t.id,n,""]]);o(2)(n,{});n.locals&&(t.exports=n.locals)}});