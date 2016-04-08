<template>
  <div class="flex-view" v-transition>
    <flex-scroll-view>
      <div class="container">
        <div class="section">
          <h3><span>收货人:{{ techanName }}</span><span>{{ techanName }}</span></h3>
          <p>收货地址：<span>123</span></p>
        </div>
        <div class="section" class="order-form-goods">
          <div>
            <img src="{{goodsDetail.goods_info.spec_image}}">
          </div>
          <div>
            <div>{{goodsDetail.goods_info.goods_name}}</div>
            <div>{{goodsDetail.goods_info.goods_price}}</div>
          </div>
        </div>
        <div class="section">
          <div class="techan-count">购买数量
            <div class="right">
              <button @click="minusTechanCount">-</button>
              {{ goodsNum }}
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
      <div class="footer">
        <div class="price">订单金额：<span>{{ goodsDetail.goods_info.goods_price }}</span></div>
        <input @click="submitOrder()" type="button" value="提交订单">
      </div>
  </div>
</template>
<script>
  module.exports = {
    components: {
      'flex-scroll-view': function(resolve) {
        require(['../components/FlexScrollView.vue'], resolve);
      },
    },
    data() {
      return {
        formInfo:{
          key:poem.getItem('key'),
          // goods_id:JSON.parse(this.$route.query.roomInfo).goods_id,
          goodsId:'',
          quantity:1,
          buyer_phone:'',
          rcb_pay:0,
          pd_pay:0,
          buyer_msg:'',
          days:1,
          rooms:1,
          contact:'',
        },
        goodsId:'',
        goodsDetail:{},
        goodsNum:1,
        addressId:181,
        roomInfo:{},
        techanName: '',
        checkInTime: '8月13日',
        checkOutTime: '8月14日',
        daysz: 1,
        techanType: '',
        techanCount: 1,
        saveTo: '',
        livePerson: '',
        contactPerson: '',
        contactWay: '',
        orderPrice: 66666
      }
    },
    methods: {
      addTechanCount() {
        this.techanCount += 1;
      },
      minusTechanCount() {
        if (this.techanCount < 2) {
          alert('至少要定一间房哦');
          return;
        }
        this.techanCount -= 1
      },
      submitOrder1(){
        $.poemPost(GOODS_BUY_STEP1_API,{'key':poem.getItem('key'),'cart_id':this.goodsTypeId+'|'+this.goodsNum}).done(function(res){
          if(!$.isEmpty(res.error)){
            poemUI.toast(res.error)
          }else{
            this.submitOrder2();
          }
        });
      },
      submitOrder2(){
        $.poemPost(GOODS_BUY_STEP2_API,{'key':poem.getItem('key'),'cart_id':this.goodsTypeId+'|'+this.goodsNum,'address_id':this.addressId,'pay_name':'online'}).done(function(res){
          if(!$.isEmpty(res.error)){
            poemUI.toast(res.error);
          }else{
            poemUI.toast('下单成功');
          }
        });
      },
    },
    ready:function(){
      this.goodsId = this.$route.query.goodsId;
      this.goodsTypeId = this.$route.query.goodsType;
    },
    route: {
      data: function (transition) {
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
        padding: 0.6rem 0.4rem
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
      & input
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