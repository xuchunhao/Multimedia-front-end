var visitor = '阁下';
//右键菜单
jQuery(document).ready(function ($) {
    $("#spig").mousedown(function (e) {
        if(e.which==3){
            showMessage("秘密通道:<br />    <img src=\"http://pic.sc.chinaz.com/Files/pic/Listfaces/3646/02.gif\"/><br/>\
            <a href=\"#/index\" title=\"主页\">主页</a>\
            <a href=\"#/navbar\" title=\"导航栏\">导航栏</a>\
            <a href=\"#/introduce\" title=\"纵览\">纵览</a>\
            <a href=\"#/technology\" title=\"匠心\">匠心</a>\
            <a href=\"#/source\" title=\"溯源\">溯源</a>\
            <a href=\"#/inherit\" title=\"薪传\">薪传</a>\
            <a href=\"#/bbs\" title=\"众芸\">众芸</a>\  ",10000);
		}
	});
	$("#spig").bind("contextmenu", function(e) {
	    return false;
	});
});

//鼠标在消息上时
jQuery(document).ready(function ($) {
    $("#message").hover(function () {
       $("#message").fadeTo("100", 1);
     });
});


//鼠标在上方时
jQuery(document).ready(function ($) {
    $(".mumu").mouseover(function () {
       $(".mumu").fadeTo("300", 0.3);
       msgs = ["点点我，我可以告诉你一些小知识哦~"];
       var i = Math.floor(Math.random() * msgs.length);
        showMessage(msgs[i]);
    });
    $(".mumu").mouseout(function () {
        $(".mumu").fadeTo("300", 1)
    });
});


//开始
jQuery(document).ready(function ($) {
	var url = window.location.href;
    var title = document.title;
    if (url.indexOf('/index') >= 0) { //如果是主页
        showMessage('欢迎前来参观', 6000);
        // var now = (new Date()).getHours();
        // if (now > 0 && now <= 6) {
        //     showMessage(visitor + ' 你是夜猫子呀？还不睡觉，明天起的来么你？', 6000);
        // } else if (now > 6 && now <= 11) {
        //     showMessage(visitor + ' 早上好，早起的鸟儿有虫吃噢！早起的虫儿被鸟吃，你是鸟儿还是虫儿？嘻嘻！', 6000);
        // } else if (now > 11 && now <= 14) {
        //     showMessage(visitor + ' 中午了，吃饭了么？不要饿着了，饿死了谁来挺我呀！', 6000);
        // } else if (now > 14 && now <= 18) {
        //     showMessage(visitor + ' 中午的时光真难熬！还好有你在！', 6000);
        // } else {
        //     showMessage(visitor + ' 快来逗我玩吧！', 6000);
        // }
    }else if (url.indexOf('/introduce') >= 0){
        showMessage('简介的第2、3页是各种类的鼓的展示哦', 6000);
    }else if (url.indexOf('/bbs') >= 0){
        showMessage('阁下请先登录账号哦', 6000);
    }else if (url.indexOf('/source') >= 0){
        showMessage('这里展示了枧桥鼓的兴衰历程', 6000);
    }else if (url.indexOf('/login') >= 0){
        showMessage('阁下请先登录账号哦', 6000);
    }else if (url.indexOf('/bbs') >= 0){
        showMessage('欢迎阁下来到游客论坛，在这里你可以与其他小伙伴们多多交流呢', 6000);
    }else if (url.indexOf('/about') >= 0){
        showMessage('我们是五小灵童组合！', 6000);
    }
    // else {
    //     showMessage('欢迎' + visitor + '来到《' + title + '》', 6000);
    // }
    $(".spig").animate({
        top: $(".spig").offset().top + 300,
        left: document.body.offsetWidth - 185
    },
    {
        queue: false,
        duration: 1000
    });
//    window.setTimeout(function () {
//        showMessage("下面播报明日天气<iframe name=\"xidie\" src=\"http://api.lwl12.com/hitokoto/?encode=js\"frameborder=\“0\” scrolling=\"no\"  width=\"130px\" allowtransparency=\"true\" ></iframe>", 10000);
//    },
//  4000);
});

//鼠标在某些元素上方时
jQuery(document).ready(function ($) {
    $('h2 a').click(function () {//标题被点击时
        showMessage('萌萌地加载《<span style="color:#0099cc;">' + $(this).text() + '</span>》中，请稍候');
    });
    $('h2 a').mouseover(function () {
        showMessage('要看看《<span style="color:#0099cc;">' + $(this).text() + '</span>》这篇随笔么？');
    });
    $('li a').mouseover(function () {
        showMessage('去 <span style="color:#0099cc;">' + $(this).text() + '</span> 逛逛');
    });
    $('.tbCommentBody').mouseover(function () {
        showMessage('<span style="color:#0099cc;">' + visitor + '</span> 向评论栏出发吧！');
    });
    $('#btn_comment_submit').mouseover(function () {
        showMessage('确认提交了么？');
    });
    $('#q').focus(function () {
        showMessage('输入你想搜索的关键词再按Enter(回车)键就可以搜索啦!');
    });
});


