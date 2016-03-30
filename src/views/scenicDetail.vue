<template>
  <div class="flex-view" v-transition>
    <flex-scroll-view>
      <banner></banner>
      <div class="section brief-intro">
        <div class="stars">
          <img v-for="star in stars" :src="star" class="star-red"  alt="">
          <img src="../asset/images/star-green.png" class="small-icon star-green" alt="">
        </div>
        <p>旅游避暑胜地</p>
        <p>开放时间：{{ openTime }}</p>
      </div>
      <div class="section">
        <div class="link-line">
          <img class="small-icon" src="../asset/images/pinglun.png" alt="">
          <p>评论</p>
          <span>></span>
        </div>
        <div class="link-line">
          <img class="small-icon" src="../asset/images/ditu.png" alt="">
          <p>地图</p>
          <span>></span>
        </div>
      </div>
      <div class="section">
        <div class="link-line">
          <img class="small-icon" src="../asset/images/56-04.png" alt="">
          <p>票价</p>
        </div>
        <div class="ticket-price" v-for="ticketPrice in ticketPrices">
          <p class="price-kind">{{ ticketPrice.name }} <button @click="ctrlOrderDetail($index)">></button> <span>{{ ticketPrice.price }}</span></p>
          <div v-show="orderDetailShow[$index]" class="order-detail">
            <div class="gallery"></div>
            <button @click="bookTicket($index)" class="order-button">预定</button>
          </div>
        </div>
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
      'banner': function (resolve) {
        require(['../components/BannerView.vue'], resolve);
      }
    },
    data() {
      let fullStarCount = 4;
      let emptyStarCount = 5 - fullStarCount
      let stars = [];
      while(fullStarCount--){
        stars.push(require('../asset/images/star-red-full.png'));
      }
      while(emptyStarCount--){
        stars.push(require('../asset/images/star-red.png'))
      }

      return {
        openTime: '09:00 - 17:00',
        stars: stars,
        ticketPrices: [
          {
            name: '成人票',
            price: 59
          },
          {
            name: '老人票',
            price: 29
          },
          {
            name: '学生票',
            price: 39
          },
        ],
        gallery: [],
        orderDetailShow: [1, 1, 1]
      }
    },
    methods: {
      ctrlOrderDetail(index) {
        let newArr = this.deepClone(this.orderDetailShow);
        console.log(newArr)
        newArr[index] = !this.orderDetailShow[index];
        this.orderDetailShow = newArr;
        console.log(this.orderDetailShow[index])
      },
      deepClone(arr) {
        let result = [];
        for (let i=0; i<arr.length; i++){
          result[i] = arr[i];
        }
        return result;
      },
      bookTicket(index){
        this.$route.router.go({path:'/ScenicOrderForm/123'})
      }
    }
  }
</script>
<style scoped lang="stylus">
  @import "../main.styl"
  .section
    margin-bottom: section-margin
    background: poem-white
    color: text-gray
  .brief-intro
    padding: section-padding
  .link-line
    display: flex
    align-items: center
    border-bottom: 1px solid line-gray
    padding: section-padding
    & p
      width: 90%
      padding: .2rem .5rem
      margin: 0
  .star-red
    width: .5rem
    margin: 0 .1rem
    &:first-child
      margin: 0
  .star-green
    float: right
  .ticket-price
    padding: section-padding
    & .order-button
      background: app-yellow
      width: 2.2rem;
      height: 0.9rem;
      font-size: 0.5rem;
      float: right;
      border-radius: .2rem;
      border: none;
      color: #fff;
  .price-kind
    line-height: .6rem
    & button
      float: right
      background: #fff
      border: none
      font-size: .5rem
      color: text-gray
      top: -.1rem
    & span
      float: right
      color: poem-red
      font-size: .6rem
</style>