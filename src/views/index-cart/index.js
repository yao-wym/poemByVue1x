module.exports = {
  template: require('./template.html'),
  replace: true,
  data: function () {
    return {
      msg: '123',
      cartGoods: [{
          message: 'Foo'
        },{
          message: 'Bar'
        }],
      headerIconRight: 'search',
      iconleft: 'plus',
      leftName: 'Bruce Lee',
      rightName: 'Chuck Norris'
    }
  },
  components: {
    'app-header': require('../../components/header'),
    'app-cart-list': require('../../components/cart-list')
  }
}