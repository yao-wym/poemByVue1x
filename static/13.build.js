webpackJsonp([13],{9:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAACXBIWXMAABcSAAAXEgFnn9JSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABLxJREFUeNrsm19y2jAQxhWm7/gCHbgBzgnwWx/jyQVwTxBygpAT1D1BnQu05rFPNTeAG8ANYHqAVJr5NGxUSPxHK9mGndF47AQZ//ytdiUtN6+vr8Kn3f9+HMtDJJs+UlvLtpWt+Pnl21p4thsfsCSgQB4S2eayjUp+7CBbJlsqwW0vApYEtQCkIbm8UuqBkvbkulJaiCP9/xfVh4S27yUsCSmEMia4tJNNgcvLPLT8fAzIU6K0RH427xUs+aBKGTnUcYAqsgZ9pQT6o+wr7QUsKOIXTjfKpWy4j+xXwZ7h9Lvsc95pWHC9Aop6kQ+UWO5f9fcDp1/rqtU7LES8NaLdSj5IxBgwnnB6y5liDBhfxAKg1EAec91EwlH3WeKUVVkDpretEswHnCYOQnyCwDGBa3ZKWQudP0lQBffAi5eRGvfuDKyY+4ufsBTqGiGwtB8WUgUV/XYuVGWoKydu2Qll6aiXC/eWG9+h9bC0CxQeYOl7TroCa4yj85UBuOKBJMSthzXCF/e1/qTvG3QpKe2dXWF5hrUhSyk+bGq4Y6th7Y2B3plhmkUH+9bDKjhznZI53qorbpgbUx6XFnMmxNZhIWVQyzJDzhWAMy541ylYZFLreiKt77Xk2irjgpWRFYCFA1WpsWpmvKhuwEIk0hsIT1xLJgAViOMK6QvnSgdbUorNA73cW3AAA6hCHJevWXd4uDP4BEnq0DYwAmoCl4+5l69ZYeHLRwaw2AKo0AAVuZi4u9qRpioQcM951aiFfpSr6a0vZ6CcwSIPqyLVA7mkoGUf1StASXMknUOSpccui0N8VNGECO9T408rzCvXZG6pWijeVtDsoErny9Y3vorZkHErtdzL9vmDf/+rhkCosBCezLUbBnClEG1asQsVKLYY/5xXA7qootGA5uL8RsJHqwSmK1KXVO7opBqQszBkjPlabDzoBg+o1LGuMkBjWqMrASPxf/XggtNNrcMi4Z2WQm4wJclsRi/kbAlZbdDQ5hwuahUW3nwmjkW17G/bUPGMXH5GhU37YBl1Ul7CO6ClRGkb5GLb1sAySha9VBKfcM9MHGtYrWT5jWEZoNhLFSuqLCfzx8aVzY1gEVDOy6wrBJuMuGWjMsrasIx53m0bfi5S8qXWdslasFxXCVsCtoZLquAT1hlTBzXHgpSE59aDgkUANRI1C3XrLP7pKLOxncdwGpSkFx7v6mzTDSqqKsbk9yD8bKI2BaZc8RmnKQIAm7K0+3n7GZsFYAtxXOZOWWBBtnoXJRXdNr0LNKPFJDaVpcenhc/s3JK61Fx1aTyXHVhUVR2KftbVVVZZCYmEvTCMuSsDXDNYoD41Bvi+WGqIobGydIqw7PpYdUJduTiWR8U2YGnqueinlS6+G5RwwUnPYWVWYAlSo9k3FzSyeu2KkQ1Yhei3FWXUdYX1dogJa8HCJHNEMt4+m14MnNZVlqa86TkonaDuIJKoDqzIoN532+I4rgNrbHTSdytswCouTFlRE1jiwmAFdWBdSiQ0I+KkydzwIqzMDGVwJsfSacPhEsGdWww8p6zgwtIGbav3xuurG1awK6wK9umDvwcefxjuw4ImsFQY/XPV1Puw9oLpR9kdsZNpxD8BBgBS5CUsTQhRaAAAAABJRU5ErkJggg=="},42:function(t,e,i){"use strict";t.exports={components:{"flex-scroll-view":function(t){!function(){var e=[i(3)];t.apply(null,e)}.call(this)},"app-header":function(t){!function(){var e=[i(4)];t.apply(null,e)}.call(this)}},computed:{formInfo:function(){return{key:poem.getItem("key"),goods_id:this.roomInfo.goods_id,quantity:this.quantity,rcb_pay:0,pd_pay:0,days:Math.ceil((this.checkOutTimeStamp-this.checkInTimeStamp)/864e5),buyer_msg:Math.ceil((this.checkOutTimeStamp-this.checkInTimeStamp)/864e5)+"晚|"+this.checkInTime+"~"+this.checkOutTime+"|"+this.contact,contact:this.contact,buyer_phone:this.buyer_phone}},orderPrice:function(){return(this.quantity*this.roomInfo.goods_price*Math.ceil((this.checkOutTimeStamp-this.checkInTimeStamp)/864e5)).toFixed(2)}},data:function(){return{roomInfo:{},hotelName:"",checkInTime:(new Date).getFullYear()+"-"+(parseInt((new Date).getMonth())+1)+"-"+(new Date).getDate(),checkOutTime:(new Date).getFullYear()+"-"+(parseInt((new Date).getMonth())+1)+"-"+(parseInt((new Date).getDate())+1),checkInTimeStamp:(new Date).getTime(),checkOutTimeStamp:(new Date).getTime()+864e5,houseType:"",saveTo:"",livePerson:"",contact:"",quantity:1}},methods:{addHouseCount:function(){this.quantity+=1},minusHouseCount:function(){return this.quantity<2?void poemUI.toast("至少要定一间房哦"):void(this.quantity-=1)},submitOrder:function(){$.poemPost(SUBMIT_ORDER_VR_API,this.formInfo).done(this.submitDone)},submitDone:function(t){$.isEmpty(t.error)?(poemUI.toast("订单提交成功"),this.$route.router.go({name:"orderhotel"})):poemUI.toast(t.error)},checkInDate:function(t){this.checkInTime=t,this.checkInTimeStamp=new Date(t).getTime(),alert(this.checkInTime)},checkOutDate:function(t){this.checkOutTimeStamp=new Date(t).getTime(),this.checkOutTime=t},saveTimeDone:function(t){this.saveTime=t}},ready:function(){$("#dateCheckIn").date({title:"请选择入住时间"},this.checkInDate),$("#dateCheckOut").date({title:"请选择离店时间"},this.checkOutDate),this.$nextTick(function(){this.$broadcast("refresh")})},route:{data:function(t){t.next({}),this.roomInfo=JSON.parse(this.$route.query.roomInfo),this.hotelName=this.$route.query.hotelName},canReuse:function(t){}}}},154:function(t,e,i){e=t.exports=i(1)(),e.push([t.id,".view[_v-d74309a0]{-webkit-transition:all .4s ease;transition:all .4s ease;position:absolute}.view.v-enter[_v-d74309a0]{opacity:0;-webkit-transform:translate3d(100px,0,0);transform:translate3d(100px,0,0)}.view.v-leave[_v-d74309a0]{opacity:0;-webkit-transform:translate3d(-100px,0,0);transform:translate3d(-100px,0,0)}.container[_v-d74309a0]{padding-bottom:1rem}.section[_v-d74309a0]{background:#fff;margin-bottom:.4rem}.section>div[_v-d74309a0]{padding:.6rem .4rem;border-bottom:1px solid #dbdbdb}.section[_v-d74309a0]:first-child{padding:.4rem}.section:first-child h1[_v-d74309a0]{margin:0}.section img[_v-d74309a0]{display:block;float:right;width:.8rem;position:relative;top:-.2rem}.section input[type=text][_v-d74309a0]{height:.5rem;border:none;width:60%;font-size:.4rem}.right[_v-d74309a0]{float:right}.house-count button[_v-d74309a0]{width:.5rem;height:.5rem;vertical-align:middle;background:none;border:1px solid #dbdbdb;font-size:.4rem;outline:none}.day[_v-d74309a0]{color:#55b66f;display:inline-block;float:right}.notice[_v-d74309a0]{color:#a0a0a0;margin-top:1.5rem;padding:0 .4rem}.footer[_v-d74309a0]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:fixed;bottom:0;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:.5rem;width:100%;background:#fff}.footer input[_v-d74309a0]{background-color:#f7b52b;height:1rem;line-height:1rem;text-align:center;font-size:.5rem;width:4rem;color:#fdfdfd;vertical-align:bottom;border:none;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.footer .price[_v-d74309a0]{-webkit-box-flex:2;-webkit-flex:2;-ms-flex:2;flex:2;padding-left:.4rem;color:#a0a0a0}.footer .price span[_v-d74309a0]{color:red}",""])},246:function(t,e,i){t.exports='<div class=flex-view v-transition="" _v-d74309a0=""> <app-header title=订单填写 _v-d74309a0=""></app-header> <flex-scroll-view _v-d74309a0=""> <div class=container _v-d74309a0=""> <div id=date class=section _v-d74309a0=""> <h1 _v-d74309a0="">{{ hotelName }}</h1> <p _v-d74309a0=""> 时间： <span id=dateCheckIn _v-d74309a0="">{{ checkInTime }}</span>入住-<span id=dateCheckOut _v-d74309a0="">{{ checkOutTime }}</span> 离店 <span class=day _v-d74309a0="">{{ formInfo.days }}晚</span> </p> <p _v-d74309a0="">房型：{{ roomInfo.goods_name }}</p> </div> <div class=section _v-d74309a0=""> <div class=house-count _v-d74309a0="">房间数 <div class=right _v-d74309a0=""> <button @click=minusHouseCount _v-d74309a0="">-</button> {{ quantity }} <button @click=addHouseCount _v-d74309a0="">+</button> </div> </div> </div> <div class=section _v-d74309a0=""> <input id=date-test type=date style=display:none;width:6rem;height:1rem _v-d74309a0=""> <div _v-d74309a0="">联系人 <input type=text v-model=contact _v-d74309a0=""> <img src='+i(9)+' alt="" _v-d74309a0=""></div> <div _v-d74309a0="">联系方式 <input v-model=buyer_phone type=text _v-d74309a0=""> <img src='+i(20)+' alt="" _v-d74309a0=""></div> </div> </div> </flex-scroll-view> <div id=datePlugin _v-d74309a0=""></div> <div class=footer _v-d74309a0=""> <div class=price _v-d74309a0="">订单金额：<span _v-d74309a0="">{{ orderPrice }}</span></div> <input type=text v-model=orderPrice style=display:none _v-d74309a0=""> <input @click=submitOrder() type=button value=提交订单 _v-d74309a0=""> </div> </div>'},259:function(t,e,i){var o,a;i(349),o=i(42),a=i(246),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),a&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=a)},349:function(t,e,i){var o=i(154);"string"==typeof o&&(o=[[t.id,o,""]]);i(2)(o,{});o.locals&&(t.exports=o.locals)}});