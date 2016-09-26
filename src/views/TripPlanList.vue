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
  <filter-tab :filter-items="[{'word':'线路套餐','op':'goods_list','gc_id':'1123'},{'word':'旅游套餐','op':'goods_list','gc_id':'1124'}]" :order-items="[{'word':'销量','key':'1','order':'2'},{'word':'浏览量','key':'2','order':'2'},{'word':'价格从低到高','order':'1','key':'3'},{'word':'评价从低到高','order':'1','key':'4'},{'word':'评价从高到低','order':'2','key':'4'}]"></filter-tab>
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
      storeName:'',
      condition:{
        // "store_id":this.$route.params.id,
        "curpage":1,
        "page":20
      }
  	}
  },
  methods:{
  	getTripList:function(){
  		$.getJSON("http://123.56.136.248/app/index.php?act=goods&op=goods_list&gc_id=1122",this.condition).done(this.getTripListDone);
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
    },
    'conditionChange':function(condition){
      this.condition.curpage = 1;
      this.tripList = [];
      $.extend(this.condition,condition);
      $.getJSON(STORE_GOODS_API,this.condition).done(this.getTripListDone);
    }
  }
}
</script>

<style lang="stylus">
	@import "../main.styl"
</style>