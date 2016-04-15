<template class="flex-view" v-transition>
    	<app-header title='购物车'></app-header>
      <flex-scroll-view>
        <ul id="cart-list-view" style="font-size: 0.3rem;">
          <cart-list-item v-for="cart in cartList" :cart="cart" :index="$index">
          </cart-list-item>
        </ul>
      </flex-scroll-view>
<!--       <footer style="position: fixed;bottom: 1rem;width: 100%;height: 2rem;border-top: 1px solid #ccc">
        <div style="width: 60%;display: inline-block">123</div>
        <div style="width: 30%;display: inline-block">123</div>
      </footer> -->
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
    this.getCartList();
  },
  data:function(){
    return{
      cartList:[]
    }
  },
  events:{
    cartRefresh:function(){
      this.getCartList();
    }
  },
  methods:{
    getCartList:function(){
      $.poemGet(CART_LIST_API,{key:poem.getItem('key')}).done(this.getSuccess);
    },
    getSuccess:function(res){
      this.cartList = res.cart_list;
      this.$nextTick(function(){
        this.$dispatch("refresh");
        this.$broadcast('refresh');
        });
    },
  }
}
</script>

<style lang="stylus">
</style>