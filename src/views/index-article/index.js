module.exports = {
  template: require('./template.html'),
  replace: true,
  data: function () {
    return {
      msg: '123',
      headerIconRight: 'search',
      iconleft: 'plus',
      leftName: 'Bruce Lee',
      rightName: 'Chuck Norris'
    }
  },
  components: {
    'app-header': require('../../components/header'),
    'app-article-list': require('../../components/article-list')
  }
}