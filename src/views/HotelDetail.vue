<template>
  <div class="flex-view">
    <flex-scroll-view>
      <div id="hotel-container">
        <banner banner-height="6.5rem" :img-arr="HotelImgArr"></banner>
          <header style="position: fixed;top:0;width:100%;z-index:2">
            <i @click="goBack()" style="float:left;padding: 20px">
              <img src="../asset/images/fanhui.png" style="width: .5rem">
            </i>
            <div style="float:right">
                <img @click="collect()" src="../asset/images/collection_icon.png" style="width: .7rem;height: .7rem;margin:15px">
                <!-- <img style="margin:0 5px" src="../asset/images/share-white.png"> -->
            </div>
          </header>
          <div style="position: fixed;top:5.5rem;width:100%;z-index:2;margin-left:10px;color:white;font-size: .4rem">
            <p>{{hotelName}}</p>
          </div>
        <section class="li-section">
          <div class="li-label">
          <a v-link="{path:'/Comments/'+this.$route.params.hotelId}">
              <div class="icon">
                <img src="../asset/images/comments-green.png">
              </div>
              <div style="color:rgb(85, 182, 111)" class="title">评论</div>
                  <div class="arrow">
                <i></i>
              </div>
            </a></div>
            <div class="li-label">
           <!-- <a v-link="{path:'/MapView?pos='+hotelLoc+'&title='+hotelName+'&markName='+hotelName+'&hotelId='+$route.params.hotelId}"> -->
           <a @click="showDaohang">
              <div class="icon">
                <img src="../asset/images/ditu.png">
              </div>
              <div class="title">
                <span style="color:rgb(65, 143, 232)" style="margin-right:20px">导航</span>
                <span></span>
              </div>
                <div class="arrow">
                <i></i>
              </div>
            </a></div>
            <div class="li-label">
            <a v-link="{path:'/HotelDeepDetail/'+this.$route.params.hotelId}">
              <div class="icon">
                <img src="../asset/images/pic-yellow.png">
              </div>
              <div style="color:orange" class="title">详情</div>
                <div class="arrow">
                <i></i>
              </div>
            </a></div>
              <div class="li-label">
             <a v-link="{path:'/FoodList/'+this.$route.params.hotelId}">
              <div class="icon">
                <img src="../asset/images/fun-yellow.png">
              </div>
              <div style="color:orange" class="title">吃喝玩乐</div>
                <div class="arrow">
                <i></i>
              </div>
            </a></div>
        </section>
        <section class="li-section" style="margin-top: 10px;position: relative">
          <div id="date" style="display: ;position:absolute;width:100%;top:1rem"></div>
          <!-- <div class="li-label">
          <a>
              <div class="icon">
                <img src="../asset/images/icon_calender.png">
              </div>
              <div class="title">
              <span>3月10日入住－3月20日离店</span><span>共一晚</span></div>
      
                <div class="arrow">
                <i></i>
              </div>
            </a>
          </div> -->
            <ul class="hotel-room-list">
             
          <div class="li-room" v-if="room['gc_id_1']==1103" v-for="room in roomList">
              <a>
                <div class="room-img">
                <img @click="ctrlRoomDetail($index)" v-bind:src="room.goods_image_url">
                </div>
                <template v-if="room.g_showprice!=='0'">
                  <div @click="bookRoom($index)" class="room-info">
                  <p>{{room.goods_name}}</p>
                  <p>{{room.goods_jingle}}</p>
                </div>
                <div @click="bookRoom($index)" class="room-price">
                  <span>¥</span><span style="color:red;font-size:.4rem">{{room.goods_price}}</span><span>起</span>
                </div>
                </template>
                <template v-if="room.g_showprice==='0'">
                  <div class="room-info">
                  <p>{{room.goods_name}}</p>
                  <p>{{room.goods_jingle}}</p>
                </div>
                </template>
                  <div class="arrow">
                  <i></i>
                </div>
              </a>
              <div v-show="roomDetailShow[$index]" class="room-detail">
                <div class="hotel-room-img-list">
                <div style="margin-left: 10px;overflow: hidden" v-for="photo in room.goods_photo" class="room-img-item">
                  <a v-link="{path:'/Image?imageSrc='+photo}"> <img v-bind:src="photo"></a>
                </div>
              </div>
              <!-- div style="overflow:hidden">
                <button class="book-btn" style="float:right">预定</button>
              </div> -->
              </div> 
            </ul>
        </section>
      </div>
    </flex-scroll-view>
    <!-- <date-picker></date-picker> -->
  </div>
</template>

<script>

