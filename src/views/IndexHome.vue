<template>
    	<app-header search='找美食.找酒店' left-icon='phone-icon' left-link='call'  right-label='搜索' right-link="search"></app-header>
     <!--  <app-header title='首页' left-icon='user-icon' left-link='#index/ucenter'  right-icon='phone-icon' right-link="call"></app-header> -->
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
    },
    'scrollViewLoaded':function(msg){
      // this.myScroll.refresh();
      this.$broadcast('refresh');
    },
    'search':function(msg){
      // console.log(msg.keyword);
      this.$route.router.go({name:'search',params:{'keyword':msg.keyword,'searchType':msg.searchType}});
    },
    'call':function(){
      location.href="tel:"+SERVICE_CALL;
    }
  }
}
</script>

<style lang="stylus">
</style>