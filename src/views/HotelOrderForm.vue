<template>
  <div class="flex-view" v-transition>
    <flex-scroll-view>
      <div class="container">
        <div class="section">
          <h1>{{ hotelName }}</h1>
          <p>时间：{{ checkInTime }}入住-{{ checkOutTime }}离店<span class="day">{{ day }}晚</span></p>
          <p>房型：{{ houseType }}</p>
        </div>
        <div class="section">
          <div class="house-count">房间数
            <div class="right">
              <button @click="minusHouseCount">-</button>
              {{ houseCount }}
              <button @click="addHouseCount">+</button>
            </div>
          </div>
          <div>保留到
            <div class="right">
              >
            </div>
          </div>
          <div>入住人
            <input type="text">
          </div>
        </div>
        <div class="section">
          <div>联系人
            <input type="text">
            <img src="../asset/images/contacter-green.png" alt=""></div>
          <div>联系方式
            <input type="text">
            <img src="../asset/images/phone-device.png" alt=""></div>
        </div>
          <div class="notice">
            <h2>温馨提示：</h2>
            <p>请在最晚到店时间以前到达，否则请在最晚到店时间以前到达，否则请在最晚到店时间以前到达，否则请在最晚到店时间以前到达，否则请在最晚到店时间以前到达，否则请在最晚到店时间以前到达，否则请在最晚到店时间以前到达，否则请在最晚到店时间以前到达，否则请在最晚到店时间以前到达，否则请在最晚到店时间以前到达，否则请在最晚到店时间以前到达，否则  </p>
          </div>
      </div>
      <div class="footer">
        <div class="price">订单金额：<span>{{ orderPrice }}</span></div>
        <input type="submit" value="提交订单">
      </div>
    </flex-scroll-view>
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
        hotelName: '北京首都大饭店',
        checkInTime: '8月13日',
        checkOutTime: '8月14日',
        day: 1,
        houseType: '普通标准间',
        houseCount: 1,
        saveTo: '',
        livePerson: '',
        contactPerson: '',
        contactWay: '',
        orderPrice: 66666
      }
    },
    methods: {
      addHouseCount() {
        this.houseCount += 1;
      },
      minusHouseCount() {
        if (this.houseCount < 2) {
          alert('至少要定一间房哦');
          return;
        }
        this.houseCount -= 1
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
        & h1
          margin: 0
      & img
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