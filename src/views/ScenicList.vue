<template>
	<div class="flex-view" v-transition>
	<app-header search="找景点" right-icon="user-icon"></app-header>
  <flex-scroll-view>
        <ul id="scienic-list-view" style="font-size: 0.3rem">
      <scenic-list-item v-for="scenic in scenicList" :scenic="scenic" :index="$index"></scenic-list-item>
    </ul>
<!--     <return-top></return-top> -->
  </flex-scroll-view>

	<filter-tab :filter-items="['默认排序','价格从低到高','价格从高到低','销量从高到低','评价从高到低']" :order-items="['景区','娱乐项目']"></filter-tab>
</div>
</template>

<script type="text/javascript">
module.exports = {
  replace: true,
  components: {
    'scenic-list-item': function(resolve) {
    	require(['../components/ScenicListItem.vue'], resolve);
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
  	var scenicList = [];
  	var curpage = 1; 
  	return {
  		curpage : curpage,
  		scenicList:scenicList
  	}
  },
  methods:{
  	getScenicList:function(){
  		$.poemGet(SCENIC_LIST_API,{order:"asc",page:10,curpage:this.curpage}).done(this.getScenicListDone);
  	},
  	getScenicListDone:function(res){
        this.scenicList = this.scenicList.concat(res.goods_list);
        this.curpage++;
        this.$nextTick(function(){
          this.$broadcast('refresh');
        });
      setTimeout((function(that){return function(){that.$broadcast('refresh');}})(this),1000)
  	},
  },
  created: function() {
    this.$on('conditionChange', function() {
        
      //此处需要清空数组，但是为了调试方便～暂时不清空
      this.getScenicList();
    });
    // this.$on('scrollViewLoaded', function() {
    //     this.$broadcast('scrollViewLoaded');
    // })
  },
  events:{
    'scrollEnd':function(msg){
      this.getScenicList();
    },
    'conditionChange':function(msg){
      this.getScenicList();
    }
  },
  ready:function(){
    this.getScenicList();
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