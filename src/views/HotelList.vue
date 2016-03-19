<template>
	<div class="flex-view" v-transition>
	<app-header icon-left="{{iconleft}}" msg="{{msg}}"></app-header>
	<!-- <app-pane side="left" name="{{leftName}}"></app-pane>
-->
  <flex-scroll-view>
        <ul id="hotel-list-view" style="font-size: 0.3rem">
  <!-- <li v-repeat="hotel in hotelItems"> -->
      <hotel-list-item v-for="hotel in hotelList" :hotel="hotel" :index="$index"></hotel-list-item>
    </ul>
<!--     <return-top></return-top> -->
  </flex-scroll-view>

	<filter-tab :filter-items="['默认排序','价格从低到高','价格从高到低','销量从高到低','评价从高到低']" :order-items="['默认排序','传统酒店','牧家乐']"></filter-tab>
</div>
</template>

<script type="text/javascript">
module.exports = {
  replace: true,
  components: {
    'hotel-list-item': function(resolve) {
    	require(['../components/HotelListItem.vue'], resolve);
    },
    'flex-scroll-view': function(resolve) {
      require(['../components/FlexScrollView.vue'], resolve);
    },
    'return-top':function(resolve){
    	require(['../components/returnTop.vue'], resolve);
    },
    'filter-tab':function(resolve){
    	require(['../components/FilterTab.vue'], resolve);
    },
    'app-header':function(resolve){
    	require(['../components/CommonHeader.vue'], resolve);
    }
  },
  data: function(){
  	this.getHotelList();
  	var hotelList = [];
  	var curpage = 1; 
  	return {
  		curpage : curpage,
  		hotelList:hotelList
  	}
  },
  methods:{
  	getHotelList:function(){
  		$.getJSON(HOTEL_LIST_API,{order:"asc",page:10,curpage:this.curpage}).done(this.getHotelListDone);
  	},
  	getHotelListDone:function(res){
  		console.log(JSON.stringify(res));
      if(!isEmpty(res.datas.store_list)){
        this.hotelList = this.hotelList.concat(res.datas.store_list);
        this.curpage++;
      }
  	},
  },
  created: function() {
    this.$on('conditionChange', function() {
      $.getJSON(SHOP_LIST_API,{order:"desc",page:10,curpage:this.curpage}).done(this.getHotelListDone);
    })
  },
}
</script>

<style lang="stylus">
	@import "../main.styl"
// px2rem(name, px){
//     name: px/75 
// }
.goods-img
	width:2rem
	height:2rem
	float:left
	margin-right:0.3rem

.goods-info
	overflow:hidden
.goods-item
	 background-color: #eee; 
	 overflow:auto; 
	 resize:horizontal;
	


</style>