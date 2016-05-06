<template>
	<div class="flex-view" v-transition>
	<app-header title="景点列表"></app-header>
  <flex-scroll-view>
        <ul id="scienic-list-view" style="font-size: 0.3rem">
      <scenic-list-item v-for="scenic in scenicList" :scenic="scenic" :index="$index"></scenic-list-item>
    </ul>
<!--     <return-top></return-top> -->
  </flex-scroll-view>

	<filter-tab :filter-items="[{'word':'景区','gc_id':'1061'},{'word':'娱乐项目','gc_id':'1062'}]" :order-items="[{'word':'评价','key':'store_credit','order':'desc'},{'word':'销量','key':'store_sales','order':'desc'}]"></filter-tab>
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
  	return {
      pageNum : 1,
  		curpage : 1,
  		scenicList:[],
      condition:{
        'sc_id':3,
        'page':20
      }
  	}
  },
  methods:{
  	getScenicList:function(){
  		$.getJSON(SCENIC_LIST_API,this.condition).done(this.getScenicListDone);
  	},
  	getScenicListDone:function(res){
      this.pageNum = res.page_total;
      this.scenicList = this.scenicList.concat(res.datas.store_list);
      this.curpage++;
      this.$nextTick(function(){
      this.$broadcast('refresh');
        });
      setTimeout((function(that){return function(){that.$broadcast('refresh');}})(this),1000)
  	},
  },
  created: function() {
  },
  events:{
    'showAll':function(){
      this.scenicList = [];
      this.condition = {'page':20};
      this.condition['curpage'] = 1;
      this.condition.gc_id = 3;
      this.getScenicList();
    },
    'scrollEnd':function(msg){
      if(this.curpage>this.pageNum){
        poemUI.toast('没有更多了');
        return;
      }
      this.getScenicList();
    },
    'conditionChange':function(condition){
      condition['curpage'] = 1;
      this.scenicList = [];
      $.extend(this.condition,condition);
      console.log(JSON.stringify(this.condition));
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