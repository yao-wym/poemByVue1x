<template>
	<div class="flex-view" v-transition>
	<app-header title="吃喝玩乐"></app-header>
  <flex-scroll-view>
        <ul id="hotel-list-view" style="font-size: 0.3rem">
      <food-list-item v-if="food['gc_id']==1113" v-for="food in hotelList" :food="food" :index="$index"></food-list-item>
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
  	getGoodsList:function(){
  		$.getJSON(STORE_GOODS_API,{curpage:this.curpage,'store_id':this.$route.params.id,'page':20}).done(this.getGoodsListDone);
  	},
  	getGoodsListDone:function(res){
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
  route:{
    data:function(transition){
      transition.next({
        curpage : 1,
        pageNum :1,
        hotelList:[]
      })
      this.getGoodsList();
    }
  },
  events:{
    'scrollEnd':function(msg){
      if(this.curpage>this.pageNum){
        poemUI.toast('没有更多了');
        return;
      }
      this.getGoodsList();
    },
    'conditionChange':function(msg){
      this.getGoodsList();
    }
  },
  ready:function(){
  },
  attached:function(){
   // alert(2);
  },
  compiled:function(){
    // alert(2);
  }
}
</script>

<style lang="stylus" scoped>
	@import "../main.styl"

.goods-img
	width:2rem
	height:2rem
	float:left
	margin-right:0.3rem

.goods-info
	overflow:hidden
.goods-item
	background-color: #fff; 
	overflow:auto; 
	resize:horizontal;
	


</style>