<template>
  <div class="flex-view">
    <app-header title="我的收藏"></app-header>
    <div class="header-tab" style="display:flex">
      <div v-if="position==0" class="header-tab-item active" position="0">店铺</div>
      <div v-else class="header-tab-item" position="0">店铺</div>
      <div v-if="position==1" class="header-tab-item active" position="1">商品</div>
      <div v-else class="header-tab-item" position="1">商品</div>
    </div>
        <flex-scroll-view>
          <!-- <ul id="store-collect-view" style="font-size: 0.3rem;">
            <order-hotel-item v-for="order in orderList" :order="order" :state="state" :index="$index">
            </order-hotel-item>
          </ul> -->
          <ul v-if="position==0" id="store-collect-view" style="font-size: 0.3rem;">
            <collect-store-item v-if="item.store" v-for="item in storeCollectList" :item="item":index="$index">
            </collect-store-item>
          </ul>
          <ul v-if="position==1" id="goods-collect-view" style="font-size: 0.3rem;">
            <collect-goods-item v-for="item in goodsCollectList" :item="item" :index="$index">
            </collect-goods-item>
          </ul>
        </flex-scroll-view>
  </div>
</template>
<script>

  module.exports = {
  replace: true,
  components: {
    'collect-goods-item': require('../components/CollectGoodsItem.vue'),
    'collect-store-item': require('../components/CollectStoreItem.vue'),
    'flex-scroll-view': require('../components/FlexScrollView.vue'),
    'app-header': require('../components/CommonHeader.vue'),
  },
  data:function(){
    return {
      goodsCollectList:[],
      storeCollectList:[],
      position:0,
      initState:[0,0]
    }
  },
  ready:function(){
    // $.fn.poemGet(CART_LIST_API,{'key':});
    $(".header-tab").on('click',".header-tab-item",
      (function(that){ return function(){
        that.position = [].indexOf.call(this.parentNode.children,this);
        if(that.initState[that.position] == 0){
          that.getCollectList(that.position);
        }
      }
    })(this))
  },
  events:{
      
    },
  route:{
    data(transition){
      transition.next({
        initState:[0,0],
      })
      this.getStoreCollectList();
    }
  },
  methods:{
    getCollectList(position){
      if(position == 0){
        this.getStoreCollectList();
      }else{
        this.getGoodsCollectList();
      }
    },
    getGoodsCollectList:function(){
      $.getJSON(GOODS_COLLECT_LIST_API,{key:poem.getItem('key')}).done(this.getGoodsDone);
    },
    getGoodsDone:function(res){
      this.goodsCollectList = res.datas.favorites_list;
      this.initState[1] = 1;
      this.$nextTick(function(){
        this.$dispatch("refresh");
        this.$broadcast('refresh');
        });
    },
    getStoreCollectList:function(){
      $.getJSON(STORE_COLLECT_LIST_API,{key:poem.getItem('key')}).done(this.getStoreDone);
    },
    getStoreDone:function(res){
      this.storeCollectList = res.datas;
      this.initState[0] = 1;
      this.$nextTick(function(){
        this.$dispatch("refresh");
        this.$broadcast('refresh');
        });
    }
  },
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