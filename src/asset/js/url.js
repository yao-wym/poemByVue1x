var HOST = "http://123.56.136.248";
var HOST_API = "http://123.56.136.248/app/index.php?";
var ARTICLE_LIST_API = HOST_API+"act=cms_article&op=article_list&class_id=1";
var LOGIN_API = HOST_API+'act=login';
var REG_API = HOST_API+'act=login&op=register';
var HOTEL_LIST_API = HOST_API+'act=shop&op=hotel_list&key=store_credit&order=asc';
var SHOP_LIST_API = HOST_API+'act=shop';
var SEND_SMS_API = HOST_API+'act=index&op=send_sms';
var HOTEL_DETAIL_API = HOST_API+'act=store&op=store_detail';
var ADV_API = HOST_API+'act=index&op=index_adv_list';

var ADDR_LIST_API = HOST_API+'act=member_address&op=address_list';

var ADDR_DEL_API = HOST_API+'act=member_address&op=address_del';

var ADDR_ADD_API = HOST_API+'act=member_address&op=address_add';

var ADDR_DETAIL_API = HOST_API+'act=member_address&op=address_info';

var ADDR_EDIT_API = HOST_API+'act=member_address&op=address_edit';

var SCENIC_LIST_API = HOST_API+'act=goods&op=goods_list';

var GOODS_SEARCH_API = HOST_API+'act=goods&op=goods_list';

var TECHAN_LIST_API = HOST_API+'act=goods&op=goods_list';
var TECHAN_DETAIL_API = HOST_API+'act=goods&op=goods_list&gc_id=1';


var CART_LIST_API = HOST_API+'act=member_cart&op=cart_list';

var COMMENT_LIST_API = HOST_API+'act=goods&op=comment_list';
var TRAVELNOTE_LIST_API = HOST_API + 'act=cms_article&op=article_list';
var TRAVELNOTE_DETAIL_API = HOST_API + 'act=cms_article&op=article_detail';
var POINTS_DETAIL_API = HOST_API + 'act=member_index&op=points_log';
var POINTS_STORE_API = HOST_API + 'act=member_pointmall&op=plist';
var POINTS_BUY_API = HOST_API + 'act=member_pointmall&op=buystep1';
var USER_INFO_API = HOST_API + 'act=member_index';

var CART_DEL_API = HOST_API+'act=member_cart&op=cart_del';

var CART_BUY_API = HOST_API+'act=member_cart&op=cart_del';

var GOODS_BUY_STEP1_API = HOST_API+'act=member_buy&op=buy_step1';
var GOODS_BUY_STEP2_API = HOST_API+'act=member_buy&op=buy_step2';

var SUBMIT_ORDER_VR_API = HOST_API+'act=member_vr_buy&op=buy_step3';

var BUY_CART_VR_API = HOST_API+'act=member_vr_buy&op=buy_step1';

var GOODS_DETAIL_API = HOST_API+'act=goods&op=goods_detail';

var CART_ADD_API = HOST_API+'act=member_cart&op=cart_add';

var TECHAN_ORDER_LIST_API = HOST_API+'act=member_order&op=order_list_v2';

var TECHAN_CANCEL_ORDER_API = HOST_API+'act=member_order&op=order_cancel';

var TECHAN_PAY_API = HOST_API+'act=member_payment&op=payment_confirm_real';

var VR_ORDER_LIST_API = HOST_API+'act=member_vr_order&op=order_list_v2';

var VR_CANCEL_ORDER_API = HOST_API+'act=member_vr_order&op=order_cancel';

var VR_PAY_API = HOST_API+'act=member_payment&op=payment_confirm_real';

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