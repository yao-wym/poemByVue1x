require('./style.styl')
module.exports = {
  template: require('./template.html'),
  replace: true,
  components: {
    'hotel-list-item': function(resolve) {
      require(['./components/hotel-list-item'], resolve);
    }
  },
  data: function(){
  	this.getHotelList();
  	var hotelList = [];
  	var curpage = 1; 
  	return {
  		curpage : curpage,
  		filterList:['默认排序','价格从低到高','价格从高到低','销量从高到低','评价从高到低'],
  		orderList:['默认排序','传统酒店','牧家乐'],
  		hotelList:hotelList
  	}
  },
  methods:{
  	getHotelList:function(){
  		$.getJSON(HOTEL_LIST_API,{order:"asc",page:10,curpage:this.curpage}).done(this.getHotelListDone);
  	},
  	getHotelListDone:function(res){
  		console.log(JSON.stringify(res));
      if(!isEmpty(res.datas.store_list)){
        this.hotelList = this.hotelList.concat(res.datas.store_list);
        this.curpage++;
      }
  	},
  },
  created: function() {
    this.$on('conditionChange', function() {
      $.getJSON(SHOP_LIST_API,{order:"desc",page:10,curpage:this.curpage}).done(this.getHotelListDone);
    })
  },
}