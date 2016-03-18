import Vue from 'vue'
import Router from 'vue-router'
import { domain, fromNow } from './filters'
import App from './App.vue'
import NewsView from './components/NewsView.vue'
import ItemView from './components/ItemView.vue'
import UserView from './components/UserView.vue'
import IndexHome from './views/IndexHome.vue'
import HotelListView from './views/HotelList.vue'



// install router
Vue.use(Router)

// register filters globally
Vue.filter('fromNow', fromNow)
Vue.filter('domain', domain)

// routing
var router = new Router()

router.map({
  '/news/:page': {
    component: NewsView
  },
  '/user/:id': {
    component: UserView
  },
  '/item/:id': {
    component: ItemView
  },
  '/ucenter': {
    component: ItemView
  },
  '/login': {
    component: ItemView
  },
  '/reg': {
    component: ItemView
  },
  '/IndexHome': {
    component: IndexHome
  },
  '/HotelList': {
    component: HotelListView
  },
  '/app_header': {
    component: ItemView
  },
  '/app_header': {
    component: ItemView
  }
})

router.beforeEach(function () {
  window.scrollTo(0, 0)
})

// router.redirect({
//   '*': '/news/1'
// })
var appView = document.getElementById("poem-body");
var height = document.body.clientHeight;
var width = document.body.clientWidth;
appView.setAttribute('style','height:'+height+"px;width:"+width+"px;overflow:hidden")

router.start(App, '#app')
