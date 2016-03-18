require('./style.styl')
// require('iscroll');
module.exports = {
  template: require('./template.html'),
  props: ['msg','filterItems','orderItems'],
  data: function(){
  	return {
  		items:this.orderItems
  	}
  },
  methods:{
  	returnTop:function(){
        alert(1);
  	}
  }
} 