module.exports = {
  replace: true,
  data:function(){
    return {
      'hotelName':'',
      'bgImg':'',
      'hotelLoc':'',
      'roomList':[],
      'HotelImgArr':[],
      'roomDetailShow':{},
      'userLoc':''
    }
  },
  methods:{
    collect(){
      $.poemPost(STORE_COLLECT_API+'&fid='+this.$route.params.hotelId,{key:poem.getItem('key')}).done(this.collectDone);
    },
    collectDone(res){
      if(res.error){
        poemUI.toast(res.error);
      }else{
        poemUI.toast('收藏成功');
      }
    },
    ctrlRoomDetail(index) {
        // this.roomDetailShow[index] = (this.roomDetailShow[index]+1)%2;
        let newArr = this.deepClone(this.roomDetailShow);
        newArr[index] = !this.roomDetailShow[index];
        this.roomDetailShow = newArr;
        this.$nextTick(function(){
          this.$broadcast('refresh');
        });
      },
    deepClone(arr) {
      let result = [];
      for (let i=0; i<arr.length; i++){
        result[i] = arr[i];
      }
      return result;
    },
    showDate:function(){
      // $('#date').DatePicker({
      //   flat: true,
      //   date: '2008-07-31',
      //   current: '2008-07-31',
      //   calendars: 1,
      //   starts: 1
      // });
    },
    goBack:function(){
      history.go(-1)
    },
    getHotelDetail:function(){
      $.poemGet(HOTEL_DETAIL_API,{'store_id':this.$route.params.hotelId}).done(this.initPage)
    },
    showDaohang:function(){
      var href = "http://m.amap.com/?from="+this.userLoc+"(from)&to="+this.hotelLoc+"(to)";
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
    initPage:function(res){
      if(res.store_info){
        this.hotelName = res.store_info.store_name;
        this.hotelLoc = res.store_info.store_location_lat+','+res.store_info.store_location_lng;
        this.bgImg = res.store_info.store_label;
        this.roomList = res.good_list;
        this.roomDetailShow = new Array(this.roomList.length);
        for(var i=0;i<this.roomList.length;i++){
          this.roomDetailShow[i] = 0;
        }
        this.HotelImgArr = res.store_info.store_slide;
        // this.$nextTick(function(){
        //   this.$broadcast('refresh');
        // });
        setTimeout((function(that){return function(){that.$broadcast('refresh');}})(this),500)
      }
    },
    bookRoom:function(key){
      this.$route.router.go('/HotelOrderForm/'+this.roomList[key].goods_id+"?roomInfo="+JSON.stringify(this.roomList[key])+'&hotelName='+this.hotelName);
    },
  },
  components: {
    'flex-scroll-view': function(resolve) {
      require(['../components/FlexScrollView.vue'], resolve);
    },
    'banner': function(resolve) {
      require(['../components/BannerView.vue'], resolve);
    },
    // 'date-picker': function(resolve) {
    //   require(['../components/DatePicker.vue'], resolve);
    // },
  },
    route: {
      data: function (transition) {
        // alert(JSON.stringify(this.$route.params));
        transition.next({
            // 'hotelName':'111'
        })

        this.getHotelDetail();
    },
      canReuse:function(transition){
        //return false
        //判断是否可以重用，可以则为返回true，不能重用则返回false，会实例化一个新的vue对象
      }
  },
  ready:function(){
    this.$broadcast('refresh');
    this.getPosition();
  }
}
</script>

<style lang="stylus" scoped>
  @import "../main.styl"
room-item-height=1.5rem
label-height=1.2rem
  #hotel-container
    background-color:rgb(238,238,238)
    & a
      color:text-gray
    & .hotel-header
      background-size:100% 100%
      text-align:center
      height:5rem
      padding-bottom:.6rem
      color:white
      position:relative
      & header
        padding:10px
        & img
          height:0.5rem
  .li-section
    background-color:white
  .li-section .li-label
    height:label-height
    line-height:label-height
    width:100%
    display:flex
    align-items:center
    font-size: .4rem
    color:poem-text-gray
    & a
      width:100%
      display:flex
      & .title
        -webkit-box-flex: 1
        flex:1
        border-bottom:solid 1px line-gray
      & .icon
        width:.5rem
        height:label-height
        line-height:label-height
        margin-right:20px
        margin-left:10px
        & img
          margin-top:.35rem
          width:.5rem
      & .arrow
        height:label-height
        background:none
        width:.5rem
        & i
          margin:.5rem auto
          line-height:label-height
          display:block
          width:.35rem
          height:@width
          background-size:100%
          background-image:url(../asset/images/right_icon.png)
  .hotel-room-list
    & .li-room
      border-bottom:solid 1px line-gray
    & .li-room a
      font-size: .35rem
      padding:0 10px
      height:room-item-heigth
      display:flex
      & .room-img
        width:room-item-height
        height:room-item-height
        line-height:room-item-height
        text-align:center
        padding:3px
        & img
          margin:0 auto
          width:1.4rem
          height:@width
      & .room-info
        flex:1
      & .room-price
        height:room-item-height
        line-height:room-item-height
        margin-right:10px
        font-size:.3rem
      & .arrow
        height:room-item-height
        background:none
        width:0.5rem
        & i
          margin-top:.6rem
          line-height:room-item-height
          display:block
          width:.3rem
          height:@width
          background-size:100%
          background-image:url(../asset/images/right_icon.png)
  .room-detail
    background-color:rgb(250,250,250)
    & .hotel-room-img-list
      display:inline-block
      padding 10px 0
      height :2.2rem
      overflow hidden
      & div
        width:25%
        margin-left:-3px
        float:left
        padding 10px
        text-align:center
        & img
          width:2rem
          height:1.6rem
          margin:3px auto
          border-radius:5px
    & .book-btn
      font-size:.3rem
      background:app-yellow
      color:white
      border:none
      border-radius:5px
      padding:10px 15px
      margin:10px 20px
</style>