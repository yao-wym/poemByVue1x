<template>
  <app-header :title="title"></app-header>
  <div  id="container" style="word-wrap:break-word;padding:10px;color:#555">
    <div v-show="title=='免责声明'">
      q2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeq
    </div>
    <div v-show="title=='知识产权'">
      q2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeq
    </div>
    <div v-show="title=='用户使用协议'">
      q2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeqq2eqeq
    </div>
  </div> 
</template>
<style type="text/css">
  html{height:100%}  
  body{height:100%;margin:0px;padding:0px}  
  #container{height:100%} 
</style>
<script type="text/javascript">
module.exports = {
  replace: true,
  data:function(){
    return {
      title:this.$route.query.title,
    }
  },
  components: {
    'app-header': function(resolve) {
      require(['../components/CommonHeader.vue'], resolve);
    },
  },
  ready:function(){

  },
  route: {
    data: function (transition) {
        // // alert(JSON.stringify(this.$route.params));
        // transition.next({
        //     // 'hotelName':'111'
        // })
        this.title = this.$route.query.title;
    },
    canReuse:function(transition){
        return false;
        //判断是否可以重用，可以则为返回true，不能重用则返回false，会实例化一个新的vue对象
    }
  },
  }
</script>