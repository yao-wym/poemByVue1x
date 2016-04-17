<template>
  <div class="flex-view" v-transition>
  <app-header title="订单填写"></app-header>
    <flex-scroll-view>
      <div class="container">
        <div id="date"  class="section">
          <h1>{{ hotelName }}</h1>
            <p>
              时间：
              <span id="dateCheckIn">{{ checkInTime }}</span>入住-<span id="dateCheckOut">{{ checkOutTime }}</span>
              离店
              <span class="day">{{ formInfo.days }}晚</span>
            </p>
          <p>房型：{{ roomInfo.goods_name }}</p>
        </div>
        <div class="section">
          <div class="house-count">房间数
            <div class="right">
              <button @click="minusHouseCount">-</button>
              {{ quantity }}
              <button @click="addHouseCount">+</button>
            </div>
          </div>
          <!-- <div id="saveTime" style="padding-top: .5rem">
            保留到
            <input value="19:00" type="time" style="height: .6rem;width: 6rem;margin-top: -5px;margin-left: 10px;font-size: .4rem">
            <div class="right">
              
            </div>
          </div> -->
     <!--      <div>入住人
            <input name="contact" type="text">
          </div> -->
        </div>
        <div class="section">
            <input id="date-test" type="date" style="display: none ;width: 6rem;height: 1rem">
          <div>联系人
            <input type="text" v-model="contact">
            <img src="../asset/images/contacter-green.png" alt=""></div>
          <div>联系方式
            <input v-model="buyer_phone" type="text">
            <img src="../asset/images/phone-device.png" alt=""></div>
        </div>
         <!--  <div class="notice">
            <h2>温馨提示：</h2>
            <p>请在最晚到店时间以前到达，否则请在最晚到店时间以前到达，否则请在最晚到店时间以前到达，否则请在最晚到店时间以前到达，否则请在最晚到店时间以前到达，否则请在最晚到店时间以前到达，否则请在最晚到店时间以前到达，否则请在最晚到店时间以前到达，否则请在最晚到店时间以前到达，否则请在最晚到店时间以前到达，否则请在最晚到店时间以前到达，否则  </p>
          </div> -->
      </div>
    </flex-scroll-view>
      <div id="datePlugin"></div>
      <div class="footer">
        <div class="price">订单金额：<span>{{ orderPrice }}</span></div>
        <input type="text" v-model="orderPrice" style="display:none">
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
      'app-header': function(resolve) {
        require(['../components/CommonHeader.vue'], resolve);
      },
    },
    computed:{
      formInfo:function(){
        return{
            key:poem.getItem('key'),
            goods_id:this.roomInfo.goods_id,
            quantity:this.quantity,
            rcb_pay:0,
            pd_pay:0,
            days:Math.ceil((this.checkOutTimeStamp-this.checkInTimeStamp)/86400000),
            buyer_msg:Math.ceil((this.checkOutTimeStamp-this.checkInTimeStamp)/86400000)+'晚|'+this.checkInTime+'~'+this.checkOutTime+'|'+this.contact,
            contact:this.contact,
            buyer_phone:this.buyer_phone
        }
      },
      orderPrice:function(){
        return (this.quantity*this.roomInfo.goods_price*Math.ceil((this.checkOutTimeStamp-this.checkInTimeStamp)/86400000)).toFixed(2)
      }
    },
    data() {
      return {
        roomInfo:{},
        hotelName: '',
        checkInTime: (new Date()).getFullYear()+'-'+(parseInt((new Date()).getMonth())+1)+'-'+(new Date()).getDate(),
        checkOutTime: (new Date()).getFullYear()+'-'+(parseInt((new Date()).getMonth())+1)+'-'+(parseInt((new Date()).getDate())+1),
        checkInTimeStamp: (new Date()).getTime(),
        checkOutTimeStamp: (new Date()).getTime()+86400000,
        houseType: '',
        saveTo: '',
        livePerson: '',
        contact:'',
        quantity:1

      }
    },
    methods: {
      addHouseCount() {
        this.quantity += 1;
      },
      minusHouseCount() {
        if (this.quantity < 2) {
          poemUI.toast('至少要定一间房哦');
          return;
        }
        this.quantity -= 1
      },
      submitOrder(){
        $.poemPost(SUBMIT_ORDER_VR_API,this.formInfo).done(this.submitDone);
      },
      submitDone(res){
        if(!$.isEmpty(res.error)){
          poemUI.toast(res.error)
        }else{
          poemUI.toast('订单提交成功');
          this.$route.router.go({name:'orderhotel'});
        }
      },
      checkInDate(dateStr){
        this.checkInTime = dateStr;
        this.checkInTimeStamp = (new Date(dateStr)).getTime();
        //alert(this.checkInTime)
      },
      checkOutDate(dateStr){
        this.checkOutTimeStamp = (new Date(dateStr)).getTime();
        this.checkOutTime = dateStr;
      },
      saveTimeDone(timeStr){
        this.saveTime = timeStr;
      },
    },
    ready:function(){
      $("#dateCheckIn").date({'title':'请选择入住时间'},this.checkInDate);
      $("#dateCheckOut").date({'title':'请选择离店时间'},this.checkOutDate);
      this.$nextTick(function(){
         this.$broadcast('refresh');
        });
      // $("#saveTime").
      // date({'title':'保留时间','theme':'datetime'},this.saveTimeDone);
    },
    route: {
      data: function (transition) {
        // alert(JSON.stringify(this.$route.params));
        transition.next({
            // 'hotelName':'111'
        })
        
        this.roomInfo = JSON.parse(this.$route.query.roomInfo);
        this.hotelName = this.$route.query.hotelName;
    },
      canReuse:function(transition){
        //判断是否可以重用，可以则为返回true，不能重用则返回false，会实例化一个新的vue对象
      }
  },
  }
</script>
<style scoped lang="stylus">
  @import "../main.styl"
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
    .house-count
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