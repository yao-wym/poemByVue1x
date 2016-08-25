<template>
	<div class="flex-view" v-transition>
	<app-header title="酒店列表" right-icon="home-icon" right-link="#/MapView"></app-header>
  <flex-scroll-view>
        <ul id="hotel-list-view" style="font-size: 0.3rem">
      <!-- <list-view> -->
      <hotel-list-item v-for="hotel in hotelList" :hotel="hotel" :index="$index"></hotel-list-item>
      <!-- </list-view> -->
    </ul>
<!--     <return-top></return-top> -->
  </flex-scroll-view>

	<filter-tab :filter-items="[{'word':'传统酒店','op':'hotel','sc_id':'2'},{'word':'牧家乐','sc_id':'12'}]" :order-items="[{'word':'评价','key':'store_credit','order':'desc','op':'hotel_list'},{'word':'销量','op':'hotel_list','key':'store_sales','order':'desc'}]"></filter-tab>
</div>
</template>

<script type="text/javascript">
module.exports = {
  replace: true,
  components: {
    'hotel-list-item': function(resolve) {
    	require(['../components/HotelListItem.vue'], resolve);
    },
    'list-view': function(resolve) {
      require(['../components/ListView.vue'], resolve);
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
  	var hotelList = [];
  	return {
  		curpage : 1,
      pageNum : 1,
  		hotelList:hotelList,
      condition:{
        page:20
      }
  	}
  },
  route:{
    data:function(){
      this.curpage = 1;
      this.hotelList = [];
      this.condition = {page:20};
      this.getHotelList();
    }
  },
  methods:{
  	getHotelList:function(){
      if(this.curpage>this.pageNum){
        poemUI.toast('没有更多了');
        return;
      }
  		$.getJSON(HOTEL_LIST_API,{curpage:this.curpage,page:20}).done(this.getHotelListDone);
  	},
  	getHotelListDone:function(res){
  		console.log(JSON.stringify(res));
      this.pageNum = res.page_total;
      if(!isEmpty(res.datas.store_list)){
        this.hotelList = this.hotelList.concat(res.datas.store_list);
        this.curpage++;
        // this.$broadcast('refresh')
        this.$nextTick(function(){
          //this.$broadcast('refresh');
        });
        setTimeout((function(that){return function(){that.$broadcast('refresh')}})(this),10)
      }
      // if(res.hasmore == false){
      //   this.$off('scrollEnd')
      // }
  	},
  },
  created: function() {
  },
  ready:function(){
    this.getHotelList();
  },
  attached:function(){
  },
  compiled:function(){
  },
  events:{
    'scrollEnd':function(msg){
      this.getHotelList();
    },
    'showAll':function(msg){
      this.curpage = 1;
      this.hotelList = [];
      this.condition = {page:20};
      this.getHotelList();
    },
    'conditionChange':function(condition){
      this.curpage = 1;
      this.hotelList = [];
      condition['curpage'] = this.curpage;
      console.log(JSON.stringify(condition));
      $.extend(this.condition,condition);
      console.log(JSON.stringify(this.condition));
      // delete condition.word;
      $.getJSON(SHOP_LIST_API,this.condition).done(this.getHotelListDone);
    }
  }
}
</script>

<style lang="stylus"></style>