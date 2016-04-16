<template>
	<div style="background-color: #eee" class="flex-view" v-transition>
	<app-header title="我的地址" right-label="新增" right-link="#/AddressAdd"></app-header>
  <flex-scroll-view>
        <ul id="addr-list-view" style="font-size: 0.3rem">
      <!-- <list-view> -->
      <addr-list-item @click="addrClick($index)" v-for="addr in addrlList" :addr="addr" :index="$index"></addr-list-item>
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
  	return {
  		addrlList:[],
      action:"default",
      refer:''
  	}
  },
  route:{
    data(){
      this.action = this.$route.query.action;
      this.refer = location.href.split("refer=");
    }
  },
  methods:{
  	getAddrList:function(){
  		$.poemPost(ADDR_LIST_API,{key:poem.getItem('key')}).done(this.getAddrListDone);
  	},
  	getAddrListDone:function(res){
        this.addrlList = res.address_list;
        this.$nextTick(function(){
          this.$broadcast('refresh');
        });
        this.$off('scrollEnd')
  	},
    addrClick:function(index){
      console.log(this.action)
      if(this.action == 'chooseAddr'){
        poem.saveObj('chosenAddr',this.addrlList[index]);
        location.href = this.refer[1];
      }
    }
  },
  created: function() {
  },
  ready:function(){
    this.getAddrList();
    this.$dispatch('pageLoaded');
  },
  attached:function(){
  },
  compiled:function(){
  },
  events:{
    'scrollEnd':function(msg){
      this.getAddrList();
    },
  }
}
</script>

<style lang="stylus">
</style>