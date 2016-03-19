<template>
	<div class="flex-view" v-transition>
      <app-header :title="title" :leftLabel="leftLabel" :rightLabel="rightLabel" :leftLink="leftLink" :rightLink="rightLink" :leftIcon="leftIcon" :rightIcon="rightIcon"></app-header>
    	<router-view :title.sync="title"></router-view>
	</div>
</template>

<script>

	module.exports = {
  replace: true,
  data:function(){
    return {
      title:'',
      leftLabel:'',
      rightLabel:'',
      leftLink:'',
      rightLink:'',
      leftIcon:'',
      rightIcon:'',
    }
  },
  components: {
    'app-header': require('../components/CommonHeader.vue'),
    'flex-scroll-view': require('../components/FlexScrollView.vue'),
  }
}
</script>

<style lang="stylus">
  @import "../main.styl"
</style>