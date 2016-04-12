<template>
  <div class="flex-view" v-transition>
  <app-header :title="title" :left-label="leftLabel" :right-label="rightLabel" :left-link="leftLink" :right-link="rightLink" :left-icon="leftIcon" :right-icon="rightIcon"></app-header>
  	<flex-scroll-view>
  	  <p class="owned-points">可用积分 {{ points }}</p>
      <div class="item-list">
        <div class="item" v-for="item in itemList">
          <div class="img-wrapper"><img src="{{item.pgoods_image_small}}" alt=""></div>
          <p>{{item.pgoods_name}}</p>
          <p><span class="score-price">{{item.pgoods_points}}</span>积分<button @click="buy(item.pgoods_id)" :class="{'active': item.pgoods_show}">立即兑换</button></p>
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
    width: 50%
    padding: section-padding
  .img-wrapper
    padding: .8rem .4rem
    border: 1px solid line-gray
    background: poem-white
    & img
      width: 100%
  .score-price
    color: poem-red
  button
    background: #ccc
    color: #fff
    width: 1.5rem;
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

    data() {
      let itemList = [];
      return {
        title: '积分商城',
        points: null,
        itemList: itemList
      }
    },

    methods: {
      getPointsStoreList() {
        $.poemPost(POINTS_STORE_API,{
          order:"asc",curpage:this.curpage,
          key:"60669c1838e2613754ea9a466d50b89f",
          }).done(this.getPointsStoreListDone);
      },
      getPointsStoreListDone(data) {
        console.log(data)
        this.itemList = this.itemList.concat(data);
      },
      buy(pgoods_id) {
        $.poemPost(POINTS_BUY_API,{key:"60669c1838e2613754ea9a466d50b89f",
          pgoods_id: pgoods_id,
          quantity: 1,}).done(this.buyDone);
      },
      buyDone(data) {
        if (data.error) {
          alert(data.error);
          return;
        };
        return alert('兑换成功')
      }
    },

    ready() {
      $.poemPost(USER_INFO_API, {key:"60669c1838e2613754ea9a466d50b89f"}).done((data) => {
          this.points = data.member_info.point;
        })
      this.getPointsStoreList();
    }
  }
</script>