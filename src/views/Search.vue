<template>
	<div class="flex-view" v-transition>
	<app-header search="搜索" :value="keyword" right-icon="user-icon"></app-header>
  <flex-scroll-view>
    <ul id="search-list-view" style="font-size: 0.3rem">
      <!-- <list-view> -->
      <scenic-list-item v-for="scenic in searchList" :scenic="scenic" :index="$index"></scenic-list-item>
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
          'keyword':this.$route.params.keyword
        })
        this.getSearchList();
      }
  },
  data: function(){
  	var searchList = [];
  	var curpage = 1; 
  	return {
  		curpage : curpage,
  		searchList:searchList,
      keyword:""
  	}
  },
  methods:{
  	getSearchList:function(){
  		$.getJSON(GOODS_SEARCH_API,{keyword:this.keyword,page:10,curpage:this.curpage}).done(this.getSearchListDone);
  	},
  	getSearchListDone:function(res){
      if(!isEmpty(res.datas.goods_list)){
        this.searchList = this.searchList.concat(res.datas.goods_list);
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
    'conditionChange':function(msg){
      $.getJSON(GOODS_SEARCH_API,{order:"desc",page:10,curpage:this.curpage}).done(this.getSearchListDone);
    }
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