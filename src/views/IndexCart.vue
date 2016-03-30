<template class="flex-view" v-transition>
    	<app-header title='购物车'></app-header>
      <flex-scroll-view>
        <ul id="hotel-list-view" style="font-size: 0.3rem;">
          <cart-list-item>
          </cart-list-item>
        </ul>
      </flex-scroll-view>

</template>

<script>

	module.exports = {
  replace: true,
  components: {
    'cart-list-item': require('../components/CartListItem.vue'),
    'app-header': require('../components/CommonHeader.vue'),
    'app-pane': require('../components/IndexHomePane.vue'),
    'index-tab': require('../components/IndexTab.vue'),
    'flex-scroll-view': require('../components/FlexScrollView.vue'),
  },
  ready:function(){
    // $.fn.poemGet(CART_LIST_API,{'key':});
  },
}
</script>

<style lang="stylus">
  @import "../main.styl"
</style>