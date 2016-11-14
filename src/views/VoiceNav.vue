<template v-transition>
<div class="flex-view" v-transition>
<app-header title="导游导航"></app-header>
  <div class="header-tab" style="display:flex">
    <div v-for="type in voiceNavType" class="header-tab-item" v-bind:class="{active: !$index}">{{type}}</div>
  </div>
  <flex-scroll-view>
    <ul id="voice-nav-view" style="font-size: 0.3rem;">
      <voice-nav-item v-for="voice in voiceNavList" :voice="voice" v-if="voice['type'] == curType" :state="state" :index="$index">
      </voice-nav-item>
    </ul>
  </flex-scroll-view>
</div>
</template>

<script>

  module.exports = {
  replace: true,
  components: {
    'voice-nav-item': require('../components/VoiceNavItem.vue'),
    'flex-scroll-view': require('../components/FlexScrollView.vue'),
    'app-header': require('../components/CommonHeader.vue'),
  },
  data:function(){
    return {
      curType:'',
      voiceNavType:[],
      voiceNavList:[]
    }
  },
  ready:function(){
    // $.fn.poemGet(CART_LIST_API,{'key':});
    // this.leftLabel='酒店门票';
    this.title="";
    this.rightLabel="";
    
    this.getGuideType();
    $(".header-tab").on('click',".header-tab-item",
      (function(that){ return function(){
        $('.header-tab-item').removeClass('active');
        $(this).addClass('active');
        that.curType = $(this).text();
      }
    })(this))
  },
  methods:{
    getGuideList:function(){
      $.poemGet(DAOHANG_LIST_API,{key:poem.getItem('key')}).done(this.getSuccess);
    },
    getGuideType:function(){
      $.poemGet(DAOHANG_TYPE_API,{key:poem.getItem('key')}).done(this.getTypeSuccess);
    },
    getSuccess:function(res){
      this.voiceNavList = res;
      this.$nextTick(function(){
        this.$dispatch("refresh");
        this.$broadcast('refresh');
        });
    },
    getTypeSuccess:function(res){
      this.voiceNavType = res;
      this.curType = res[0];
      this.getGuideList();
      this.$nextTick(function(){
        this.$dispatch("refresh");
        this.$broadcast('refresh');
        });
    }
  },
  props:['leftLabel','title','rightLabel']
}
</script>

<style lang="stylus" scoped>
  @import "../main.styl"
.header-tab
  display:flex
  & .header-tab-item
    flex:1
    font-size:.4rem
    text-align:center
    border:solid 1px #ccc
    padding:15px 20px
    &.active
      border-bottom:solid 5px #439f9f
</style>