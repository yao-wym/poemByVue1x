<template>
  <div class="flex-view" v-transition>
    <flex-scroll-view>
      <div id="hotel-container"\>
        <div class="hotel-header" style="background-image:url({{bgImg}})">
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
            <p>{{hotelName}}</p>
          </div>
        </div>
        <section class="li-section">
          <div class="li-label">
          <a v-link="{path:'/Comments/'+this.$route.params.hotelId}">
              <div class="icon">
                <img src="../asset/images/comments-green.png">
              </div>
              <div class="title">评论</div>
                  <div class="arrow">
                <i></i>
              </div>
            </a></div>
            <div class="li-label">
           <a  v-link="{path:'/MapView?pos='+hotelLoc+'&title='+hotelName+'&markName='+hotelName+'&hotelId='+$route.params.hotelId}">
              <div class="icon">
                <img src="../asset/images/ditu.png">
              </div>
              <div class="title">
                <span style="margin-right:20px">地图</span>
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
              <div class="title">详情</div>
                <div class="arrow">
                <i></i>
              </div>
            </a></div>
              <div class="li-label">
             <a v-link="{path:'/FoodList'}">
              <div class="icon">
                <img src="../asset/images/fun-yellow.png">
              </div>
              <div class="title">吃喝玩乐</div>
                <div class="arrow">
                <i></i>
              </div>
            </a></div>
        </section>
        <section class="li-section" style="margin-top: 10px;position: relative">
          <div id="date" style="display: ;position:absolute;width:100%;top:1rem"></div>
          <div class="li-label">
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
          </div>
            <ul class="hotel-room-list">
             
          <div class="li-room" v-for="room in roomList">
              <a>
                <div class="room-img">
                  <img src="{{room.goods_image_url}}">
                </div>
                <div class="room-info">
                  <p>{{room.goods_name}}</p>
                  <p>{{room.goods_jingle}}</p>
                </div>
                <div class="room-price">
                  <span>¥</span><span style="color:red;font-size:.4rem">{{room.goods_salenum}}</span><span>起</span>
                </div>
                  <div class="arrow">
                  <i></i>
                </div>
              </a>
              <div class="room-detail">
                <div class="hotel-room-img-list">
                <div v-for="photo in room.goods_photo" class="room-img-item">
                  <img src="{{photo}}">
                </div>
              </div>
              <div style="overflow:hidden">
                <button @click="bookRoom($index)" class="book-btn" style="float:right">预定</button>
              </div>
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
      'hotelName':'123',
      'bgImg':'',
      'hotelLoc':'',
      'roomList':[]
    }
  },
  methods:{
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
    initPage:function(res){
      if(res.store_info){
        this.hotelName = res.store_info.store_name;
        this.hotelLoc = res.store_info.store_location_lat+','+res.store_info.store_location_lng;
        this.bgImg = res.store_info.store_label;
        this.roomList = res.good_list;
        this.$nextTick(function(){
          this.$broadcast('refresh');
        });
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
        //判断是否可以重用，可以则为返回true，不能重用则返回false，会实例化一个新的vue对象
      }
  },
  ready:function(){
    
    this.$broadcast('refresh');
  }
}
</script>

<style lang="stylus">
  @import "../main.styl"
room-item-height=1.5rem

  #hotel-container
    background-color:rgb(238,238,238)
    & a
      color:text-gray
    & .hotel-header
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
  .li-section
    background-color:white
  .li-section .li-label
    height:1rem
    padding:0 10px
    line-height:1rem
    width:100%
    display:-webkit-box
    display: -webkit-box; /* Safari */
    font-size: .3rem
    color:poem-text-gray
    & a
      width:100%
      display:-webkit-box
      display: -webkit-box; /* Safari */
      & .title
        -webkit-box-flex: 1
        flex:1
        border-bottom:solid 1px line-gray
      & .icon
        width:.3rem
        height:.3rem
        margin-right:10px
        & img
          width:100%
      & .arrow
        border-bottom:solid 1px line-gray
        height:1rem
        background:none
        & i
          margin-top:.3rem
          line-height:1rem
          display:block
          width:.3rem
          height:@width
          background-size:100%
          background-image:url(../asset/images/right_icon.png)
  .hotel-room-list
    & .li-room
      border-bottom:solid 1px line-gray
    & .li-room a
      font-size: .25rem
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
          height:@width
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