<template>
	<div class="flex-view" v-transition>
	<app-header :title="title" right-icon="user-icon" right-link="#/user/login"></app-header>
  <flex-scroll-view>
        <ul id="techan-list-view" style="font-size: 0.3rem">
      <!-- <list-view> -->
      <techan-list-item v-for="techan in techanList" :techan="techan" :index="$index"></techan-list-item>
      <!-- </list-view> -->
    </ul>
<!--     <return-top></return-top> -->
  </flex-scroll-view>

	<filter-tab :filter-items="['默认排序','价格从低到高','价格从高到低','销量从高到低','评价从高到低']" :order-items="['默认排序','传统酒店','牧家乐']"></filter-tab>
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
  	var techanList = [];
  	var curpage = 1; 
  	return {
  		curpage : curpage,
  		techanList:techanList,
      title:'xx旗舰店'
  	}
  },
  methods:{
  	getTechanList:function(){
  		$.getJSON(TECHAN_LIST_API,{order:"asc",page:10,curpage:this.curpage}).done(this.getTechanListDone);
  	},
  	getTechanListDone:function(res){
  		console.log(JSON.stringify(res));
      if(!isEmpty(res.datas.goods_list)){
        this.techanList = this.techanList.concat(res.datas.goods_list);
        this.curpage++;
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
    'scrollEnd':function(msg){
      this.getTechanList();
    },
    'conditionChange':function(msg){
      $.getJSON(TECHAN_LIST_API,{order:"desc",page:10,curpage:this.curpage}).done(this.gettechanListDone);
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