<template>
	<div class="flex-view" v-transition>
    	<app-header msg='123'></app-header>
      <flex-scroll-view>
          <app-pane side="left" msg="1123" name="{{leftName}}"></app-pane>
      </flex-scroll-view>
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