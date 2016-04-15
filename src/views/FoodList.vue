<template>
	<div class="flex-view" v-transition>
	<app-header title="吃喝玩乐"></app-header>
  <flex-scroll-view>
        <ul id="hotel-list-view" style="font-size: 0.3rem">
      <food-list-item v-for="food in hotelList" :food="food" :index="$index"></food-list-item>
    </ul>
<!--     <return-top></return-top> -->
  </flex-scroll-view>
  <!-- <filter-tab :filter-items="['默认排序','价格从低到高','价格从高到低','销量从高到低','评价从高到低']" :order-items="['默认排序','传统酒店','牧家乐']"></filter-tab> -->
</div>
</template>

<script type="text/javascript">
module.exports = {
  replace: true,
  components: {
    'food-list-item': function(resolve) {
    	require(['../components/FoodListItem.vue'], resolve);
    },
    'flex-scroll-view': function(resolve) {
      require(['../components/FlexScrollView.vue'], resolve);
    },
    'return-top':function(resolve){
    	require(['../components/returnTop.vue'], resolve);
    },
    'app-header':function(resolve){
    	require(['../components/CommonHeader.vue'], resolve);
    },
    'filter-tab':function(resolve){
      require(['../components/FilterTab.vue'], resolve);
    },
  },
  data: function(){
  	return {
  		curpage : 1,
      pageNum :1,
  		hotelList:[]
  	}
  },
  methods:{
  	getHotelList:function(){
  		$.getJSON(HOTEL_FUN_API,{curpage:this.curpage,'store_id':this.$route.params.id}).done(this.getHotelListDone);
  	},
  	getHotelListDone:function(res){
  		console.log(JSON.stringify(res));
      if(!isEmpty(res.datas.goods_list)){
        this.pageNum = res.page_total;
        this.hotelList = this.hotelList.concat(res.datas.goods_list);
        this.curpage++;
        // this.$broadcast('refresh')
        this.$nextTick(function(){
          this.$broadcast('refresh');
        });
        setTimeout((function(that){return function(){that.$broadcast('refresh')}})(this),50)
      }
  	},
  },
  events:{
    'scrollEnd':function(msg){
      if(this.curpage>this.pageNum){
        poemUI.toast('没有更多了');
        return;
      }
      this.getHotelList();
    },
    'conditionChange':function(msg){
      this.getHotelList();
    }
  },
  ready:function(){
    this.getHotelList();
  },
  attached:function(){
   // alert(2);
  },
  compiled:function(){
    // alert(2);
  }
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