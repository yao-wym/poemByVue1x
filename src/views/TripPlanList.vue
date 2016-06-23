<template>
	<div class="flex-view" v-transition>
	<app-header :title="storeName"></app-header>
  <flex-scroll-view>
    <ul id="trip-list-view" style="font-size: 0.3rem">
      <!-- <list-view> -->
      <trip-list-item v-for="trip in tripList" :trip="trip" :index="$index"></trip-list-item>
      <!-- </list-view> -->
    </ul>
<!--     <return-top></return-top> -->
  </flex-scroll-view>

<!-- 	<filter-tab :filter-items="['默认排序','价格从低到高','价格从高到低','销量从高到低','评价从高到低']" :order-items="['默认排序','传统酒店','牧家乐']"></filter-tab> -->
</div>
</template>

<script type="text/javascript">
module.exports = {
  replace: true,
  components: {
    'trip-list-item': function(resolve) {
    	require(['../components/tripListItem.vue'], resolve);
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
  	return {
  		curpage : 1,
      pageNum : 1,
  		tripList:[],
      storeName:''
  	}
  },
  methods:{
  	getTripList:function(){
  		$.getJSON(STORE_GOODS_API,{'store_id':this.$route.params.id,'page':10,'curpage':this.curpage}).done(this.getTripListDone);
  	},
  	getTripListDone:function(res){
  		console.log(JSON.stringify(res));
      if(!isEmpty(res.datas.goods_list)){
        this.pageNum = res.page_total
        this.tripList = this.tripList.concat(res.datas.goods_list);
        this.curpage++;
        this.$nextTick(function(){
          //this.$broadcast('refresh');
        });
        setTimeout((function(that){return function(){that.$broadcast('refresh')}})(this),500)
      }
  	},
  },
  created: function() {
  },
  ready:function(){
    
  },
  attached:function(){
  },
  compiled:function(){
  },
  route:{
    data(){
      this.storeName = this.$route.query.storeName;
      this.curpage = 1;
      this.tripList=[];
      this.getTripList();
    }
  },
  events:{
    'scrollEnd':function(msg){
      if(this.curpage>this.pageNum){
        poemUI.toast('没有更多了');
        return;
      }else{
        this.getTripList();
      }
    }
  }
}
</script>

<style lang="stylus">
	@import "../main.styl"
</style>