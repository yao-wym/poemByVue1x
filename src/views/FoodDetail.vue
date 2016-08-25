<template>
  <div class="flex-view" v-transition>
    <flex-scroll-view>
      <banner banner-height="6.5rem" :img-arr="foodImgArr"></banner>
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
          <p class="price" style="color:red;font-size: .55rem">￥{{ goodsDetail.goods_info.goods_price }}</p>
          <p>价格: <span class="original-price">{{ goodsDetail.goods_info.goods_marketprice }}</span></p>
          <div class="row">
            <p>快递: {{ expressPrice }}元</p>
            <p>月销：{{ goodsDetail.goods_info.goods_salenum }}笔</p>
            <p>库存：{{ goodsDetail.goods_info.goods_storage }}</p>
          </div>
        </div>
        <a class="link-line" @click="showCategory()">
          <span style="color: orange">选择商品规格</span>
          <span class="right">></span>
        </a>
        <a class="link-line" v-link="{path:'/Comments/'+this.$route.params.id}">
          <span style="color:rgb(75, 120, 237)">评价晒单</span> 
          <!-- <span class="price-red">{{ goodsDetail.goods_info.evaluation_good_star }}</span> -->
          <span class="right">></span>
        </a>
        <a class="link-line" v-link="{path:'/GoodsDeepDetail?id='+this.$route.params.id}">
          <span style="color:rgb(81, 211, 17)">图文详情</span>
          <span class="right">></span>
        </a>
        <a class="link-line" @click="showChat()">
          <span style="color:skyblue">在线客服</span>
          <span class="right">></span>
        </a>
        <a class="link-line" v-link="{path:'/StoreGoodsList/'+goodsDetail.store_info.store_id+'?storeName='+goodsDetail.store_info.store_name}">
          <div style="margin-top: 10px;height: 1.5rem;line-height: 1.5rem;display:inline-block;vertical-align:middle">
            <img style="margin-top: 10px;border-radius: 50%;width: 1rem" src="{{ goodsDetail.store_info.avatar }}" alt="">
          </div>
          <span style="display: inline-block">{{ goodsDetail.store_info.store_name }}</span>
          <!-- <span class="price-red">{{ goodsDetail.store_info. }}分</span> -->
          <span class="right">></span>
        </a>
      <p class="contact">
        <a v-if="{{ goodsDetail.store_info.store_phone }}" href="tel:{{ goodsDetail.store_info.store_phone }}">
        <a @click="toast('暂无商家电话')" v-else>
        <img style="width: .5rem;position: relative;top:5px;margin-right:10px" src="../asset/images/contacter-green.png" alt="">
        <span>联系客服</span></a>    
        <a v-link="{path:'/StoreGoodsList/'+goodsDetail.store_info.store_id+'?storeName='+goodsDetail.store_info.store_name}">
        <img style="width: .5rem;position: relative;top:5px;margin-right:10px" src="../asset/images/home-gray.png" alt="">
        <span>进入店铺</span></a>
      </p>
    </div>
    </flex-scroll-view>
      <div class="footer">
        <div class="footer-ctrlpanel">
          <div @click="goBack()">
            <img src="../asset/images/down_back.png">
            <div href="">返回</div>
          </div>
          <div @click="collect()">
            <img src="../asset/images/collect-white.png">
            <div href="">收藏</div>
          </div>
          <div v-link="{path:'/index/cart'}">
            <img src="../asset/images/cart-white.png">
            <div href="">购物车</div>
          </div>
        </div>
        <a class="addto-cart" @click="addToCart()">加入购物车</a>
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
    },
      canReuse:function(transition){
        return false
        //判断是否可以重用，可以则为返回true，不能重用则返回false，会实例化一个新的vue对象
      }
  },
  methods:{
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
    showChat:function(){
      location.href="/chat.html?touid="+this.ywId;
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
      this.ywId = res.store_info.ywId;
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
      quantity:1,
      goodsId:'',
      goodsDetail:{},
      expressPrice: 0,
      bgImg:'',
      storeName: '',
      foodImgArr:[],
      ywId : ''
    }
  }
}
</script>

<style lang="stylus" scoped>
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
      right: -80%
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
    height: 1.5rem
    line-height: 1.5rem
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
