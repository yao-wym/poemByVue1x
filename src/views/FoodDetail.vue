<template>
  <div class="flex-view" v-transition>
    <flex-scroll-view>
     <div class="scenic-header" style="background-image:url({{bgImg}})">
        <header>
          <i @click="goBack()" style="float:left">
            <img src="../asset/images/fanhui.png">
          </i>
          <div style="float:right">
            <img src="../asset/images/icon_collect.png">
            <img style="margin:0 5px" src="../asset/images/share-white.png">
          </div>
        </header>
        <div style="position:absolute;bottom:0;padding-left:10px;font-size:.3rem">
          <p>{{storeName}}</p>
        </div>
      </div>
      <div class="container">
        <div class="intro">
          <p>{{ goodsDetail.goods_info.goods_name }}</p>
          <p class="price">{{ goodsDetail.goods_info.goods_price }}</p>
          <p>价格: <span class="original-price">{{ goodsDetail.goods_info.goods_marketprice }}</span></p>
          <div class="row">
            <p>快递: {{ expressPrice }}元</p>
            <p>月销：{{ goodsDetail.goods_info.goods_salenum }}</p>
            <p>库存：{{ stock }}</p>
          </div>
        </div>
        <a class="link-line" href="">
          选择尺码 颜色
          <span class="right">></span>
        </a>
        <a class="link-line" href="">
          评价晒单 评分<span class="price-red">{{ goodsDetail.goods_info.evaluation_good_star }}</span>
          <span class="right">></span>
        </a>
        <a class="link-line" href="">
          图文详情
          <span class="right">></span>
        </a>
        <a v-link="{path:'/StoreGoodsList/'+goodsDetail.store_info.store_id}">
          <img src="" alt="">
          <span>{{ goodsDetail.store_info.store_name }}</span>
          <!-- <span class="price-red">{{ goodsDetail.store_info. }}分</span> -->
          <span class="right">></span>
        </a>
      <p class="contact">
        <a href=""><img src="" alt="">联系客服</a>    
        <a v-link="{path:'/StoreGoodsList/'+goodsDetail.store_info.store_id}"><img src="" alt="">进入店铺</a>
      </p>
    </div>
    </flex-scroll-view>
          <div class="footer">
        <div class="footer-ctrlpanel">
          <a href="">店铺</a>
          <button>收藏</button>
          <a href="">购物车</a>
        </div>
        <a class="addto-cart" @click="addToCart()">加入购物车</a>
        <a @click="buy()" class="buy-now">立即购买</a>
      </div>
  </div>
</template>

<script>

module.exports = {
  components: {
    'flex-scroll-view': function(resolve) {
      require(['../components/FlexScrollView.vue'], resolve);
    },
    'banner': function (resolve) {
      require(['../components/BannerView.vue'], resolve);
    }
  },
  ready:function(){
    // this.goodsId = this.$route.params.id;
    // this.getGoodsDetail();
  },
  route: {
      data: function (transition) {
        transition.next({
        })
        this.goodsId = this.$route.params.id;
        this.getGoodsDetail();
    },
      canReuse:function(transition){
        return false
        //判断是否可以重用，可以则为返回true，不能重用则返回false，会实例化一个新的vue对象
      }
  },
  methods:{
    addToCart:function(){
      $.poemPost(CART_ADD_API,{'key':poem.getItem('key'),'goods_id':this.goodsId,'quantity':this.quantity}).done(function(res){
        if(res.error){
          poemUI.toast(res.error);
        }else{
          poemUI.toast('添加成功');
        }
      });
    },
    getGoodsDetail:function(){
      $.poemGet(GOODS_DETAIL_API,{'goods_id':this.goodsId}).done(this.getSuccess);
    },
    getSuccess:function(res){
      this.goodsDetail = res;
      this.goodsType = res.spec_list[Object.keys(res['spec_list'])[0]];
       this.$nextTick(function(){
          // this.$broadcast('refresh');
        });
    },
    buy:function(res){
        this.$route.router.go({path:'/TechanOrderForm?goodsId='+this.goodsId+'&goodsType='+this.goodsType});
    }
  },
  data() {
    return {
      quantity:1,
      goodsId:'',
      goodsType:'',
      goodsDetail:{},
      foodName: '',
      price: 59,
      originalPrice: 100,
      expressPrice: 0,
      monthSold: 3215,
      bgImg:'',
      stock: 999,
      postiveCommentsRate: 0.98,
      storeName: 'xx旗舰店',
      storeScore: 9.2
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "../main.styl"
  .scenic-header
    background:url(../asset/images/news.png)
    background-size:100% 100%
    text-align:center
    height:6rem
    padding-bottom:.6rem
    color:white
    position:relative
    & header
      padding:10px
      & img
        height:0.5rem
  .container
    padding-bottom: 1rem
  .intro
    padding: 0 section-padding
  .row
    display: flex
    & p
      width: 33%
  .original-price
    text-decoration: line-through
  .right
    float: right
  .link-line
    display: block
    &:link, &:visited
      color: text-gray
    height: 1.5rem
    line-height: 1.5rem
    border-top: 1px solid line-gray
    padding: 0 section-padding
  .contact
    width: 90%
    margin: .5rem auto 1.5rem auto
    & a
      display: inline-block
      height: .8rem;
      line-height: .8rem
      background: transparent;
      font-size: .4rem;
      border: 1px solid line-gray
      border-radius: .3rem
      width: 44%
      margin: 10px
      text-align: center
      &:link, &:visited
        color: text-gray
  .price-red
    color: poem-red
    padding-left: .4rem
  .footer
    display: flex
    height: 1rem
    line-height: 1rem
    position: fixed;
    width: 100%;
    bottom: 0;
    .footer-ctrlpanel
      width: 50%
      background: #aaa
      color: #fff
    .addto-cart
      background: poem-green
      color: #fff
      width: 25%
      text-align: center
    .buy-now
      background: app-yellow
      color: #fff
      width: 25%
      text-align: center
</style>
