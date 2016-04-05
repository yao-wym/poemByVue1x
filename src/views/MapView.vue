<template>
	<app-header :title="hotelName"></app-header>
	<div id="container"></div> 
</template>
<style type="text/css">
	html{height:100%}  
	body{height:100%;margin:0px;padding:0px}  
	#container{height:100%} 
</style>
<script type="text/javascript">
module.exports = {
  replace: true,
  data:function(){
    return {
    	hotelName:this.$route.query.hotelName
    }
  },
  components: {
    'app-header': function(resolve) {
      require(['../components/CommonHeader.vue'], resolve);
    },
  },
  ready:function(){
  		var pos = this.$route.query.pos;
  		var lon = poem.getPos(pos).lon;
  		var lat = poem.getPos(pos).lat;
		var map = new BMap.Map("container");          // 创建地图实例  
		var point = new BMap.Point(lon, lat);  // 创建点坐标 
		console.log(lon); 
		console.log(lat); 
		map.centerAndZoom(point, 15); 
		var marker = new BMap.Marker(point);        // 创建标注     
		map.addOverlay(marker);   
		var opts = {    
			 width : 250,     // 信息窗口宽度    
			 height: 30,     // 信息窗口高度    
			}
			var infoWindow = new BMap.InfoWindow(this.$route.query.hotelName, opts);  // 创建信息窗口对象    
			map.openInfoWindow(infoWindow, map.getCenter());      // 打开信息窗口
  },
  route: {
    data: function (transition) {
        // // alert(JSON.stringify(this.$route.params));
        // transition.next({
        //     // 'hotelName':'111'
        // })
        
    },
    canReuse:function(transition){
    		return false;
        //判断是否可以重用，可以则为返回true，不能重用则返回false，会实例化一个新的vue对象
    }
  },
	}
</script>