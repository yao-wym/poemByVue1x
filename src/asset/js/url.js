var HOST = "http://123.56.136.248";
var HOST_API = "http://123.56.136.248/app/index.php?";
var ARTICLE_LIST_API = HOST_API+"act=cms_article&op=article_list&class_id=1";
var LOGIN_API = HOST_API+'act=login';
var REG_API = HOST_API+'act=login&op=register';
var HOTEL_LIST_API = HOST_API+'act=shop&op=hotel_list&key=store_credits';
var SHOP_LIST_API = HOST_API+'act=shop&sc_id=3';
var SEND_SMS_API = HOST_API+'act=index&op=send_sms';
var HOTEL_DETAIL_API = HOST_API+'act=store&op=store_detail';
var ADV_API = HOST_API+'act=index&op=index_adv_list';

var ADDR_LIST_API = HOST_API+'act=member_address&op=address_list';

var ADDR_DEL_API = HOST_API+'act=member_address&op=address_del';

var SCENIC_LIST_API = HOST_API+'act=goods&op=goods_list';

var GOODS_SEARCH_API = HOST_API+'act=goods&op=goods_list';

var TECHAN_LIST_API = HOST_API+'act=goods&op=goods_list';
var SUBMIT_ORDER_VR_API = HOST_API+'act=member_vr_buy&op=buy_step3';

var poemUI = {
	toast:function(msg){
		alert(msg);
	},
	comfirm:function(msg){
		var flag = comfirm(msg);
		if(flag == true){

		}else{

		}
	}
}
var client = 'ios'