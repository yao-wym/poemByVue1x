<template>
	<header class="index-header">
    <div class="header-left">
      <span class="input-group-btn">
        <img style="width:.6rem;margin-right:10px" class="back-icon" src="/src/asset/images/fanhui.png">
      </span>
      <span>
        {{leftLabel}}
      </span>
    </div>
    <div class="header-right" style="float: right">
        <a href="#user-reg" class="right-icon">
          <img style="width:.8rem;" src="/src/asset/images/user-white.png"/>
          <span>
            {{rightLabel}}
          </span>
        </a>
    </div> 
    <div class="header-center">
      <h1 v-if="title">{{title}}</h1>
      <input id="search-input" v-else=""/>
    </div>
</header>
</template>

<script type="text/javascript">

module.exports = {
	data:function () {
    return { test: 123 }
  },
	props: ['title','leftLabel','rightLabel']
} 
</script>

<style lang="stylus">

@import "../main.styl"
.index-header
  background-color:app-green
	color:white
	font-size:.7rem
  height:1rem
  line-height:1rem
  padding:5px
	text-align:center
.header-center
  display:inline-block
  margin:0 auto
  width:6rem
.header-left
  float:left
  width:.6rem
#search-input
  border-radius:3px
  height:1rem
  width:5rem
.header-right
  float:right
	 width:.6rem
</style>