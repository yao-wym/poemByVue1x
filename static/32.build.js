webpackJsonp([32],{46:function(t,e,o){"use strict";t.exports={replace:!0,data:function(){return{imageSrc:this.$route.query.imageSrc}},components:{"flex-scroll-view":function(t){!function(){var e=[o(3)];t.apply(null,e)}.call(this)},"app-header":function(t){!function(){var e=[o(4)];t.apply(null,e)}.call(this)}},ready:function(){},route:{data:function(t){this.imageSrc=this.$route.query.imageSrc,setTimeout(function(t){return function(){t.$broadcast("refresh")}}(this),500)},canReuse:function(t){return!1}}}},130:function(t,e,o){e=t.exports=o(1)(),e.push([t.id,"body,html{height:100%}body{margin:0;padding:0}#container{height:100%}",""])},206:function(t,e){t.exports='<app-header title=图片浏览></app-header> <div class=flex-view style=""> <div id=container style="word-wrap:break-word;padding:10px 20px;color:#555;padding-bottom:2rem"> <img style=width:100%;position:absolute;margin:auto;left:0;right:0;top:0;bottom:0 v-bind:src=imageSrc /> </div> </div>'},275:function(t,e,o){var i,n;o(338),i=o(46),n=o(206),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},338:function(t,e,o){var i=o(130);"string"==typeof i&&(i=[[t.id,i,""]]);o(2)(i,{});i.locals&&(t.exports=i.locals)}});