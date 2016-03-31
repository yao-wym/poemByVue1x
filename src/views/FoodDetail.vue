<template>
  <div class="flex-view" v-transition>
    <flex-scroll-view>
      <banner></banner>
      <div class="container">
        <div class="intro">
          <p>{{ foodName }}</p>
          <p class="price"></p>
          <p>价格: <span class="original-price">{{ originalPrice }}</span></p>
          <div class="row">
            <p>快递: {{ expressPrice }}元</p>
            <p>月销：{{ monthSold }}</p>
            <p>库存：{{ stock }}</p>
          </div>
        </div>
        <a class="link-line" href="">
          选择尺码 颜色
          <span class="right">></span>
      </a>
        <a class="link-line" href="">
          评价晒单 好评<span class="price-red">{{ postiveCommentsRate * 100 }}%</span>
          <span class="right">></span>
      </a>
        <a class="link-line" href="">
          图文详情
          <span class="right">></span>
      </a>
      <a class="link-line" href="">
        <img src="" alt="">
        <span>{{ storeName }}</span>
        <span class="price-red">{{ storeScore }}分</span>
        <span class="right">></span>
      </a>
      <p class="contact">
        <a href=""><img src="" alt="">联系客服</a>    
        <a href=""><img src="" alt="">进入店铺</a>
      </p>
    </div>
    </flex-scroll-view>
          <div class="footer">
        <div class="footer-ctrlpanel">
          <a href="">店铺</a>
          <button>收藏</button>
          <a href="">购物车</a>
        </div>
        <a class="addto-cart">加入购物车</a>
        <a href="" class="buy-now">立即购买</a>
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
  data() {
    return {
      foodName: '风干牛肉干风干牛肉干风干牛肉干风干风干牛肉干风干牛肉干风干牛肉干',
      price: 59,
      originalPrice: 100,
      expressPrice: 0,
      monthSold: 3215,
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
