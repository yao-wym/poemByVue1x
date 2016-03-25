<template>
  <div class="flex-view" v-transition>
    <flex-scroll-view>
      <div id="uc-container">
        <header class="uc-header">
          <div>
            <img src="../asset/images/user-white.png">
            <p></p>
          </div>
        </header>
        <section class="li-section">
          <div class="li-label"><a href="">
              <div class="icon">
                <img src="../asset/images/star-red-full.png">
              </div>
              <div class="title">{{hotelName}}</div>
              <div clase="arrow">
              </div>
            </a></div>
          <div class="li-label"><a href="">
              <div class="icon">
                <img src="../asset/images/star-red-full.png">
              </div>
              <div class="title">我的订单</div>
              <div clase="arrow">
              </div>
            </a></div>
            <div class="li-label"><a href="">
              <div class="icon">
                <img src="../asset/images/star-red-full.png">
              </div>
              <div class="title">我的订单</div>
              <div clase="arrow">
              </div>
            </a></div>
        </section>
        <section class="li-section" style="margin-top: 10px">
          <div class="li-label"><a href="">
              <div class="icon">
                <img src="../asset/images/star-red-full.png">
              </div>
              <div class="title">我的订单</div>
              <div clase="arrow">
              </div>
            </a></div>
          <div class="li-label"><a href="">
              <div class="icon">
                <img src="../asset/images/star-red-full.png">
              </div>
              <div class="title">我的订单</div>
              <div clase="arrow">
              </div>
            </a></div>
            <div class="li-label"><a href="">
              <div class="icon">
                <img src="../asset/images/star-red-full.png">
              </div>
              <div class="title">我的订单</div>
              <div clase="arrow">
              </div>
            </a></div>
        </section>
      </div>
    </flex-scroll-view>
  </div>
</template>

<script>

	module.exports = {
  replace: true,
  data:function(){
    return {
      'hotelName':'123'
    }
  },
  methods:{
    getHotelDetail:function(){
      $.fn.poemGet(HOTEL_DETAIL_API,{'store_id':this.$route.params.hotelId}).done(this.initPage)
    },
    initPage:function(res){
      if(res.store_info){
        this.hotelName = res.store_info.store_name
      }
    }
  },
  components: {
    'flex-scroll-view': function(resolve) {
      require(['../components/FlexScrollView.vue'], resolve);
    },
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
  #uc-container
    background-color:rgb(238,238,238)
  .uc-header
    background:url(../asset/images/news.png)
    text-align:center
    padding-top:1rem
    padding-bottom:.6rem
    color:white
  .arrow
    background:url(../asset/images/right_icon.png)
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
      & .icon
        width:.3rem
        height:.3rem
        margin-right:10px
        & img
          width:100%
      & .arrow
        width:.5rem
        height:.5rem


</style>