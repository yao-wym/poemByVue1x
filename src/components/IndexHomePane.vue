<template>
	<div class="index-home-container"> 
  <div style="height:4rem;width: 100%">
  <!-- Indicators -->
  <!-- Wrapper for slides -->
</div>
<div class="pane">
  <div class="pane-left">
    <a href="#HotelList">
      <div v-on="click:location.href='#hotel-list'" style="background-color: rgb(234,99,94)">
        <img src="../asset/images/store-white.png">
      </div>
    </a>
    <a @tap="#HotelList">
      <div style="background-color: rgb(127,204,229)">
        <img src="../asset/images/location.png">
      </div>
    </a>
  </div>
  <div class="pane-right">
    <a href="#HotelList">
      <div style="background-color: rgb(141,194,30)">
        <img src="../asset/images/ticket-white.png">
      </div>
    </a>
    <a href="#HotelList">
      <div style="background-color: rgb(242,150,0)">
        <img src="../asset/images/techan.png">
      </div>
    </a>
  </div>
</div>
</div>
</template>

<script type="text/javascript">
module.exports = {
  replace: true,
  props: ['side', 'name','leftName'],
  ready:function(){
    this.$dispatch('scrollViewLoaded')
  }
}
</script>

<style lang="stylus">
.pane
	overflow:hidden
	& img
		width:1rem
		position:absolute
		margin:auto
		top:0;bottom:0;left:0;right:0;
	& div
		padding:3px
		position:relative
	& a
		overflow:hidden
.pane-left
	float:left
	width:48%
	margin-right:-3px
.pane-right
	overflow:hidden

	

.pane div div:nth-child(2)
	margin-top:6px

.pane-left a:nth-child(1) div
.pane-right a:nth-child(2) div
	height:50vw
.pane-left a:nth-child(2) div
.pane-right a:nth-child(1) div
	height:60vw
</style>