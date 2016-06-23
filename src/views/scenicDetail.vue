<template>
  <div class="flex-view" v-transition>
    <flex-scroll-view>
      <banner banner-height="6.5rem" :img-arr="ScenicImgArr"></banner>
          <header style="position: fixed;top:0;width:100%;z-index:2">
            <i @click="goBack()" style="float:left;padding: 20px">
              <img src="../asset/images/fanhui.png" style="width: .5rem">
            </i>
            <div style="float:right">
                <!-- <img src="../asset/images/icon_collect.png"> -->
                <!-- <img style="margin:0 5px" src="../asset/images/share-white.png"> -->
            </div>
          </header>
      <div class="section brief-intro">
        <div class="stars">
          <img v-for="star in stars" :src="star.src"  class="star-red"  alt="fff">
          <img @click="collect()" src="../asset/images/star-green.png" style="margin: 40px 20px;width: .8rem;height:.8rem" class="small-icon star-green" alt="">
        </div>
        <p>{{storeInfo.store_name}}</p>
        <p>{{ storeInfo.store_zy }}</p>
      </div>
      <div class="section">
        <a href="#/Comments/{{id}}" class="link-line">
          <img class="small-icon" src="../asset/images/pinglun.png" alt="">
          <p>评论</p>
          <span>></span>
        </a>
        <a @click="showDaohang">
          <div class="link-line">
          <img class="small-icon" src="../asset/images/ditu.png" alt="">
          <p>地图</p>
          <span>></span>
        </div>
        </a>
        <a class="link-line" href="#/ScenicDeepDetail/{{id}}">
          <img class="small-icon" src="../asset/images/pic-yellow.png" alt="">
          <p>详情</p>
          <span>></span>
        </a>
        <a class="link-line" href="tel:{{storeInfo.store_phone}}">
          <img class="small-icon" src="../asset/images/phone-red.png" alt="">
          <p>电话：{{storeInfo.store_phone}}</p>
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
            <img @click="ctrlOrderDetail($index)" style="width:1.8rem;height:1.8rem" src="{{ticketPrice.goods_image_url}}">
            <template v-if="ticketPrice.g_showprice!=='0'">
            <div  @click="bookTicket($index)" class="ticket-name" style="margin-left:15px">
              <div>
                {{ ticketPrice.goods_name }}
              </div>
              <div style="margin-top:10px">
                {{ ticketPrice.goods_jingle }}
              </div>
            </div>
            <p @click="bookTicket($index)" class="price" style="color:orangered">
                ¥{{ ticketPrice.goods_price }}
            </p>
            <div @click="bookTicket($index)" class="arrow">
              <i></i>
            </div>
            </template>
            <template v-if="ticketPrice.g_showprice==='0'">
            <div  class="ticket-name" style="margin-left:15px">
              <div>
                {{ ticketPrice.goods_name }}
              </div>
              <div style="margin-top:10px">
                {{ ticketPrice.goods_jingle }}
              </div>
            </div>
            <div class="arrow">
              <i></i>
            </div>
            </template>
          </div>
          <div v-show="orderDetailShow[$index]" class="order-detail">
            <div class="gallery">
              <div v-for="photo in ticketPrice.goods_photo" class="scenic-img-item">
                <a v-link="{path:'/Image?imageSrc='+photo}"> <img v-bind:src="photo"></a>
              </div>
            </div>
            <!-- <button @click="bookTicket($index)" class="order-button">预定</button> -->
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
        storeInfo:'',
        openTime: '09:00 - 17:00',
        stars: [],
        ticketPrices: [],
        gallery: [],
        orderDetailShow: [0, 0, 0],
        scenicLoc:'',
        userLoc:'',
        ScenicImgArr:[]
      }
    },
    methods: {
      collect(){
      $.poemPost(STORE_COLLECT_API+'&fid='+this.$route.params.id,{key:poem.getItem('key')}).done(this.collectDone);
      },
      collectDone(res){
        if(res.error){
          poemUI.toast(res.error);
        }else{
          poemUI.toast('收藏成功');
        }
      },
      ctrlOrderDetail(index) {
        let newArr = this.deepClone(this.orderDetailShow);
        newArr[index] = !this.orderDetailShow[index];
        this.orderDetailShow = newArr;
        this.$nextTick(function(){
          this.$broadcast('refresh');
        });
      },
      showDaohang:function(){
        var href = "http://m.amap.com/?from="+this.userLoc+"(from)&to="+this.scenicLoc+"(to)";
        location.href = href;
      },
      getPosition:function(){
        if (window.navigator.geolocation) { 
          var options = { 
            enableHighAccuracy: true, 
            }; 
          window.navigator.geolocation.getCurrentPosition(this.handleSuccess, this.handleError, options); 
        }else{ 
          poemUI.toast("浏览器不支持html5来获取地理位置信息"); 
        } 
      },
      handleSuccess:function(position){
        this.userLoc = position.coords.latitude.toFixed(6)+','+position.coords.longitude.toFixed(6);
      },
      handleError:function(){
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
        $.poemGet(SCENIC_DETAIL_API,{'store_id':this.$route.params.id}).done(this.initPage)
      },
      initPage(data) {
        console.log(data);
        this.storeInfo = data.store_info;
        this.scenicLoc = data.store_info.store_location_lat+','+data.store_info.store_location_lng;
        this.storeName = data.store_info.store_name;
        // this.gallery = data.goods_image;
        this.ticketPrices = data.good_list;
        // this.bgImg = data.spec_image[0];
        // this.countStar(data.evaluate_info.good_star);
        this.ScenicImgArr = data.store_info.store_slide
        // this.$nextTick(function(){
        //   this.$broadcast('refresh');
        // });
        setTimeout((function(that){return function(){that.$broadcast('refresh');}})(this),500)
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
        var goodsInfo = {
          'scenicName':this.storeName,
          'goodsName':this.ticketPrices[index].goods_name,
          'goodsPrice':this.ticketPrices[index].goods_price,
          'goodsId':this.ticketPrices[index].goods_id
        }
        this.$route.router.go({path:'/ScenicOrderForm?goodsInfo='+JSON.stringify(goodsInfo)})
      },
    },
    route: {
      data(){
        this.id = this.$route.params.id;
        this.getScenicDetail()
      }
    },
    ready() {
      this.getPosition();
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