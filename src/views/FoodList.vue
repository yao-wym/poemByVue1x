<template>
	<div class="flex-view" v-transition>
	<app-header title="吃喝玩乐"></app-header>
  <flex-scroll-view>
        <ul id="hotel-list-view" style="font-size: 0.3rem">
      <food-list-item v-for="food in hotelList" :food="food" :index="$index"></food-list-item>
    </ul>
<!--     <return-top></return-top> -->
  </flex-scroll-view>
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
    }
  },
  data: function(){
  	var hotelList = [];
  	var curpage = 1; 
  	return {
  		curpage : curpage,
  		hotelList:hotelList
  	}
  },
  methods:{
  	getHotelList:function(){
  		$.getJSON(TECHAN_LIST_API,{order:"asc",page:10,curpage:this.curpage}).done(this.getHotelListDone);
  	},
  	getHotelListDone:function(res){
  		console.log(JSON.stringify(res));
      if(!isEmpty(res.datas.goods_list)){
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
  created: function() {
    this.$on('conditionChange', function() {
        
      //此处需要清空数组，但是为了调试方便～暂时不清空
      $.getJSON(TECHAN_LIST_API,{order:"desc",page:10,curpage:this.curpage}).done(this.getHotelListDone);
    });
    // this.$on('scrollViewLoaded', function() {
    //     this.$broadcast('scrollViewLoaded');
    // })
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