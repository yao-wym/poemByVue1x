<template>
  <div class="flex-view" v-transition>
    <app-header title="订单提交"></app-header>
    <flex-scroll-view>
      <div class="container">
        <div v-link="{path:'/AddressList?action=chooseAddr&refer='+hash}" class="section" style="overflow: hidden;border-bottom:solid 1px #ccc;margin-bottom: 0">
          <div v-if="address" style="width: 80%;float: left;padding: 0;border: none">
            <h3><span>收货人:{{ address.true_name }}</span><span>{{ address.mob_phone }}</span></h3>
            <p>收货地址：<span>{{address.address}}</span></p>
          </div>
           <div v-else="address" style="width: 80%;float: left;padding: 0;border: none">
            <h3></h3>
            <p>选择地址<span></span></p>
          </div>
          <div style="width: 15%;text-align: center;float: right;border: none">
            >
          </div>
        </div>
        <div v-if="goodsDetail!=''" class="section" class="order-form-goods" style="overflow:hidden;;border-bottom:1px solid #ccc">
          <div style="float: left;overflow:hidden;border-bottom:none">
            <img style="width: 1rem;height: 1rem;top:0" src="{{goodsDetail.spec_image[0]}}">
          </div>
          <div style="width: 80%;float: right;border-bottom:none">
            <div>{{goodsDetail.goods_info.goods_name}}</div>
            <div>￥{{goodsDetail.goods_info.goods_price}}</div>
          </div>
        </div>
        <div v-if="goodsBuyList" v-for="goods in goodsBuyList" class="section" class="order-form-goods" style="overflow:hidden;;border-bottom:1px solid #ccc">
          <div style="float: left;overflow:hidden;border-bottom:none">
            <img style="width: 1rem;height: 1rem;top:0" src="{{goods.goods_image_url}}">
          </div>
          <div style="width: 60%;float: left;border-bottom:none">
            <div>{{goods.goods_name}}</div>
            <div>￥{{goods.goods_price}}</div>
          </div>
          <div style="float:right;overflow:hidden;border-bottom:none">
            <div>X{{goods.goods_num}}</div>
          </div>
        </div>
        <div class="section">
          <div v-if="goodsDetail!=''" class="techan-count">购买数量
            <div class="right">
              <button @click="minusTechanCount">-</button>
              {{ techanCount }}
              <button @click="addTechanCount">+</button>
            </div>
          </div>
          <div>配送方式
            <div class="right">
              快递(免运费)
            </div>
          </div>
          <div>买家留言
            <input name="contact" type="text">
          </div>
        </div>
      </div>
    </flex-scroll-view>
      <div class="footer" v-if="goodsDetail!=''">
       <div class="price" >订单金额：<span>{{ goodsDetail.goods_info.goods_price*techanCount }}</span></div> <div class="submit-btn" @click="submitOrder1()" type="button" value="提交订单"></div>
      </div>
      <div class="footer" v-else>
        <div class="price"  v-if="goodsBuyList!=''">订单金额：<span>{{ cartCount }}</span></div>
        <div class="submit-btn" @click="submitCartOrder1()" value="提交订单">提交订单</div>
      </div>
  </div>
