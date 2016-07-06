<?php
/**
 *
 */
namespace Weibo\Controller;


use Think\Controller;

class ShareController extends  Controller{

    public function shareBox(){
        $query = urldecode(I('get.query','','text'));
        parse_str($query,$array);
        $this->assign('query',$query);
        $this->assign('parse_array',$array);
        $this->display(T('Weibo@default/Widget/share/sharebox'));
    }

    public function doSendShare(){
        $aContent = I('post.content','','text');
        $aQuery = I('post.query','','text');
        parse_str($aQuery,$feed_data);

        if(empty($aContent)){
            $this->error(L('_ERROR_CONTENT_CANNOT_EMPTY_'));
        }
        if(!is_login()){
            $this->error(L('_ERROR_SHARE_PLEASE_FIRST_LOGIN_'));
        }

        $new_id = send_weibo($aContent, 'share', $feed_data,$feed_data['from']);

        $user = query_user(array('nickname'), is_login());
        $info =  D('Weibo/Share')->getInfo($feed_data);
        $toUid = $info['uid'];
        D('Common/Message')->sendMessage($toUid, L('_PROMPT_SHARE_'),$user['nickname'] . L('_SHARE_CONTENT_SHARED_').L('_EXCLAMATION_'),  'Weibo/Index/weiboDetail', array('id' => $new_id), is_login(), 1);


        $result['url'] ='';
        //返回成功结果
        $result['status'] = 1;
        $result['info'] = L('_SUCCESS_SHARE_').L('_EXCLAMATION_') . cookie('score_tip');;
        $this->ajaxReturn($result);

    }
}