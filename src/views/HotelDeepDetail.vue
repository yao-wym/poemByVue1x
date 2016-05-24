<template>
  <div class="flex-view" v-transition>
  <app-header title="酒店详情"></app-header>
    <flex-scroll-view>
      <div class="section">
        <div class="address contact">
          <div class="icon">
            <img src="../asset/images/ditu.png">
          </div>
          <div>
            <h2>地址</h2>
            <p>{{ address }}</p>
          </div>
        </div>
        <div class="cellphone contact">
          <div class="icon">
            <img src="../asset/images/phone-red.png">
          </div>
          <div>
            <h2>电话</h2>
            <a href="tel:{{ phone }}"><p>{{ phone }}</p></a>
          </div>
        </div>
      </div>
      <div class="section estab">
        <div class="sub-header">
          <div class="icon">
            <img src="../asset/images/main.png">
          </div>
          <h2 class="green">酒店设施</h2>
        </div>
        <div>
          <div class="each-estab" v-for="estab in estabs">{{ estab }}</div>
        </div>
      </div>
      <div class="section intro">
        <div class="sub-header">
          <div class="icon">
            <img src="../asset/images/pinglun.png">
          </div>
          <h2 class="yellow">介绍</h2>
        </div>
        <div>
          <p>{{ intro }}</p>
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
      'app-header': function(resolve){
        require(['../components/CommonHeader.vue'], resolve);
      }
    },

    data() {
      return {
        address: '',
        phone: null,
        intro: '',
        allestabs: ['宽带上网', 'wifi覆盖', '停车场', '餐厅', '全天热水', '会议室', '健身房', '叫醒服务' ],
        estabs: []
      }
    },

    methods: {
      getHotelDeepDetail() {
        $.poemGet(HOTEL_DETAIL_API,{'store_id':this.$route.params.id}).done(this.getHotelDeepDetailDone)
      },
      getAddressDetail(info,that){
         AMap.service('AMap.Geocoder',function(){//回调函数
        //实例化Geocoder
       var geocoder = new AMap.Geocoder({
        });
        //TODO: 使用geocoder 对象完成相关功能
                //逆地理编码
        var lnglatXY=[info.store_location_lng,info.store_location_lat];//地图上所标点的坐标
        console.log(JSON.stringify(lnglatXY));
        geocoder.getAddress(lnglatXY, function(status, result) {
               console.log(JSON.stringify(result));
               console.log(JSON.stringify(status));
            if (status === 'complete' && result.info === 'OK') {
               //获得了有效的地址信息:
               //即，result.regeocode.formattedAddress
               that.address = result.regeocode.formattedAddress;
            }else{
               //获取地址失败
            }
        });  
        })
      },
      getHotelDeepDetailDone(data) {
        var info = data.store_info;
        this.phone = info.store_phone;
        // this.address = info.store_location_lat;
        this.intro = info.store_description;
        this.estabs = [];
        this.getAddressDetail(info,this);
        var store_zy = info.store_zy.split('');
        for(let i = 0; i < store_zy.length; i++){
          if (store_zy[i] == 1) {
            this.estabs.push(this.allestabs[i]);
          }
        }
      }
    },

    route: {
      data() {
        this.getHotelDeepDetail();
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import "../main.styl"
  .flex-view
    background: #efefef
  p
    color: text-gray
  h2
    font-size: 0.45rem
    font-weight: normal
  .section
    background: poem-white;
    margin: 0.4rem 0;
  .address
    padding: 0.4rem;
    border-bottom: 1px solid line-gray
    & h2
      color: #28a7e1
  .cellphone
    padding: 0.4rem;
    & h2
      color: #ec6762
  .contact
    display: flex
    h2
      margin: 0
    p
      margin-bottom: 0
  .icon
    width: 1rem
    & img
      width: 0.5rem
      height: auto
  .sub-header
    display: flex
    h2
      margin: 0
  .estab
    .icon
      padding: .4rem 0 0 .4rem
    h2
      padding: 0.4rem 0
    overflow: hidden
    .each-estab
      width: 25%
      height: 1.5rem
      box-sizing:border-box
      line-height: 1.5rem
      text-align: center
      border: 1px solid line-gray
      border-left: none
      float: left

  .intro
    padding: 0.4rem
    p
      text-indent: 0.4rem
  .green
    color: app-green
  .yellow
    color: app-yellow
</style>