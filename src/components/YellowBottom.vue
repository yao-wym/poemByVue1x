<template>
	<footer class ="yellow-footer" @click="goNextStep">
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
  			this.$dispatch('goNextStep')
  		}
  	},
	props: ['subtitle','leftLabel','rightLabel']
}
</script>

<style lang="stylus">
@import "../main.styl"
.yellow-footer
	background-color:app-yellow
	height:buttom-tab-height
	line-height:buttom-tab-height
	text-align:center
	font-size:28px
	bottom:0
	width:100%
	color:app-white
</style>