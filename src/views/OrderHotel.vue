<template class="flex-view" v-transition>
  <div class="header-tab" style="display:flex">
    <div class="header-tab-item active" state="2">待付款</div>
    <div class="header-tab-item" state="1">可使用</div>
    <div class="header-tab-item" state="4">已完成</div>
    <div class="header-tab-item" state="3">退款</div>
  </div>
      <flex-scroll-view>
        <ul id="order-hotel-view" style="font-size: 0.3rem;">
          <order-hotel-item v-for="order in orderList" :order="order" :state="state" :index="$index">
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
  data:function(){
    return {
      orderList:[],
      state:2
    }
  },
  ready:function(){
    // $.fn.poemGet(CART_LIST_API,{'key':});
    this.leftLabel='酒店门票';
    this.title="";
    this.rightLabel="";
    this.getOrderList();
    $(".header-tab").on('click',".header-tab-item",
      (function(that){ return function(){
        $('.header-tab-item').removeClass('active');
        $(this).addClass('active');
        that.state = $(this).attr('state');
        that.getOrderList();
      }
    })(this))
  },
  events:{
      'refreshVROrder':function(){
        this.getOrderList();
      }
    },
  methods:{
    getOrderList:function(){
      $.poemGet(VR_ORDER_LIST_API,{key:poem.getItem('key'),page:100,'order_state':this.state}).done(this.getSuccess);
    },
    getSuccess:function(res){
      this.orderList = res.order_list;
      this.$nextTick(function(){
        this.$dispatch("refresh");
        this.$broadcast('refresh');
        });
    }
  },
  props:['leftLabel','title','rightLabel']
}
</script>

<style lang="stylus" scoped>
  @import "../main.styl"
.header-tab
  display:flex
  padding:20px
  & .header-tab-item
    flex:1
    font-size:.4rem
    text-align:center
    &.active
      color:orangered
</style>