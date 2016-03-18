require('./style.styl')

module.exports = {
  template: require('./template.html'),
  props: ['msg','filterItems','orderItems'],
  data: function(){
  	return {
  		items:this.orderItems
  	}
  },
  methods:{
  	showFilter:function(){
  		this.showList();
  		this.items = this.filterItems
  	},
  	showOrder:function(){
  		this.showList();
  		this.items = this.orderItems
  	},
  	changeList:function(){
      this.$dispatch('conditionChange');
  	},
  	itemClick:function(){
  		this.hiddenMask();
      this.changeList();
  	},
  	resetState:function(){
  	},
  	showList:function(){
  		$('#tab-mask').removeClass("poem-hidden");
  		$('#tab-mask').addClass('poem-mask');
  		$('.item-list').removeClass("poem-hidden");
  	},
  	hiddenMask:function(){
  		$('.poem-mask').addClass("poem-hidden");
  		$('.item-list').addClass("poem-hidden");
  	}
  }
} 