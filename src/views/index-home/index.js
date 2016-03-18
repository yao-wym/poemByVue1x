module.exports = {
  template: require('./template.html'),
  replace: true,
  
  components: {
    'app-pane': require('../../components/pane'),
    'app-tab': require('../../components/index-tab')
  }
}
