webpackJsonp([11],{82:function(e,t,i){"use strict";e.exports={replace:!0,components:{"voice-nav-item":i(350),"flex-scroll-view":i(3),"app-header":i(4)},data:function(){return{curType:"",voiceNavType:[],voiceNavList:[]}},ready:function(){this.title="",this.rightLabel="",this.getGuideType(),$(".header-tab").on("click",".header-tab-item",function(e){return function(){$(".header-tab-item").removeClass("active"),$(this).addClass("active"),e.curType=$(this).text()}}(this))},methods:{getGuideList:function(){$.poemGet(DAOHANG_LIST_API,{key:poem.getItem("key")}).done(this.getSuccess)},getGuideType:function(){$.poemGet(DAOHANG_TYPE_API,{key:poem.getItem("key")}).done(this.getTypeSuccess)},getSuccess:function(e){this.voiceNavList=e,this.$nextTick(function(){this.$dispatch("refresh"),this.$broadcast("refresh")})},getTypeSuccess:function(e){this.voiceNavType=e,this.curType=e[0],this.getGuideList(),this.$nextTick(function(){this.$dispatch("refresh"),this.$broadcast("refresh")})}},props:["leftLabel","title","rightLabel"]}},101:function(e,t){"use strict";e.exports={replace:!0,props:["voice","index"]}},156:function(e,t,i){t=e.exports=i(1)(),t.push([e.id,".view{-webkit-transition:all .4s ease;transition:all .4s ease;position:absolute}.view.v-enter{opacity:0;-webkit-transform:translate3d(100px,0,0);transform:translate3d(100px,0,0)}.view.v-leave{opacity:0;-webkit-transform:translate3d(-100px,0,0);transform:translate3d(-100px,0,0)}.article a{display:block;overflow:hidden;padding:.2rem;border-bottom:1px solid #dbdbdb}.article-img{float:left;width:3rem;height:2.5rem;margin-right:.4rem}.article-img img{width:100%;height:100%}.article-detail h4{color:#1b1b1b;font-size:.4rem;margin-top:0;font-weight:400;margin-bottom:2px}.article-detail p{overflow:hidden;font-size:.3rem;margin:15px 0;color:#1b1b1b}.info{display:-webkit-box;display:-ms-flexbox;display:flex;font-size:.25rem}",""])},174:function(e,t,i){t=e.exports=i(1)(),t.push([e.id,".view[_v-3dd5ede3]{-webkit-transition:all .4s ease;transition:all .4s ease;position:absolute}.view.v-enter[_v-3dd5ede3]{opacity:0;-webkit-transform:translate3d(100px,0,0);transform:translate3d(100px,0,0)}.view.v-leave[_v-3dd5ede3]{opacity:0;-webkit-transform:translate3d(-100px,0,0);transform:translate3d(-100px,0,0)}.header-tab[_v-3dd5ede3]{display:-webkit-box;display:-ms-flexbox;display:flex}.header-tab .header-tab-item[_v-3dd5ede3]{-webkit-box-flex:1;-ms-flex:1;flex:1;font-size:.4rem;text-align:center;border:1px solid #ccc;padding:15px 20px}.header-tab .header-tab-item.active[_v-3dd5ede3]{border-bottom:5px solid #439f9f}",""])},263:function(e,t){e.exports=' <li class=article> <a href="#/VoiceNavDetail/{{ voice.id }}"> <div class=article-img> <img src={{voice.item}} alt=""> </div> <div class=article-detail> <h4>{{ voice.title }}</h4> <p style=height:1.8rem>{{ voice.content }}</p> </div> </a> </li> '},278:function(e,t){e.exports=' <div class=flex-view v-transition="" _v-3dd5ede3=""> <app-header title=导游导航 _v-3dd5ede3=""></app-header> <div class=header-tab style=display:flex _v-3dd5ede3=""> <div v-for="type in voiceNavType" class=header-tab-item v-bind:class="{active: !$index}" _v-3dd5ede3="">{{type}}</div> </div> <flex-scroll-view _v-3dd5ede3=""> <ul id=voice-nav-view style="font-size: 0.3rem" _v-3dd5ede3=""> <voice-nav-item v-for="voice in voiceNavList" :voice=voice v-if="voice[\'type\'] == curType" :state=state :index=$index _v-3dd5ede3=""> </voice-nav-item> </ul> </flex-scroll-view> </div> '},338:function(e,t,i){var s,o;i(405),s=i(82),o=i(278),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports["default"]),o&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=o)},350:function(e,t,i){var s,o;i(387),s=i(101),o=i(263),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports["default"]),o&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=o)},387:function(e,t,i){var s=i(156);"string"==typeof s&&(s=[[e.id,s,""]]);i(2)(s,{});s.locals&&(e.exports=s.locals)},405:function(e,t,i){var s=i(174);"string"==typeof s&&(s=[[e.id,s,""]]);i(2)(s,{});s.locals&&(e.exports=s.locals)}});