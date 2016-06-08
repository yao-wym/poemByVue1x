<template>
	<header class="index-header">
    <div @click='leftClick()' class="header-left">
      <a>
        <span class='{{leftIcon}}' v-if="leftIcon"></span>
        <span class="back-icon" v-else></span>
      </a>
    </div>
    <div class="header-left-label" v-if="leftLabel">
        {{leftLabel}}
    </div>
    <div class="header-center">
      <div v-if="search" style="border-radius: 10px;background-color: white;overflow:hidden" id='search-input'>
        <span id="searchType" @click="selectSearchType=!selectSearchType" style="float:left;color:gray;font-size:.3rem;width:13%;text-align:center">{{searchTypeCN}}</span>
        <input style="border:none;border-radius: 0;width:80%;" type="text" v-model="keyword" @keyup.13="showSearch" id="search-input"/>
      </div>
      <span v-if="title">{{title}}</span>
    </div>
    <ul v-show="selectSearchType" style="padding:10px;position:absolute;left:1.6rem;width:1.6rem;text-align:center;top:1rem;background-color:rgba(255,255,255,0.7);font-size:16px;border-radius:5px">
      <li @click="changeSearch('goods')" style='font-size:.4rem;padding:20px' value="goods">商品</li>
      <li @click="changeSearch('store')" style='font-size:.4rem;padding:20px' value="store">店铺</li>
      <li @click="changeSearch('hotel')" style='font-size:.4rem;padding:20px' value="store">酒店</li>
      <li @click="changeSearch('scenic')" style='font-size:.4rem;padding:20px' value="store">景点</li>
    </ul>
    <div @click='rightClick()' class="header-right">
        <a>
          <span v-if="rightLabel">
            {{rightLabel}}
          </span>
          <span class="{{rightIcon}}" v-if="rightIcon">
          </span>
        </a>
    </div> 
</header>
</template>

<script type="text/javascript">
module.exports = {
	data:function () {
    return { 
      keyword:this.$route.params.keyword,
      selectSearchType:false,
      searchType:'goods',
      searchTypeCN:'商品'
     }
  },
  events:{
    'reSearch':function(){
      this.keyword = this.$route.params.keyword;
      this.searchType = this.$route.params.searchType;
      this.searchTypeCN = this.$route.params.searchType=='goods'?'商品':'店铺'
    }
  },
	props: ['title','leftLabel','rightLabel','leftLink','rightLink','leftIcon','rightIcon','search','value'],
  methods:{
    changeSearch:function(type){
      if(type=='store'){
        this.selectSearchType=false;
        this.searchType='store';
        this.searchTypeCN='店铺'
      }else if(type=='goods'){
        this.selectSearchType=false;
        this.searchType='goods';
        this.searchTypeCN='商品'
      }else if(type=='hotel'){
        this.selectSearchType=false;
        this.searchType='hotel';
        this.searchTypeCN='酒店'
      }else if(type=='scenic'){
        this.selectSearchType=false;
        this.searchType='scenic';
        this.searchTypeCN='景点'
      }
    },
    showSearch:function(){
      if(isEmpty(this.keyword)){
        this.keyword = " "
      }
      var param = {"keyword":this.keyword};
      param['searchType'] = this.searchType;
      this.eventHandle('search',param);
    },

    rightClick:function(){
      this.eventHandle(this.rightLink)
    },
    leftClick:function(){
      if(this.leftLink == undefined || this.leftLink==""){
        history.go(-1);
      }else{
        this.eventHandle(this.leftLink)
      }
    },
    eventHandle:function(eventTarget,msg){
      if(eventTarget.slice(0,1)=='#'){
        location.href = eventTarget
      }else{
        if(eventTarget == 'search'&&$.isEmpty(msg)){
          this.showSearch();
          return;
        }
        this.$dispatch(eventTarget,msg)
      }
    }
  }
}
</script>

<style lang="stylus">

@import "../main.styl"
header-btn-width = 1.5rem
header-img-width = 0.5rem
header-height = 1.2rem
header-text-color = #fff
.icon-left
  width:header-img-width
  height:@width
  background-size:100%
  display:inline-block
.user-icon
  background-image:url("../asset/images/user-white.png")
  width:header-img-width
  height:@width
  background-size:100%
  display:inline-block
.phone-icon
  background-image:url("../asset/images/phone.png")
  width:header-img-width
  height:@width
  background-size:100%
  display:inline-block
.back-icon
  background-image:url("../asset/images/fanhui.png")
  width:header-img-width
  height:@width
  background-size:100%
  display:inline-block
.home-icon
  background-image:url("../asset/images/store-white.png")
  width:header-img-width
  height:@width
  background-size:100%
  display:inline-block
.qrcode-icon
  background-image:url("../asset/images/qr_code.png")
  width:header-img-width
  height:@width
  background-size:100%
  display:inline-block
.search-icon
  background-image:url("../asset/images/qr_code.png")
  width:header-img-width
  height:@width
  background-size:100%
  display:inline-block

.index-header
  z-index:2
  background-color:app-green
  height:header-height
  color:header-text-color
  font-size:.5rem
  display:flex
  display: -webkit-flex; /* Safari */
  flex-direction:row
  align-items:center
  & a
    color:white
.header-center
  flex-grow: 1;
  height:0.8rem
  line-height:@height
  text-align:center
.header-left-label{
  width:auto
}
.header-left
  text-align:center
  width:header-btn-width
  & img
    width:header-img-width
.header-right
  text-align:center
  width:header-btn-width
  & img
    width:header-img-width
#search-input
  border-radius:10px
  font-size:0.4rem
  height:0.8rem
  width:100%
  display:block
  padding-left:5px
</style>