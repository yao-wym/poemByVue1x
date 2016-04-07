<template class="flex-view" v-transition>
      <flex-scroll-view>
        <ul id="order-list-view" style="font-size: 0.3rem;">
          <order-hotel-item>
          </order-hotel-item>
        </ul>
      </flex-scroll-view>

</template>

<script>

	module.exports = {
  replace: true,
  components: {
    'order-hotel-item': require('../components/OrderHotelItem.vue'),
    'flex-scroll-view': require('../components/FlexScrollView.vue'),
  },
  ready:function(){
    // $.fn.poemGet(CART_LIST_API,{'key':});
    this.leftLabel = '酒店订单';
    this.title="";
  },
  props:['leftLabel','title']
}
</script>

<style lang="stylus">
  @import "../main.styl"
</style>