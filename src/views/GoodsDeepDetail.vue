<template>
  <div class="flex-view">
    <app-header title="图文详情"></app-header>
    <flex-scroll-view>
      <div id="container" style="word-wrap:break-word;padding:10px 20px;color:#555;padding-bottom: 2rem">
      </div> 
    </flex-scroll-view>
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
      goodsId:this.$route.query.id,
    }
  },
  methods:{
    getGoodsDeepDetail(){
      $.poemGet(GOODS_DEEP_DETAIL_API,{'goods_id':this.goodsId}).done(this.getDone);
    },
    getDone(res){
      $('#container').html(res);
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
        transition.next({
           'goodsId':this.$route.query.id
        })
        this.getGoodsDeepDetail();
        setTimeout((function(that){return function(){that.$broadcast('refresh');}})(this),500)
    },
    canReuse:function(transition){
        return false;
        //判断是否可以重用，可以则为返回true，不能重用则返回false，会实例化一个新的vue对象
    }
  },
  }
</script>