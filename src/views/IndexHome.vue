<template>
    	<app-header search='找美食.找酒店' left-icon='qrcode-icon' left-link='#QrcodeView' right-icon='user-icon' right-link="#user/login"></app-header>
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
  events:{
    'refresh':function(msg){
    },
    'scrollViewLoaded':function(msg){
      // this.myScroll.refresh();
      this.$broadcast('refresh');
    },
  }
}
</script>

<style lang="stylus">
  @import "../main.styl"
</style>