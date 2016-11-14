<template>
	<li class="article">
          <a href="#/VoiceNavDetail/{{ voice.id }}">
            <div class="article-img">
              <img src="{{voice.item}}" alt="">
            </div>
            <div class="article-detail">
              <h4>{{ voice.title }}</h4>
              <p style="height:1.5rem">{{ voice.content }}</p>
            </div>
          </a>
        </li>
</template>

<script type="text/javascript">
module.exports = {
	replace: true,
	props: ['voice','index'],
}
</script>

<style lang="stylus">
  @import "../main.styl"
  .article a
    display: block
    overflow: hidden
    padding: .2rem
    border-bottom: 1px solid line-gray
  .article-img
    float: left
    width: 3rem
    height: 2.5rem
    margin-right: .4rem
    & img
      width: 100%
      height:100%
  .article-detail
    & h4
      color:#1b1b1b
      font-size: .4rem
      margin-top: 0
      font-weight: normal
      margin-bottom:2px
    & p
      overflow:hidden;
      font-size: .3rem
      margin:15px 0;
      color:#1b1b1b
  .info
    display: flex
    font-size: .25rem
</style>