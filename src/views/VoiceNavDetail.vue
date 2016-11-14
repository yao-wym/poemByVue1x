<template>
  <div class="flex-view" v-transition>
    <flex-scroll-view>
      <banner banner-height="4.5rem" :img-arr="bannerImg"></banner>
      <header style="position: fixed;top:0;width:100%;z-index:2">
        <i @click="goBack()" style="float:left;padding: 20px">
          <img src="../asset/images/fanhui.png" style="width: .5rem">
        </i>
        <div style="float:right">
            <!-- <img src="../asset/images/icon_collect.png"> -->
            <!-- <img style="margin:0 5px" src="../asset/images/share-white.png"> -->
        </div>
      </header>
      <div style="height:94px;text-align:center;padding:0" class="link-line">
        <audio style="margin-top:35px;width:600px;height:64px" controls="controls" src="{{guideDetail.voiceurl}}">
        </audio>
      </div>
      <div class="container">
        <div style="color:#1b1b1b" class="link-line">
         {{ guideDetail.title }}
        </div>
        <div class="link-line">
          <div style="margin-bottom:10px">文字简介:</div>
          <span style="color:#1b1b1b">{{ guideDetail.content }}</span>
        </div>
        <div class="link-line">
          <div style="margin-bottom:10px">景点类型:</div>
          <span style="color:#1b1b1b">{{ guideDetail.type }}</span>
        </div>
        <div class="link-line">
          <div style="margin-bottom:10px">开放时间:</div>
          <span style="color:#1b1b1b">{{ guideDetail.otime }}</span>
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
  ready:function(){
    
  },
  data:function(){
    return{
      guideDetail:'',
      bannerImg:[]
    }
  },
  route: {
      data: function (transition) {
        this.id = this.$route.params.id;
        this.getGuideDetail();

    },
      canReuse:function(transition){
        return false
        //判断是否可以重用，可以则为返回true，不能重用则返回false，会实例化一个新的vue对象
      }
  },
  methods:{
    getGuideDetail:function(){
      $.poemGet(DAOHANG_LIST_API,{key:poem.getItem('key')}).done(this.getSuccess);
    },
    goBack:function(){
      history.back();
    },
    getSuccess:function(res){
      var guideList = res;
      for(var key in guideList){
        if(guideList[key]['id'] == this.$route.params.id){
          this.guideDetail = guideList[key];
          this.bannerImg = guideList[key]['img'].split(";");
          return;
        }
      }
    },
  }
}
</script>

<style lang="stylus">
  @import "../main.styl"
  @keyframes showSlide
    from
      right:-80%
    to
      right: 0rem
  @keyframes hiddenSlide
    from
      right:0rem
    to
      right:-80%
  .trip-detail img
    width:100%
  .slide-show
    animation:showSlide 0.5s
    right:0
  .slide-hidden
    animation:hiddenSlide 0.5s
    right:-80%
  & .poem-hidden
    right:-80%
  #category-slide
    position:fixed
    z-index:10
    width:80%
    height:100%
    background-color:white
    display:flex
    top:0
    flex-direction:column
    text-align:center
    & .slide-header
      background-color:#4BAB3A
      color:white
      width:100%
      height:1.5rem
      line-height:1.5rem
    & .slide-content
      flex:1
      width:100%
    & .slide-footer
      height:1.5rem
      line-height:1.5rem
      width:100%
      background-color:#4BAB3A
      color:white
  .scenic-header
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
  .container
    padding-bottom: .5rem
  .intro
    padding: 0 section-padding
  .row
    display: flex
    & p
      width: 33%
  .original-price
    text-decoration: line-through
  .right
    float: right
  .link-line
    display: block
    &:link, &:visited
      color: text-gray
    border-top: 1px solid line-gray
    padding: 20px
  .contact
    width: 90%
    margin: .5rem auto 1.5rem auto
    & a
      display: inline-block
      height: .8rem;
      line-height: .8rem
      background: transparent;
      font-size: .2rem;
      border: 1px solid line-gray
      border-radius: .3rem
      width: 44%
      margin: 10px
      text-align: center
      &:link, &:visited
        color: text-gray
</style>
