<template>
	<div class="scroll-wrap">
        <div id="wrapper">
        <div id="scroller" class="scroll-content">
        	<slot></slot>
        </div>
    </div>
    </div>
</template>
<style lang="stylus">
.scroll-wrap
	position:relative
	display:block

#wrapper
	top: 0px;
	left: 0;
	width: 100%;
	height:100%
	background: #fafafa;
	overflow: hidden;
	display:block
	position:absolute

#scroller
	position: absolute;
	-webkit-tap-highlight-color: rgba(0,0,0,0);
	width: 100%;
	-webkit-transform: translateZ(0);
	-moz-transform: translateZ(0);
	-ms-transform: translateZ(0);
	-o-transform: translateZ(0);
	transform: translateZ(0);
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	-webkit-text-size-adjust: none;
	-moz-text-size-adjust: none;
	-ms-text-size-adjust: none;
	-o-text-size-adjust: none;
	text-size-adjust: none;
.scroll-wrap
	-moz-box-flex: 1
	-webkit-box-flex: 1
	box-flex: 1
	flex:1
	position:relative
</style>

<script>
document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
export default {
	data:function(){
		return {
			myScroll:''
		}
	},
	created:function(){
	},
	ready:function(){
		this.myScroll = new IScroll('#wrapper', { 
			mouseWheel:true,
			click:true,
			onRefresh:function(){alert(1)},
		});
		this.myScroll.on('scrollEnd', (function(that){
			return function(){
				console.log('加载更多');
				that.$dispatch('scrollEnd');
				that.$broadcast('scrollEnd');
			}
		})(this)
			);
		// setTimeout((function(that){return function(){that.myScroll.refresh();}})(this),5000)
	},
	events:{
		'refresh':function(msg){
			this.myScroll.refresh();
		},
		'scrollViewLoaded':function(msg){
			// this.myScroll.refresh();
			this.myScroll.refresh();
		},
	}

}
</script>