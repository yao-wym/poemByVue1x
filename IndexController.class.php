<?php
// +----------------------------------------------------------------------
// | OneThink [ WE CAN DO IT JUST THINK IT ]
// +----------------------------------------------------------------------
// | Copyright (c) 2013 http://www.onethink.cn All rights reserved.
// +----------------------------------------------------------------------
// | Author: 麦当苗儿 <zuojiazi@vip.qq.com> <http://www.zjzit.cn>
// +----------------------------------------------------------------------

namespace Home\Controller;

use Think\Controller;
use Think\Model;


/**
 * 前台首页控制器
 * 主要获取首页聚合数据
 */
class IndexController extends Controller
{

    //系统首页
    public function index()
    {
        if(is_login()){
        }
        hook('homeIndex');
        $default_url = C('DEFUALT_HOME_URL');//获得配置，如果为空则显示聚合，否则跳转
        if ($default_url != ''&&strtolower($default_url)!='home/index/index') {
            redirect(get_nav_url($default_url));
        }

        $show_blocks = get_kanban_config('BLOCK', 'enable', array(), 'Home');

        $this->assign('showBlocks', $show_blocks);


        $enter = modC('ENTER_URL', '', 'Home');
        $this->assign('enter', get_nav_url($enter));




        $sub_menu['left']= array(array('tab' => 'home', 'title' => L('_SQUARE_'), 'href' =>  U('index'))//,array('tab'=>'rank','title'=>'排行','href'=>U('rank'))

        );

        //添加首页banner广告 -- MATTER
        $banner_list = D('adv')->where(array('pos_id'=>10002))->select();
        foreach($banner_list as &$v){
            $v['pic'] = pic(json_decode($v['data'])->pic);
        }
        $this->assign('banner_adv', $banner_list);

        //添加论坛置顶，热门，最新各5条 -- MATTER
        $forum_post_top = D('forum_post')->where(array('is_top'=>2))->limit(5)->select();
        $forum_post_new = D('forum_post')->order('create_time desc')->limit(5)->select();
        $forum_post_hot = D('forum_post')->order('view_count desc')->limit(5)->select();

        foreach($forum_post_top as &$v){
            $v['pic'] = get_pic($v['content']);
        }
        foreach($forum_post_new as &$v){
            $v['pic'] = get_pic($v['content']);
        }
        foreach($forum_post_hot as &$v){
            $v['pic'] = get_pic($v['content']);
        }

        $this->assign('forum_post_top', $forum_post_top);
        $this->assign('forum_post_new', $forum_post_new);
        $this->assign('forum_post_hot', $forum_post_hot);

        //活动热门，往期 -- MATTER
        $event_pass = D('event')->where(" eTime<%d ",time())->limit(4)->select();
        $event_hot = D('event')->where(" is_recommend=1 ")->limit(2)->select();

        $this->assign('event_pass', $event_pass);
        $this->assign('event_hot', $event_hot);

        //医美资讯,HGN出品 -- MATTER
        $hgn_cate=D('News/NewsCategory')->getCategoryList(array('pid'=>1,'status'=>1));
        $cates=array_column($hgn_cate,'id');
        $cates=array_merge(array(1),$cates);
        $map['category']=array('in',$cates);
        $map['status']=1;
        $news_hgn = D('news')->where($map)->limit(4)->select();
        $this->assign('news_hgn', $news_hgn);

        $new_cate=D('News/NewsCategory')->getCategoryList(array('pid'=>3,'status'=>1));
        $cates=array_column($new_cate,'id');
        $cates=array_merge(array(1),$cates);
        $map['category']=array('in',$cates);
        $map['status']=1;
        $news_yimei = D('news')->where($map)->limit(4)->select();
        $this->assign('news_yimei', $news_yimei);


        $this->assign('sub_menu', $sub_menu);
        $this->assign('current', 'home');



        $this->display();
    }

    protected function _initialize()
    {

        /*读取站点配置*/
        $config = api('Config/lists');
        C($config); //添加配置

        if (!C('WEB_SITE_CLOSE')) {
            $this->error(L('_ERROR_WEBSITE_CLOSED_'));
        }
    }


}