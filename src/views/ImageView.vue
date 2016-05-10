<template>
  <app-header title="图片浏览"></app-header>
    <div class="flex-view" style="">
    <div  id="container" style="word-wrap:break-word;padding:10px 20px;color:#555;padding-bottom: 2rem">
      <img style="width: 100%;position: absolute;margin:auto;left:0;right:0;top:0;bottom:0" v-bind:src="imageSrc"/>
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
      imageSrc:this.$route.query.imageSrc,
    }
  },
  components: {
    'flex-scroll-view': function(resolve) {
      require(['../components/FlexScrollView.vue'], resolve);
    },
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
        this.imageSrc = this.$route.query.imageSrc;
        setTimeout((function(that){return function(){that.$broadcast('refresh');}})(this),500)
    },
    canReuse:function(transition){
        return false;
        //判断是否可以重用，可以则为返回true，不能重用则返回false，会实例化一个新的vue对象
    }
  },
  }
</script>