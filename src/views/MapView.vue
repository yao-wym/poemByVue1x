<template>
  <app-header :title="title"></app-header>
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
      hotelName:this.$route.query.hotelName,
      title:this.$route.query.title
    }
  },
  components: {
    'app-header': function(resolve) {
      require(['../components/CommonHeader.vue'], resolve);
    },
  },
  ready:function(){
      var pos = this.$route.query.pos;
      if(!$.isEmpty(pos)){
        var lng = poem.getPos(pos).lng;
        var lat = poem.getPos(pos).lat;
        this.initMap(lng,lat);
        if(!$.isEmpty(this.$route.query)){
          var infoWindow = new BMap.InfoWindow(this.$route.query.markName, opts);  // 创建信息窗口对象    
          map.openInfoWindow(infoWindow, map.getCenter());      // 打开信息窗口
        }
      }else{
        this.getPosition();
      }
      console.log(lng); 
      console.log(lat); 
  },
  methods:{
    getPosition:function(){
      if (window.navigator.geolocation) { 
        var options = { 
          enableHighAccuracy: true, 
          }; 
        window.navigator.geolocation.getCurrentPosition(this.handleSuccess, this.handleError, options); 
      }else{ 
        alert("浏览器不支持html5来获取地理位置信息"); 
      } 
    },
    handleSuccess:function(position){
      var lng = position.coords.longitude; 
      var lat = position.coords.latitude; 
      this.initMap(lng,lat);
    },
    handleError:function(){
    },
    initMap:function(lng,lat){
      var map = new BMap.Map("container");          // 创建地图实例  
      var point = new BMap.Point(lng, lat);  // 创建点坐标 
      map.centerAndZoom(point, 15); 
      var marker = new BMap.Marker(point);        // 创建标注     
      map.addOverlay(marker);   
      var opts = {    
         width : 250,     // 信息窗口宽度    
         height: 30,     // 信息窗口高度    
      }
      
    }
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