<template>
    	<!-- <app-header search='找美食.找酒店' left-icon='user-icon' left-link='#user/login'  right-icon='phone-icon' right-link="call"></app-header> -->
      <app-header title='首页' left-icon='user-icon' left-link='goToUcenter'  right-icon='phone-icon' right-link="call"></app-header>
      <flex-scroll-view>
          <app-pane side="left" name="{{leftName}}"></app-pane>
      </flex-scroll-view>
</template>

<script>

	module.exports = {
  replace: true,
  components: {
    'app-header': require('../components/CommonHeader.vue'),
    'app-pane': require('../components/IndexHomePane.vue'),
    'index-tab': require('../components/IndexTab.vue'),
    'flex-scroll-view': require('../components/FlexScrollView.vue'),
  }, 
  data:function(){
    return{
      'searchKey':''
    }
  },
  ready:function(){
    setTimeout((function(that){return function(){that.$broadcast('refresh');}})(this),500)
  },
  methods:{
  }, 
  events:{
    'refresh':function(msg){
       setTimeout((function(that){return function(){that.$broadcast('refresh');}})(this),500)
    },
    'scrollViewLoaded':function(msg){
      // this.myScroll.refresh();
      this.$broadcast('refresh');
    },
    'search':function(msg){
      // console.log(msg.keyword);
      this.$route.router.go({name:'search',params:{keyword:msg.keyword}});
    },
    'call':function(){
      location.href="tel:"+SERVICE_CALL;
    },
    'goToUcenter':function(){
      alert(4);
      this.$route.router.go({path:'/index/ucenter'})
      location.href="#/index/ucenter";
    }
  }
}
</script>

<style lang="stylus">
</style>