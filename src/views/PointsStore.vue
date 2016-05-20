<template>
  <div class="flex-view" v-transition>
  <app-header left-link="#/index/ucenter" :title="title" :left-label="leftLabel" :right-label="rightLabel" :right-link="rightLink" :left-icon="leftIcon" :right-icon="rightIcon"></app-header>
  	<flex-scroll-view>
  	  <p class="owned-points">可用积分 {{ points }}</p>
      <div class="item-list">
        <div @click="buy(item.pgoods_id)" class="item" v-for="item in itemList">
          <div class="img-wrapper"><img src="{{item.pgoods_image}}" alt=""></div>
          <p>{{item.pgoods_name}}</p>
          <p><span class="score-price">{{item.pgoods_points}}</span>积分<button :class="{'active': item.pgoods_show}">立即兑换</button></p>
        </div>
      </div>
    </flex-scroll-view>
  </div>
</template>
<style lang="stylus" scoped>
  @import "../main.styl"
  .owned-points
    color: red
    background: poem-white
    padding: section-padding
    margin: 0
  .item-list
    display: flex
    flex-wrap: wrap
  .item
    width: 45%
    padding: section-padding
  .img-wrapper
    border: 1px solid line-gray
    background: poem-white
    & img
      width: 4.5rem
      height:4.5rem
  .score-price
    color: poem-red
    padding: 3px 5px
  button
    background: #ccc
    color: #fff
    width: auto;
    height: .5rem;
    font-size: .3rem;
    border: none;
    border-radius: 10px;
    vertical-align: middle;
    float: right;
    &.active
      background: app-green

</style>
<script>
  module.exports = {
    components: {
      'flex-scroll-view': function(resolve) {
        require(['../components/FlexScrollView.vue'], resolve);
      },
      'app-header': function(resolve) {
        require(['../components/CommonHeader.vue'], resolve);
      },
      'yellow-bottom': function(resolve) {
        require(['../components/YellowBottom.vue'], resolve);
      }
    },
    route:{
      data(){
        this.address = poem.getObj('address')
      }
    },
    data() {
      let itemList = [];
      return {
        address:poem.getObj('address'),
        title: '积分商城',
        points: null,
        itemList: itemList
      }
    },

    methods: {
      getPointsStoreList() {
        $.poemPost(POINTS_STORE_API,{
          order:"asc",curpage:this.curpage,
          key:poem.getItem("key"),
          }).done(this.getPointsStoreListDone);
      },
      getPointsStoreListDone(data) {
        console.log(data)
        this.itemList = this.itemList.concat(data);
      setTimeout((function(that){return function(){that.$broadcast('refresh')}})(this),50)
        
      },
      buy(pgoods_id) {
         var r=confirm('使用默认地址\r收货人：'+this.address.true_name+"\r联系电话："+this.address.mob_phone+"\r详细地址："+this.address.address+"\r您也可以点击'取消'选择其他地址购买")
          if (r==true)
          {
             $.poemPost(POINTS_BUY_API,{key:poem.getItem("key"),
                pgoods_id: pgoods_id,
                quantity: 1,}).done(this.buyDone);
          }
          else
          {
            this.$route.router.go({path:"/AddressList?action=chooseAddr&refer="+location.hash})
          }
      },
      buyDone(data) {
        if (data.error) {
          poemUI.toast(data.error);
          return;
        };
        alert('兑换成功，工作人员将尽快为您处理该订单，请耐心等候');
      }
    },

    ready() {

      $.poemPost(USER_INFO_API, {key:poem.getItem("key")}).done((data) => {
          this.points = data.member_info.point;
        })
      this.getPointsStoreList();

    }
  }
</script>