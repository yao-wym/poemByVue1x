<template>
  <div class="flex-view" v-transition>
  <app-header :title="title" :left-label="leftLabel" :right-label="rightLabel" :left-link="leftLink" :right-link="rightLink" :left-icon="leftIcon" :right-icon="rightIcon"></app-header>
  	<flex-scroll-view>
  	  <p class="owned-points">可用积分 {{ points }}</p>
      <div class="item-list">
        <div class="item" v-for="item in itemList">
          <div class="img-wrapper"><img src="{{item.imgSrc}}" alt=""></div>
          <p>{{item.name}}</p>
          <p><span class="score-price">{{item.price}}</span>积分<button :class="{'active': item.active}">立即兑换</button></p>
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
      itemList.push({
        name: '风干牛肉干',
        imgSrc: 'http://www.56jk.com/uploads/allimg/141218/4-14121Q0233RM.jpg',
        price: 650,
        active: 1
      })
      itemList.push({
        name: '风干牛肉干',
        imgSrc: 'http://www.56jk.com/uploads/allimg/141218/4-14121Q0233RM.jpg',
        price: 650,
        active: 0
      })
      itemList.push({
        name: '风干牛肉干',
        imgSrc: 'http://www.56jk.com/uploads/allimg/141218/4-14121Q0233RM.jpg',
        price: 650,
        active: 1
      })
      return {
        title: '积分商城',
        points: 90,
        itemList: itemList
      }
    }
  }
</script>