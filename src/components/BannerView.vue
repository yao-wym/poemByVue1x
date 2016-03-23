<template>
	<div class="banner-wrap">
        <div id="b-wrapper">
        <div id="banner" class="banner-content">
        	<div class="slide">
				<div class="painting giotto"></div>
			</div>
			<div class="slide">
				<div class="painting leonardo"></div>
			</div>
			<div class="slide">
				<div class="painting gaugin"></div>
			</div>
			<div class="slide">
				<div class="painting warhol"></div>
			</div>
        </div>
    </div>
    <div id="indicator">
		<div id="dotty"></div>
	</div>
    </div>
</template>
<style lang="stylus">
bannerHeight = 3rem
imgHeight = bannerHeight-0.3rem
imgWidth = 9rem
* {
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
}


#b-wrapper {
	width: 10rem
	height: bannerHeight;
	margin: 0 auto;
}

#banner {
	position: absolute;
	z-index: 1;
	-webkit-tap-highlight-color: rgba(0,0,0,0);
	width: 40rem;
	height: bannerHeight;
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
	background-color: #444;
}

.slide {
	width: 10rem
	height: bannerHeight;
	float: left;
}

.painting {
	width: 9rem;
	height: bannerHeight;
	border-radius: 10px;
	margin: 20px auto;
	background-size:100%
	border: 1px solid #000;

}

.giotto {
	background: url(../asset/images/app_1.png);
}

.leonardo {
	background: url(../asset/images/app_1.png);
}

.gaugin {
	background: url(../asset/images/app_1.png);
}

.warhol {
	background: url(../asset/images/app_1.png);
}

#indicator {
	position: relative;
	width: 110px;
	height: 20px;
	margin: 10px auto;
	z-index:2
	top:-0.3rem;
}

#dotty {
	position: absolute;
	width: 20px;
	background: url(../asset/images/collect-red.png);
	height: 20px;
	border-radius: 10px;
}

</style>

<script>
document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

var myScroll;

function loaded () {
	myScroll = new IScroll('#b-wrapper', {
		scrollX: true,
		scrollY: false,
		momentum: false,
		snap: true,
		snapSpeed: 400,
		keyBindings: true,
		indicators: {
			el: document.getElementById('indicator'),
			resize: false
		}
	});
}
export default {
	data:function(){
		return {
			myScroll:''
		}
	},
	created:function(){
	},
	ready:function(){
		loaded();
	},
	events:{
		'refresh':function(msg){
			setTimeout((function(that){return function(){loaded();}})(this),1000)
			// this.myScroll.refresh();
		},
		'scrollViewLoaded':function(msg){
			// this.myScroll.refresh();
			// this.myScroll.refresh();
		},
	}

}
</script>