//无聊讲点什么
jQuery(document).ready(function ($) {

    window.setInterval(function () {
       // msgs = [ "陪我聊天吧！", "好无聊哦，你都不陪我玩！", "…@……!………", "^%#&*!@*(&#)(!)(", "我可爱吧！嘻嘻!~^_^!~~","谁淫荡呀?~谁淫荡?，你淫荡呀!~~你淫荡！~~","从前有座山，山上有座庙，庙里有个老和尚给小和尚讲故事，讲：“从前有座……”"];
       // msgs = ["<iframe src=\"http://api.lwl12.com/hitokoto\"frameborder=\"0\" scrolling=\"no\" id=\"test\" onload=\"this.height=50\"  width=\"130px\" allowtransparency=\"true\" ></iframe>"];
        //if(weather.state)msgs.push(weather.c[0],weather.c[2]);
        //msgs = [weather.c[0],weather.c[2],"<iframe src=\"http://api.myhloli.com/hitokoto/\" frameborder=\"0\" scrolling=\"no\" id=\"external-frame\"  height=\"70px\" width=\"150px\" allowtransparency=\"true\" ></iframe>","<iframe src=\"http://api.myhloli.com/hitokoto/\" frameborder=\"0\" scrolling=\"no\" id=\"external-frame\"  height=\"70px\" width=\"150px\" allowtransparency=\"true\" ></iframe>","<iframe src=\"http://api.myhloli.com/hitokoto/\" frameborder=\"0\" scrolling=\"no\" id=\"external-frame\"  height=\"70px\" width=\"150px\" allowtransparency=\"true\" ></iframe>"];
        msgs = [$("#hitokoto").text()];
        var i = Math.floor(Math.random() * msgs.length);
        showMessage(msgs[i], 8000);
    }, 15000);
});
/*
//无聊动动
jQuery(document).ready(function ($) {
    window.setInterval(function () {
       // msgs = ["播报明日天气<iframe name=\"xidie\" src=\"http://m.weather.com.cn/data/101010100.html\"frameborder=\“0\” scrolling=\"no\" height=\"15px\"  width=\"130px\" allowtransparency=\"true\" ></iframe>", "乾坤大挪移！", "我飘过来了！~", "我飘过去了", "我得意地飘！~飘！~"];
       // msgs = ["<iframe src=\"http://api.lwl12.com/hitokoto\"frameborder=\"0\" scrolling=\"no\" id=\"test\" onload=\"this.height=50\"  width=\"140px\" allowtransparency=\"true\" ></iframe>"];
        // if(weather.state)msgs.push(weather.c[0],weather.c[2]);
         msgs = [weather.c[0],weather.c[2],"<iframe src=\"http://api.myhloli.com/hitokoto/\" frameborder=\"0\" scrolling=\"no\" id=\"external-frame\"  height=\"70px\" width=\"150px\" allowtransparency=\"true\" ></iframe>","<iframe src=\"http://api.myhloli.com/hitokoto/\" frameborder=\"0\" scrolling=\"no\" id=\"external-frame\"  height=\"70px\" width=\"150px\" allowtransparency=\"true\" ></iframe>","<iframe src=\"http://api.myhloli.com/hitokoto/\" frameborder=\"0\" scrolling=\"no\" id=\"external-frame\"  height=\"70px\" width=\"150px\" allowtransparency=\"true\" ></iframe>"];
        var i = Math.floor(Math.random() * msgs.length);
        s = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6,0.7,0.75,-0.1, -0.2, -0.3, -0.4, -0.5, -0.6,-0.7,-0.75];
        var i1 = Math.floor(Math.random() * s.length);
        var i2 = Math.floor(Math.random() * s.length);
            $(".spig").animate({
            left: document.body.offsetWidth/2*(1+s[i1]),
            top:  document.body.offsetheight/2*(1+s[i1])
        },
            {
                duration: 2000,
                complete: showMessage(msgs[i])
            });
    }, 45000);
});
*/
//评论资料
jQuery(document).ready(function ($) {
    $("#author").click(function () {
        showMessage("留下你的尊姓大名！");
        $(".spig").animate({
            top: $("#author").offset().top - 70,
            left: $("#author").offset().left - 170
        },
        {
            queue: false,
            duration: 1000
        });
    });
    $("#email").click(function () {
        showMessage("留下你的邮箱，不然就是无头像人士了！");
        $(".spig").animate({
            top: $("#email").offset().top - 70,
            left: $("#email").offset().left - 170
        },
        {
            queue: false,
            duration: 1000
        });
    });
    $("#url").click(function () {

        showMessage("快快告诉我你的家在哪里，好让我去参观参观！");
        $(".spig").animate({
            top: $("#url").offset().top - 70,
            left: $("#url").offset().left - 170
        },
        {
            queue: false,
            duration: 1000
        });
    });
    $("#comment").click(function () {
        showMessage("认真填写哦！不然会被认作垃圾评论的！我的乖乖~");
        $(".spig").animate({
            top: $("#comment").offset().top - 70,
            left: $("#comment").offset().left - 170
        },
        {
            queue: false,
            duration: 1000
        });
    });
});

