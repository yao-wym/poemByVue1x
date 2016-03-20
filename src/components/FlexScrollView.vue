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
	background: #ccc;
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
		this.myScroll = new IScroll('#wrapper', { mouseWheel: true ,bounceEasing: 'elastic', bounceTime: 1200 ,desktopCompatibility:true,click:true});
	},
	events:{
		'refresh':function(msg){
			this.myScroll.refresh();
		}
	}

}
</script>