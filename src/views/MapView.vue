<template>
  <div>
    <app-header :title="title"></app-header>
    <div id="container"></div> 
  </div>
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
      title:this.$route.query.title,
      map:"",
      userLng:"",
      userLat:"",
      posLng:"",
      posLat:"",
    }
  },
  components: {
    'app-header': function(resolve) {
      require(['../components/CommonHeader.vue'], resolve);
    },
  },
  ready:function(){
      // location.href="http://m.amap.com/?q=31.234527,121.287689"

      this.hotelName=this.$route.query.hotelName,
      this.title=this.$route.query.title
      var pos = this.$route.query.pos;

      if(!$.isEmpty(pos)){
        this.posLng = poem.getPos(pos).lng;
        this.posLat = poem.getPos(pos).lat;
        this.getPosition();
        // this.initMap(lng,lat);
        // if(!$.isEmpty(this.$route.query)){
        //   var infoWindow = new BMap.InfoWindow(this.$route.query.markName, opts);  // 创建信息窗口对象    
        //   map.openInfoWindow(infoWindow, map.getCenter());      // 打开信息窗口
        // }
      }else{
        this.getPosition();
      }
  },
  methods:{
    getPosition:function(){
      if (window.navigator.geolocation) { 
        var options = { 
          enableHighAccuracy: true, 
          }; 
        window.navigator.geolocation.getCurrentPosition(this.handleSuccess, this.handleError, options); 
      }else{ 
        poemUI.toast("浏览器不支持html5来获取地理位置信息"); 
      } 
    },
    handleSuccess:function(position){
      this.userLng = position.coords.longitude; 
      this.userLat = position.coords.latitude; 
        this.initMap();
    },
    handleError:function(){
    },
    initMap:function(){
      
      var map = new AMap.Map('container'); 
      map.setCenter([this.userLng, this.userLat]);
      map.setZoom(20);
      var marker = new AMap.Marker({
        position: [this.userLng, this.userLat],
        map:map
      });
      //  var infowindow = new AMap.InfoWindow({
      //    content: '<h3>'+this.title+'</h1>',
      //    offset: new AMap.Pixel(0, -30),
      //    size:new AMap.Size(330,0)
      // });
      //  infowindow.open(map,new AMap.LngLat(this.userLng, this.userLat));
        AMap.plugin('AMap.CloudDataLayer', function() {//回调函数
        //TODO:云图图层的初始化和添加等
        var layerOptions = {
            clickable: true
        };
        var cloudDataLayer = new AMap.CloudDataLayer('b49d8a08924477233d2746f3e8970e1e', layerOptions);
        cloudDataLayer.setMap(map);//添加到地图
      })
    }
  },
  route: {
    data: function (transition) {
        transition.next({
          hotelName:this.$route.query.hotelName,
          title:this.$route.query.title
        })
    },
    canReuse:function(transition){
        return false;
        //判断是否可以重用，可以则为返回true，不能重用则返回false，会实例化一个新的vue对象
    }
  },
  }
</script>