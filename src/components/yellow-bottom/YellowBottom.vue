<template>
	<footer class ="yellow-footer" v-on="click:goNextStep">
	{{subtitle}}
		<slot>
		</slot>
	</footer>
</template>

<script>
	require('./style.styl');
	exports default{
	template: require('./template.html'),
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
	@import "../../main.styl"
// app-header
//   color #bada55
.yellow-footer
	background-color:app-yellow
	height:buttom-tab-height
	line-height:buttom-tab-height
	text-align:center
	font-size:28px
	position:fixed
	bottom:0
	width:100%
	color:app-white
</style>