<template>
	<div style="position: fixed;bottom: 0;width: 100%">
	<div id="tab-mask" class="tab-mask poem-hidden" v-on:click="hiddenMask">
	</div>
	<div style="position:absolute;bottom:0;width: 100%;">
		<ul class="item-list poem-hidden">
			<li v-on:click="itemClick($index)" v-for="item in items">{{item.word}}</li>
		</ul>
		<footer class="filter-tab">
    		<a v-on:click="showAll"><img src="../asset/images/all.png"><span>全部</span></a>
    		<a v-on:click="showOrder"><img src="../asset/images/sort.png"><span>排序</span></a>
    		<a v-on:click="showFilter">
    			<img src="../asset/images/filter.png">
    		<span>筛选</span>
    		</a> 
		</footer>
	</div>
	
</div>
</template>

<script type="text/javascript">

module.exports = {
  props: ['msg','filterItems','orderItems'],
  data: function(){
  	return {
  		items:this.orderItems
  	}
  },
  methods:{
  	showFilter:function(){
  		this.showList();
  		this.items = this.filterItems
  	},
  	showOrder:function(){
  		this.showList();
  		this.items = this.orderItems
  	},
  	showAll:function(){	
      	this.$dispatch('showAll');
  	},
  	changeList:function(condition){
      	this.$dispatch('conditionChange',condition);
  	},
  	itemClick:function(index){
  		this.hiddenMask();
      	this.changeList(this.items[index]);
  	},
  	resetState:function(){
  	},
  	showList:function(){
  		$('#tab-mask').removeClass("poem-hidden");
  		$('#tab-mask').addClass('poem-mask');
  		$('.item-list').removeClass("poem-hidden");
  	},
  	hiddenMask:function(){
  		$('.poem-mask').addClass("poem-hidden");
  		$('.item-list').addClass("poem-hidden");
  	}
  }
} 
</script>

<style lang="stylus">
@import "../main.styl"
.filter-tab
	flex-direction:row;
	background-color:black
	display:flex
	opacity:0.7
	width:100%
	& a
		padding-top:5px
		-webkit-box-flex: 1
		flex:1
		text-align:center
		font-size:0.3rem
		color:rgb(148,148,148)
	& img
		width: .6rem
		display: block
		margin:3px auto

.item-list
	padding-left:0
	margin:0
	list-style: none;
	text-align:center;
	background-color:white;
	color:app-green
	& li
		height:1.5rem
		line-height:1.5rem
		color:text-gray
		list-style:none
		font-size:.4rem
	& li:after
		background-color: line-color
		bottom: 0
		content: "";  
		display: block
		height:1px
	& li:hover
		cursor:pointer
		color:app-green


</style>