var spig_top = 50;
//滚动条移动
jQuery(document).ready(function ($) {
    var f = $(".spig").offset().top;
    $(window).scroll(function () {
        $(".spig").animate({
            top: $(window).scrollTop() + f +300
        },
        {
            queue: false,
            duration: 1000
        });
    });
});

//鼠标点击时
jQuery(document).ready(function ($) {
    // var stat_click = 0;
    $(".mumu").click(function () {
        if (!ismove) {
            // stat_click++;
            // if (stat_click > 4) {
                msgs = ["枧桥鼓制作技艺在2007年6月成为第二批浙江省非物质文化遗产名录", 
                "枧桥鼓的种类有很多，有平面鼓、牙鼓、手鼓、腰鼓、货郎鼓、战鼓、大鼓、排鼓等十多种",
                "枧桥鼓主要以大鼓为主，最大的直径有3.35米、高2.65米",
                "枧桥鼓传统制作工艺繁琐、周期长，一般一只大鼓需耗时6—7个月",
                "枧桥鼓肇始于唐代，在明清发展到顶峰，如今渐微",
                "2005年12月，中央电视台国际频道《华夏文明》栏目向全世界各国播放临海枧桥董村的制鼓工艺流程和各大特色大鼓，让更多的人了解历史文化名城临海",
                "枧桥鼓发展至今，已是第五代传承人，分别是董继光、董显跃、谢哲长",
                "做鼓有个俗话，“皮有多大，鼓就有多大“，所以皮的大小决定了鼓的大小",
                "一个鼓的制作周期要经历：牛皮处理、刨皮、锯鼓板、盘绕、拼鼓板、打磨、装鼓环、蒙皮绷制、钉泡钉、切皮上漆等十个步骤"];
                var i = Math.floor(Math.random() * msgs.length);
                //showMessage(msgs[i]);
            // } else {
            //     msgs = ["筋斗云！~我飞！", "我跑呀跑呀跑！~~", "别摸我，大男人，有什么好摸的！", "惹不起你，我还躲不起你么？", "不要摸我了，我会告诉老婆来打你的！", "干嘛动我呀！小心我咬你！"];
            //     var i = Math.floor(Math.random() * msgs.length);
            //     //showMessage(msgs[i]);
            // }
        s = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6,0.7,0.75,-0.1, -0.2, -0.3, -0.4, -0.5, -0.6,-0.7,-0.75];
        var i1 = Math.floor(Math.random() * s.length);
        var i2 = Math.floor(Math.random() * s.length);
            $(".spig").animate({
            left: document.body.offsetWidth/2*(1+s[i1]),
            top:  document.body.offsetheight/2*(1+s[i1])
            },
            {
                duration: 500,
                complete: showMessage(msgs[i])
            });
        } else {
            ismove = false;
        }
    });
});

//显示消息函数 
function showMessage(a, b) {
    if (b == null) b = 10000;
    jQuery("#message").hide().stop();
    jQuery("#message").html(a);
    jQuery("#message").fadeIn();
    jQuery("#message").fadeTo("1", 1);
    jQuery("#message").fadeOut(b);
};

//拖动
var _move = false;
var ismove = false; //移动标记
var _x, _y; //鼠标离控件左上角的相对位置
jQuery(document).ready(function ($) {
    $("#spig").mousedown(function (e) {
        _move = true;
        _x = e.pageX - parseInt($("#spig").css("left"));
        _y = e.pageY - parseInt($("#spig").css("top"));
     });
    $(document).mousemove(function (e) {
        if (_move) {
            var x = e.pageX - _x; 
            var y = e.pageY - _y;
            var wx = $(window).width() - $('#spig').width();
            var dy = $(document).height() - $('#spig').height();
            if(x >= 0 && x <= wx && y > 0 && y <= dy) {
                $("#spig").css({
                    top: y,
                    left: x
                }); //控件新位置
            ismove = true;
            }
        }
    }).mouseup(function () {
        _move = false;
    });
});

