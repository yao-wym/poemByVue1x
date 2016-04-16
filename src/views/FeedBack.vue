<template>
  <div class="flex-view" v-transition>
  <app-header :title="title" :left-label="leftLabel" :right-label="rightLabel" :left-link="leftLink" :right-link="rightLink" :left-icon="leftIcon" :right-icon="rightIcon"></app-header>
    <flex-scroll-view>    
      <div class="feedback-form" action="" method="post">
        <textarea v-model="consult_content" name="consult_content" id="" rows="20" placeholder="输入您的反馈意见不超过500字"></textarea>
        <input v-model="contact" type="text" name="contact" placeholder="输入您的手机和邮箱非必填">
        <button class="submit" @click="postFeedback()">提交</button>
      </div>
      <p class="notice">我们的进步离不开您的每一个建议与创意</p>
    </flex-scroll-view>
  </div>
</template>
<style lang="stylus" scoped>
  @import "../main.styl"
  .flex-view
    background: #fafafa
  .feedback-form
    textarea
      width: 100%;
      border: none
      display: block
      margin-bottom: .6rem
      font-size: .4rem
      padding: section-padding
    input[type=text]
      width: 100%;
      height: 1rem;
      line-height: 1rem
      border: none
      display: block
      font-size: .4rem
      padding: 0 section-padding
    .submit
      background: app-green
      width: 70%
      height: 1rem
      font-size: .4rem
      color: #fff
      margin: .8rem auto
      display: block
      border-radius: 10px
      border: none
  .notice
    margin: 1rem section-margin

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
        title: '意见反馈',
        xid: '0988776',
        consult_content: '',
        contact: ''
      }
    },

    methods: {
      postFeedback() {
        if (!this.consult_content) return;
        $.poemPost(FEEDBACK_API, {key:"60669c1838e2613754ea9a466d50b89f", consult_content: this.consult_content }).done(function(data) {
          alert(data);
          history.go(-1);
        });
      }
    },

    ready() {
    }
  }
</script>