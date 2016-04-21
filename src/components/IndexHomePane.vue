<template>
	<div class="index-home-container"> 
  <div style="height:auto;width: 100%">
    <banner banner-height="3.2rem"></banner>
</div>
<div class="pane" style="margin-top:0.55rem">
  <div class="pane-left">
    <a v-link="{path:'/HotelList'}">
      <div v-on="click:location.href='#hotel-list'" style="background-color: rgb(234,99,94)">
        <div class="logo">
          <img src="../asset/images/jiudianzhusu.png">
          <div>酒店住宿</div>
        </div>
      </div>
    </a>
    <a v-link="{path:'/MapView?title=周边'}">
      <div style="background-color: rgb(127,204,229);margin-top: 8px">
        <div class="logo">
          <img src="../asset/images/home-map.png">
          <div>地图周边</div>
        </div>
      </div>
    </a>
  </div>
  <div class="pane-right">
    <a v-link="{path:'/ScenicList'}">
      <div style="background-color: rgb(141,194,30)">
        <div class="logo">
          <img src="../asset/images/jingdianmengpiao.png">
          <div>景点门票</div>
        </div>
      </div>
    </a>
    <a v-link="{path:'/TechanList'}">
      <div style="background-color: rgb(242,150,0);margin-top: 8px">
        <div class="logo">
          <img src="../asset/images/techan-white.png">
          <div>当地特产</div>
        </div>
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
  components: {
    'banner': require('../components/BannerView.vue'),
  },

  ready:function(){
    // this.$nextTick(function(){
    //   this.$dispatch('refresh');
    // });
    setTimeout((function(that){return function(){that.$dispatch('refresh');}})(this),500)
  }
}
</script>
<!--  -->
<style lang="stylus">
.pane
	overflow:hidden
	& img
		width:1.2rem
	& div
		padding:5px
		position:relative
	& .logo
		position:absolute
		margin:auto
		top:0
		bottom:0
		left:0
		right:0
		height:2rem
		color:white
		text-align:center
		& div
			width:auto
			margin-top:5px
	& a
		overflow:hidden 
.pane-left
	float:left
	width:50%
	margin-right:-3px
.pane-right
	overflow:hidden

	

.pane div div:nth-child(2)
	margin-top:6px

.pane-left a:nth-child(1)>div
.pane-right a:nth-child(2)>div
	height:55vw
.pane-left a:nth-child(2)>div
.pane-right a:nth-child(1)>div
	height:60vw
</style>