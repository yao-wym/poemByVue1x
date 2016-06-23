<template>
	<div class="banner-wrap">
        <div style="height:{{bannerHeight}}" id="b-wrapper">
	        <div v-if="imgArr" id="banner" style="background-color: white;width:{{imgArr.length*10+'rem'}};height:{{bannerHeight}}" class="banner-content">
	        	<div v-for="item in imgArr" track-by="$index" class="slide" style="height:{{bannerHeight}}">
					<div style="background-image:url({{item}});height:{{bannerHeight}}" class="painting giotto"></div>
				</div>
	        </div>
	        <div v-if="imgItemArr" default="true" id="banner" style="background-color: white;width:{{imgItemArr.length*10+'rem'}}" class="banner-content" v-else>
				<div @click='showDetail($index)' v-for="item in imgItemArr" :item="item"  class="slide">
					<div style="background-image:url({{item.image}})" class="painting giotto"></div>
				</div>
	        </div>
	        <div v-if="!imgItemArr&&!imgArr" default="true" id="banner" style="background-color: white;width:{{slideList.length*10+'rem'}}" class="banner-content" >
				<div @click='showDetail($index)' v-for="item in slideList" :item="item"  class="slide">
					<div style="background-image:url({{item.image}})" class="painting giotto"></div>
				</div>
	        </div>
    	</div>
	    <div id="indicator">
			<div id="dotty"></div>
		</div>
    </div>
</template>
<style lang="stylus">
bannerHeight = 3.2rem
imgHeight = bannerHeight-0.3rem
imgWidth = 9rem


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
	background-color: white
	width: 10rem
	height: bannerHeight;
	float: left;
	background-size:100%
}

.painting {
	width: 100%;
	height: bannerHeight+0.5rem;
	margin: 0;
	background-size:100% 100%
	background-repeat:no-repeat

}

#indicator {
	position: relative;
	width: 110px;
	margin: auto;
	z-index:2
	top:-5px;
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
		click:true,
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
			scrollWidth:'40rem',
			myScroll:'',
			slideList:[],
			pageType:{
				'scenic':'scenicdetail',
				'hotel':'hoteldetail',
				'goods':'goodsdetail',
				'url':'',
			}
		}
	},
	props:['imgArr','imgItemArr','bannerHeight','isAuto'],
	methods:{
		initPage:function(res){
			this.slideList = res.adv_list.item
		},
		showDetail:function(index){
			if(!$.isEmpty(this.imgItemArr)){
				this.$route.router.go({path:"/TripDetail/"+this.imgItemArr[index].data});
				return;
			}
			if($.isEmpty(this.slideList[index].type)||$.isEmpty(this.slideList[index].data)){
				return;
			}
			this.$route.router.go({name:this.pageType['scenic'],params:{'id':this.slideList[index].data}});
			// alert(JSON.stringify(this.slideList[index]));
		}
	},
	created:function(){
	},
	ready:function(){
		if(!$.isEmpty(this.imgArr)){
			this.slideList = this.imgArr;
		}
		else if(this.imgItemArr!=undefined){
			this.slideList = this.imgItemArr;
		}
		else{
			$.poemGet(ADV_API).done(this.initPage);
		}
		setTimeout((function(that){return function(){loaded();}})(this),500);
	},
	route:{
		data:function(transition){
			transition.next({
        	});
			if(this.imgArr!=undefined){
				this.slideList = this.imgArr;
			}
			else if(this.imgItemArr!=undefined){
				this.slideList = this.imgItemArr;
			}
		},
	    canReuse:function(transition){
	      return false
	    }

	},
	events:{
		'refresh':function(msg){
			setTimeout((function(that){return function(){loaded();}})(this),1000);
			// this.myScroll.refresh();
		},
		'scrollViewLoaded':function(msg){
			// this.myScroll.refresh();
			// this.myScroll.refresh();
		},
	}

}
</script>