<template>
<div id="datePlugin">
	<div id="dateshadow"></div>
    <div id="datePage" class="page">
        <section>
            <div id="datetitle">
            	<h1>请选择日期</h1>
            </div>
            <div id="datemark">
            	<a id="markyear"></a>
            	<a id="markmonth"></a>
            	<a id="markday"></a>
            </div>
            <div id="timemark">
            	<a id="markhour"></a>
            	<a id="markminut"></a>
            	<a id="marksecond"></a>
            </div>
            <div id="datescroll">
            <div id="yearwrapper">
            	<ul>
            		<li v-for="year in date.years"> {{year}} 年</li>
            	</ul>
            </div>
            <div id="monthwrapper">
            	<ul>
            		<li v-for="month in date.months">{{month}}月</li>
            	</ul>
            </div>
            <div id="daywrapper">
            	<ul>
            		<li v-for="day in date.days">{{day}}日</li>
            	</ul>
            </div>
            </div>
            <div id="datescroll_datetime">
            	<div id="Hourwrapper">
            		<ul>
            			<li v-for="hour in time.hours">{{hour}}时</li>
            		</ul>
            	</div>
            <div id="Minutewrapper">
            	<ul>
            		<li v-for="minute in time.minutes">{{minute}}时</li>
            	</ul>
            </div>
                <div id="Secondwrapper">
                	<ul>
                		<li v-for="second in time.seconds">{{second}}秒</li>
                	</ul>
                </div>
            </div>
        </section>
        <footer id="dateFooter">
            <div id="setcancle">
                <ul>
					<li id="dateconfirm">确定</li>
					<li id="datecancle">取消</li>
                </ul>
            </div>
        </footer>
    </div>
</div>
	
</template>

<script type="text/javascript">

