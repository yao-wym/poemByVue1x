<template>
	<div v-on="click:returnTop" style="position: fixed;bottom: 3rem;right: 3rem">
	返回
	</div>
</template>

<style lang="stylus">
	
</style>

<script>
module.exports = {
  props: [],
  data: function(){
  	return {
  	}
  },
  methods:{
  	returnTop:function(){
        alert('todo//返回顶部');
  	}
  }
} 
</script>