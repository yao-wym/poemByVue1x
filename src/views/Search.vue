<template>
	<div class="flex-view" v-transition>
	<app-header search="搜索" :value="keyword" right-icon="user-icon"></app-header>
  <flex-scroll-view>
    <ul id="search-list-view" style="font-size: 0.3rem">
      <!-- <list-view> -->
      <scenic-list-item v-if="searchType=='store'" v-for="scenic in searchList" :scenic="scenic" :index="$index">
        
      </scenic-list-item>
      <goods-list-item v-if="searchType=='goods'" v-for="item in searchList" :item="item" :index="$index">
        
      </goods-list-item>
      <!-- </list-view> -->
    </ul>
<!--     <return-top></return-top> -->
  </flex-scroll-view>
</div>
</template>

<script type="text/javascript">
module.exports = {
  replace: true,
  components: {
    'scenic-list-item': function(resolve) {
    	require(['../components/ScenicListItem.vue'], resolve);
    },
    'goods-list-item': function(resolve) {
      require(['../components/CollectGoodsItem.vue'], resolve);
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
    'app-header':function(resolve){
    	require(['../components/CommonHeader.vue'], resolve);
    }
  },
  route: {
    data: function (transition) {
        transition.next({
          'keyword':this.$route.params.keyword,
          'searchType':this.$route.params.searchType,
          'curpage' : 1,
          'searchList':[],
        })
        this.getSearchList();
      }
  },
  data: function(){
  	return {
  		curpage : 1,
  		searchList:[],
      keyword:""
  	}
  },
  methods:{
  	getSearchList:function(){
      var searchApi = this.searchType=='goods'?GOODS_SEARCH_API:STORE_SEARCH_API;
  		$.getJSON(searchApi,{keyword:this.keyword,page:20,curpage:this.curpage}).done(this.getSearchListDone);
  	},
  	getSearchListDone:function(res){
      if(!isEmpty(res.datas.goods_list)||!isEmpty(res.datas.store_list)){
        if(this.searchType=='goods'){
          this.searchList = this.searchList.concat(res.datas.goods_list);
        }else{
          this.searchList = this.searchList.concat(res.datas.store_list);
        }
        this.curpage++;
        // this.$broadcast('refresh')
        this.$nextTick(function(){
          this.$broadcast('refresh');
        });
        // setTimeout((function(that){return function(){that.$broadcast('refresh')}})(this),50)
      }
      if(res.hasmore == false){
        this.$off('scrollEnd')
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
  events:{
    'scrollEnd':function(msg){
      this.getSearchList();
    },
  }
}
</script>

<style lang="stylus">
</style>