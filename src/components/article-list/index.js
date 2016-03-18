require('./style.styl')
require('./articleList.js')
module.exports = {
  template: require('./template.html'),
  replace: true,
  props: ['side', 'name','leftName']
}
