<template>
	<div class="scroll-wrap">
        <div id="wrapper" class="scroll-wrap">
        <div id="scroller" class="scroll-content">
        	<slot></slot>
        </div>
    </div>
    </div>
</template>
<style lang="stylus">
#wrapper {
	bottom: 48px;
	left: 0;
	width: 100%;
	background: #ccc;
	overflow: hidden;
}

#scroller {
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
}
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
		this.myScroll = new IScroll('#wrapper', { mouseWheel: true });
		alert(2);
	}
}
</script>