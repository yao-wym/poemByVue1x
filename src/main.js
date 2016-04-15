import Vue from 'vue'
import Router from 'vue-router'
import { domain, fromNow } from './filters'
import App from './App.vue'
// import ItemView from './components/ItemView.vue'
import UserView from './views/User.vue'
import IndexHome from './views/IndexHome.vue'
import HotelListView from './views/HotelList.vue'
// import ScenicListView from './views/ScenicList.vue'
// import FoodListView from './views/FoodList.vue'
import UserRegView from './views/UserReg.vue'
import UserLoginView from './views/UserLogin.vue'
import FindPwdView from './views/UserFindPwd.vue'
import ChangePwdView from './views/UserChangePwd.vue'
// import AddressListView from './views/AddressList.vue'
import IndexView from './views/Index.vue'
import IndexArticle from './views/IndexArticle.vue'
import IndexUcenter from './views/IndexUcenter.vue'
// import HotelDetailView from './views/HotelDetail.vue'

import OrderHotelView from './views/OrderHotel.vue'
// 
import OrderTechanView from './views/OrderTechan.vue'

// import AddressAddView from './views/AddressAdd.vue'

import SearchView from './views/Search.vue'
// import MapView from './views/MapView.vue'


// import HotelDeepDetail from './views/HotelDeepDetail.vue'
// import HotelOrderForm from './views/HotelOrderForm.vue'
// import ScenicDetailView from './views/ScenicDetail.vue'
// import ScenicOrderForm from './views/ScenicOrderForm.vue'
// import FoodDetail from './views/FoodDetail.vue'
// import TechanListView from './views/TechanList.vue'
// import SettingView from './views/Setting.vue'
// import SelfInfo from './views/SelfInfo.vue'
// import FeedBack from './views/FeedBack.vue'
// import PointsDetail from './views/PointsDetail.vue'
// import PointsStore from './views/PointsStore.vue'
// import ItemComments from './views/ItemComments.vue'
// import AddItemComment from './views/AddItemComment.vue'
// import ScenicDeepDetail from './views/ScenicDeepDetail.vue'
// import TravelNoteList from './views/TravelNoteList.vue'
// import TravelNote from './views/TravelNote.vue'
// import About from './views/About.vue'
// import StoreGoodsView from './views/StoreGoodsList.vue'
import TechanOrderFormView from './views/TechanOrderForm.vue'
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
  '/MapView': {
    // component: MapView
    component:function (resolve) {
      require(['./Views/MapView.vue'], resolve)
    }
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
  '/AddressList':{
        component:function (resolve) {
          require(['./Views/AddressList.vue'], resolve)
        },
        name:'addressList'
        // component:AddressListView
  },
  '/AddressAdd':{
      name:'addressAdd',
      // component:AddressAddView
      component:function (resolve) {
          require(['./Views/AddressAdd.vue'], resolve)
      }
    },  
  'About': {
    component:function (resolve) {
      require(['./Views/About.vue'], resolve)
    }
    // component: About
  },
  // '/item/:id': {
  //   component: ItemView
  // },
  // '/ucenter': {
  //   component: ItemView
  // },
  '/login': {
    component: UserLoginView
  },
  '/reg': {
    component: UserRegView
  },
  '/findpwd': {
    component: FindPwdView
  },
  '/search/:keyword': {
    name:'search',
    component: SearchView
  },
  '/TechanOrderForm': {
    name:'techanOrderForm',
    component: TechanOrderFormView
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
    // component:function (resolve) {
    //   require(['./Views/HotelList.vue'], resolve)
    // }
  },
  '/FoodList/:id': {
    // component: FoodListView
    component:function (resolve) {
      require(['./Views/FoodList.vue'], resolve)
    }
  },
  '/TechanList': {
    // component: TechanListView
    component:function (resolve) {
      require(['./Views/TechanList.vue'], resolve)
    }
  },
  '/ScenicList': {
    component:function (resolve) {
      require(['./Views/ScenicList.vue'], resolve)
    }
  },
  '/HotelDetail/:hotelId': {
    name:'hoteldetail',
    // component: HotelDetailView,
    component:function (resolve) {
      require(['./Views/HotelDetail.vue'], resolve)
    }
  },
  '/HotelDeepDetail/:id': {
    // component: HotelDeepDetail
    component:function (resolve) {
      require(['./Views/HotelDeepDetail.vue'], resolve)
    }
  },
  '/ScenicDetail/:id': {
    name:"scenicdetail",
    // component: ScenicDetailView
    component:function (resolve) {
      require(['./Views/ScenicDetail.vue'], resolve)
    }
  },
  'ScenicDeepDetail/:id': {
    // component: ScenicDeepDetail
    component:function (resolve) {
      require(['./Views/ScenicDeepDetail.vue'], resolve)
    }
  },
  '/StoreGoodsList/:id': {
    // component: StoreGoodsView
    component:function (resolve) {
      require(['./Views/StoreGoodsList.vue'], resolve)
    }
  },
  // '/app_header': {
  //   // component: ItemView
  // },
  '/HotelOrderForm/:id': {
    // component: HotelOrderForm
    component:function (resolve) {
      require(['./Views/HotelOrderForm.vue'], resolve)
    }
  },
  '/ScenicOrderForm': {
    // component: ScenicOrderForm
    component:function (resolve) {
      require(['./Views/ScenicOrderForm.vue'], resolve)
    }
  },
  '/FoodDetail/:id': {
    // component: FoodDetail
    component:function (resolve) {
      require(['./Views/FoodDetail.vue'], resolve)
    }
  },
  '/Setting': {
    component:function (resolve) {
      require(['./Views/Setting.vue'], resolve)
    }
    // component: SettingView
  },
  '/SelfInfo': {
    component:function (resolve) {
      require(['./Views/SelfInfo.vue'], resolve)
    }
    // component: SelfInfo
  },
  '/FeedBack': {
    // component: FeedBack
    component:function (resolve) {
      require(['./Views/FeedBack.vue'], resolve)
    }
  },
  '/PointsDetail': {
    component:function (resolve) {
      require(['./Views/PointsDetail.vue'], resolve)
    }
    // component: PointsDetail
  },
  '/PointsStore': {
    component:function (resolve) {
      require(['./Views/PointsStore.vue'], resolve)
    }
    // component: PointsStore
  },
  '/Comments/:id': {
    component:function (resolve) {
      require(['./Views/ItemComments.vue'], resolve)
    }
    // component: ItemComments
  },
  '/AddItemComment': {
    component:function (resolve) {
      require(['./Views/AddItemComment.vue'], resolve)
    }
    // component: AddItemComment
  },
  'TravelNoteList/:id': {
    component:function (resolve) {
      require(['./Views/TravelNoteList.vue'], resolve)
    }
    // component: TravelNoteList
  },
  'TravelNote/:id': {
    component:function (resolve) {
      require(['./Views/TravelNote.vue'], resolve)
    }
    // component: TravelNote
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
