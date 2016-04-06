<template>
  <div class="flex-view" v-transition>
    <app-header :title="title" :left-label="leftLabel" :right-label="rightLabel" :left-link="leftLink" :right-link="rightLink" :left-icon="leftIcon" :right-icon="rightIcon"></app-header>
  	<form action="">
      <!-- <flex-scroll-view> -->
        <div class="section img-name">
          <img src="" alt="">
          <p>{{ item.name }}</p>
        </div>
        <div class="section">
          <ul class="star-list">
            <li>描述相符</li>
            <li>发货速度</li>
            <li>服务态度</li>
          </ul>
        </div>
        <div class="section">
          <textarea name="" id="" cols="30" rows="10" placeholder="我的评价与意见"></textarea>
          <input type="file">
        </div>
    <input type="submit" class="post-comment" value="提交评价">
    <!-- <yellow-bottom>提交评价</yellow-bottom> -->
      <!-- </flex-scroll-view>  -->
    </form>
  </div>
</template>
<style lang="stylus" scoped>
  @import "../main.styl"
  .section
    margin: section-margin
    border-bottom: 1px solid line-gray
    padding: section-padding
    &:last-child
      border-bottom: none
  .img-name
    display: flex
    align-items: top
    img
      width: 1.5rem
      height: 1.5rem
      margin-right: .4rem
    p
      margin: 0
  textarea
    width: 100%
    font-size: .4rem
    border-radius: .2rem
    padding: section-padding
    outline: none
  .post-comment
    background-color: #f7b52b
    height: 1.2rem
    line-height: 1.2rem
    text-align: center
    font-size: 0.5rem
    bottom: 0
    width: 100%
    color: #fdfdfd
    position: fixed
    border: none
  .star-list
    li
      padding: .3rem 0

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
        title: '发表评价',
        item: {
          img: 'ddd',
          name: 'niurouganniurougan'
        }
      }
    }
  }
</script>