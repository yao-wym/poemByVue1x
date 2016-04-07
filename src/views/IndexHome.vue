<template>
    	<app-header search='找美食.找酒店' left-icon='user-icon' left-link='#user/login'  right-icon='phone-icon' right-link="call"></app-header>
      <flex-scroll-view>
          <app-pane side="left" msg="1123" name="{{leftName}}"></app-pane>
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
      this.$route.router.go({name:'search',params:{keyword:msg.keyword}});
    },
    'call':function(){
      location.href="tel:13041022978";
    }
  }
}
</script>

<style lang="stylus">
  @import "../main.styl"
</style>