</template>
<script>
  module.exports = {
    components: {
      'flex-scroll-view': function(resolve) {
        require(['../components/FlexScrollView.vue'], resolve);
      },
      'app-header': function(resolve) {
        require(['../components/CommonHeader.vue'], resolve);
      },
    },
    data() {
      return {
        goodsId:'',
        goodsDetail:"",
        goodsBuyList:{},
        cartBuyStr:'',
        cartCount:0,
        techanName: '',
        techanType: '',
        techanCount: 1,
        orderPrice: 0,
        hash:location.hash,
        address:poem.getObj('address')
      }
    },
    methods: {
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
        this.goodsType = res.spec_list[Object.keys(res['spec_list'])[0]];
        this.bgImg = res.spec_image[0];
      },
      addTechanCount() {
        this.techanCount += 1;
      },
      minusTechanCount() {
        if (this.techanCount < 2) {
          return;
        }
        this.techanCount -= 1
      },
      submitOrder1:function(){
        if($.isEmpty(this.address.address_id)){
          poemUI.toast('请选择收货地址');
        }
        $.poemPost(GOODS_BUY_STEP1_API,{'key':poem.getItem('key'),'cart_id':this.goodsTypeId+'|'+this.techanCount}).done(this.submitSuccess1);
      },
     
      submitSuccess1:function(res){
          if(!$.isEmpty(res.error)){
            poemUI.toast(res.error)
          }else{
            this.submitOrder2();
          }
      },  
      submitOrder2:function(){
        $.poemPost(GOODS_BUY_STEP2_API,{'key':poem.getItem('key'),'cart_id':this.goodsTypeId+'|'+this.techanCount,'address_id':this.address.address_id,'pay_name':'online'}).done(this.submitDone);
      },
      submitCartOrder1:function(){
        if($.isEmpty(this.address.address_id)){
          poemUI.toast('请选择收货地址');
        }
        $.poemPost(GOODS_BUY_STEP1_API,{'key':poem.getItem('key'),'ifcart':1,'cart_id':this.cartBuyStr}).done(this.submitCartSuccess1);
      },
      submitCartOrder2:function(){
        if($.isEmpty(this.address.address_id)){
          poemUI.toast('请选择收货地址');
        }
        $.poemPost(GOODS_BUY_STEP2_API,{'key':poem.getItem('key'),'ifcart':1,'cart_id':this.cartBuyStr,'address_id':this.address.address_id,'pay_name':'online'}).done(this.submitDone);
      },
      submitCartSuccess1:function(res){
          if(!$.isEmpty(res.error)){
            poemUI.toast(res.error)
          }else{
            this.submitCartOrder2();
          }
      }, 
      submitDone:function(res){
        if(!$.isEmpty(res.error)){
          poemUI.toast(res.error);
        }else{
          poemUI.toast('下单成功');
          this.$route.router.go({path:'/user/OrderTechan'});
        }
      },
    },
    ready:function(){
    },
    route: {
      data: function (transition) {
        if(this.$route.query['cart']!=undefined){
          this.goodsBuyList = JSON.parse(this.$route.query['cart']);
          this.cartCount = 0;
          this.cartBuyStr = "";
          for(var i=0;i<this.goodsBuyList.length;i++){
            this.cartCount+=this.goodsBuyList[i].goods_price*this.goodsBuyList[i].goods_num;
            this.cartBuyStr+=this.goodsBuyList[i].cart_id+'|'+this.goodsBuyList[i].goods_num+',';
          }
        }else{
          this.goodsId = this.$route.query.goodsId;
          this.goodsTypeId = this.$route.query.goodsType;
          this.getGoodsDetail();
        }
        if(!$.isEmpty(poem.getObj('chosenAddr'))){
          this.address = poem.getObj('chosenAddr')
        }
        // alert(JSON.stringify(this.$route.params));
        // transition.next({
        //     // 'techanName':'111'
        // })
        // this.roomInfo = JSON.parse(this.$route.query.roomInfo);
        // this.techanName = this.$route.query.techanName
    },
      canReuse:function(transition){
        //判断是否可以重用，可以则为返回true，不能重用则返回false，会实例化一个新的vue对象
      }
  },
  }
</script>
<style scoped lang="stylus">
  @import "../main.styl"
    .order-form-goods
      display:flex;
    .container
      padding-bottom: 1rem
    .section
      background: poem-white
      margin-bottom: 0.4rem
      & > div
        padding: 0.6rem 0.2rem
        border-bottom: 1px solid line-gray
      &:first-child
        padding: 0.4rem
        & h1
          margin: 0
      & img
        display: block
        float: right
        width: 0.8rem
        position: relative
        top: -0.2rem
      & input[type=text]
        height: 0.5rem;
        border: none;
        width: 60%;
        font-size: 0.4rem;
    .right
      float: right
    .techan-count
      & button
        width: 0.5rem
        height: 0.5rem
        vertical-align: middle
        background: none;
        border: 1px solid line-gray
        font-size: 0.4rem
        outline: none
    .day
      color: app-green
      display: inline-block
      float: right
    .notice
      color: text-gray
      margin-top: 1.5rem
      padding: 0 0.4rem
    .footer
      display: flex
      position: fixed
      bottom: 0
      align-items: center
      font-size: 0.5rem
      width: 100%
      background: poem-white
      & .submit-btn
        background-color:app-yellow
        height: 1rem
        line-height:1rem
        text-align:center
        font-size:.5rem
        width: 4rem
        color:app-white
        vertical-align: bottom
        border: none
        flex: 1
      & .price
        flex: 2
        padding-left: 0.4rem
        color: text-gray
        & span
          color: red

</style>