<template>
	<div class="flex-view" v-transition>
	<!-- <app-header search="找酒店" right-icon="user-icon"></app-header> -->
  <flex-scroll-view>
        <ul id="addr-list-view" style="font-size: 0.3rem">
      <!-- <list-view> -->
      <addr-list-item v-for="addr in addrlList" :addr="addr" :index="$index"></addr-list-item>
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
    'addr-list-item': function(resolve) {
    	require(['../components/AddrListItem.vue'], resolve);
    },
    // 'list-view': function(resolve) {
    //   require(['../components/ListView.vue'], resolve);
    // },
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
  	var addrlList = [];
  	return {
  		addrlList:addrlList
  	}
  },
  methods:{
  	getAddrList:function(){
  		$.poemPost(ADDR_LIST_API,{key:"60669c1838e2613754ea9a466d50b89f"}).done(this.getAddrListDone);
  	},
  	getAddrListDone:function(res){
        this.addrlList = res.address_list;
        this.$nextTick(function(){
          this.$broadcast('refresh');
        });
        this.$off('scrollEnd')
  	},
  },
  created: function() {
  },
  ready:function(){
    this.getAddrList();
    this.$dispatch('pageLoaded');
    this.title = '我的地址';
  },
  attached:function(){
  },
  compiled:function(){
  },
  props:['title','leftLabel'],
  events:{
    'scrollEnd':function(msg){
      this.getAddrList();
    },
  }
}
</script>

<style lang="stylus">
</style>