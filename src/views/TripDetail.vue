<template>
  <div class="flex-view" v-transition>
    <flex-scroll-view>
      <banner banner-height="4.5rem" :img-arr="foodImgArr"></banner>
      <header style="position: fixed;top:0;width:100%;z-index:2">
        <i @click="goBack()" style="float:left;padding: 20px">
          <img src="../asset/images/fanhui.png" style="width: .5rem">
        </i>
        <div style="float:right">
            <!-- <img src="../asset/images/icon_collect.png"> -->
            <!-- <img style="margin:0 5px" src="../asset/images/share-white.png"> -->
        </div>
      </header>
      <div class="container">
        <div class="intro">
          <p>{{ goodsDetail.goods_info.goods_name }}</p>
          <p>
          <span class="price" style="color:red;font-size: .55rem">{{ goodsDetail.goods_info.goods_price }}</span>
          <span class="original-price">原价:{{ goodsDetail.goods_info.goods_marketprice }}</span>
          </p>
        </div>
        <a class="link-line" v-link="{path:'/Comments/'+this.$route.params.id}">
          <span style="color:rgb(75, 120, 237)">评价晒单</span> 
          <!-- <span class="price-red">{{ goodsDetail.goods_info.evaluation_good_star }}</span> -->
          <span class="right">></span>
        </a>
        <a class="link-line">
          <span style="color:rgb(81, 211, 17)">图文详情</span>
        </a>
        <div class='trip-detail'>
          {{{detailHtml}}}
        </div>
    </div>
    </flex-scroll-view>
      <div class="footer">
        <div class="footer-ctrlpanel">
          <div @click="collect()">
            <img style="margin-top:15px" src="../asset/images/collect-white.png">
          </div>
          <div v-link="{path:'/index/cart'}">
            <img style="margin-top:15px" src="../asset/images/cart-white.png">
          </div>
        </div>
        <a style="background:#1080ab" class="addto-cart" href="tel:{{goodsDetail.store_info.store_phone}}">客户咨询</a>
        <a style="background:#f59251" class="addto-cart" @click="buy()">立即购买</a>
        <!-- <a @click="buy()" class="buy-now">立即购买</a> -->
      </div>
      <div id="poem-mask" class="poem-hidden" v-on:click="hiddenMask"></div>
      <div id="category-slide" class="poem-hidden">
        <header class="slide-header" style="">商品规格</header>
        <div class="slide-content" style="">
          <div>
            <div style="float:left;overflow:hidden;width:2rem;height:2rem;">
              <img style="width:1.5rem;height:1.5rem;margin-top:0.25rem" src="{{goodsDetail.goods_image[0]}}">
            </div>
            <div style="width:100%;text-align:left">
              <p>{{ goodsDetail.goods_info.goods_name }}</p>
              <p><span style="color:red">¥{{ goodsDetail.goods_info.goods_price }}</span></p>
            </div>
          </div>
          <ul style="text-align:center;margin-top:1rem">
            <li @click="selectGoodsType(goodsType.goods_id)" v-for="goodsType in goodsDetail.relate_goods" style="width:70%;background-color:#4BAB3A;color:white;margin:0 auto;margin-top:20px;height:.5rem;padding:5px 2px;border-radius:10px">
              <span> {{goodsType.goods_name}}</span>
            </li>
          </ul>
        </div>
        <div class="slide-footer" @click="addToCart()">加入购物车</div>
      </div>
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
    // this.goodsId = this.$route.params.id;
    // this.getGoodsDetail();
  },
  route: {
      data: function (transition) {
        $('#category-slide').addClass("poem-hidden");
        $('#category-slide').removeClass("slide-hidden");
        this.goodsId = this.$route.params.id;
        this.getGoodsDetail();
        $.poemGet(GOODS_DEEP_DETAIL_API,{'goods_id':this.goodsId}).done(this.getDetaiDone);
    },
      canReuse:function(transition){
        return false
        //判断是否可以重用，可以则为返回true，不能重用则返回false，会实例化一个新的vue对象
      }
  },
  methods:{
    getDetaiDone:function(res){
        this.detailHtml = res;
    },
    showCategory:function(){
      $('#poem-mask').removeClass("poem-hidden");
      $('#poem-mask').addClass('poem-mask');
      $("#category-slide").removeClass("poem-hidden");
      $("#category-slide").removeClass("slide-hidden");
      $("#category-slide").addClass("slide-show");
    },
    hiddenMask:function(){
      $("#category-slide").removeClass("peom-hidden");
      $('#poem-mask').removeClass("poem-mask");
      $('#poem-mask').addClass('poem-hidden');
      $('#category-slide').addClass('poem-hidden');
      $("#category-slide").removeClass("slide-show");
      $("#category-slide").addClass("slide-hidden");
    },
    selectGoodsType:function(goodsId){
      this.goodsId = goodsId;
      this.getGoodsDetail();
    },
    goBack:function(){
      history.go(-1);
    },
    toast:function(){
      poemUI.toast('暂无商家电话');
    },
    collect(){
      $.poemPost(GOODS_COLLECT_API,{key:poem.getItem('key'),goods_id:this.$route.params.id}).done(this.collectDone);
      },
    collectDone(res){
      if(res.error){
        poemUI.toast(res.error);
      }else{
        poemUI.toast('收藏成功');
      }
    },
    addToCart:function(){
      $.poemPost(CART_ADD_API,{'key':poem.getItem('key'),'goods_id':this.goodsId,'quantity':this.quantity}).done(function(res){
        if(res.error){
          poemUI.toast(res.error);
        }else{
          poemUI.toast('添加成功');
        }
      });
    },
    getGoodsDetail:function(){
      $.poemGet(GOODS_DETAIL_API,{'goods_id':this.goodsId}).done(this.getDone);
    },
    getDone:function(res){
      if(res.error){
        poemUI.toast("商品已下架");
        this.goBack();
        return;
      }

      this.goodsDetail = res;
      // this.goodsType = res.spec_list[Object.keys(res['spec_list'])[0]];
      this.foodImgArr = res.goods_image;
      this.$nextTick(function(){
        // this.$broadcast('refresh');
      });
      setTimeout((function(that){return function(){that.$broadcast('refresh');}})(this),500)
    },
    buy:function(res){
        this.$route.router.go({path:'/TechanOrderForm?goodsId='+this.goodsId+'&goodsType='+this.goodsId});
    }
  },
  data() {
    return {
      goodsDetail:'',
      quantity:1,
      goodsId:'',
      goodsDetail:{},
      expressPrice: 0,
      bgImg:'',
      storeName: '',
      foodImgArr:[],
      detailHtml:''
    }
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
    height: 1.3rem
    line-height: 1.3rem
    border-top: 1px solid line-gray
    padding: 0 section-padding
  .contact
    width: 90%
    margin: .5rem auto 1.5rem auto
    & a
      display: inline-block
      height: .8rem;
      line-height: .8rem
      background: transparent;
      font-size: .4rem;
      border: 1px solid line-gray
      border-radius: .3rem
      width: 44%
      margin: 10px
      text-align: center
      &:link, &:visited
        color: text-gray
  .price-red
    color: poem-red
    padding-left: .4rem
  .footer
    display: flex
    height: 1rem
    line-height: 1rem
    width: 100%;
    .footer-ctrlpanel
      width: 50%
      background: #aaa
      color: #fff
      display:flex
      &>div
        flex:1
        text-align:center
        color:white
        &>div
          line-height:0px
          margin-top:-.35rem
        & img
          width:35%
          height:35%
    .addto-cart
      background: #50C850
      color: #fff
      width: 50%
      text-align: center
    .buy-now
      background: app-yellow
      color: #fff
      width: 25%
      text-align: center
</style>
