<template>
  <div class="flex-view" v-transition>
  	<flex-scroll-view>
      <app-header :title="title" :left-label="leftLabel" :right-label="rightLabel" :left-link="leftLink" :right-link="rightLink" :left-icon="leftIcon" :right-icon="rightIcon"></app-header>
  	  <p class="owned-points">可用积分 {{ points }}</p>
      <table class="points-detail">
        <tr>
          <th>详情</th>
          <th>积分</th>
          <th>日期</th>
        </tr>
        <tr v-for="pointsDetail in pointsDetails">
          <td>{{pointsDetail.way}}</td>
          <td>{{pointsDetail.points}}</td>
          <td>{{pointsDetail.date}}</td>
        </tr>
      </table>
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
  .points-detail
    width: 80%
    margin: 1rem auto
    border: 1px solid line-gray
    border-radius: .5rem
    text-align: center
    border-collapse: collapse
    & td, & th
      padding: section-padding
      border: 1px solid line-gray
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
      return {
        title: '积分详情',
        points: 90,
        pointsDetails: [
          {way: '邀请好友', points: 50, date: '2015-08-25'},
          {way: '邀请好友', points: 50, date: '2015-08-25'},
          {way: '邀请好友', points: 50, date: '2015-08-25'}
        ]
      }
    }
  }
</script>