module.exports = {
  props: ['','filterItems','orderItems'],
  computed:{
  	date:function(){
  		var date = {};
  		date.years = [];
  		date.months = [];
  		date.days = [];
  		for(var i=this.defaultOption.beginyear;i<this.defaultOption.endyear;i++){
  			date.years.push(i)
  		}
  		for(var i=this.defaultOption.beginmonth;i<this.defaultOption.endmonth;i++){
  			date.months.push(i)
  		}
  		for(var i=this.defaultOption.beginday;i<this.defaultOption.endday;i++){
  			date.days.push(i)
  		}
  		return date;
  	},
  	time:function(){
  		var time = {};
  		time.hours = [];
  		time.minutes = [];
  		time.seconds = [];
  		for(var i=this.defaultOption.beginhour;i<this.defaultOption.endhour;i++){
  			time.hours.push(i)
  		}
  		for(var i=this.defaultOption.beginminutes;i<this.defaultOption.endminutes;i++){
  			time.minutes.push(i)
  		}
  		for(var i=this.defaultOption.beginsecond;i<this.defaultOption.endsecond;i++){
  			time.seconds.push(i)
  		}
  		return time;
  	}
  },
  data: function(){
  	return {
  		defaultOption:{
            beginyear  : 2000,                 //日期--年--份开始
            endyear    : 2020,                 //日期--年--份结束
            beginmonth : 1,                    //日期--月--份结束
            endmonth   : 12,                   //日期--月--份结束
            beginday   : 1,                    //日期--日--份结束
            endday     : 31,                   //日期--日--份结束
            beginhour  : 1,
            endhour    : 12,
            beginminute: 0,
            endminute  : 59,
            curdate    : false,                   //打开日期是否定位到当前日期
            theme      : "date",                  //控件样式（1：日期，2：日期+时间）
            mode       : null,                    //操作模式（滑动模式）
            event      : "click",                 //打开日期插件默认方式为点击后后弹出日期
            show       : true
        }
  	}
  },
  methods:{
  	refreshDate() {
            yearScroll.refresh();
            monthScroll.refresh();
            dayScroll.refresh();
            resetInitDete();
            yearScroll.scrollTo(0, initY * 40, 100, true);
            monthScroll.scrollTo(0, initM * 40 - 40, 100, true);
            dayScroll.scrollTo(0, initD * 40 - 40, 100, true);
        },
	refreshTime() {
            HourScroll.refresh();
            MinuteScroll.refresh();
            SecondScroll.refresh();
            if (initH > 12) {    //判断当前时间是上午还是下午
                SecondScroll.scrollTo(0, initD * 40 - 40, 100, true);   //显示“下午”
                initH = initH - 12 - 1;
            }
            HourScroll.scrollTo(0, initH * 40, 100, true);
            MinuteScroll.scrollTo(0, initI * 40, 100, true);
            initH = parseInt(nowdate.getHours());
        },
	resetIndex() {
            indexY = 1;
            indexM = 1;
            indexD = 1;
        },
	resetInitDete() {
            if (opts.curdate) {
                return false;
            }
            else if (that.val() === "") {
                return false;
            }
            initY = parseInt(that.val().substr(2, 2));
            initM = parseInt(that.val().substr(5, 2));
            initD = parseInt(that.val().substr(8, 2));
        },
	bindButton() {
            resetIndex();
            $("#dateconfirm").unbind('click').click(function () {
                var datestr = $("#yearwrapper ul li:eq(" + indexY + ")").html().substr(0, $("#yearwrapper ul li:eq(" + indexY + ")").html().length - 1) + "-" +
                    $("#monthwrapper ul li:eq(" + indexM + ")").html().substr(0, $("#monthwrapper ul li:eq(" + indexM + ")").html().length - 1) + "-" +
                    $("#daywrapper ul li:eq(" + Math.round(indexD) + ")").html().substr(0, $("#daywrapper ul li:eq(" + Math.round(indexD) + ")").html().length - 1);
                if (datetime) {
                    if (Math.round(indexS) === 1) {//下午
                        $("#Hourwrapper ul li:eq(" + indexH + ")").html(parseInt($("#Hourwrapper ul li:eq(" + indexH + ")").html().substr(0, $("#Hourwrapper ul li:eq(" + indexH + ")").html().length - 1)) + 12)
                    } else {
                        $("#Hourwrapper ul li:eq(" + indexH + ")").html(parseInt($("#Hourwrapper ul li:eq(" + indexH + ")").html().substr(0, $("#Hourwrapper ul li:eq(" + indexH + ")").html().length - 1)))
                    }
                    datestr += " " + $("#Hourwrapper ul li:eq(" + indexH + ")").html().substr(0, $("#Minutewrapper ul li:eq(" + indexH + ")").html().length - 1) + ":" +
                        $("#Minutewrapper ul li:eq(" + indexI + ")").html().substr(0, $("#Minutewrapper ul li:eq(" + indexI + ")").html().length - 1);
                    indexS = 0;
                }

                if (Ycallback === undefined) {
                    if (docType) {
                        that.val(datestr);
                    } else {
                        that.html(datestr);
                    }
                } else {
                    Ycallback(datestr);
                }
                $("#datePage").hide();
                $("#dateshadow").hide();
            });
            $("#datecancle").click(function () {
                $("#datePage").hide();
                $("#dateshadow").hide();
                //Ncallback(false);
            });
        },
	extendOptions() {
            $("#datePage").show();
            $("#dateshadow").show();
        },

        //日期滑动
	init_iScrll() {
            var strY = $("#yearwrapper ul li:eq(" + indexY + ")").html().substr(0, $("#yearwrapper ul li:eq(" + indexY + ")").html().length - 1);
            var strM = $("#monthwrapper ul li:eq(" + indexM + ")").html().substr(0, $("#monthwrapper ul li:eq(" + indexM + ")").html().length - 1)
            yearScroll = new iScroll("yearwrapper", {
                snap       : "li", vScrollbar: false,
                onScrollEnd: function () {
                    indexY = (this.y / 40) * (-1) + 1;
                    opts.endday = checkdays(strY, strM);
                    $("#daywrapper ul").html(createDAY_UL());
                    dayScroll.refresh();
                }
            });
            monthScroll = new iScroll("monthwrapper", {
                snap       : "li", vScrollbar: false,
                onScrollEnd: function () {
                    indexM = (this.y / 40) * (-1) + 1;
                    opts.endday = checkdays(strY, strM);
                    $("#daywrapper ul").html(createDAY_UL());
                    dayScroll.refresh();
                }
            });
            dayScroll = new iScroll("daywrapper", {
                snap       : "li", vScrollbar: false,
                onScrollEnd: function () {
                    indexD = (this.y / 40) * (-1) + 1;
                }
            });
        },
		showdatetime() {
            init_iScroll_datetime();
            addTimeStyle();
            $("#datescroll_datetime").show();
            $("#Hourwrapper ul").html(createHOURS_UL());
            $("#Minutewrapper ul").html(createMINUTE_UL());
            $("#Secondwrapper ul").html(createSECOND_UL());
        },
        //日期+时间滑动
		init_iScroll_datetime() {
            HourScroll = new iScroll("Hourwrapper", {
                snap       : "li", vScrollbar: false,
                onScrollEnd: function () {
                    indexH = Math.round((this.y / 40) * (-1)) + 1;
                    HourScroll.refresh();
                }
            })
            MinuteScroll = new iScroll("Minutewrapper", {
                snap       : "li", vScrollbar: false,
                onScrollEnd: function () {
                    indexI = Math.round((this.y / 40) * (-1)) + 1;
                    HourScroll.refresh();
                }
            })
            SecondScroll = new iScroll("Secondwrapper", {
                snap       : "li", vScrollbar: false,
                onScrollEnd: function () {
                    indexS = Math.round((this.y / 40) * (-1));
                    HourScroll.refresh();
                }
            })
        },

		checkdays(year, month) {
            var new_year = year;    //取当前的年份        
            var new_month = month++;//取下一个月的第一天，方便计算（最后一天不固定）        
            if (month > 12)            //如果当前大于12月，则年份转到下一年
            {
                new_month -= 12;        //月份减
                new_year++;            //年份增        
            }
            var new_date = new Date(new_year, new_month, 1);                //取当年当月中的第一天
            return (new Date(new_date.getTime() - 1000 * 60 * 60 * 24)).getDate();//获取当月最后一天日期
        },
		createUL() {
            CreateDateUI();
            $("#yearwrapper ul").html(createYEAR_UL());
            $("#monthwrapper ul").html(createMONTH_UL());
            $("#daywrapper ul").html(createDAY_UL());
        },
		CreateDateUI() {
            var str = '' +
                '<div id="dateshadow"></div>' +
                '<div id="datePage" class="page">' +
                '<section>' +
                '<div id="datetitle"><h1>请选择日期</h1></div>' +
                '<div id="datemark"><a id="markyear"></a><a id="markmonth"></a><a id="markday"></a></div>' +
                '<div id="timemark"><a id="markhour"></a><a id="markminut"></a><a id="marksecond"></a></div>' +
                '<div id="datescroll">' +
                '<div id="yearwrapper">' +
                '<ul></ul>' +
                '</div>' +
                '<div id="monthwrapper">' +
                '<ul></ul>' +
                '</div>' +
                '<div id="daywrapper">' +
                '<ul></ul>' +
                '</div>' +
                '</div>' +
                '<div id="datescroll_datetime">' +
                '<div id="Hourwrapper">' +
                '<ul></ul>' +
                '</div>' +
                '<div id="Minutewrapper">' +
                '<ul></ul>' +
                '</div>' +
                '<div id="Secondwrapper">' +
                '<ul></ul>' +
                '</div>' +
                '</div>' +
                '</section>' +
                '<footer id="dateFooter">' +
                '<div id="setcancle">' +
                '<ul>' +
                '<li id="dateconfirm">确定</li>' +
                '<li id="datecancle">取消</li>' +
                '</ul>' +
                '</div>' +
                '</footer>' +
                '</div>'
            $("#datePlugin").html(str);
        }

        function addTimeStyle() {
            $("#datePage").css("height", "380px");
            $("#datePage").css("top", "60px");
            $("#yearwrapper").css("position", "absolute");
            $("#yearwrapper").css("bottom", "200px");
            $("#monthwrapper").css("position", "absolute");
            $("#monthwrapper").css("bottom", "200px");
            $("#daywrapper").css("position", "absolute");
            $("#daywrapper").css("bottom", "200px");
        },

        //创建 --年-- 列表
		createYEAR_UL() {
            var str = "<li>&nbsp;</li>";
            for (var i = opts.beginyear; i <= opts.endyear; i++) {
                str += '<li>' + i + '年</li>'
            }
            return str + "<li>&nbsp;</li>";
            ;
        },

        //创建 --月-- 列表
		createMONTH_UL() {
            var str = "<li>&nbsp;</li>";
            for (var i = opts.beginmonth; i <= opts.endmonth; i++) {
                if (i < 10) {
                    i = "0" + i
                }
                str += '<li>' + i + '月</li>'
            }
            return str + "<li>&nbsp;</li>";
            ;
        },

        //创建 --日-- 列表
		createDAY_UL() {
            $("#daywrapper ul").html("");
            var str = "<li>&nbsp;</li>";
            for (var i = opts.beginday; i <= opts.endday; i++) {
                str += '<li>' + i + '日</li>'
            }
            return str + "<li>&nbsp;</li>";
            ;
        },

        //创建 --时-- 列表
		createHOURS_UL() {
            var str = "<li>&nbsp;</li>";
            for (var i = opts.beginhour; i <= opts.endhour; i++) {
                str += '<li>' + i + '时</li>'
            }
            return str + "<li>&nbsp;</li>";
            ;
        },

        //创建 --分-- 列表
		createMINUTE_UL() {
            var str = "<li>&nbsp;</li>";
            for (var i = opts.beginminute; i <= opts.endminute; i++) {
                if (i < 10) {
                    i = "0" + i
                }
                str += '<li>' + i + '分</li>'
            }
            return str + "<li>&nbsp;</li>";
            ;
        },

        //创建 --分-- 列表
		createSECOND_UL() {
            var str = "<li>&nbsp;</li>";
            str += "<li>上午</li><li>下午</li>"
            return str + "<li>&nbsp;</li>";
            ;
        }
  } 
}
</script>
<style lang="stylus">
	.page
		display: none;position: absolute;top: 0;left: 0;bottom: 0;right: 0;width: 100%;height: 100%;overflow: hidden
	#datePage li
		font-size:.6rem !important 
	#datescroll div
		overflow:hidden;float: left;margin-left: 10%;margin-top: 15px;padding-right: 22px
	#datescroll_datetime div
		float: left;margin-left: 10%;padding-right: 22px;
	#yearwrapper
		position: absolute;left: 0;top:45px;bottom: 60px;width:80%;
	#monthwrapper
		position: absolute;left: 26%;top:45px;bottom: 60px;width:80%;
	#daywrapper
		position: absolute;left: 50%;top:45px;bottom: 60px;width:80%;
	#Hourwrapper
		position: absolute;left: 0;top:195px;bottom: 68px;width:80%;
	#Minutewrapper
		position: absolute;left: 26%;top:195px;bottom: 68px;width:80%;
	#Secondwrapper
		position: absolute;left: 50%;top:195px;bottom: 68px;width:80%;
	#Hourwrapper ul li
		color: #898989;font-size: 12px;
	#Minutewrapper ul li
		color: #898989;font-size: 12px;
	#Secondwrapper ul li
		color: #898989;font-size: 12px;
	#yearwrapper ul li
		color: #898989;font-size: 12px;
	#monthwrapper ul li
		color: #898989;font-size: 12px;
	#daywrapper ul li
		color: #898989;font-size: 12px;
	#markyear
		position:relative; margin-left: 76px;top:-2px;
	#markmonth
		position:relative; margin-left: 60px;top:-2px;
	#markday
		position:relative; margin-left: 42px;top:-2px;
	#markhour
		position:relative; margin-left: 62px;top:-2px;
	#markminut
		position:relative; margin-left: 58px;top:-2px;
	#marksecond
		position:relative; margin-left: 68px;top:-2px;
	#dateheader
		width: 100%;height: 50px;background: #79C12F;text-align: center;color: #fff;line-height: 50px;font-size: 20px;
	#setcancle ul
		text-align: center;line-height: 30px; margin:1px auto;font-size: 20px;
	#setcancle ul li
		border-radius:3px;float: left;width: 40%;height: 30px;list-style-type: none;font-family:'microsoft yahei';font-size:16px;
	#dateconfirm
		position: absolute;background:#79C12F;left:20px;color:#fff;
	#datecancle
		position: absolute;background: #dcdddd;right:20px;width: 40%;color:#666;
	#dateshadow
		display: block;position: fixed;width: 100%;height: 100%;top:0;left:0;background: #000;opacity: 0.5;
	#datePage
		font-size: 22px; border-radius: 3px; position:fixed;top:110px;MARGIN-RIGHT: auto;vertical-align:middle;margin-left: auto;width: 80%;;height: 480px;background: #FFFFFF;z-index:9999999;display: block
	#datetitle
		width: 100%;height:1rem;background: #79C12F;text-align: center;color: #fff;line-height: 50px;font-size: 20px;font-family:'microsoft yahei';
	#datetitle h1
		font-weight:normal
		margin:0
	#datemark
		font-size: 18px;left:5%;width: 90%;height: 20px;position:absolute;top:108px;background:#eee;border:1px solid #eee;
	#timemark
		font-size: 18px;left:5%;width: 90%;height: 20px;position:absolute;top:242px;background:#eee;border:1px solid #eee;
	#datescroll
		overflow:hidden;background: #F8F8F8;width:94%; margin:10px 3%;border: 1px solid #E0E0E0;border-radius: 4px;height: 360px;text-align: center;line-height: 60px;
	#datescroll_datetime
		display: none;background:#F8F8F8;width:94%; margin:10px 3%;margin-top: 10px;border: 1px solid #E0E0E0;border-radius: 4px;height: 360px;text-align: center;line-height: 80px;
	#yearwrapper ul,#monthwrapper ul,#daywrapper ul
		width:40%;
	#Hourwrapper ul,#Minutewrapper ul,#Secondwrapper ul
		width:40%;
	#dateFooter
		width:100%;background: #fff;height: 50px;bottom: 0px;position: absolute;
</style>