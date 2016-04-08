<template class="flex-view" v-transition>
  <div class="header-tab" style="display:flex">
    <div class="header-tab-item active">待付款</div>
    <div class="header-tab-item">待收货</div>
    <div class="header-tab-item">待评价</div>
    <div class="header-tab-item">已完成</div>
    <div class="header-tab-item">退款</div>
  </div>
      <flex-scroll-view>
        <ul id="order-hotel-view" style="font-size: 0.3rem;">
          <order-techan-item for>
          </order-techan-item>
        </ul>
      </flex-scroll-view>

</template>

<script>

	module.exports = {
  replace: true,
  components: {
    'order-techan-item': require('../components/OrderTechanItem.vue'),
    'flex-scroll-view': require('../components/FlexScrollView.vue'),
  },
  ready:function(){
    // $.fn.poemGet(CART_LIST_API,{'key':});
    this.leftLabel='特产';
    this.title="";
  },
  methods:{
    getOrderList:function(){
      poemGet(TECHAN_ORDER_LIST_API,{key:poem.getItem('key',order_state:1)}).done(this.getSuccess);
    },
    getSuccess:function(res){
      this.orderList = res.order_group_list;
    }
  },
  props:['leftLabel','title']
}
</script>

<style lang="stylus">
  @import "../main.styl"
.header-tab
  display:flex
  padding:20px
  & .header-tab-item
    flex:1
    font-size:.3rem
    text-align:center
    &.active
      color:orangered
</style>