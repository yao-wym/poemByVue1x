webpackJsonp([12],{11:function(e,o){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAACXBIWXMAABcSAAAXEgFnn9JSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABLxJREFUeNrsm19y2jAQxhWm7/gCHbgBzgnwWx/jyQVwTxBygpAT1D1BnQu05rFPNTeAG8ANYHqAVJr5NGxUSPxHK9mGndF47AQZ//ytdiUtN6+vr8Kn3f9+HMtDJJs+UlvLtpWt+Pnl21p4thsfsCSgQB4S2eayjUp+7CBbJlsqwW0vApYEtQCkIbm8UuqBkvbkulJaiCP9/xfVh4S27yUsCSmEMia4tJNNgcvLPLT8fAzIU6K0RH427xUs+aBKGTnUcYAqsgZ9pQT6o+wr7QUsKOIXTjfKpWy4j+xXwZ7h9Lvsc95pWHC9Aop6kQ+UWO5f9fcDp1/rqtU7LES8NaLdSj5IxBgwnnB6y5liDBhfxAKg1EAec91EwlH3WeKUVVkDpretEswHnCYOQnyCwDGBa3ZKWQudP0lQBffAi5eRGvfuDKyY+4ufsBTqGiGwtB8WUgUV/XYuVGWoKydu2Qll6aiXC/eWG9+h9bC0CxQeYOl7TroCa4yj85UBuOKBJMSthzXCF/e1/qTvG3QpKe2dXWF5hrUhSyk+bGq4Y6th7Y2B3plhmkUH+9bDKjhznZI53qorbpgbUx6XFnMmxNZhIWVQyzJDzhWAMy541ylYZFLreiKt77Xk2irjgpWRFYCFA1WpsWpmvKhuwEIk0hsIT1xLJgAViOMK6QvnSgdbUorNA73cW3AAA6hCHJevWXd4uDP4BEnq0DYwAmoCl4+5l69ZYeHLRwaw2AKo0AAVuZi4u9qRpioQcM951aiFfpSr6a0vZ6CcwSIPqyLVA7mkoGUf1StASXMknUOSpccui0N8VNGECO9T408rzCvXZG6pWijeVtDsoErny9Y3vorZkHErtdzL9vmDf/+rhkCosBCezLUbBnClEG1asQsVKLYY/5xXA7qootGA5uL8RsJHqwSmK1KXVO7opBqQszBkjPlabDzoBg+o1LGuMkBjWqMrASPxf/XggtNNrcMi4Z2WQm4wJclsRi/kbAlZbdDQ5hwuahUW3nwmjkW17G/bUPGMXH5GhU37YBl1Ul7CO6ClRGkb5GLb1sAySha9VBKfcM9MHGtYrWT5jWEZoNhLFSuqLCfzx8aVzY1gEVDOy6wrBJuMuGWjMsrasIx53m0bfi5S8qXWdslasFxXCVsCtoZLquAT1hlTBzXHgpSE59aDgkUANRI1C3XrLP7pKLOxncdwGpSkFx7v6mzTDSqqKsbk9yD8bKI2BaZc8RmnKQIAm7K0+3n7GZsFYAtxXOZOWWBBtnoXJRXdNr0LNKPFJDaVpcenhc/s3JK61Fx1aTyXHVhUVR2KftbVVVZZCYmEvTCMuSsDXDNYoD41Bvi+WGqIobGydIqw7PpYdUJduTiWR8U2YGnqueinlS6+G5RwwUnPYWVWYAlSo9k3FzSyeu2KkQ1Yhei3FWXUdYX1dogJa8HCJHNEMt4+m14MnNZVlqa86TkonaDuIJKoDqzIoN532+I4rgNrbHTSdytswCouTFlRE1jiwmAFdWBdSiQ0I+KkydzwIqzMDGVwJsfSacPhEsGdWww8p6zgwtIGbav3xuurG1awK6wK9umDvwcefxjuw4ImsFQY/XPV1Puw9oLpR9kdsZNpxD8BBgBS5CUsTQhRaAAAAABJRU5ErkJggg=="},41:function(e,o,t){"use strict";e.exports={components:{"flex-scroll-view":function(e){!function(){var o=[t(3)];e.apply(null,o)}.call(this)},banner:function(e){!function(){var o=[t(22)];e.apply(null,o)}.call(this)}},ready:function(){},route:{data:function(e){e.next({}),this.goodsId=this.$route.params.id,this.getGoodsDetail()},canReuse:function(e){}},methods:{goBack:function(){history.go(-1)},toast:function(){poemUI.toast("暂无商家电话")},collect:function(){$.poemPost(GOODS_COLLECT_API,{key:poem.getItem("key"),goods_id:this.$route.params.id}).done(this.collectDone)},collectDone:function(e){e.error?poemUI.toast(e.error):poemUI.toast("收藏成功")},addToCart:function(){$.poemPost(CART_ADD_API,{key:poem.getItem("key"),goods_id:this.goodsId,quantity:this.quantity}).done(function(e){e.error?poemUI.toast(e.error):poemUI.toast("添加成功")})},getGoodsDetail:function(){$.poemGet(GOODS_DETAIL_API,{goods_id:this.goodsId}).done(this.getDone)},getDone:function(e){return e.error?(poemUI.toast("商品已下架"),void this.goBack()):(this.goodsDetail=e,this.foodImgArr=e.goods_image,this.$nextTick(function(){}),void setTimeout(function(e){return function(){e.$broadcast("refresh")}}(this),500))},buy:function(e){this.$route.router.go({path:"/TechanOrderForm?goodsId="+this.goodsId+"&goodsType="+this.goodsId})}},data:function(){return{quantity:1,goodsId:"",goodsDetail:{},foodName:"",price:59,originalPrice:100,expressPrice:0,monthSold:3215,bgImg:"",stock:999,postiveCommentsRate:.98,storeName:"",storeScore:9.2,foodImgArr:[]}}}},152:function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".view[_v-3e21146e]{-webkit-transition:all .4s ease;transition:all .4s ease;position:absolute}.view.v-enter[_v-3e21146e]{opacity:0;-webkit-transform:translate3d(100px,0,0);transform:translate3d(100px,0,0)}.view.v-leave[_v-3e21146e]{opacity:0;-webkit-transform:translate3d(-100px,0,0);transform:translate3d(-100px,0,0)}.scenic-header[_v-3e21146e]{background-size:100% 100%;text-align:center;height:6rem;padding-bottom:.6rem;color:#fff;position:relative}.scenic-header header[_v-3e21146e]{padding:10px}.scenic-header header img[_v-3e21146e]{height:.5rem}.container[_v-3e21146e]{padding-bottom:.5rem}.intro[_v-3e21146e]{padding:0 .2rem}.row[_v-3e21146e]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.row p[_v-3e21146e]{width:33%}.original-price[_v-3e21146e]{text-decoration:line-through}.right[_v-3e21146e]{float:right}.link-line[_v-3e21146e]{display:block;height:1.3rem;line-height:1.3rem;border-top:1px solid #dbdbdb;padding:0 .2rem}.link-line[_v-3e21146e]:link,.link-line[_v-3e21146e]:visited{color:#a0a0a0}.contact[_v-3e21146e]{width:90%;margin:.5rem auto 1.5rem}.contact a[_v-3e21146e]{display:inline-block;height:.8rem;line-height:.8rem;background:transparent;font-size:.4rem;border:1px solid #dbdbdb;border-radius:.3rem;width:44%;margin:10px;text-align:center}.contact a[_v-3e21146e]:link,.contact a[_v-3e21146e]:visited{color:#a0a0a0}.price-red[_v-3e21146e]{color:red;padding-left:.4rem}.footer[_v-3e21146e]{height:1.5rem;line-height:1.5rem;width:100%}.footer .footer-ctrlpanel[_v-3e21146e],.footer[_v-3e21146e]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.footer .footer-ctrlpanel[_v-3e21146e]{width:50%;background:#aaa;color:#fff}.footer .footer-ctrlpanel>div[_v-3e21146e]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;text-align:center;color:#fff}.footer .footer-ctrlpanel>div>div[_v-3e21146e]{line-height:0;margin-top:-.35rem}.footer .footer-ctrlpanel>div img[_v-3e21146e]{width:35%;height:35%}.footer .addto-cart[_v-3e21146e]{background:#50c850;color:#fff;width:50%;text-align:center}.footer .buy-now[_v-3e21146e]{background:#f7b52b;color:#fff;width:25%;text-align:center}",""])},170:function(e,o){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAACXBIWXMAABcSAAAXEgFnn9JSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAo9JREFUeNrsmu1xgzAMhgmX/6EbsEHdDRiBTlA2SDZoRsgGJRuQCZpuQCZoMkGTCah1hTuOksTYsuMP6U5/eqBznuq1JaNZ0zQRmZjNCBbBIlgEi2ARLIJFsAgWwUI0xj2Z8Pw+NFgAZ819KfHuiXseEqyNJKjOdqHAgqz6UYyxjQPJqkLxfZDhJpTMqrk/97NEBmAImcUGoMBKmUBxgBI8daUAwboPq5IN5DusnPsCQ4KhwBpKsCZY47XVG5YEwea9wMwzWNnI30qVgFBnsfZ0WHguSZBgqhIAZLgKAJRyVnWwjoG0PMqwQIZJ25GnHoFhA7UcMPZk2ODPCI2mbXbGzipfS4exQrQiWGKF6AFrXw4BVokVOCYJhg2rb1+YpVFMEgwTVqFTgv1GekozajOsvu1G6i0tsNbc3x3PtAo74LWvOz588nnCzqxre9bBcVDoErwlw9yhfhEuApa6JXhLhq6dgh+6JehL6TCsrbY6QPmQWWMDH6+6ZBh7llUXXaB8gLUysbH7ACuN/g98ECwbJOg6rMJkVrkMy7gEXYY1NvChHdZ84vNZu9BHz0Uw01k1tSjFmPjVZS+RwiiRDhnaOmVzMgFqKqy6PZ5tsktk8HZkam/I2j0rswAU/PNgRuNoK6ygjWARLIL1cMOs4LNI30CcztjGYEGhWkZ/n84+uX+3p1OOsDadseUMZCjpCfe6uW5rxdjnG7ELhdjSrvJy2dy31MLY0q4iwzeBZ1aS8hOJnbuyZ4lW8DL9JENeQ/D3WU6dhnvBplrmNqCesAZnMkvkwm0jERe+Jm8Fbhsq46mlsXQoLI39kNKh+1HloCaCH5kjLC4ZKSEgdvYIUODUG1IjTbAIFsEiWGS/AgwAyQZ2aY4vlYAAAAAASUVORK5CYII="},171:function(e,o){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAACXBIWXMAABcSAAAXEgFnn9JSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABBdJREFUeNrsnO2RmzAQhnWa/DcdHKng6MCkg6SCcB04FRypIE4FRzrwVRBcQXAFIRUEV0BQInKyvHwILWgB74xmjI1BPLy7wK7EXVmW7Gb9jN8QzBNWVLWsaqVsRdWSqvlUOnhHxA0FlI8Nv52rFkqQq1dW3AJK2KZqadW8tcMSAHaAkk4AsN3aYe0kiNqOMkYFVfsArOtWXSJmOWpe1Yry0nxtnUT7PXbYX6fK0lX1rWo5EM/IqIsTilUxsF4uIZKIXZywqsipixNWFTl1ceKqIqUuTlxVpNTFZ6AqMuriM1CVqq4Xl+riM1FVbXsgU7G4rIMnwaiw3g6AxeRD9VZZfpRZi8UoC0NVTa4bL0lZmKpyqi4+M1W5VZeDzEKAtO1U2240dtYByw09mYPylXyUp7lKna8Kkc6z2M537btfUrUiBV1Idy0YUkraFFYIgNka/P+dPAAsSw32fwIA5iYhAYIVKOpQlbKxPLDPI8SWQB68bd96gVRhxUAwtu1A7RIpsqL0EBBpJxnrGI6SSabCEgsPY50RRxY2xFJTkP9LcQKWUNRTy8pq0MyJAbEB2XUx0oH5Alah0T5Jl8wZgcKmgxRSIGHqAnp8A4AKpUut0QolvorPX5TffA6QXSuoXo87Z2X5fuq0B2F31DnkHMgRPa8cWADcHQhBHernnqy8tshl9ddRC4BnWWHh31ss5YEXApasHFRRg1JhrR1YE6iLDAn0x2RlwHqBaoK1JmC9QbXBWgMwI1BdsJYMzBhUH1hLBDYIVF9YSwI2GJQJrCUAC21AmcKaM7AI6LcRqCGwmoAd5E3tXEDlQ0pyQzvQBIyi6+mWDT2xNh2JgY74xGAdsEDZDu0Wqeev2nc+wbyUnnsvbJJ/mEatiFF0LE8KKyAOKwOU5QzWVitIMuKwAlewfOKqgvrkU4GV3ZTVXtWlDquuhZJzQ6qw1H5tmMXYeSxYZ8LF2RzLFW1gbWegKsauhzpNDmsuLoh6RRwKi/rNKCk3DEZUVj3kB3MS07EhfMwWViQvEj/Yv1HIvxneG0NQXBEjZtleCSN5MM/segijeDnGTwRoTmE9IKgqVCDdd6xbQ4sHumeK8UDNEVwwHQApla4GQRLTVT6xy3FjtT1JwKbQMpQr4oCM4fuBQ5NCYAqJaqk6YkVmNOOGIUB1wcHkpRiFtq9J0soxNHappfkNOfsmSND8nzZoec8Tpp+oSWAdeu60C1IuVdp3v3221wZtb1svwJiN5QNK2FscFBtJqYmhR4yirNggxmAOvfQNYqCHUYnCLFqWHYHYG7E2mHbsH+rvZHXDrOy2sSFB0Pr0qzSMldawvI6OJQ7L+VGL0q1Cge1M1oi9ThrK2etUDgpZiFBp9c1zYtM3Km+TnIXdXupqYH8EGADqwUBvsE8vaQAAAABJRU5ErkJggg=="},174:function(e,o){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAMAAAAPkIrYAAAAM1BMVEX////////////////////////////////////////////////////////////////////lEOhHAAAAEXRSTlMAMFCAwHDw/yDgQLDQkBCgYPoAJx8AAAJMSURBVFjDrZjZYoQgDEXZZFAU+f+vrQSpOwkLD+20g4ckXEMIY9nBhZQqDikFZ7WDD0r/rkOroYJn5Ph7H6M0RaTJ/j86q0WGsaj5/392opNUema4PjQNaQ1Fo7l1B4nXr8WOWx2O8hBvnQmKkXGKx4yykZRf1EWazc7iEF+Lb5SBNeeMQKawnBaksAqY+wnzsBZVPQZ88BnUWqDC9RPGwzcSUd71TxkeeXGT62+LD8vXpyvPmLkZt8o/YxAsm+/SsHis4ta4Z8zsc95cgWJsvofGbcHSpgbFTHjU3SwVVahNtNfoTE+nyagY6kMsCvMwhwIv1dksWY2KwpgOI7WrR8HO7SEyiFkYKhpmbp8qUSdrxuwmElAQpTHlB9GGAo2FV3zYfjeiGNtmDVFcthUVnAwS0xHZhArO6RiuqRUFcucQtmYUBEwEdc3tqJDGZGCpdlTYQRl+LO0otgST1OvL6KBgoJdZ0b13VjziNO/CKoVlWYWwPKsMllgLa4fBPn7pqxCmdq1+H9h0GOhe5NIXHQbvI89rkgiLeSKXv+iwmL+yeZUMsxGSzfdU2J7vOVrj4DCf6tYRK3JwWDofsXObADvObYNXvQjsZA1W52CwU52D118I7Fx/4XVhFnapCwn16gFzSL1KqKMTzGN1NKW+jzCP1/eUewes+Zq47i7Zwrtj5j5Euqd9yOF5ulPuj6/v9JtMKPdaRrvXdr1vd+0DJGV36U907Zt07eck20l9JkIskP6XL+h/de3L9e0X9u1jfvZX7dDQry3p+/4BAC8jvw9srecAAAAASUVORK5CYII="},252:function(e,o,t){e.exports='<div class=flex-view v-transition="" _v-3e21146e=""> <flex-scroll-view _v-3e21146e=""> <banner banner-height=6.5rem :img-arr=foodImgArr _v-3e21146e=""></banner> <header style=position:fixed;top:0;width:100%;z-index:2 _v-3e21146e=""> <i @click=goBack() style=float:left;padding:20px _v-3e21146e=""> <img src='+t(20)+' style=width:.5rem _v-3e21146e=""> </i> <div style=float:right _v-3e21146e=""> </div> </header> <div class=container _v-3e21146e=""> <div class=intro _v-3e21146e=""> <p _v-3e21146e="">{{ goodsDetail.goods_info.goods_name }}</p> <p class=price style=color:red;font-size:.55rem _v-3e21146e="">￥{{ goodsDetail.goods_info.goods_price }}</p> <p _v-3e21146e="">价格: <span class=original-price _v-3e21146e="">{{ goodsDetail.goods_info.goods_marketprice }}</span></p> <div class=row _v-3e21146e=""> <p _v-3e21146e="">快递: {{ expressPrice }}元</p> <p _v-3e21146e="">月销：{{ goodsDetail.goods_info.goods_salenum }}笔</p> <p _v-3e21146e="">库存：{{ goodsDetail.goods_info.goods_storage }}</p> </div> </div> <a class=link-line _v-3e21146e=""> <span style=color:orange _v-3e21146e="">选择商品规格</span> <span class=right _v-3e21146e="">&gt;</span> </a> <a class=link-line v-link="{path:\'/Comments/\'+this.$route.params.id}" _v-3e21146e=""> <span style=color:#4b78ed _v-3e21146e="">评价晒单</span> <span class=right _v-3e21146e="">&gt;</span> </a> <a class=link-line v-link="{path:\'/GoodsDeepDetail?id=\'+this.$route.params.id}" _v-3e21146e=""> <span style=color:#51d311 _v-3e21146e="">图文详情</span> <span class=right _v-3e21146e="">&gt;</span> </a> <a class=link-line v-link="{path:\'/StoreGoodsList/\'+goodsDetail.store_info.store_id+\'?storeName=\'+goodsDetail.store_info.store_name}" _v-3e21146e=""> <div style=margin-top:10px;height:1.5rem;line-height:1.5rem;display:inline-block;vertical-align:middle _v-3e21146e=""> <img style=margin-top:10px;border-radius:50%;width:1rem src="{{ goodsDetail.store_info.avatar }}" alt="" _v-3e21146e=""> </div> <span style=display:inline-block _v-3e21146e="">{{ goodsDetail.store_info.store_name }}</span> <span class=right _v-3e21146e="">&gt;</span> </a> <p class=contact _v-3e21146e=""> <a v-if="{{ goodsDetail.store_info.store_phone }}" href="tel:{{ goodsDetail.store_info.store_phone }}" _v-3e21146e=""> </a><a @click="toast(\'暂无商家电话\')" v-else="" _v-3e21146e=""> <img style=width:.5rem;position:relative;top:5px;margin-right:10px src='+t(11)+' alt="" _v-3e21146e=""> <span _v-3e21146e="">联系客服</span></a> <a v-link="{path:\'/StoreGoodsList/\'+goodsDetail.store_info.store_id+\'?storeName=\'+goodsDetail.store_info.store_name}" _v-3e21146e=""> <img style=width:.5rem;position:relative;top:5px;margin-right:10px src='+t(29)+' alt="" _v-3e21146e=""> <span _v-3e21146e="">进入店铺</span></a> </p> </div> </flex-scroll-view> <div class=footer _v-3e21146e=""> <div class=footer-ctrlpanel _v-3e21146e=""> <div @click=goBack() _v-3e21146e=""> <img src='+t(174)+' _v-3e21146e=""> <div href="" _v-3e21146e="">返回</div> </div> <div @click=collect() _v-3e21146e=""> <img src='+t(171)+' _v-3e21146e=""> <div href="" _v-3e21146e="">收藏</div> </div> <div v-link="{path:\'/index/cart\'}" _v-3e21146e=""> <img src='+t(170)+' _v-3e21146e=""> <div href="" _v-3e21146e="">购物车</div> </div> </div> <a class=addto-cart @click=addToCart() _v-3e21146e="">加入购物车</a> </div> </div>'},273:function(e,o,t){var i,s;t(362),i=t(41),s=t(252),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},362:function(e,o,t){var i=t(152);"string"==typeof i&&(i=[[e.id,i,""]]);t(2)(i,{});i.locals&&(e.exports=i.locals)}});