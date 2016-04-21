<template>
	<footer class ="yellow-footer" href="{{href}}" @click="goNextStep">
		<slot>
		</slot>
	</footer>
</template>

<script>
export default{
	data:function () {
	// return { subtitle: 123 }
	},
	methods:{
  		goNextStep:function(){
  			if(!$.isEmpty(this.href)){
  				location.href=this.href
  			}
  		}
  	},
	props: ['href']
}
</script>

<style lang="stylus">
@import "../main.styl"
buttom-tab-height = 1.2rem
.yellow-footer
	background-color:app-yellow
	height:buttom-tab-height
	line-height:buttom-tab-height
	text-align:center
	font-size:.5rem
	bottom:0
	width:100%
	color:app-white
</style>