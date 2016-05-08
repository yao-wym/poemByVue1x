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
    addCloudLayer:function() {
        //加载云图层插件
        this.map.plugin('AMap.CloudDataLayer', function() {
            var layerOptions = {
                clickable: true
            };
            var cloudDataLayer = new AMap.CloudDataLayer('56a1d385305a2a32882907d0', layerOptions); //实例化云图层类
            cloudDataLayer.setMap(this.map); //叠加云图层到地图

            AMap.event.addListener(cloudDataLayer, 'click', function(result) {
                var clouddata = result.data;
                var photo=[];
                if(clouddata._image[0]){//如果有上传的图片
                    photo=['<img width=240 height=100 src="'+clouddata._image[0]._preurl+'"><br>'];
                }
                var infoWindow = new AMap.InfoWindow({
                    content: "<font class='title'>" + clouddata._name + "</font><hr/>"+photo.join("")+"地址：" + clouddata._address + "<br />" + "创建时间：" + clouddata._createtime + "<br />" + "更新时间：" + clouddata._updatetime,
                    size: new AMap.Size(0, 0),
                    autoMove: true,
                    offset: new AMap.Pixel(0, -25)
                });

                infoWindow.open(this.map, clouddata._location);
            });
        });
    },
    initMap:function(){
      
      this.map = new AMap.Map('container'); 
      this.map.setCenter([this.userLng, this.userLat]);
      this.map.setZoom(12);
      var marker = new AMap.Marker({
        position: [this.userLng, this.userLat],
        map:this.map
      });
      this.addCloudLayer();
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