<template>
	<div class="flex-view" v-transition>
    	<router-view></router-view>
      <index-tab></index-tab>
	</div>
</template>

<script>

	module.exports = {
  replace: true,
  components: {
    'app-header': require('../components/CommonHeader.vue'),
    'app-pane': require('../components/IndexHomePane.vue'),
    'index-tab': require('../components/IndexTab.vue'),
    'flex-scroll-view': require('../components/FlexScrollView.vue'),
  }
}
</script>

<style lang="stylus">
  @import "../main.styl"
</style>