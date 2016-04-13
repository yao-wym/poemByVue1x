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
      <div class="section brief-intro">
        <div class="stars">
          <img v-for="star in stars" :src="star.src" class="star-red"  alt="fff">
          <img src="../asset/images/star-green.png" class="small-icon star-green" alt="">
        </div>
        <p>旅游避暑胜地</p>
        <p>开放时间：{{ openTime }}</p>
      </div>
      <div class="section">
        <a href="#/Comments/100163" class="link-line">
          <img class="small-icon" src="../asset/images/pinglun.png" alt="">
          <p>评论</p>
          <span>></span>
        </a>
        <div class="link-line">
          <img class="small-icon" src="../asset/images/ditu.png" alt="">
          <p>地图</p>
          <span>></span>
        </div>
        <a class="link-line" href="#/ScenicDeepDetail/{{id}}">
          <img class="small-icon" src="../asset/images/pic-yellow.png" alt="">
          <p>详情</p>
          <span>></span>
        </a>
      </div>
      <div class="section">
        <div class="link-line">
          <img class="small-icon" src="../asset/images/56-04.png" alt="">
          <p>票价</p>
        </div>
        <div class="ticket-price" v-for="ticketPrice in ticketPrices">
          <div class="price-kind">
            <p class="ticket-name">{{ ticketPrice.name }}</p>
            <p class="price">¥{{ ticketPrice.price }}</p>
            <div class="arrow" @click="ctrlOrderDetail($index)">
              <i></i>
            </div>
          </div>
          <div v-show="orderDetailShow[$index]" class="order-detail">
            <div class="gallery">
              <div v-for="photo in gallery" class="scenic-img-item">
                <img src="{{photo}}">
              </div>
            </div>
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
      return {
        id: this.$route.params.id,
        storeName: '',
        openTime: '09:00 - 17:00',
        stars: [],
        'bgImg':'',
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
        orderDetailShow: [1, 1, 1],
      }
    },
    methods: {
      ctrlOrderDetail(index) {
        let newArr = this.deepClone(this.orderDetailShow);
        newArr[index] = !this.orderDetailShow[index];
        this.orderDetailShow = newArr;
      },
      goBack:function(){
        history.go(-1)
      },
      deepClone(arr) {
        let result = [];
        for (let i=0; i<arr.length; i++){
          result[i] = arr[i];
        }
        return result;
      },
      getScenicDetail() {
        $.poemGet(GOODS_DETAIL_API,{'goods_id':this.$route.params.id}).done(this.initPage)
      },
      initPage(data) {
        console.log(data)
        this.storeName = data.store_info.store_name;
        this.gallery = data.goods_image;
        this.bgImg = data.spec_image[0]
        this.countStar(data.evaluate_info.good_star)
        this.$nextTick(function(){
          this.$broadcast('refresh');
        });
        setTimeout((function(that){return function(){that.$dispatch('refresh');}})(this),1000)
      },
      countStar(count) {
        let fullStarCount = count;
        let emptyStarCount = 5 - fullStarCount;
        this.stars = [];
        while(fullStarCount--){
          this.stars.push({src: require('../asset/images/star-red-full.png')});
        }
        while(emptyStarCount--){
          this.stars.push({src: require('../asset/images/star-red.png')})
        }
      },
      bookTicket(index){
        this.$route.router.go({path:'/ScenicOrderForm/123'})
      },
    },
    route: {
      data(){
        this.getScenicDetail()
      }
    },
    ready() {
        this.$broadcast('refresh');
    }
  }
</script>
<style scoped lang="stylus">
  @import "../main.styl"
  img-item-height=1.5rem
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
  .flex-view
    background: #f0f0f0
  .scenic-name
    position: absolute
    font-size: .4rem
    font-weight: normal
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
    overflow: hidden
    & button
      font-size:.3rem
      background:app-yellow
      color:white
      border:none
      border-radius:5px
      padding:10px 15px
      margin:10px 20px
      float: right
  .price-kind
    display: flex
    line-height: .6rem
    .ticket-name
      flex: 1
      margin: 0
    & button
      float: right
      background: #fff
      border: none
      font-size: .5rem
      color: text-gray
    .price
      color: poem-red
      font-size: .4rem
      margin: 0 .4rem
  .gallery
    & .scenic-img-item
      width: img-item-height
      height: img-item-height
      display: inline-block
      margin: 5px
      & img
        width: 100%
  .arrow
    border-bottom:solid 1px line-gray
    height:1rem
    background:none
    & i
      margin-top: .2rem
      line-height:1rem
      display:block
      width:.3rem
      height:@width
      background-size:100%
      background-image:url(../asset/images/right_icon.png)
</style>