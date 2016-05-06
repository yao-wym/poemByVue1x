<template>
	<div class="flex-view">
	<app-header title="特产列表"></app-header>
  <flex-scroll-view>
        <ul id="techan-list-view" style="font-size: 0.3rem">
      <!-- <list-view> -->
      <techan-list-item v-for="techan in techanList" :techan="techan" :index="$index"></techan-list-item>
      <!-- </list-view> -->
    </ul>
<!--     <return-top></return-top> -->
  </flex-scroll-view>

	<filter-tab :filter-items="[{'word':'工艺品','gc_id':'1063'},{'word':'肉制品','gc_id':'5'},{'word':'奶制品','gc_id':'4'},{'word':'酒类','gc_id':'1064'},{'word':'其他','gc_id':'1065'}]" :order-items="[{'word':'销量','key':'1','order':'2'},{'word':'浏览量','key':'2','order':'2'},{'word':'价格从低到高','order':'1','key':'3'}]"></filter-tab>
</div>
</template>

<script type="text/javascript">
module.exports = {
  replace: true,
  components: {
    'techan-list-item': function(resolve) {
    	require(['../components/techanListItem.vue'], resolve);
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
  	return {
  		techanList:[],
      condition:{
        "gc_id":1,
        "curpage":1,
        "page":20
      }
  	}
  },
  methods:{
  	getTechanList:function(){
       if(this.condition.curpage>this.pageNum){
        poemUI.toast('没有更多了');
        return;
      }
  		$.getJSON(TECHAN_LIST_API,this.condition).done(this.getTechanListDone);
  	},
  	getTechanListDone:function(res){
  		console.log(JSON.stringify(res));
      this.pageNum = res.page_total;
      if(!isEmpty(res.datas.goods_list)){
        this.techanList = this.techanList.concat(res.datas.goods_list);
        this.condition.curpage++;
        // this.$broadcast('refresh')
        this.$nextTick(function(){
          //this.$broadcast('refresh');
        });
        setTimeout((function(that){return function(){that.$broadcast('refresh')}})(this),50)
      }
      // if(res.hasmore == false){
      //   this.$off('scrollEnd')
      // }
  	},
  },
  created: function() {
  },
  ready:function(){
    this.getTechanList();
  },
  attached:function(){
  },
  compiled:function(){
  },
  events:{
    'showAll':function(){
      this.techanList = [];
      this.condition = {'page':20};
      this.condition['curpage'] = 1;
      this.condition.gc_id = 1;
      this.getTechanList();
    },
    'scrollEnd':function(msg){
      if(this.curpage>this.pageNum){
        poemUI.toast('没有更多了');
        return;
      }
      this.getTechanList();
    },
    'conditionChange':function(condition){
      this.condition.curpage = 1;
      this.techanList = [];
      $.extend(this.condition,condition);
      $.getJSON(TECHAN_LIST_API,this.condition).done(this.getTechanListDone);
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