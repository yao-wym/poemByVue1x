<template>
  <div class="flex-view" v-transition>
    <flex-scroll-view>
      <div class="container">
        <div class="banner">
          <div class="banner-img">
            <img src="http://2.share.photo.xuite.net/wxm3338/126d4b2/14058821/738662509_m.jpg" alt="">
          </div>
          <h1>{{ scenicName }}</h1>
        </div>
        <div class="section">
          <div class="house-count">购买数量
            <div class="right">
              <button @click="minusCount">-</button>
              {{ count }}
              <button @click="addCount">+</button>
            </div>
          </div>
          <div>
            兑换方式：{{ exchangeWay }}
          </div>
        </div>
        <h2 class="person-info"><img class="small-icon" src="../asset/images/user-green.png" alt="">取票人信息</h2>
        <div class="section">
          <div>姓名
            <input type="text">
            <img class="icon" src="../asset/images/contacter-green.png" alt=""></div>
          <div>联系方式
            <input type="text">
            <img class="icon" src="../asset/images/phone-device.png" alt=""></div>
        </div>
        <div class="notice">
          <h2>温馨提示：</h2>
          <p>请在最晚到店时间以前到达，否则请在最晚到店时间以前到达，否则请在最晚到店时间以前到达，否则请在最晚到店时间以前到达，否则请在最晚到店时间以前到达，否则请在最晚到店时间以前到达，否则请在最晚到店时间以前到达，否则请在最晚到店时间以前到达，否则请在最晚到店时间以前到达，否则请在最晚到店时间以前到达，否则请在最晚到店时间以前到达，否则  </p>
        </div>
      </div>

    </flex-scroll-view>
    <div class="footer">
      <div class="price">订单金额：<span>{{ orderPrice }}</span></div>
      <input type="submit" value="提交订单">
    </div>
  </div>
</template>
<script>
  module.exports = {
    components: {
      'flex-scroll-view': function(resolve) {
        require(['../components/FlexScrollView.vue'], resolve);
      },
    },
    data() {
      return {
        scenicName: '响沙湾',
        price: 59,
        count: 1,
        exchangeWay: '兑换码',
        saveTo: '',
        personName: '',
        contactWay: '',
        orderPrice: 66666
      }
    },
    methods: {
      addCount() {
        this.count += 1;
      },
      minusCount() {
        if (this.count < 2) {
          alert('至少要定一张票哦');
          return;
        }
        this.count -= 1
      }
    }
  }
</script>
<style scoped lang="stylus">
  @import "../main.styl"
    .container
      padding-bottom: 1rem
    .section
      background: poem-white
      margin-bottom: 0.4rem
      & > div
        padding: 0.6rem 0.4rem
        border-bottom: 1px solid line-gray
      &:first-child
        padding: 0.4rem
      & .icon
        display: block
        float: right
        width: 0.8rem
        position: relative
        top: -0.2rem
      & input[type=text]
        height: 0.5rem;
        border: none;
        width: 60%;
        font-size: 0.4rem;
    .banner
      & h1
        font-size: .6rem
        font-weight: normal
        padding-left: section-padding
    .banner-img
      width: 100%
      height: 4rem
      overflow: hidden
      & img
        width: 100%
    .person-info
      padding: section-padding
      font-size: .5rem
      font-weight: normal
      & img
        vertical-align: bottom
        margin-right: .3rem
    .right
      float: right
    .house-count
      & button
        width: 0.5rem
        height: 0.5rem
        vertical-align: middle
        background: none;
        border: 1px solid line-gray
        font-size: 0.4rem
        outline: none
    .day
      color: app-green
      display: inline-block
      float: right
    .notice
      color: text-gray
      margin-top: 1.5rem
      padding: 0 0.4rem
    .footer
      display: flex
      position: fixed
      bottom: 0
      align-items: center
      font-size: 0.5rem
      width: 100%
      background: poem-white
      & input
        background-color:app-yellow
        height: 1rem
        line-height:1rem
        text-align:center
        font-size:.5rem
        width: 4rem
        color:app-white
        vertical-align: bottom
        border: none
        flex: 1
      & .price
        flex: 2
        padding-left: 0.4rem
        color: text-gray
        & span
          color: red


</style>