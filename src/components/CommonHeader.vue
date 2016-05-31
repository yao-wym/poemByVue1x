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
      <div style="border-radius: 10px;background-color: white" v-if="search">
        <select id="searchType" style="border: none;float: left;width:10%;height:60px;position:relative;right:-3px">
          <option value="goods">商品</option>
          <option value="store">店铺</option>
      </select>
      <input style="width:88%;border:none;border-radius: 0" type="text" value="{{value}}" v-model="keyword" @keyup.13="showSearch" id="search-input" placeholder="{{search}}"/>
      </div>
      <span v-if="title">{{title}}</span>
    </div>

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
      test: 123,
      keyword:'',
      value:''
     }
  },
	props: ['title','leftLabel','rightLabel','leftLink','rightLink','leftIcon','rightIcon','search','value'],
  methods:{
    showSearch:function(){
      if(isEmpty(this.keyword)){
        this.keyword = " "
      }
      var param = {"keyword":this.keyword};
      param['searchType'] = $("#searchType").val();
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