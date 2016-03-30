import Vue from 'vue'
import Router from 'vue-router'
import { domain, fromNow } from './filters'
import App from './App.vue'
import NewsView from './components/NewsView.vue'
import ItemView from './components/ItemView.vue'
import UserView from './views/User.vue'
import IndexHome from './views/IndexHome.vue'
import HotelListView from './views/HotelList.vue'
import ScenicListView from './views/ScenicList.vue'
import FoodListView from './views/FoodList.vue'
import UserRegView from './views/UserReg.vue'
import UserLoginView from './views/UserLogin.vue'
import FindPwdView from './views/UserFindPwd.vue'
import ChangePwdView from './views/UserChangePwd.vue'
import AddressListView from './views/AddressList.vue'
import IndexView from './views/Index.vue'
import IndexArticle from './views/IndexArticle.vue'
import IndexUcenter from './views/IndexUcenter.vue'
import HotelDetailView from './views/HotelDetail.vue'

import OrderHotelView from './views/OrderHotel.vue'

import OrderTechanView from './views/OrderTechan.vue'



import HotelDeepDetail from './views/HotelDeepDetail.vue'
import HotelOrderForm from './views/HotelOrderForm.vue'
import ScenicDetailView from './views/ScenicDetail.vue'
import ScenicOrderForm from './views/ScenicOrderForm.vue'
import FoodDetail from './views/FoodDetail.vue'
// install router
// VueValidator = require('vue-validator')
var client = 'ios';
Vue.use(Router)
// Vue.use(VueValidator)
// register filters globally
Vue.filter('fromNow', fromNow)
Vue.filter('domain', domain)

// routing
var router = new Router()

router.map({
  '/news/:page': {
    component: NewsView
  },
  '/user': {
    component: UserView,
    subRoutes:{
      '/login':{
        name:'login',
        component:UserLoginView
      },
      '/reg':{
        name:'reg',
        component:UserRegView
      },
      '/findpwd':{
        name:'findpwd',
        component:FindPwdView
      },
      '/changepwd':{
        name:'changepwd',
        component:ChangePwdView
      },
      '/addresslist':{
        name:'addresslist',
        component:AddressListView
      },
      '/OrderHotel':{
        name:'orderhotel',
        component:OrderHotelView
      },
      '/OrderTechan':{
        name:'ordertechan',
        component:OrderTechanView
      },
      '/:id':{
        component:UserView
      }
    }
  },
  '/item/:id': {
    component: ItemView
  },
  '/ucenter': {
    component: ItemView
  },
  '/login': {
    component: UserLoginView
  },
  '/reg': {
    component: UserRegView
  },
  '/findpwd': {
    component: FindPwdView
  },
  '/IndexHome': {
    component: IndexHome
  },
  '/index': {
    component: IndexView,
    subRoutes:{
      '/home':{
        component:IndexHome
      },
      '/cart':{
        component:function (resolve) {
          // setTimeout(function(){require(['./Views/IndexCart.vue'], resolve)}, 1000);
          require(['./Views/IndexCart.vue'], resolve)
        }

      },
      '/article':{
        component:IndexArticle
      },
      '/ucenter':{
        component:IndexUcenter
      }
    }
  },
  '/HotelList': {
    component: HotelListView
  },
  '/FoodList': {
    component: FoodListView
  },
  '/ScenicList': {
    component: ScenicListView
  },
  '/HotelDetail/:hotelId': {
    name:'hoteldetail',
    component: HotelDetailView,
  },
  '/HotelDeepDetail/:id': {
    component: HotelDeepDetail
  },
  '/ScenicDetail/:id': {
    name:"scenicdetail",
    component: ScenicDetailView
  },
  '/app_header': {
    component: ItemView
  },
  '/app_header': {
    component: ItemView
  },
  '/HotelOrderForm/:id': {
    component: HotelOrderForm
  },
  'ScenicOrderForm/:id': {
    component: ScenicOrderForm
  },
  'FoodDetail/:id': {
    component: FoodDetail
  }
})

router.beforeEach(function () {
  window.scrollTo(0, 0)
})

router.redirect({
  '/': '/index/home'
})
var appView = document.getElementById("poem-body");
var height = document.body.clientHeight;
var width = document.body.clientWidth;
appView.setAttribute('style','height:'+height+"px;width:"+width+"px;overflow:hidden")

router.start(App, '#app')
