<template>
  <div class="flex-view" v-transition>
  <app-header title="酒店详情"></app-header>
    <flex-scroll-view>
      <div class="section">
        <div class="address contact">
          <div class="icon">
            <img src="../asset/images/ditu.png">
          </div>
          <div>
            <h2>地址</h2>
            <p>{{ address }}</p>
          </div>
        </div>
        <div class="cellphone contact">
          <div class="icon">
            <img src="../asset/images/phone-red.png">
          </div>
          <div>
            <h2>电话</h2>
            <p>{{ phone }}</p>
          </div>
        </div>
      </div>
      <div class="section estab">
        <div class="sub-header">
          <div class="icon">
            <img src="../asset/images/phone-red.png">
          </div>
          <h2>酒店设施</h2>
        </div>
        <div>
          <div class="each-estab" v-for="estab in estabs">{{ estab }}</div>
        </div>
      </div>
      <div class="section intro">
        <div class="sub-header">
          <div class="icon">
            <img src="../asset/images/phone-red.png">
          </div>
          <h2>介绍</h2>
        </div>
        <div>
          <p>{{ intro }}</p>
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
      'app-header': function(resolve){
        require(['../components/CommonHeader.vue'], resolve);
      }
    },

    data() {
      return {
        address: '我在马路边捡到一分钱',
        estabs: ['宽带上网', 'wifi', '停车场', '停车场', '停车场', '停车场' ]
      }
    },

    methods: {
      getHotelDeepDetail() {
        $.poemGet(HOTEL_DEEP_DETAIL_API,{'store_id':this.$route.params.id}).done(this.getHotelDeepDetailDone)
      },

      getHotelDeepDetailDone(data) {
        this.phone = data.store_phone;
        this.address = data.store_location_lat;
        this.intro = data.store_description;
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import "../main.styl"
  p
    color: text-gray
  h2
    font-size: 0.45rem
    font-weight: normal
  .section
    background: poem-white;
    margin: 0.4rem 0;
  .address
    padding: 0.4rem;
    border-bottom: 1px solid line-gray
    & h2
      color: #28a7e1
  .cellphone
    padding: 0.4rem;
    & h2
      color: #ec6762
  .contact
    display: flex
    h2
      margin: 0
    p
      margin-bottom: 0
  .icon
    width: 1rem
    & img
      width: 0.5rem
      height: auto
  .sub-header
    display: flex
    h2
      margin: 0
  .estab
    .icon
      padding: 0.4rem
    h2
      padding: 0.4rem
    overflow: hidden
    .each-estab
      width: 25%
      height: 1.5rem
      line-height: 1.5rem
      text-align: center
      border: 1px solid line-gray
      border-left: none
      float: left

  .intro
    padding: 0.4rem
    p
      text-indent: 0.4rem
</style>