<template>
  <div class="flex-view" v-transition>
    <app-header :title="title" :left-label="leftLabel" :right-label="rightLabel" :left-link="leftLink" :right-link="rightLink" :left-icon="leftIcon" :right-icon="rightIcon"></app-header>
  	<flex-scroll-view>
  	  <p class="owned-points">可用积分 {{ points }}</p>
      <table class="points-detail">
        <tr>
          <th>详情</th>
          <th>积分</th>
          <th>日期</th>
        </tr>
        <tr v-for="pointsDetail in pointsDetails">
          <td>{{pointsDetail.pl_desc}}</td>
          <td>{{pointsDetail.pl_points}}</td>
          <td>{{getDate(pointsDetail.pl_addtime)}}</td>
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
        points: null,
        pointsDetails: [],
        curpage: 1
      }
    },

    methods: {
      getDate(timeStemp){
        var time = new Date(parseInt(timeStemp*1000));
        return time.getFullYear()+"-"+time.getMonth()+"-"+time.getDate();
      },
      getPointsDetail() {
        $.poemPost(POINTS_DETAIL_API,{order:"asc",curpage:this.curpage, key:poem.getItem("key")}).done(this.getPointsDetailDone);
        $.poemPost(USER_INFO_API, {key:poem.getItem("key")}).done((data) => {
          console.log(data)
          this.points = data.member_info.point;
        })
      },
      getPointsDetailDone(data) {
        this.pointsDetails = this.pointsDetails.concat(data);
      }
    },

    ready() {
      this.getPointsDetail();
    }
  }
</script>