<template>
	<div style="background-color: #eee" class="flex-view" v-transition>
	<app-header title="优惠券" ></app-header>
  <flex-scroll-view>
        <ul id="coupon-list-view" style="font-size: 0.4rem">
      <!-- <list-view> -->
      <coupon-list-item  v-for="coupon in couponList" :coupon="coupon" :index="$index"></coupon-list-item>
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
    'coupon-list-item': function(resolve) {
    	require(['../components/CouponListItem.vue'], resolve);
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
  		couponList:[],
  	}
  },
  route:{
    data(){
      this.getCouponList();
    }
  },
  methods:{
  	getCouponList:function(){
  		$.poemPost(COUPON_LIST_API,{key:poem.getItem('key')}).done(this.getCouponListDone);
  	},
  	getCouponListDone:function(res){
        this.couponList = res;
        setTimeout((function(that){return function(){that.$broadcast('refresh')}})(this),500)
  	},
    
  },
  created: function() {
  },
  ready:function(){
    this.$dispatch('pageLoaded');
  },
  attached:function(){
  },
  compiled:function(){
  },
  events:{
    'scrollEnd':function(msg){
      // this.getAddrList();
    },
  }
}
</script>

<style lang="stylus">
</style>