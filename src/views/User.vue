<template>
	<div class="flex-view" v-transition>
      <app-header :title="title" :left-label="leftLabel" :right-label="rightLabel" :left-link="leftLink" :right-link="rightLink" :left-icon="leftIcon" :right-icon="rightIcon"></app-header>
    	<router-view :title.sync="title" :right-label.sync="rightLabel" :left-label.sync="leftLabel" :left-link.sync="leftLink" :right-link.sync="rightLink" :left-icon.sync="leftIcon" :right-icon.sync="rightIcon"></router-view>
	</div>
</template>

<script>

	module.exports = {
  replace: true,
  data:function(){
    var headerInfo = {
      title:'',
      leftLabel:'',
      rightLabel:'',
      leftLink:'',
      rightLink:'',
      leftIcon:'',
      rightIcon:'',
    };
    return headerInfo;
  },
  components: {
    'app-header': require('../components/CommonHeader.vue'),
    'flex-scroll-view': require('../components/FlexScrollView.vue'),
  },
  methods:{
    refreshUser:function(){

    }
  },
  events:{
    'pageLoaded':function(msg){
      this.title = "";
      this.leftLabel = "";
      this.rightLabel = "";
      this.leftLink = "";
      this.rightLink = "";
      this.leftIcon = "";
      this.rightIcon = "";
    }
  }
}
</script>

<style lang="stylus">
  @import "../main.styl"
</style>