<template>
    <flex-scroll-view>
      <div id="uc-container">
        <header class="uc-header">
          <div>
            <img v-link="{path:'/SelfInfo'}" style="width: 2rem" src="../asset/images/my-circle.png">
            <p v-if="key" style="margin-top:10px;color:white">{{username}}</p>
            <p v-link="{path:'/Login'}" v-else style="margin-top:10px;color:white">登陆</p>
          </div>
        </header>
        <div v-="key">
          <section class="li-section">
          <div class="li-label"><a>
              <div class="icon">
                <img src="../asset/images/order-yellow.png">
              </div>
              <div style="color:#565454" class="title">我的订单</div>
            </a></div>
          <div class="li-label"><a v-link="{name:'orderhotel'}">
              <div class="icon">
                <img src="../asset/images/hotel-blue.png">
              </div>
              <div class="title">酒店景点订单</div>
              <div class="arrow">
              <i></i>
              </div>
            </a></div>
            <div class="li-label"><a v-link="{name:'ordertechan'}">
              <div class="icon">
                <img src="../asset/images/techan.png">
              </div>
              <div style="border-bottom: none" class="title">特产订单</div>
              <div class="arrow">
              <i></i>
              </div>
            </a></div>
        </section>
        <section class="li-section" style="margin-top: 15px">
        <!--  <div class="li-label"><a v-link="{name:'addressList'}">
              <div class="icon">
                <img src="../asset/images/star-red-full.png">
              </div>
              <div class="title">我的地址</div>
              <div class="arrow">
              <i></i>
              </div>
            </a></div> -->
          <div class="li-label"><a v-link="{path:'/CollectList'}">
              <div class="icon">
                <img src="../asset/images/collect-red.png">
              </div>
              <div class="title">收藏</div>
              <div class="arrow">
              <i></i>
              </div>
            </a></div>
         <!--  <div class="li-label"><a href="">
              <div class="icon">
                <img src="../asset/images/invite-friends.png">
              </div>
              <div class="title">邀请好友</div>
              <div class="arrow">
              <i></i>
              </div>
            </a></div> -->
            <div class="li-label"><a href="#/PointsDetail">
              <div class="icon">
                <img src="../asset/images/score-detail.png">
              </div>
              <div class="title">积分详情</div>
              <div class="arrow">
              <i></i>
              </div>
            </a></div>
            <div class="li-label"><a href="#/PointsStore">
              <div class="icon">
                <img src="../asset/images/score-exchange.png">
              </div>
              <div style="border-bottom: none" class="title">积分兑换</div>
              <div class="arrow">
              <i></i>
              </div>
            </a></div>
        </section>
     
        </div>
         <section class="li-section" style="margin-top: 15px">
          <div  class="li-label"><a href="#/About">
              <div class="icon">
                <img src="../asset/images/about-us.png">
              </div>
              <div style="border-bottom: none" class="title">关于我们</div>
              <div class="arrow">
              <i></i>
              </div>
            </a></div>
          <div class="li-label"><a href="tel:010-57221838">
              <div class="icon">
                <img src="../asset/images/help-suggest.png">
              </div>
              <div class="title">客服帮助</div>
              <div class="arrow">
              <i></i>
              </div>
            </a></div>
        </section>

        <section class="li-section" style="margin-top: 15px">
          <div class="li-label"><a href="#/Setting">
              <div class="icon">
                <img src="../asset/images/setting-yellow.png">
              </div>
              <div class="title">设置</div>
              <div class="arrow">
              <i></i>
              </div>
            </a></div>
            <!-- <div class="li-label"><a href="#/SelfInfo">
              <div class="icon">
                <img src="../asset/images/help-suggest.png">
              </div>
              <div style="border-bottom: none" class="title">个人资料</div>
              <div class="arrow">
              <i></i>
              </div>
            </a></div> -->
        </section>
      </div>
    </flex-scroll-view>
</template>

<script>

	module.exports = {
  replace: true,
  data:function(){
    return{
      'username':poem.getItem('username'),
      'key':false
    }
  },
  components: {
    'app-header': require('../components/CommonHeader.vue'),
    'app-pane': require('../components/IndexHomePane.vue'),
    'index-tab': require('../components/IndexTab.vue'),
    'flex-scroll-view': require('../components/FlexScrollView.vue'),
  },
  ready:function(){
    this.key = poem.getItem("key");
    // setTimeout((function(that){return function(){that.$broadcast('refresh');}})(this),500)
  },
  route:{
    data(transition){
       transition.next({
            key:poem.getItem('key'),
            username:poem.getItem('username')
        });
       this.$broadcast('refresh');
    }
  }
}
</script>

<style lang="stylus" scoped>
  #uc-container
    background-color:rgb(238,238,238)
    .uc-header
      background:url(../asset/images/my-bg.png)
      text-align:center
      padding-top:.4rem
      padding-bottom:.3rem
      color:white
    .li-section
      background-color:white
    .li-section .li-label
      height:1.2rem
      padding:0 10px
      line-height:1.2rem
      width:100%
      display:-webkit-box
      font-size: .4rem
      color:poem-text-gray
      & a
        width:100%
        display:-webkit-box
        display: -webkit-box; /* Safari */
        & .title
          -webkit-box-flex: 1
          flex:1
          padding-left:10px
        & .icon
          width:.5rem
          height:.5rem
          padding:5px
          margin-left:10px
          & img
            width:.5rem
        & .arrow
          height:.5rem
          background:none
          width:0.5rem
          border-bottom:none
          & i
            margin-top:.3rem
            line-height:room-item-height
            display:block
            width:.3rem
            height:@width
            background-size:100%
            background-image:url(../asset/images/right_icon.png)
</style>