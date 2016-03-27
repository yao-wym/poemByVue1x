<template>
  <div class="flex-view" v-transition>
    <flex-scroll-view>
      <banner></banner>
      <div class="section brief-intro">
        <p>旅游避暑胜地</p>
        <p>开放时间：</p>
      </div>
      <div class="section">
        <div>
          <img src="../asset/images/pinglun.png" alt="">
          <p>评论</p>
          <span>></span>
        </div>
        <div>
          <img src="../asset/images/ditu.png" alt="">
          <p>地图</p>
          <span>></span>
        </div>

      </div>
      <div class="section"></div>
    </flex-scroll-view>
  </div>
</template>
<script>
  module.exports = {
    components: {
      'flex-scroll-view': function(resolve) {
        require(['../components/FlexScrollView.vue'], resolve);
      },
      'banner': function (resolve) {
        require(['../components/BannerView.vue'], resolve);
      }
    },
    data() {
      return {
        openTime: '09:00 - 17:00'
      }
    }
  }
</script>
<style scoped lang="stylus">
  @import "../main.styl"
  .section {
    margin-bottom: section-margin
    background: poem-white
    padding: section-padding
    color: text-gray
  }
</style>