<!DOCTYPE html>
<html lang='zh-CN'>
<head>
<title>src/main/resources/static/js/jquery.js · youngyajun/websocket-chatroom-demo - Gitee.com</title>
<meta content='on' http-equiv='x-dns-prefetch-control'>
<link href='//e.gitee.com' rel='dns-prefetch'>
<link href='//files.gitee.com' rel='dns-prefetch'>
<link href='//toscode.gitee.com' rel='dns-prefetch'>
<link href='https://assets.gitee.com' rel='dns-prefetch'>
<link href='https://portrait.gitee.com' rel='dns-prefetch'>
<link rel="shortcut icon" type="image/vnd.microsoft.icon" href="https://assets.gitee.com/assets/favicon-9007bd527d8a7851c8330e783151df58.ico" />
<link rel="canonical" href="https://gitee.com/youngyajun/websocket-chatroom-demo" />
<meta content='gitee.com/youngyajun/websocket-chatroom-demo git https://gitee.com/youngyajun/websocket-chatroom-demo.git' name='go-import'>
<meta charset='utf-8'>
<meta content='always' name='referrer'>
<meta content='Gitee' property='og:site_name'>
<meta content='Object' property='og:type'>
<meta content='http://gitee.com/youngyajun/websocket-chatroom-demo/blob/master/src/main/resources/static/js/jquery.js' property='og:url'>
<meta content='https://gitee.com/static/images/logo_themecolor.png' itemprop='image' property='og:image'>
<meta content='src/main/resources/static/js/jquery.js · youngyajun/websocket-chatroom-demo - Gitee.com' itemprop='name' property='og:title'>
<meta content='简单的websocket-chatroom参考视频副本项目' property='og:description'>
<meta content='码云,Gitee,代码托管,Git,Git@OSC,Gitee.com,开源,内源,项目管理,版本控制,开源代码,代码分享,项目协作,开源项目托管,免费代码托管,Git代码托管,Git托管服务' name='Keywords'>
<meta content='简单的websocket-chatroom参考视频副本项目' itemprop='description' name='Description'>
<meta content='pc,mobile' name='applicable-device'>

<meta content="IE=edge" http-equiv="X-UA-Compatible" />
<meta name="csrf-param" content="authenticity_token" />
<meta name="csrf-token" content="5S1zORN1py346yMRFZmzMb/nkUQjEzJCmmYJNNAAhlGolqdRxpr+rVfJ9j9NW3vYOuvnuyM8T1f3EZ2vi0a5KA==" />

<link rel="stylesheet" media="all" href="https://assets.gitee.com/assets/application-d2583d5e4478250d6452f3715f8d1424.css" />
<script>
//<![CDATA[
window.gon = {};gon.locale="zh-CN";gon.sentry_dsn=null;gon.baidu_register_hm_push=null;gon.sensor={"server_url":"https://haveaniceday.gitee.com:3443/sa?project=production","page_type":"其他"};gon.info={"controller_path":"blob","action_name":"show","current_user":false};gon.tour_env={"current_user":null,"action_name":"show","original_url":"http://gitee.com/youngyajun/websocket-chatroom-demo/blob/master/src/main/resources/static/js/jquery.js","controller_path":"blob"};gon.http_clone="https://gitee.com/youngyajun/websocket-chatroom-demo.git";gon.user_project="youngyajun/websocket-chatroom-demo";gon.manage_branch="管理分支";gon.manage_tag="管理标签";gon.enterprise_id=0;gon.create_reaction_path="/youngyajun/websocket-chatroom-demo/reactions";gon.ipipe_base_url="https://go-api.gitee.com";gon.gitee_go_active=false;gon.ref="master";
//]]>
</script>
<script src="https://assets.gitee.com/assets/static/sensor-42ae731632c43f0efd3963709358d23f.js"></script>
<script src="https://assets.gitee.com/assets/static/sentry-5.1.0-a823fb0be1b61c5d7ca4a89f0536cb0a.js"></script>
<script src="https://assets.gitee.com/assets/application-996368cfc539c7d21c803aa4b69d51f5.js"></script>
<script src="https://assets.gitee.com/assets/lib/jquery.timeago.zh-CN-4a4818e98c1978d2419ab19fabcba740.js"></script>

<link rel="stylesheet" media="all" href="https://assets.gitee.com/assets/projects/application-4e0cf3ff22c9fd90a6c5bbdd99cb8053.css" />
<script src="https://assets.gitee.com/assets/projects/app-ec4ead470184e0545203898d37232caa.js"></script>

<script src="//res.wx.qq.com/open/js/jweixin-1.2.0.js"></script>
<script>
  var title = document.title.replace(/( - Gitee| - 码云)$/, '')
      imgUrl = '';
  
  document.addEventListener('DOMContentLoaded', function(event) {
    var imgUrlEl = document.querySelector('.readme-box .markdown-body > img, .readme-box .markdown-body :not(a) > img');
    imgUrl = imgUrlEl && imgUrlEl.getAttribute('src');
  
    if (!imgUrl) {
      imgUrlEl = document.querySelector('meta[itemprop=image]');
      imgUrl = imgUrlEl && imgUrlEl.getAttribute('content');
      imgUrl = imgUrl || "https://gitee.com/static/images/logo_themecolor.png";
    }
  
    wx.config({
      debug: false,
      appId: "wxff219d611a159737",
      timestamp: "1644433134",
      nonceStr: "54ce9b7e547acc56d20053fff9744dc8",
      signature: "e9d5c1baf7cbbd6cd97412d756c2c535d741d6ad",
      jsApiList: [
        'onMenuShareTimeline',
        'onMenuShareAppMessage'
      ]
    });
  
    wx.ready(function () {
      wx.onMenuShareTimeline({
        title: title, // 分享标题
        link: "https://gitee.com/youngyajun/websocket-chatroom-demo/blob/master/src/main/resources/static/js/jquery.js", // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: imgUrl // 分享图标
      });
      wx.onMenuShareAppMessage({
        title: title, // 分享标题
        link: "https://gitee.com/youngyajun/websocket-chatroom-demo/blob/master/src/main/resources/static/js/jquery.js", // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        desc: document.querySelector('meta[name=Description]').getAttribute('content'),
        imgUrl: imgUrl // 分享图标
      });
    });
    wx.error(function(res){
      console.error('err', res)
    });
  })
</script>

<script type='text/x-mathjax-config'>
MathJax.Hub.Config({
  tex2jax: {
    inlineMath: [['$','$'], ['\\(','\\)']],
    displayMath: [["$$","$$"],["\\[","\\]"]],
    processEscapes: true,
    skipTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code'],
    ignoreClass: "container|files",
    processClass: "markdown-body"
  }
});
</script>
<script src="https://assets.gitee.com/uploads/resources/MathJax-2.7.2/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>

<script>
  (function () {
    var messages = {
      'zh-CN': {
        addResult: '增加 <b>{term}</b>',
        count: '已选择 {count}',
        maxSelections: '最多 {maxCount} 个选择',
        noResults: '未找到结果',
        serverError: '连接服务器时发生错误'
      },
      'zh-TW': {
        addResult: '增加 <b>{term}</b>',
        count: '已選擇 {count}',
        maxSelections: '最多 {maxCount} 個選擇',
        noResults: '未找到結果',
        serverError: '連接服務器時發生錯誤'
      }
    }
  
    if (messages[gon.locale]) {
      $.fn.dropdown.settings.message = messages[gon.locale]
    }
  }());
</script>

<script>
  var userAgent = navigator.userAgent;
  var isLessIE11 = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1;
  if(isLessIE11){
    var can_access = ""
    if (can_access != "true"){
      window.location.href = "/incompatible.html";
    }
  }
  document.addEventListener("error", function (ev) {
    var elem = ev.target;
    if (elem.tagName.toLowerCase() === 'img') {
      elem.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAAAAACIM/FCAAACh0lEQVR4Ae3ch5W0OgyG4dt/mQJ2xgQPzJoM1m3AbALrxzrf28FzsoP0HykJEEAAAUQTBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEkKK0789+GK/I2ezfQB522PnS1qc8pGgXvr4tE4aY0XOUWlGImThWgyCk6DleixzE7qwBkg/MGiDPlVVAyp1VQGrPKiACDhFI6VkF5LmzCki+sg7IwDoglnVAil0IMkeG9CyUiwsxLFUVFzJJOQaKCjFCDN9RXMjIX7W6ztZXZDKKCyn8sWJvH+nca7WHDN9lROlAliPH9iRKCPI4cswFJQWxB46toLQgQ9jhn5QYZA9DOkoMUoQde5YapAxDWkoNYsOQR3KQd9CxUnIQF4S49CB9ENKlBxmDEKsFUgMCCCCAAHIrSF61f6153Ajy8nyiPr8L5MXnmm4CyT2fzN4DUvHZ+ntA2tOQBRBAAAEEEEAAAQQQ7ZBaC6TwSiDUaYHQ2yuB0MN+ft+43whyrs4rgVCjBUKTFshLC6TUAjGA3AxSaYFYLZBOC2RUAsk8h5qTg9QcbEoOsoQhQ2qQhsO5xCD5dgB5JQaZ+KBKGtKecvR81Ic0ZDjByKdDx0rSEDZ/djQbH+bkIdvfJFm98BfV8hD2zprfVdlu9PxVeyYAkciREohRAplJCaRSAplJCcQogTjSAdlyHRBvSAekJR0QRzogA+mADJkOiCPSAPEtqYBshlRAXC43hxix2QiOuEZkVERykGyNo9idIZKE0HO7XrG6OiMShlDWjstVzdPgXtUH9v0CEidAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQP4HgjZxTpdEii0AAAAASUVORK5CYII=";
    }
  }, true);
</script>
</head>

<body class='git-project lang-zh-CN'>
<header class='common-header fixed noborder' id='git-header-nav'>
<div class='ui container'>
<div class='ui menu header-menu header-container'>
<div class='git-nav-expand-bar'>
<i class='iconfont icon-mode-table'></i>
</div>
<div class='gitee-nav__sidebar'>
<div class='gitee-nav__sidebar-container'>
<div class='gitee-nav__sidebar-top'>
<div class='gitee-nav__avatar-box'></div>
<div class='gitee-nav__buttons-box'>
<a class="ui button small fluid orange" href="/login">登录</a>
<a class="ui button small fluid basic is-register" href="/signup">注册</a>
</div>
</div>
<div class='gitee-nav__sidebar-middle'>
<div class='gitee-nav__sidebar-list'>
<ul>
<li class='gitee-nav__sidebar-item'>
<a href="/explore"><i class='iconfont icon-ic-discover'></i>
<span class='gitee-nav__sidebar-name'>开源软件</span>
</a></li>
<li class='gitee-nav__sidebar-item'>
<a href="/enterprises"><i class='iconfont icon-ic-enterprise'></i>
<span class='gitee-nav__sidebar-name'>企业版</span>
</a></li>
<li class='gitee-nav__sidebar-item'>
<a href="/education"><i class='iconfont icon-ic-education'></i>
<span class='gitee-nav__sidebar-name'>高校版</span>
</a></li>
<li class='gitee-nav__sidebar-item split-line'></li>
<li class='gitee-nav__sidebar-item'>
<a href="/search"><i class='iconfont icon-ic-search'></i>
<span class='gitee-nav__sidebar-name'>搜索</span>
</a></li>
<li class='gitee-nav__sidebar-item'>
<a href="/help"><i class='iconfont icon-help-circle'></i>
<span class='gitee-nav__sidebar-name'>帮助中心</span>
</a></li>
<li class='gitee-nav__sidebar-item'>
<a href="/terms"><i class='iconfont icon-file'></i>
<span class='gitee-nav__sidebar-name'>使用条款</span>
</a></li>
<li class='gitee-nav__sidebar-item'>
<a href="/about_us"><i class='iconfont icon-issuepx'></i>
<span class='gitee-nav__sidebar-name'>关于我们</span>
</a></li>
</ul>
</div>
</div>
<div class='gitee-nav__sidebar-bottom'>
<div class='gitee-nav__sidebar-close-button'>
<i class='fa fa-angle-double-left'></i>
</div>
</div>
</div>
</div>

<div class='item gitosc-logo'>
<a href="https://gitee.com"><img alt='Gitee — 基于 Git 的代码托管和研发协作平台' class='ui inline image' height='28' src='/static/images/logo.svg?t=158106664' title='Gitee — 基于 Git 的代码托管和研发协作平台' width='95'>
<img alt='Gitee — 基于 Git 的代码托管和研发协作平台' class='ui inline black image' height='28' src='/static/images/logo-black.svg?t=158106664' title='Gitee — 基于 Git 的代码托管和研发协作平台' width='95'>
</a></div>
<a title="开源软件" class="item " href="/explore">开源软件
</a><a title="企业版" class="item " href="/enterprises">企业版
<sup class='ui red label'>
特惠
</sup>
</a><a title="高校版" class="item " href="/education">高校版
</a><a title="私有云" class="item" target="_blank" href="https://gitee.cn?utm_source=giteecom">私有云
</a><a title="博客" class="item" id="gitee-blog" target="_blank" href="https://blog.gitee.com/?utm_sources=site_nav">博客
</a><div class='center responsive-logo'>
<a href="https://gitee.com"><img alt='Gitee — 基于 Git 的代码托管和研发协作平台' class='ui inline image' height='24' src='/static/images/logo.svg?t=158106664' title='Gitee — 基于 Git 的代码托管和研发协作平台' width='85'>
<img alt='Gitee — 基于 Git 的代码托管和研发协作平台' class='ui inline black image' height='24' src='/static/images/logo-black.svg?t=158106664' title='Gitee — 基于 Git 的代码托管和研发协作平台' width='85'>
</a></div>
<div class='right menu userbar right-header' id='git-nav-user-bar'>
<form class="ui item" id="navbar-search-form" data-text-require="搜索关键字不能少于1个" data-text-filter="搜索格式不正确" action="/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
<input type="hidden" name="type" id="navbar-search-type" />
<input type="hidden" name="fork_filter" id="fork_filter" value="on" />
<div class='ui search header-search'>
<input type="text" name="q" id="navbar-search-input" value="" class="prompt" placeholder="搜开源" />
</div>
</form>

<script>
  var can_search_in_repo = 1,
      repo = "VFZSWmQwNXFVVEZPYW1Sb1RucFplbHBuUFQxaE56WXpaZz09YTc2M2Y=",
      reponame = "youngyajun/websocket-chatroom-demo";
  
  $(function() {
    var $search = $('#navbar-search-form .ui.search');
    $search.search({
      apiSettings: {
        url: '/search/relative_project?q={query}',
        onResponse: function (res) {
          if (res && res.status === 200 && res.data) {
            var query = htmlSafe($search.search('get value'));
  
            res.data.map(function (item) {
              item.path_ns = '/' + item.path_ns;
              item.icon = 'iconfont icon-project-public';
            });
            res.data.unshift({
              name_ns: "在全站搜索 <b class='hl'>" + query +"</b> 相关项目",
              path_ns: '/search?fork_filter=on&q=' + query,
              icon: 'iconfont icon-search'
            });
            return res;
          } else {
            return { data: [] };
          }
        }
      },
      fields: {
        results: 'data',
        description: 'name_ns',
        url: 'path_ns',
        icon: 'icon'
      },
      minCharacters: 1,
      maxResults: 10,
      searchDelay: 250,
      showNoResults: false,
      transition: 'fade'
    });
  });
</script>

<div class='ui item' id='feature-update-notice'>
<div class='notice-update-icon'>
<a class="notice-update-popup click-knowed" title="" href="javascript:void(0)"><img alt="功能更新" title="" class="bubl_icon bubl-off-icon" src="https://assets.gitee.com/assets/bulb_off-24ee940be20998aace89a3f040cbc704.svg" />
<img alt="功能更新" title="" class="bubl_icon bubl-on-icon" src="https://assets.gitee.com/assets/bulb_on-3986b1dc417285398e3d15671bd8f261.svg" />
</a></div>
<div class='feature-update-notice-panel menu'>
<div class='notice-img'>
<img alt="" title="" class="notice-img-show" src="" />
</div>
<div class='notice-update-title'></div>
<div class='notice-update-des'></div>
<div class='notice-btn-list d-flex-between'>
<button name="button" type="button" class="ui basic orange button btn-notice btn-knowed click-knowed" style="margin-right: 0">我知道了</button>
<a class="ui button orange btn-notice btn-details click-knowed" target="_blank" href="">查看详情</a>
</div>
</div>
</div>

<a class="item git-nav-user__login-item" sa_evt="login_show" sa_referrer_url="" sa_referrer_action="站导航右上角-登录按钮" sa_referrer_type="其他" href="/login">登录
</a><a class="item git-nav-user__register-item" sa_evt="register_show" sa_referrer_url="" sa_referrer_action="站导航右上角-注册按钮" sa_referrer_type="其他" href="/signup">注册
</a><script>
  $('.destroy-user-session').on('click', function() {
    $.cookie('access_token', null, { path: '/' });
  })
</script>

</div>
</div>
</div>
</header>
<script>
  Gitee.initNavbar()
  Gitee.initRepoRemoteWay()
  $.cookie('user_locale',null)
</script>

<script>
  var userAgent = navigator.userAgent;
  var isLessIE11 = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1;
  if(isLessIE11){
    var can_access = ""
    if (can_access != "true"){
      window.location.href = "/incompatible.html";
    }
  }
</script>

<div class='fixed-notice-infos'>
<div class='all-messages'>
<div class='ui info message' id='git-bulletin'>
<a href=https://mp.weixin.qq.com/s/EvBkXvGfY9-YeCkJB62MaA target='_blank'>🎉🎉 点击领取你的 Gitee 2021 个人年度数据报告 >>></a>
<i class='icon remove' id='remove-bulletin'></i>
</div>
</div>
<div class='ui container'>
<div class='flash-messages' id='messages-container'></div>
</div>
<script>
  (function() {
    $(function() {
      var $error_box, alertTip, notify_content, notify_options, template;
      template = '<div data-notify="container" class="ui {0} message" role="alert">' + '<i data-notify="dismiss" class="close icon"></i>' + '<span data-notify="message">{2}</span>' + '</div>';
      notify_content = null;
      notify_options = {};
      alertTip = '';
      $error_box = $(".flash_error.flash_error_box");
      if (notify_options.type === 'error' && $error_box.length > 0 && !$.isEmptyObject(notify_content.message)) {
        if (notify_content.message === 'captcha_fail') {
          alertTip = "验证码不正确";
        } else if (notify_content.message === 'captcha_expired') {
          alertTip = "验证码已过期，请点击刷新";
        } else if (notify_content.message === 'not_found_in_database') {
          alertTip = "帐号或者密码错误";
        } else if (notify_content.message === 'not_found_and_show_captcha') {
          alertTip = "帐号或者密码错误";
        } else if (notify_content.message === 'phone_captcha_fail') {
          alertTip = "手机验证码不通过";
        } else {
          alertTip = notify_content.message;
        }
        return $error_box.html(alertTip).show();
      } else if (notify_content) {
        if ("show" === 'third_party_binding') {
          return $('#third_party_binding-message').html(notify_content.message).addClass('ui message red');
        }
        notify_options.delay = 3000;
        notify_options.template = template;
        notify_options.offset = {
          x: 10,
          y: 30
        };
        notify_options.element = '#messages-container';
        return $.notify(notify_content, notify_options);
      }
    });
  
  }).call(this);
</script>

</div>
<script>
  (function() {
    $(function() {
      var setCookie;
      setCookie = function(name, value) {
        $.cookie(name, value, {
          path: '/',
          expires: 365
        });
      };
      $('#remove-bulletin, #remove-bulletin-dashboard').on('click', function() {
        setCookie('remove_bulletin', "gitee-maintain-1644377127");
        $('#git-bulletin').hide();
      });
      $('#remove-member-bulletin').on('click', function() {
        setCookie('remove_member_bulletin', "gitee_member_bulletin");
        $(this).parent().hide();
      });
      return $('#remove-gift-bulletin').on('click', function() {
        setCookie('remove_gift_bulletin', "gitee-gift-bulletin");
        $(this).parent().hide();
      });
    });
  
  }).call(this);
</script>
<script>
  function closeMessageBanner(pthis, type, val) {
    var json = {}
  
    val = typeof val === 'undefined' ? null : val
    $(pthis).parent().remove()
    if (type === 'out_of_enterprise_member') {
      json = {type: type, data: val}
    } else if (type === 'enterprise_overdue') {
      json = {type: type, data: val}
    }
    $.post('/profile/close_flash_tip', json)
  }
</script>

<div class='site-content'>
<div class='git-project-header'>
<div class='fixed-notice-infos'>
<div class='ui info icon floating message green' id='fetch-ok' style='display: none'>
<div class='content'>
<div class='header status-title'>
<i class='info icon status-icon'></i>
代码拉取完成，页面将自动刷新
</div>
</div>
</div>
<div class='ui info icon floating message error' id='fetch-error' style='display: none'>
<div class='content'>
<div class='header status-title'>
<i class='info icon status-icon'></i>
<span class='error_msg'></span>
</div>
</div>
</div>
</div>
<div class='ui container'>

<div class='git-project-header-details'>
<div class='git-project-header-container'>
<div class='git-project-header-actions'>
<div class='ui tiny modal project-donate-modal' id='project-donate-modal'>
<i class='iconfont icon-close close'></i>
<div class='header'>捐赠</div>
<div class='content'>
捐赠前请先登录
</div>
<div class='actions'>
<a class='ui blank button cancel'>取消</a>
<a class='ui orange ok button' href='/login'>前往登录</a>
</div>
</div>
<div class='ui small modal wepay-qrcode'>
<i class='iconfont icon-close close'></i>
<div class='header'>
扫描微信二维码支付
<span class='wepay-cash'></span>
</div>
<div class='content weqcode-center'>
<img id='wepay-qrcode' src=''>
</div>
<div class='actions'>
<div class='ui cancel blank button'>取消</div>
<div class='ui ok orange button'>支付完成</div>
</div>
</div>
<div class='ui mini modal' id='confirm-alipay-modal'>
<div class='header'>支付提示</div>
<div class='content'>
将跳转至支付宝完成支付
</div>
<div class='actions'>
<div class='ui approve orange button'>确定</div>
<div class='ui blank cancel button'>取消</div>
</div>
</div>

<span class='ui buttons basic watch-container'>
<div class='ui dropdown button js-project-watch' data-watch-type='unwatch'>
<input type='hidden' value=''>
<i class='iconfont icon-watch'></i>
<div class='text'>
Watch
</div>
<i class='dropdown icon'></i>
<div class='menu'>
<a data-value="unwatch" class="item" sa_evt="loginInform_show" sa_referrer_url="" sa_referrer_action="Watch" sa_referrer_type="其他" rel="nofollow" data-method="post" href="/youngyajun/websocket-chatroom-demo/unwatch"><i class='iconfont icon-msg-read'></i>
不关注
</a><a data-value="watching" class="item" sa_evt="loginInform_show" sa_referrer_url="" sa_referrer_action="Watch" sa_referrer_type="其他" rel="nofollow" data-method="post" href="/youngyajun/websocket-chatroom-demo/watch"><i class='iconfont icon-msg-read'></i>
关注所有动态
</a><a data-value="releases_only" class="disabled item" sa_evt="loginInform_show" sa_referrer_url="" sa_referrer_action="Watch" sa_referrer_type="其他" rel="nofollow" data-method="post" href="/youngyajun/websocket-chatroom-demo/release_only_watch"><i class='iconfont icon-msg-read'></i>
仅关注版本发行动态
</a><a data-value="ignoring" class="item" sa_evt="loginInform_show" sa_referrer_url="" sa_referrer_action="Watch" sa_referrer_type="其他" rel="nofollow" data-method="post" href="/youngyajun/websocket-chatroom-demo/ignoring_watch"><i class='iconfont icon-msg-read'></i>
关注但不提醒动态
</a></div>
</div>
<style>
  .js-project-watch .text .iconfont {
    display: none; }
  .js-project-watch a, .js-project-watch a:hover {
    color: #000; }
  .js-project-watch .item > .iconfont {
    visibility: hidden;
    margin-left: -10px; }
  .js-project-watch .selected .iconfont {
    visibility: visible; }
  .js-project-watch .menu {
    margin-top: 4px !important; }
</style>
<script>
  $('.js-project-watch').dropdown({
    action: 'select',
    onChange: function(value, text, $selectedItem) {
      var type = value === 'unwatch' ? 'Watch' : 'Watching';
      $(this).children('.text').text(type);
      $(this).dropdown('set selected', value)
    }
  });
</script>

<a class="ui button action-social-count" title="1" href="/youngyajun/websocket-chatroom-demo/watchers">1
</a></span>
<span class='basic buttons star-container ui'>
<a class="ui button star" sa_evt="loginInform_show" sa_referrer_url="" sa_referrer_action="Star" sa_referrer_type="其他" href="/login"><i class='iconfont icon-star'></i>
Star
</a><a class="ui button action-social-count " title="20" href="/youngyajun/websocket-chatroom-demo/stargazers">20
</a></span>
<span class='ui basic buttons fork-container' title='无权 Fork 此仓库'>
<a class="ui button fork" title="你必须登录后才可以fork一个仓库" sa_evt="loginInform_show" sa_referrer_url="" sa_referrer_action="Fork" sa_referrer_type="其他" href="/login"><i class='iconfont icon-fork'></i>
Fork
</a><a class="ui button action-social-count disabled-style" title="7" href="/youngyajun/websocket-chatroom-demo/members">7
</a></span>
</div>
<h2 class='git-project-title mt-0 mb-0'>
<span class="project-title"><i class="project-icon iconfont icon-project-public" title="这是一个公开仓库"></i> <a title="youngyajun" class="author" href="/youngyajun">youngyajun</a> / <a title="websocket-chatroom-demo" class="repository" target="" style="padding-bottom: 0px; margin-right: 4px" sa_evt="repoClick" sa_location="其他" sa_url="" sa_repo_id="16064567" href="/youngyajun/websocket-chatroom-demo">websocket-chatroom-demo</a></span><span class="project-badges"><style>
  .gitee-modal {
    width: 500px !important; }
</style>
</span>
<input type="hidden" name="project_title" id="project_title" value="youngyajun/websocket-chatroom-demo" />
</h2>
</div>
</div>
</div>
<script>
  var title_import_url = "false";
  var title_post_url = "/youngyajun/websocket-chatroom-demo/update_import";
  var title_fork_url = "/youngyajun/websocket-chatroom-demo/sync_fork";
  var title_project_path = "websocket-chatroom-demo";
  var title_p_name = "websocket-chatroom-demo";
  var title_p_id= "16064567";
  var title_description = "简单的websocket-chatroom参考视频副本项目";
  var title_form_authenticity_token = "vbwcfvpEXC917LzhO8NABpSyYtkTlIKbzvcIrKoZX+3wB8gWL6sFr9rOac9jAYjvEb4UJhO7/46jgJw38V9glA==";
  var watch_type = "unwatch";
  var checkFirst = false;
  
  $('.js-project-watch').dropdown('set selected', watch_type);
  $('.checkbox.sync-wiki').checkbox();
  $('.checkbox.team-member-checkbox').checkbox();
</script>
<style>
  i.loading, .icon-sync.loading {
    -webkit-animation: icon-loading 1.2s linear infinite;
    animation: icon-loading 1.2s linear infinite;
  }
  .qrcode_cs {
    float: left;
  }
  .check-sync-wiki {
    float: left;
    height: 28px;
    line-height: 28px;
  }
  .sync-wiki-warn {
    color: #e28560;
  }
</style>

<div class='git-project-nav'>
<div class='ui container'>
<div class='ui secondary pointing menu'>
<a class="item active" href="/youngyajun/websocket-chatroom-demo"><i class='iconfont icon-code'></i>
代码
</a><a class="item " href="/youngyajun/websocket-chatroom-demo/issues"><i class='iconfont icon-task'></i>
Issues
<span class='ui mini circular label'>
0
</span>
</a><a class="item " href="/youngyajun/websocket-chatroom-demo/pulls"><i class='iconfont icon-pull-request'></i>
Pull Requests
<span class='ui mini circular label'>
0
</span>
</a><a class="item " href="/youngyajun/websocket-chatroom-demo/wikis"><i class='iconfont icon-wiki'></i>
Wiki
</a><a class="item  " href="/youngyajun/websocket-chatroom-demo/graph/master"><i class='iconfont icon-statistics'></i>
统计
</a><div class='item project-devops-item'>
<div class='ui pointing top right dropdown project-devops-dropdown'>
<div class='text'>
<i class='iconfont icon-devops'></i>
DevOps
</div>
<i class='dropdown icon'></i>
<div class='menu' style='display:none'>
<a class="item" href="/youngyajun/websocket-chatroom-demo/gitee_go"><img src="https://assets.gitee.com/assets/giteego-7ec42270742374f05850d0d3ad09e303.png" alt="Giteego" />
<div class='item-title'>
Gitee Go
</div>
</a><a class="item" href="/youngyajun/websocket-chatroom-demo/artifact_repositories"><img src="https://assets.gitee.com/assets/artifacts-eae00b503105733ce5f171de96fbb927.svg" alt="Artifacts" />
<div class='item-title'>
制品库管理
</div>
</a><a class="item" target="_blank" href="https://gitee.com/help/articles/4285"><img src="https://assets.gitee.com/assets/baidu_efficiency_cloud-81a98c2eb67fac83b1453ca3d2feb326.svg" alt="Baidu efficiency cloud" />
<div class='item-title'>
百度效率云
</div>
</a><a class="item" target="_blank" href="https://gitee.com/help/articles/4318"><img src="https://assets.gitee.com/assets/cloudbase-1197b95ea3398aff1df7fe17c65a6d42.png?20200925" alt="Cloudbase" />
<div class='item-title'>
腾讯云托管
</div>
</a><a class="item" target="_blank" href="https://gitee.com/help/articles/4330"><img src="https://assets.gitee.com/assets/cloud_serverless-686cf926ced5d6d2f1d6e606d270b81e.png" alt="Cloud serverless" />
<div class='item-title'>
腾讯云 Serverless
</div>
</a><a class="item" target="_blank" href="https://gitee.com/help/articles/4193"><img src="https://assets.gitee.com/assets/jenkins_for_gitee-554ec65c490d0f1f18de632c48acc4e7.png" alt="Jenkins for gitee" />
<div class='item-title'>
Jenkins for Gitee
</div>
</a></div>
</div>
</div>
<div class='item'>
<div class='ui pointing top right dropdown git-project-service'>
<div>
<i class='iconfont icon-service'></i>
服务
<i class='dropdown icon'></i>
</div>
<div class='menu' style='display:none'>
<a class="item" href="/youngyajun/websocket-chatroom-demo/pages"><img src="/static/images/logo-en.svg" alt="Logo en" />
<div class='item-title'>
Gitee Pages
</div>
</a><a class="item" href="/youngyajun/websocket-chatroom-demo/javadoc"><img src="https://assets.gitee.com/assets/maven-bd58aee84f266d64d4b8ce5b006a9fcf.png" alt="Maven" />
<div class='item-title'>
JavaDoc
</div>
</a><a class="item" href="/youngyajun/websocket-chatroom-demo/phpdoc"><img src="https://assets.gitee.com/assets/phpdoc-a99f87c2feaa2fd99e5065377a39487e.png" alt="Phpdoc" />
<div class='item-title'>
PHPDoc
</div>
</a><a class="item" href="/youngyajun/websocket-chatroom-demo/quality_analyses?platform=sonar_qube"><img src="https://assets.gitee.com/assets/sonar_mini-5e1b54bb9f6c951d97fb778ef623afea.png" alt="Sonar mini" />
<div class='item-title'>
质量分析
</div>
</a><a class="item" href="/youngyajun/websocket-chatroom-demo/gitee_scans"><img src="https://assets.gitee.com/assets/giteescan-cd9ab4076bd751faf7e30888eb10f782.png" alt="Giteescan" />
<div class='item-title'>Gitee Scan</div>
</a><button class='ui orange basic button quit-button' id='quiting-button'>
我知道了，不再自动展开
</button>
</div>
</div>
</div>
</div>
</div>
</div>
<script>
  $('.git-project-nav .ui.dropdown').dropdown({ action: 'nothing' });
  var gitee_reward_config = JSON.parse(localStorage.getItem('gitee_reward_config') || null) || false
  var $settingText = $('.setting-text')
  // 如果没有访问过 
  if(!gitee_reward_config) $settingText.addClass('red-dot')
</script>
<style>
  .git-project-nav i.checkmark.icon {
    color: green;
  }
  #quiting-button {
    display: none;
  }
  
  .git-project-nav .dropdown .menu.hidden:after {
    visibility: hidden !important;
  }
</style>
<script>
  isSignIn = false
  isClickGuide = false
  $('#git-versions.dropdown').dropdown();
  $.ajax({
    url:"/youngyajun/websocket-chatroom-demo/access/add_access_log",
    type:"GET"
  });
  $('#quiting-button').on('click',function() {
    $('.git-project-service').click();
    if (isSignIn) {
      $.post("/projects/set_service_guide")
    }
    $.cookie("Serve_State", true, { expires: 3650, path: '/'})
    $('#quiting-button').hide();
  });
  if (!(isClickGuide || $.cookie("Serve_State") == 'true')) {
    $('.git-project-service').click()
    $('#quiting-button').show()
  }
</script>

</div>
<div class='ui container'>
<div class='register-guide'>
<div class='register-container'>
<div class='regist'>
加入 Gitee
</div>
<div class='description'>
与超过 800 万 开发者一起发现、参与优秀开源项目，私有仓库也完全免费 ：）
</div>
<a class="ui orange button free-registion" sa_evt="register_show" sa_referrer_url="" sa_referrer_action="免费加入" sa_referrer_type="其他" href="/signup?from=project-guide">免费加入</a>
<div class='login'>
已有帐号？
<a href="/login?from=project-guide">立即登录</a>
</div>
</div>
</div>

<div class='git-project-content-wrapper'>
<div class='ui grid' id='project-wrapper'>
<div class='sixteen wide column'>
<div class='git-project-content' id='git-project-content'>
<div class='row'>
<div class='git-project-desc-wrapper'>
<div class='ui yellow message no-license' id='user-no-license-message'>
<div class='float-left' style='width: 95%;'>
该仓库未声明开源许可证文件（LICENSE），使用请关注具体项目描述及其代码上游依赖。
<i class='help circle icon'></i>
<div class='ui popup dark'>
项目仓库所选许可证以仓库主分支所使用许可证为准
</div>
</div>
<i class='remove icon' id='remove-no-license-message'></i>
<div class='clearfix'></div>
</div>
<script>
  if (false) {
    gon.project_new_blob_path = "/youngyajun/websocket-chatroom-demo/new/master/src/main/resources/static/js/jquery.js"
    bindShowModal({
      el: $('.no-license .project-license__create'),
      complete: function(data, modal) {
        if (!data.haveNoChoice && !data.data) {
          Flash.show('请选择一项开源许可证')
        } else {
          location.href = gon.project_new_blob_path + '?license=' + data.data
        }
      },
      skip: function () {
        location.href = gon.project_new_blob_path + '?license'
      }
    });
  }
  
  $('i.help.circle.icon').popup({
    popup: '.no-license .ui.popup',
    position: 'right center'
  });
  
  $('#remove-no-license-message').on('click', function() {
    $.cookie("skip_repo_no_license_message_16064567", 'hide', { expires: 365 });
    $('#user-no-license-message').hide();
    return;
  });
</script>
</div>

</div>
<div class='git-project-bread' id='git-project-bread'>
<div class='ui horizontal list mr-1'>
<div class='item git-project-branch-item'>
<input type="hidden" name="path" id="path" value="src/main/resources/static/js/jquery.js" />
<div class='ui top left pointing dropdown gradient button dropdown-has-tabs' id='git-project-branch'>
<input type="hidden" name="ref" id="ref" value="master" />
<div class='default text'>
master
</div>
<i class='dropdown icon'></i>
<div class='menu'>
<div class='ui left icon search input'>
<i class='iconfont icon-search'></i>
<input class='search-branch' placeholder='搜索分支' type='text'>
</div>
<div class='tab-menu'>
<div class='tab-menu-action' data-tab='branches'>
<a class="ui link button" href="/youngyajun/websocket-chatroom-demo/branches">管理</a>
</div>
<div class='tab-menu-action' data-tab='tags'>
<a class="ui link button" href="/youngyajun/websocket-chatroom-demo/tags">管理</a>
</div>
<div class='tab-menu-item' data-placeholder='搜索分支' data-tab='branches'>
分支 (1)
</div>
</div>
<div class='tab scrolling menu' data-tab='branches' id='branches_panel'>
<div data-value="master" class="item"><span>master</span></div>
</div>
</div>
</div>
<style>
  .iconfont.icon-shieldlock {
    color: #8c92a4;
  }
</style>
<script>
  var $branchesDropdown = $('#branches_panel');
  var $searchNameInput = $('.search-branch');
  var concurrentRequestLock = false;
  var filterXSS = window.filterXSS;
  $branchesDropdown.scroll(function() {
    var branchesPanel = document.getElementById('branches_panel');
    var numOfBranches = $branchesDropdown.children().length;
    var pageToken = $branchesDropdown.children().last().text().trim();
    if (branchesPanel.clientHeight + branchesPanel.scrollTop + 37 > branchesPanel.scrollHeight && numOfBranches < 1) {
      loadData({ page_token: pageToken });
    }
  });
  
  $searchNameInput.on('input', window.globalUtils.debouce(function (e) {
    var $currentTab = $('.tab-menu-action.active');
    var numOfBranches = $branchesDropdown.children().length;
    if($currentTab.data('tab') === 'branches' && numOfBranches < 1) {
    var searchWord = $searchNameInput.val().trim();
      if (searchWord !== "") {
        loadData({ search: searchWord });
      } else {
        loadData({});
      }
    }
  }, 500));
  
  function loadData(data) {
    if (concurrentRequestLock) { return; }
      concurrentRequestLock = true;
      $.ajax({
        url: "/youngyajun/websocket-chatroom-demo/branches/load_more",
        type: 'GET',
        data: data,
        dataType: 'json',
        success: function (branches) {
          var html = '';
          var protectRule = '';
          if (data.search || !data.page_token) {
            $branchesDropdown.empty();
          }
          branches.forEach(function (branch) {
            var branchName = filterXSS(branch.name);
            if(branch.branch_type.value === 1) {
              var rule = filterXSS(branch.protection_rule.wildcard);
              protectRule = `<i
                 class="iconfont icon-shieldlock protected-branch-popup"
                 data-title="受保护分支"
                 data-content='保护规则： ${rule}'
                >
                </i>`
            }
            html += `<div data-value='${branchName}' class="item">
                      <span>${branchName}</span> ${protectRule}
                     </div>`
          });
          $branchesDropdown.append(html);
          $('.protected-branch-popup').popup()
        },
        complete: function () {
          concurrentRequestLock = false;
        }
    });
  }
</script>

<script>
  $(function () {
    Gitee.initTabsInDropdown($('#git-project-branch').dropdown({
      fullTextSearch: true,
      selectOnKeydown: true,
      action: function (text,value,el) {
        var oItemOrInitObject = el[0] || el
        var isNotSelect = oItemOrInitObject.dataset.tab && oItemOrInitObject.dataset.tab === 'branches'
        if(isNotSelect){
          console.warn("You didn't choose a branch")
          return
        } 
        var path = $('#path').val();
        var href = ['/youngyajun/websocket-chatroom-demo/tree', encodeURIComponent(value), path].join('/');
        window.location.href = href;
        return true
      },
      onNoResults: function (searchTerm) {
        //未找到结果
        return true
      },
    }));
    $('.protected-branch-popup').popup()
  })
</script>

</div>
</div>
<div class='git-project-right-actions pull-right'>
<div class='ui orange button' id='btn-dl-or-clone'>
克隆/下载
<i class='dropdown icon'></i>
</div>
<div class='git-project-download-panel for-project ui bottom right popup'>
<div class='ui small secondary pointing menu'>
<a class='item active' data-text='' data-type='http' data-url='https://gitee.com/youngyajun/websocket-chatroom-demo.git'>HTTPS</a>
<a class='item' data-text='' data-type='ssh' data-url='git@gitee.com:youngyajun/websocket-chatroom-demo.git'>SSH</a>
<a class='item' data-text="该仓库未启用SVN访问，请仓库管理员前往【&lt;a target='_blank' href=/youngyajun/websocket-chatroom-demo/settings&gt;仓库设置&lt;/a&gt;】开启。" data-type='svn' data-url=''>SVN</a>
<a class='item' data-text="该仓库未启用SVN访问，请仓库管理员前往【&lt;a target='_blank' href=/youngyajun/websocket-chatroom-demo/settings&gt;仓库设置&lt;/a&gt;】开启。" data-type='svn_ssh' data-url=''>SVN+SSH</a>
</div>
<div class='ui fluid right labeled small input download-url-panel'>
<input type="text" name="project_clone_url" id="project_clone_url" value="https://gitee.com/youngyajun/websocket-chatroom-demo.git" onclick="focus();select()" readonly="readonly" />
<div class='ui basic label'>
<div class='ui small basic orange button' data-clipboard-target='#project_clone_url' id='btn-copy-clone-url'>
复制
</div>
</div>
</div>
<div class='ui fluid right labeled warning-text forbid-warning-text'>

</div>
<hr>
<a class="ui fluid download link button" sa_evt="loginInform_show" sa_referrer_url="" sa_referrer_action="克隆/下载" sa_referrer_type="其他" href="javascript:void(0);"><i class='icon download'></i>
下载ZIP
</a><div class='download_repository_zip form modal tiny ui' id='unlanding-complaint-modal'>
<i class='iconfont icon-close close'></i>
<div class='header'>
登录提示
</div>
<div class='container actions'>
<div class='content'>
该操作需登录 Gitee 帐号，请先登录后再操作。
</div>
<div class='ui orange icon large button ok'>
立即登录
</div>
<div class='ui button blank cancel'>
没有帐号，去注册
</div>
</div>
</div>
<script>
  var $elm = $('.download');
  
  $elm.on('click', function() {
    var modals = $("#unlanding-complaint-modal.download_repository_zip");
    if (modals.length > 1) {
      modals.eq(0).modal('show');
    } else {
      modals.modal('show');
    }
  })
  $("#unlanding-complaint-modal.download_repository_zip").modal({
    onDeny: function() {
      window.location.href = "/signup?from=download_repository_zip";
    },
    onApprove: function() {
      window.location.href = "/login?from=download_repository_zip";
    }
  })
</script>

</div>
<script>
  (function() {
    var $btnClone, $btnCopy, $input, $panel;
  
    $btnClone = $('#btn-dl-or-clone');
  
    $panel = $('.git-project-download-panel');
  
    $input = $('#project_clone_url');
  
    $btnCopy = $('#btn-copy-clone-url');
  
    $btnClone.popup({
      on: 'click',
      hoverable: true,
      position: 'bottom center'
    });
  
    $panel.find('.menu > .item').on('click', function(e) {
      var $item, dataUrl;
      $item = $(this).addClass('active');
      $item.siblings().removeClass('active');
      dataUrl = $item.attr('data-url');
      if (dataUrl) {
        $panel.find('.download-url-panel').show();
        $input.val(dataUrl);
        $panel.find('.forbid-warning-text').html('');
      } else {
        $panel.find('.download-url-panel').hide();
        $panel.find('.forbid-warning-text').html($item.attr('data-text') || '');
      }
      return $.cookie('remote_way', $item.attr('data-type'), {
        expires: 365,
        path: '/'
      });
    }).filter('[data-type="' + ($.cookie('remote_way') || 'http') + '"]').trigger('click');
  
    new Clipboard($btnCopy[0]).on('success', function() {
      $btnCopy.popup({
        content: '已复制',
        position: 'right center',
        onHidden: function() {
          return $btnCopy.popup('destroy');
        }
      });
      return $btnCopy.popup('show');
    });
  
  }).call(this);
</script>

</div>
<div class='d-inline pull-right' id='git-project-root-actions'>
<script>
  $('.disabled-upload-readonly').popup({
    content: "只读目录不允许上传文件",
    className: {
      popup: 'ui popup',
    },
    position: 'bottom center',
  })
  $('.disabled-create-folder').popup({
    content: "只读目录不允许创建目录",
    className: {
      popup: 'ui popup',
    },
    position: 'bottom center',
  })
  $('.disabled-create-file').popup({
    content: "只读目录不允许创建文件",
    className: {
      popup: 'ui popup',
    },
    position: 'bottom center',
  })
  $('.disabled-create-submodule').popup({
    content: "只读目录不允许创建子模块",
    className: {
      popup: 'ui popup',
    },
    position: 'bottom center',
  })
  $('.disabled-upload-readonly, .disabled-create-folder, .disabled-create-file, .disabled-create-submodule').click(function() {
    return false
  })
</script>
<style>
  .disabled-upload-readonly, .disabled-create-file, .disabled-create-folder, .disabled-create-submodule {
    background-color: #dcddde !important;
    color: rgba(0, 0, 0, 0.4) !important;
    opacity: 0.3 !important;
    background-image: none !important;
    -webkit-box-shadow: none !important;
            box-shadow: none !important; }
</style>


</div>
<div class='breadcrumb_path path-breadcrumb-contrainer' id='git-project-breadcrumb'>
<div class='ui breadcrumb path project-path-breadcrumb' id='path-breadcrumb'>
<a data-direction="back" class="section repo-name" style="font-weight: bold" href="/youngyajun/websocket-chatroom-demo/tree/master">websocket-chatroom-demo
</a><div class='divider'>
/
</div>
<strong>
<a data-direction="back" class="section" href="/youngyajun/websocket-chatroom-demo/tree/master/src"><span class='cblue'>
src
</span>
</a></strong>
<div class='divider'>
/
</div>
<strong>
<a data-direction="back" class="section" href="/youngyajun/websocket-chatroom-demo/tree/master/src/main"><span class='cblue'>
main
</span>
</a></strong>
<div class='divider'>
/
</div>
<strong>
<a data-direction="back" class="section" href="/youngyajun/websocket-chatroom-demo/tree/master/src/main/resources"><span class='cblue'>
resources
</span>
</a></strong>
<div class='divider'>
/
</div>
<strong>
<a data-direction="back" class="section" href="/youngyajun/websocket-chatroom-demo/tree/master/src/main/resources/static"><span class='cblue'>
static
</span>
</a></strong>
<div class='divider'>
/
</div>
<strong>
<a data-direction="back" class="section" href="/youngyajun/websocket-chatroom-demo/tree/master/src/main/resources/static/js"><span class='cblue'>
js
</span>
</a></strong>
<div class='divider'>
/
</div>
<strong>
jquery.js
</strong>
<i class='iconfont icon-clone' data-clipboard-text='src/main/resources/static/js/jquery.js' id='btn-copy-file-path'></i>
</div>
<style>
  #btn-copy-file-path {
    vertical-align: middle;
    cursor: pointer;
  }
</style>
<script>
  $btnCopy = $('#btn-copy-file-path')
  $btnCopy.popup({
    content: '复制路径'
  })
  
  if ($btnCopy[0]) {
    new Clipboard($btnCopy[0]).on('success', function() {
      $btnCopy.popup('destroy').popup({
        content: '已复制',
        on: 'manual'
      }).popup('show');
      setTimeout(function () {
        $btnCopy.popup('destroy').popup({
          content: '复制路径'
        });
      }, 2000)
    });
  }
</script>


</div>
<div class='ui horizontal list repo-action-list branches-tags' style='display: none;'>
<div class='item'>
<a class="ui blank button" href="/youngyajun/websocket-chatroom-demo/branches"><i class='iconfont icon-branches'></i>
分支 1
</a></div>
<div class='item mr-3'>
<a class="ui blank button" href="/youngyajun/websocket-chatroom-demo/tags"><i class='iconfont icon-tag'></i>
标签 0
</a></div>
</div>
</div>
<script>
  if(window.gon.locale == 'en')
    $('.branches-tags').css('margin-top', '12px')
</script>

<style>
  .ui.dropdown .menu > .header {
    text-transform: none; }
</style>
<script>
  $(function () {
    var $tip = $('#apk-download-tip');
    if (!$tip.length) {
      return;
    }
    $tip.find('.btn-close').on('click', function () {
      $tip.hide();
    });
  });
  (function(){
    function pathAutoRender() {
      var $parent = $('#git-project-bread'),
          $child = $('#git-project-bread').children('.ui.horizontal.list'),
          mainWidth = 0;
      $child.each(function (i,item) {
        mainWidth += $(item).width()
      });
      $('.breadcrumb.path.fork-path').remove();
      if (mainWidth > 995) {
        $('#path-breadcrumb').hide();
        $parent.append('<div class="ui breadcrumb path fork-path">' + $('#path-breadcrumb').html() + '<div/>')
      } else {
        $('#path-breadcrumb').show();
      }
    }
    window.pathAutoRender = pathAutoRender;
    pathAutoRender();
  })();
</script>

<div class='row column tree-holder' id='tree-holder'>
<div class='tree-content-holder' id='tree-content-holder'>
<div class='file_holder'>
<div class='file_title'>
<div class='blob-header-title'>
<div class='blob-description'>
<i class="iconfont icon-file"></i>
<span class='file_name' title='jquery.js'>
jquery.js
</span>
<small>132.57 KB</small>
</div>
<div class='options'><div class='ui mini buttons basic'>

<textarea name="blob_raw" id="blob_raw" style="display:none;">
/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */&#x000A;!function (e, t) {&#x000A;    &quot;use strict&quot;;&#x000A;    &quot;object&quot; == typeof module &amp;&amp; &quot;object&quot; == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {&#x000A;        if (!e.document) throw new Error(&quot;jQuery requires a window with a document&quot;);&#x000A;        return t(e)&#x000A;    } : t(e)&#x000A;}(&quot;undefined&quot; != typeof window ? window : this, function (C, e) {&#x000A;    &quot;use strict&quot;;&#x000A;    var t = [], r = Object.getPrototypeOf, s = t.slice, g = t.flat ? function (e) {&#x000A;        return t.flat.call(e)&#x000A;    } : function (e) {&#x000A;        return t.concat.apply([], e)&#x000A;    }, u = t.push, i = t.indexOf, n = {}, o = n.toString, v = n.hasOwnProperty, a = v.toString, l = a.call(Object), y = {}, m = function (e) {&#x000A;        return &quot;function&quot; == typeof e &amp;&amp; &quot;number&quot; != typeof e.nodeType &amp;&amp; &quot;function&quot; != typeof e.item&#x000A;    }, x = function (e) {&#x000A;        return null != e &amp;&amp; e === e.window&#x000A;    }, E = C.document, c = {type: !0, src: !0, nonce: !0, noModule: !0};&#x000A;&#x000A;    function b(e, t, n) {&#x000A;        var r, i, o = (n = n || E).createElement(&quot;script&quot;);&#x000A;        if (o.text = e, t) for (r in c) (i = t[r] || t.getAttribute &amp;&amp; t.getAttribute(r)) &amp;&amp; o.setAttribute(r, i);&#x000A;        n.head.appendChild(o).parentNode.removeChild(o)&#x000A;    }&#x000A;&#x000A;    function w(e) {&#x000A;        return null == e ? e + &quot;&quot; : &quot;object&quot; == typeof e || &quot;function&quot; == typeof e ? n[o.call(e)] || &quot;object&quot; : typeof e&#x000A;    }&#x000A;&#x000A;    var f = &quot;3.6.0&quot;, S = function (e, t) {&#x000A;        return new S.fn.init(e, t)&#x000A;    };&#x000A;&#x000A;    function p(e) {&#x000A;        var t = !!e &amp;&amp; &quot;length&quot; in e &amp;&amp; e.length, n = w(e);&#x000A;        return !m(e) &amp;&amp; !x(e) &amp;&amp; (&quot;array&quot; === n || 0 === t || &quot;number&quot; == typeof t &amp;&amp; 0 &lt; t &amp;&amp; t - 1 in e)&#x000A;    }&#x000A;&#x000A;    S.fn = S.prototype = {&#x000A;        jquery: f, constructor: S, length: 0, toArray: function () {&#x000A;            return s.call(this)&#x000A;        }, get: function (e) {&#x000A;            return null == e ? s.call(this) : e &lt; 0 ? this[e + this.length] : this[e]&#x000A;        }, pushStack: function (e) {&#x000A;            var t = S.merge(this.constructor(), e);&#x000A;            return t.prevObject = this, t&#x000A;        }, each: function (e) {&#x000A;            return S.each(this, e)&#x000A;        }, map: function (n) {&#x000A;            return this.pushStack(S.map(this, function (e, t) {&#x000A;                return n.call(e, t, e)&#x000A;            }))&#x000A;        }, slice: function () {&#x000A;            return this.pushStack(s.apply(this, arguments))&#x000A;        }, first: function () {&#x000A;            return this.eq(0)&#x000A;        }, last: function () {&#x000A;            return this.eq(-1)&#x000A;        }, even: function () {&#x000A;            return this.pushStack(S.grep(this, function (e, t) {&#x000A;                return (t + 1) % 2&#x000A;            }))&#x000A;        }, odd: function () {&#x000A;            return this.pushStack(S.grep(this, function (e, t) {&#x000A;                return t % 2&#x000A;            }))&#x000A;        }, eq: function (e) {&#x000A;            var t = this.length, n = +e + (e &lt; 0 ? t : 0);&#x000A;            return this.pushStack(0 &lt;= n &amp;&amp; n &lt; t ? [this[n]] : [])&#x000A;        }, end: function () {&#x000A;            return this.prevObject || this.constructor()&#x000A;        }, push: u, sort: t.sort, splice: t.splice&#x000A;    }, S.extend = S.fn.extend = function () {&#x000A;        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;&#x000A;        for (&quot;boolean&quot; == typeof a &amp;&amp; (l = a, a = arguments[s] || {}, s++), &quot;object&quot; == typeof a || m(a) || (a = {}), s === u &amp;&amp; (a = this, s--); s &lt; u; s++) if (null != (e = arguments[s])) for (t in e) r = e[t], &quot;__proto__&quot; !== t &amp;&amp; a !== r &amp;&amp; (l &amp;&amp; r &amp;&amp; (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i &amp;&amp; !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}, i = !1, a[t] = S.extend(l, o, r)) : void 0 !== r &amp;&amp; (a[t] = r));&#x000A;        return a&#x000A;    }, S.extend({&#x000A;        expando: &quot;jQuery&quot; + (f + Math.random()).replace(/\D/g, &quot;&quot;), isReady: !0, error: function (e) {&#x000A;            throw new Error(e)&#x000A;        }, noop: function () {&#x000A;        }, isPlainObject: function (e) {&#x000A;            var t, n;&#x000A;            return !(!e || &quot;[object Object]&quot; !== o.call(e)) &amp;&amp; (!(t = r(e)) || &quot;function&quot; == typeof (n = v.call(t, &quot;constructor&quot;) &amp;&amp; t.constructor) &amp;&amp; a.call(n) === l)&#x000A;        }, isEmptyObject: function (e) {&#x000A;            var t;&#x000A;            for (t in e) return !1;&#x000A;            return !0&#x000A;        }, globalEval: function (e, t, n) {&#x000A;            b(e, {nonce: t &amp;&amp; t.nonce}, n)&#x000A;        }, each: function (e, t) {&#x000A;            var n, r = 0;&#x000A;            if (p(e)) {&#x000A;                for (n = e.length; r &lt; n; r++) if (!1 === t.call(e[r], r, e[r])) break&#x000A;            } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;&#x000A;            return e&#x000A;        }, makeArray: function (e, t) {&#x000A;            var n = t || [];&#x000A;            return null != e &amp;&amp; (p(Object(e)) ? S.merge(n, &quot;string&quot; == typeof e ? [e] : e) : u.call(n, e)), n&#x000A;        }, inArray: function (e, t, n) {&#x000A;            return null == t ? -1 : i.call(t, e, n)&#x000A;        }, merge: function (e, t) {&#x000A;            for (var n = +t.length, r = 0, i = e.length; r &lt; n; r++) e[i++] = t[r];&#x000A;            return e.length = i, e&#x000A;        }, grep: function (e, t, n) {&#x000A;            for (var r = [], i = 0, o = e.length, a = !n; i &lt; o; i++) !t(e[i], i) !== a &amp;&amp; r.push(e[i]);&#x000A;            return r&#x000A;        }, map: function (e, t, n) {&#x000A;            var r, i, o = 0, a = [];&#x000A;            if (p(e)) for (r = e.length; o &lt; r; o++) null != (i = t(e[o], o, n)) &amp;&amp; a.push(i); else for (o in e) null != (i = t(e[o], o, n)) &amp;&amp; a.push(i);&#x000A;            return g(a)&#x000A;        }, guid: 1, support: y&#x000A;    }), &quot;function&quot; == typeof Symbol &amp;&amp; (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each(&quot;Boolean Number String Function Array Date RegExp Object Error Symbol&quot;.split(&quot; &quot;), function (e, t) {&#x000A;        n[&quot;[object &quot; + t + &quot;]&quot;] = t.toLowerCase()&#x000A;    });&#x000A;    var d = function (n) {&#x000A;        var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, S = &quot;sizzle&quot; + 1 * new Date, p = n.document, k = 0, r = 0, m = ue(), x = ue(), A = ue(), N = ue(), j = function (e, t) {&#x000A;                return e === t &amp;&amp; (l = !0), 0&#x000A;            }, D = {}.hasOwnProperty, t = [], q = t.pop, L = t.push, H = t.push, O = t.slice, P = function (e, t) {&#x000A;                for (var n = 0, r = e.length; n &lt; r; n++) if (e[n] === t) return n;&#x000A;                return -1&#x000A;            }, R = &quot;checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped&quot;, M = &quot;[\\x20\\t\\r\\n\\f]&quot;, I = &quot;(?:\\\\[\\da-fA-F]{1,6}&quot; + M + &quot;?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+&quot;, W = &quot;\\[&quot; + M + &quot;*(&quot; + I + &quot;)(?:&quot; + M + &quot;*([*^$|!~]?=)&quot; + M + &quot;*(?:&#39;((?:\\\\.|[^\\\\&#39;])*)&#39;|\&quot;((?:\\\\.|[^\\\\\&quot;])*)\&quot;|(&quot; + I + &quot;))|)&quot; + M + &quot;*\\]&quot;, F = &quot;:(&quot; + I + &quot;)(?:\\(((&#39;((?:\\\\.|[^\\\\&#39;])*)&#39;|\&quot;((?:\\\\.|[^\\\\\&quot;])*)\&quot;)|((?:\\\\.|[^\\\\()[\\]]|&quot; + W + &quot;)*)|.*)\\)|)&quot;, B = new RegExp(M + &quot;+&quot;, &quot;g&quot;), $ = new RegExp(&quot;^&quot; + M + &quot;+|((?:^|[^\\\\])(?:\\\\.)*)&quot; + M + &quot;+$&quot;, &quot;g&quot;), _ = new RegExp(&quot;^&quot; + M + &quot;*,&quot; + M + &quot;*&quot;), z = new RegExp(&quot;^&quot; + M + &quot;*([&gt;+~]|&quot; + M + &quot;)&quot; + M + &quot;*&quot;), U = new RegExp(M + &quot;|&gt;&quot;), X = new RegExp(F), V = new RegExp(&quot;^&quot; + I + &quot;$&quot;),&#x000A;            G = {ID: new RegExp(&quot;^#(&quot; + I + &quot;)&quot;), CLASS: new RegExp(&quot;^\\.(&quot; + I + &quot;)&quot;), TAG: new RegExp(&quot;^(&quot; + I + &quot;|[*])&quot;), ATTR: new RegExp(&quot;^&quot; + W), PSEUDO: new RegExp(&quot;^&quot; + F), CHILD: new RegExp(&quot;^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(&quot; + M + &quot;*(even|odd|(([+-]|)(\\d*)n|)&quot; + M + &quot;*(?:([+-]|)&quot; + M + &quot;*(\\d+)|))&quot; + M + &quot;*\\)|)&quot;, &quot;i&quot;), bool: new RegExp(&quot;^(?:&quot; + R + &quot;)$&quot;, &quot;i&quot;), needsContext: new RegExp(&quot;^&quot; + M + &quot;*[&gt;+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(&quot; + M + &quot;*((?:-\\d)?\\d*)&quot; + M + &quot;*\\)|)(?=[^-]|$)&quot;, &quot;i&quot;)}, Y = /HTML$/i, Q = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp(&quot;\\\\[\\da-fA-F]{1,6}&quot; + M + &quot;?|\\\\([^\\r\\n\\f])&quot;, &quot;g&quot;), ne = function (e, t) {&#x000A;                var n = &quot;0x&quot; + e.slice(1) - 65536;&#x000A;                return t || (n &lt; 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n &gt;&gt; 10 | 55296, 1023 &amp; n | 56320))&#x000A;            }, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie = function (e, t) {&#x000A;                return t ? &quot;\0&quot; === e ? &quot;\ufffd&quot; : e.slice(0, -1) + &quot;\\&quot; + e.charCodeAt(e.length - 1).toString(16) + &quot; &quot; : &quot;\\&quot; + e&#x000A;            }, oe = function () {&#x000A;                T()&#x000A;            }, ae = be(function (e) {&#x000A;                return !0 === e.disabled &amp;&amp; &quot;fieldset&quot; === e.nodeName.toLowerCase()&#x000A;            }, {dir: &quot;parentNode&quot;, next: &quot;legend&quot;});&#x000A;        try {&#x000A;            H.apply(t = O.call(p.childNodes), p.childNodes), t[p.childNodes.length].nodeType&#x000A;        } catch (e) {&#x000A;            H = {&#x000A;                apply: t.length ? function (e, t) {&#x000A;                    L.apply(e, O.call(t))&#x000A;                } : function (e, t) {&#x000A;                    var n = e.length, r = 0;&#x000A;                    while (e[n++] = t[r++]) ;&#x000A;                    e.length = n - 1&#x000A;                }&#x000A;            }&#x000A;        }&#x000A;&#x000A;        function se(t, e, n, r) {&#x000A;            var i, o, a, s, u, l, c, f = e &amp;&amp; e.ownerDocument, p = e ? e.nodeType : 9;&#x000A;            if (n = n || [], &quot;string&quot; != typeof t || !t || 1 !== p &amp;&amp; 9 !== p &amp;&amp; 11 !== p) return n;&#x000A;            if (!r &amp;&amp; (T(e), e = e || C, E)) {&#x000A;                if (11 !== p &amp;&amp; (u = Z.exec(t))) if (i = u[1]) {&#x000A;                    if (9 === p) {&#x000A;                        if (!(a = e.getElementById(i))) return n;&#x000A;                        if (a.id === i) return n.push(a), n&#x000A;                    } else if (f &amp;&amp; (a = f.getElementById(i)) &amp;&amp; y(e, a) &amp;&amp; a.id === i) return n.push(a), n&#x000A;                } else {&#x000A;                    if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;&#x000A;                    if ((i = u[3]) &amp;&amp; d.getElementsByClassName &amp;&amp; e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n&#x000A;                }&#x000A;                if (d.qsa &amp;&amp; !N[t + &quot; &quot;] &amp;&amp; (!v || !v.test(t)) &amp;&amp; (1 !== p || &quot;object&quot; !== e.nodeName.toLowerCase())) {&#x000A;                    if (c = t, f = e, 1 === p &amp;&amp; (U.test(t) || z.test(t))) {&#x000A;                        (f = ee.test(t) &amp;&amp; ye(e.parentNode) || e) === e &amp;&amp; d.scope || ((s = e.getAttribute(&quot;id&quot;)) ? s = s.replace(re, ie) : e.setAttribute(&quot;id&quot;, s = S)), o = (l = h(t)).length;&#x000A;                        while (o--) l[o] = (s ? &quot;#&quot; + s : &quot;:scope&quot;) + &quot; &quot; + xe(l[o]);&#x000A;                        c = l.join(&quot;,&quot;)&#x000A;                    }&#x000A;                    try {&#x000A;                        return H.apply(n, f.querySelectorAll(c)), n&#x000A;                    } catch (e) {&#x000A;                        N(t, !0)&#x000A;                    } finally {&#x000A;                        s === S &amp;&amp; e.removeAttribute(&quot;id&quot;)&#x000A;                    }&#x000A;                }&#x000A;            }&#x000A;            return g(t.replace($, &quot;$1&quot;), e, n, r)&#x000A;        }&#x000A;&#x000A;        function ue() {&#x000A;            var r = [];&#x000A;            return function e(t, n) {&#x000A;                return r.push(t + &quot; &quot;) &gt; b.cacheLength &amp;&amp; delete e[r.shift()], e[t + &quot; &quot;] = n&#x000A;            }&#x000A;        }&#x000A;&#x000A;        function le(e) {&#x000A;            return e[S] = !0, e&#x000A;        }&#x000A;&#x000A;        function ce(e) {&#x000A;            var t = C.createElement(&quot;fieldset&quot;);&#x000A;            try {&#x000A;                return !!e(t)&#x000A;            } catch (e) {&#x000A;                return !1&#x000A;            } finally {&#x000A;                t.parentNode &amp;&amp; t.parentNode.removeChild(t), t = null&#x000A;            }&#x000A;        }&#x000A;&#x000A;        function fe(e, t) {&#x000A;            var n = e.split(&quot;|&quot;), r = n.length;&#x000A;            while (r--) b.attrHandle[n[r]] = t&#x000A;        }&#x000A;&#x000A;        function pe(e, t) {&#x000A;            var n = t &amp;&amp; e, r = n &amp;&amp; 1 === e.nodeType &amp;&amp; 1 === t.nodeType &amp;&amp; e.sourceIndex - t.sourceIndex;&#x000A;            if (r) return r;&#x000A;            if (n) while (n = n.nextSibling) if (n === t) return -1;&#x000A;            return e ? 1 : -1&#x000A;        }&#x000A;&#x000A;        function de(t) {&#x000A;            return function (e) {&#x000A;                return &quot;input&quot; === e.nodeName.toLowerCase() &amp;&amp; e.type === t&#x000A;            }&#x000A;        }&#x000A;&#x000A;        function he(n) {&#x000A;            return function (e) {&#x000A;                var t = e.nodeName.toLowerCase();&#x000A;                return (&quot;input&quot; === t || &quot;button&quot; === t) &amp;&amp; e.type === n&#x000A;            }&#x000A;        }&#x000A;&#x000A;        function ge(t) {&#x000A;            return function (e) {&#x000A;                return &quot;form&quot; in e ? e.parentNode &amp;&amp; !1 === e.disabled ? &quot;label&quot; in e ? &quot;label&quot; in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t &amp;&amp; ae(e) === t : e.disabled === t : &quot;label&quot; in e &amp;&amp; e.disabled === t&#x000A;            }&#x000A;        }&#x000A;&#x000A;        function ve(a) {&#x000A;            return le(function (o) {&#x000A;                return o = +o, le(function (e, t) {&#x000A;                    var n, r = a([], e.length, o), i = r.length;&#x000A;                    while (i--) e[n = r[i]] &amp;&amp; (e[n] = !(t[n] = e[n]))&#x000A;                })&#x000A;            })&#x000A;        }&#x000A;&#x000A;        function ye(e) {&#x000A;            return e &amp;&amp; &quot;undefined&quot; != typeof e.getElementsByTagName &amp;&amp; e&#x000A;        }&#x000A;&#x000A;        for (e in d = se.support = {}, i = se.isXML = function (e) {&#x000A;            var t = e &amp;&amp; e.namespaceURI, n = e &amp;&amp; (e.ownerDocument || e).documentElement;&#x000A;            return !Y.test(t || n &amp;&amp; n.nodeName || &quot;HTML&quot;)&#x000A;        }, T = se.setDocument = function (e) {&#x000A;            var t, n, r = e ? e.ownerDocument || e : p;&#x000A;            return r != C &amp;&amp; 9 === r.nodeType &amp;&amp; r.documentElement &amp;&amp; (a = (C = r).documentElement, E = !i(C), p != C &amp;&amp; (n = C.defaultView) &amp;&amp; n.top !== n &amp;&amp; (n.addEventListener ? n.addEventListener(&quot;unload&quot;, oe, !1) : n.attachEvent &amp;&amp; n.attachEvent(&quot;onunload&quot;, oe)), d.scope = ce(function (e) {&#x000A;                return a.appendChild(e).appendChild(C.createElement(&quot;div&quot;)), &quot;undefined&quot; != typeof e.querySelectorAll &amp;&amp; !e.querySelectorAll(&quot;:scope fieldset div&quot;).length&#x000A;            }), d.attributes = ce(function (e) {&#x000A;                return e.className = &quot;i&quot;, !e.getAttribute(&quot;className&quot;)&#x000A;            }), d.getElementsByTagName = ce(function (e) {&#x000A;                return e.appendChild(C.createComment(&quot;&quot;)), !e.getElementsByTagName(&quot;*&quot;).length&#x000A;            }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function (e) {&#x000A;                return a.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length&#x000A;            }), d.getById ? (b.filter.ID = function (e) {&#x000A;                var t = e.replace(te, ne);&#x000A;                return function (e) {&#x000A;                    return e.getAttribute(&quot;id&quot;) === t&#x000A;                }&#x000A;            }, b.find.ID = function (e, t) {&#x000A;                if (&quot;undefined&quot; != typeof t.getElementById &amp;&amp; E) {&#x000A;                    var n = t.getElementById(e);&#x000A;                    return n ? [n] : []&#x000A;                }&#x000A;            }) : (b.filter.ID = function (e) {&#x000A;                var n = e.replace(te, ne);&#x000A;                return function (e) {&#x000A;                    var t = &quot;undefined&quot; != typeof e.getAttributeNode &amp;&amp; e.getAttributeNode(&quot;id&quot;);&#x000A;                    return t &amp;&amp; t.value === n&#x000A;                }&#x000A;            }, b.find.ID = function (e, t) {&#x000A;                if (&quot;undefined&quot; != typeof t.getElementById &amp;&amp; E) {&#x000A;                    var n, r, i, o = t.getElementById(e);&#x000A;                    if (o) {&#x000A;                        if ((n = o.getAttributeNode(&quot;id&quot;)) &amp;&amp; n.value === e) return [o];&#x000A;                        i = t.getElementsByName(e), r = 0;&#x000A;                        while (o = i[r++]) if ((n = o.getAttributeNode(&quot;id&quot;)) &amp;&amp; n.value === e) return [o]&#x000A;                    }&#x000A;                    return []&#x000A;                }&#x000A;            }), b.find.TAG = d.getElementsByTagName ? function (e, t) {&#x000A;                return &quot;undefined&quot; != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0&#x000A;            } : function (e, t) {&#x000A;                var n, r = [], i = 0, o = t.getElementsByTagName(e);&#x000A;                if (&quot;*&quot; === e) {&#x000A;                    while (n = o[i++]) 1 === n.nodeType &amp;&amp; r.push(n);&#x000A;                    return r&#x000A;                }&#x000A;                return o&#x000A;            }, b.find.CLASS = d.getElementsByClassName &amp;&amp; function (e, t) {&#x000A;                if (&quot;undefined&quot; != typeof t.getElementsByClassName &amp;&amp; E) return t.getElementsByClassName(e)&#x000A;            }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) &amp;&amp; (ce(function (e) {&#x000A;                var t;&#x000A;                a.appendChild(e).innerHTML = &quot;&lt;a id=&#39;&quot; + S + &quot;&#39;&gt;&lt;/a&gt;&lt;select id=&#39;&quot; + S + &quot;-\r\\&#39; msallowcapture=&#39;&#39;&gt;&lt;option selected=&#39;&#39;&gt;&lt;/option&gt;&lt;/select&gt;&quot;, e.querySelectorAll(&quot;[msallowcapture^=&#39;&#39;]&quot;).length &amp;&amp; v.push(&quot;[*^$]=&quot; + M + &quot;*(?:&#39;&#39;|\&quot;\&quot;)&quot;), e.querySelectorAll(&quot;[selected]&quot;).length || v.push(&quot;\\[&quot; + M + &quot;*(?:value|&quot; + R + &quot;)&quot;), e.querySelectorAll(&quot;[id~=&quot; + S + &quot;-]&quot;).length || v.push(&quot;~=&quot;), (t = C.createElement(&quot;input&quot;)).setAttribute(&quot;name&quot;, &quot;&quot;), e.appendChild(t), e.querySelectorAll(&quot;[name=&#39;&#39;]&quot;).length || v.push(&quot;\\[&quot; + M + &quot;*name&quot; + M + &quot;*=&quot; + M + &quot;*(?:&#39;&#39;|\&quot;\&quot;)&quot;), e.querySelectorAll(&quot;:checked&quot;).length || v.push(&quot;:checked&quot;), e.querySelectorAll(&quot;a#&quot; + S + &quot;+*&quot;).length || v.push(&quot;.#.+[+~]&quot;), e.querySelectorAll(&quot;\\\f&quot;), v.push(&quot;[\\r\\n\\f]&quot;)&#x000A;            }), ce(function (e) {&#x000A;                e.innerHTML = &quot;&lt;a href=&#39;&#39; disabled=&#39;disabled&#39;&gt;&lt;/a&gt;&lt;select disabled=&#39;disabled&#39;&gt;&lt;option/&gt;&lt;/select&gt;&quot;;&#x000A;                var t = C.createElement(&quot;input&quot;);&#x000A;                t.setAttribute(&quot;type&quot;, &quot;hidden&quot;), e.appendChild(t).setAttribute(&quot;name&quot;, &quot;D&quot;), e.querySelectorAll(&quot;[name=d]&quot;).length &amp;&amp; v.push(&quot;name&quot; + M + &quot;*[*^$|!~]?=&quot;), 2 !== e.querySelectorAll(&quot;:enabled&quot;).length &amp;&amp; v.push(&quot;:enabled&quot;, &quot;:disabled&quot;), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(&quot;:disabled&quot;).length &amp;&amp; v.push(&quot;:enabled&quot;, &quot;:disabled&quot;), e.querySelectorAll(&quot;*,:x&quot;), v.push(&quot;,.*:&quot;)&#x000A;            })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) &amp;&amp; ce(function (e) {&#x000A;                d.disconnectedMatch = c.call(e, &quot;*&quot;), c.call(e, &quot;[s!=&#39;&#39;]:x&quot;), s.push(&quot;!=&quot;, F)&#x000A;            }), v = v.length &amp;&amp; new RegExp(v.join(&quot;|&quot;)), s = s.length &amp;&amp; new RegExp(s.join(&quot;|&quot;)), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function (e, t) {&#x000A;                var n = 9 === e.nodeType ? e.documentElement : e, r = t &amp;&amp; t.parentNode;&#x000A;                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition &amp;&amp; 16 &amp; e.compareDocumentPosition(r)))&#x000A;            } : function (e, t) {&#x000A;                if (t) while (t = t.parentNode) if (t === e) return !0;&#x000A;                return !1&#x000A;            }, j = t ? function (e, t) {&#x000A;                if (e === t) return l = !0, 0;&#x000A;                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;&#x000A;                return n || (1 &amp; (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached &amp;&amp; t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p &amp;&amp; y(p, e) ? -1 : t == C || t.ownerDocument == p &amp;&amp; y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 &amp; n ? -1 : 1)&#x000A;            } : function (e, t) {&#x000A;                if (e === t) return l = !0, 0;&#x000A;                var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t];&#x000A;                if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;&#x000A;                if (i === o) return pe(e, t);&#x000A;                n = e;&#x000A;                while (n = n.parentNode) a.unshift(n);&#x000A;                n = t;&#x000A;                while (n = n.parentNode) s.unshift(n);&#x000A;                while (a[r] === s[r]) r++;&#x000A;                return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0&#x000A;            }), C&#x000A;        }, se.matches = function (e, t) {&#x000A;            return se(e, null, null, t)&#x000A;        }, se.matchesSelector = function (e, t) {&#x000A;            if (T(e), d.matchesSelector &amp;&amp; E &amp;&amp; !N[t + &quot; &quot;] &amp;&amp; (!s || !s.test(t)) &amp;&amp; (!v || !v.test(t))) try {&#x000A;                var n = c.call(e, t);&#x000A;                if (n || d.disconnectedMatch || e.document &amp;&amp; 11 !== e.document.nodeType) return n&#x000A;            } catch (e) {&#x000A;                N(t, !0)&#x000A;            }&#x000A;            return 0 &lt; se(t, C, null, [e]).length&#x000A;        }, se.contains = function (e, t) {&#x000A;            return (e.ownerDocument || e) != C &amp;&amp; T(e), y(e, t)&#x000A;        }, se.attr = function (e, t) {&#x000A;            (e.ownerDocument || e) != C &amp;&amp; T(e);&#x000A;            var n = b.attrHandle[t.toLowerCase()], r = n &amp;&amp; D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;&#x000A;            return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) &amp;&amp; r.specified ? r.value : null&#x000A;        }, se.escape = function (e) {&#x000A;            return (e + &quot;&quot;).replace(re, ie)&#x000A;        }, se.error = function (e) {&#x000A;            throw new Error(&quot;Syntax error, unrecognized expression: &quot; + e)&#x000A;        }, se.uniqueSort = function (e) {&#x000A;            var t, n = [], r = 0, i = 0;&#x000A;            if (l = !d.detectDuplicates, u = !d.sortStable &amp;&amp; e.slice(0), e.sort(j), l) {&#x000A;                while (t = e[i++]) t === e[i] &amp;&amp; (r = n.push(i));&#x000A;                while (r--) e.splice(n[r], 1)&#x000A;            }&#x000A;            return u = null, e&#x000A;        }, o = se.getText = function (e) {&#x000A;            var t, n = &quot;&quot;, r = 0, i = e.nodeType;&#x000A;            if (i) {&#x000A;                if (1 === i || 9 === i || 11 === i) {&#x000A;                    if (&quot;string&quot; == typeof e.textContent) return e.textContent;&#x000A;                    for (e = e.firstChild; e; e = e.nextSibling) n += o(e)&#x000A;                } else if (3 === i || 4 === i) return e.nodeValue&#x000A;            } else while (t = e[r++]) n += o(t);&#x000A;            return n&#x000A;        }, (b = se.selectors = {&#x000A;            cacheLength: 50, createPseudo: le, match: G, attrHandle: {}, find: {}, relative: {&quot;&gt;&quot;: {dir: &quot;parentNode&quot;, first: !0}, &quot; &quot;: {dir: &quot;parentNode&quot;}, &quot;+&quot;: {dir: &quot;previousSibling&quot;, first: !0}, &quot;~&quot;: {dir: &quot;previousSibling&quot;}}, preFilter: {&#x000A;                ATTR: function (e) {&#x000A;                    return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || &quot;&quot;).replace(te, ne), &quot;~=&quot; === e[2] &amp;&amp; (e[3] = &quot; &quot; + e[3] + &quot; &quot;), e.slice(0, 4)&#x000A;                }, CHILD: function (e) {&#x000A;                    return e[1] = e[1].toLowerCase(), &quot;nth&quot; === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (&quot;even&quot; === e[3] || &quot;odd&quot; === e[3])), e[5] = +(e[7] + e[8] || &quot;odd&quot; === e[3])) : e[3] &amp;&amp; se.error(e[0]), e&#x000A;                }, PSEUDO: function (e) {&#x000A;                    var t, n = !e[6] &amp;&amp; e[2];&#x000A;                    return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || &quot;&quot; : n &amp;&amp; X.test(n) &amp;&amp; (t = h(n, !0)) &amp;&amp; (t = n.indexOf(&quot;)&quot;, n.length - t) - n.length) &amp;&amp; (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))&#x000A;                }&#x000A;            }, filter: {&#x000A;                TAG: function (e) {&#x000A;                    var t = e.replace(te, ne).toLowerCase();&#x000A;                    return &quot;*&quot; === e ? function () {&#x000A;                        return !0&#x000A;                    } : function (e) {&#x000A;                        return e.nodeName &amp;&amp; e.nodeName.toLowerCase() === t&#x000A;                    }&#x000A;                }, CLASS: function (e) {&#x000A;                    var t = m[e + &quot; &quot;];&#x000A;                    return t || (t = new RegExp(&quot;(^|&quot; + M + &quot;)&quot; + e + &quot;(&quot; + M + &quot;|$)&quot;)) &amp;&amp; m(e, function (e) {&#x000A;                        return t.test(&quot;string&quot; == typeof e.className &amp;&amp; e.className || &quot;undefined&quot; != typeof e.getAttribute &amp;&amp; e.getAttribute(&quot;class&quot;) || &quot;&quot;)&#x000A;                    })&#x000A;                }, ATTR: function (n, r, i) {&#x000A;                    return function (e) {&#x000A;                        var t = se.attr(e, n);&#x000A;                        return null == t ? &quot;!=&quot; === r : !r || (t += &quot;&quot;, &quot;=&quot; === r ? t === i : &quot;!=&quot; === r ? t !== i : &quot;^=&quot; === r ? i &amp;&amp; 0 === t.indexOf(i) : &quot;*=&quot; === r ? i &amp;&amp; -1 &lt; t.indexOf(i) : &quot;$=&quot; === r ? i &amp;&amp; t.slice(-i.length) === i : &quot;~=&quot; === r ? -1 &lt; (&quot; &quot; + t.replace(B, &quot; &quot;) + &quot; &quot;).indexOf(i) : &quot;|=&quot; === r &amp;&amp; (t === i || t.slice(0, i.length + 1) === i + &quot;-&quot;))&#x000A;                    }&#x000A;                }, CHILD: function (h, e, t, g, v) {&#x000A;                    var y = &quot;nth&quot; !== h.slice(0, 3), m = &quot;last&quot; !== h.slice(-4), x = &quot;of-type&quot; === e;&#x000A;                    return 1 === g &amp;&amp; 0 === v ? function (e) {&#x000A;                        return !!e.parentNode&#x000A;                    } : function (e, t, n) {&#x000A;                        var r, i, o, a, s, u, l = y !== m ? &quot;nextSibling&quot; : &quot;previousSibling&quot;, c = e.parentNode, f = x &amp;&amp; e.nodeName.toLowerCase(), p = !n &amp;&amp; !x, d = !1;&#x000A;                        if (c) {&#x000A;                            if (y) {&#x000A;                                while (l) {&#x000A;                                    a = e;&#x000A;                                    while (a = a[l]) if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;&#x000A;                                    u = l = &quot;only&quot; === h &amp;&amp; !u &amp;&amp; &quot;nextSibling&quot;&#x000A;                                }&#x000A;                                return !0&#x000A;                            }&#x000A;                            if (u = [m ? c.firstChild : c.lastChild], m &amp;&amp; p) {&#x000A;                                d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k &amp;&amp; r[1]) &amp;&amp; r[2], a = s &amp;&amp; c.childNodes[s];&#x000A;                                while (a = ++s &amp;&amp; a &amp;&amp; a[l] || (d = s = 0) || u.pop()) if (1 === a.nodeType &amp;&amp; ++d &amp;&amp; a === e) {&#x000A;                                    i[h] = [k, s, d];&#x000A;                                    break&#x000A;                                }&#x000A;                            } else if (p &amp;&amp; (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k &amp;&amp; r[1]), !1 === d) while (a = ++s &amp;&amp; a &amp;&amp; a[l] || (d = s = 0) || u.pop()) if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) &amp;&amp; ++d &amp;&amp; (p &amp;&amp; ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break;&#x000A;                            return (d -= v) === g || d % g == 0 &amp;&amp; 0 &lt;= d / g&#x000A;                        }&#x000A;                    }&#x000A;                }, PSEUDO: function (e, o) {&#x000A;                    var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error(&quot;unsupported pseudo: &quot; + e);&#x000A;                    return a[S] ? a(o) : 1 &lt; a.length ? (t = [e, e, &quot;&quot;, o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) {&#x000A;                        var n, r = a(e, o), i = r.length;&#x000A;                        while (i--) e[n = P(e, r[i])] = !(t[n] = r[i])&#x000A;                    }) : function (e) {&#x000A;                        return a(e, 0, t)&#x000A;                    }) : a&#x000A;                }&#x000A;            }, pseudos: {&#x000A;                not: le(function (e) {&#x000A;                    var r = [], i = [], s = f(e.replace($, &quot;$1&quot;));&#x000A;                    return s[S] ? le(function (e, t, n, r) {&#x000A;                        var i, o = s(e, null, r, []), a = e.length;&#x000A;                        while (a--) (i = o[a]) &amp;&amp; (e[a] = !(t[a] = i))&#x000A;                    }) : function (e, t, n) {&#x000A;                        return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()&#x000A;                    }&#x000A;                }), has: le(function (t) {&#x000A;                    return function (e) {&#x000A;                        return 0 &lt; se(t, e).length&#x000A;                    }&#x000A;                }), contains: le(function (t) {&#x000A;                    return t = t.replace(te, ne), function (e) {&#x000A;                        return -1 &lt; (e.textContent || o(e)).indexOf(t)&#x000A;                    }&#x000A;                }), lang: le(function (n) {&#x000A;                    return V.test(n || &quot;&quot;) || se.error(&quot;unsupported lang: &quot; + n), n = n.replace(te, ne).toLowerCase(), function (e) {&#x000A;                        var t;&#x000A;                        do {&#x000A;                            if (t = E ? e.lang : e.getAttribute(&quot;xml:lang&quot;) || e.getAttribute(&quot;lang&quot;)) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + &quot;-&quot;)&#x000A;                        } while ((e = e.parentNode) &amp;&amp; 1 === e.nodeType);&#x000A;                        return !1&#x000A;                    }&#x000A;                }), target: function (e) {&#x000A;                    var t = n.location &amp;&amp; n.location.hash;&#x000A;                    return t &amp;&amp; t.slice(1) === e.id&#x000A;                }, root: function (e) {&#x000A;                    return e === a&#x000A;                }, focus: function (e) {&#x000A;                    return e === C.activeElement &amp;&amp; (!C.hasFocus || C.hasFocus()) &amp;&amp; !!(e.type || e.href || ~e.tabIndex)&#x000A;                }, enabled: ge(!1), disabled: ge(!0), checked: function (e) {&#x000A;                    var t = e.nodeName.toLowerCase();&#x000A;                    return &quot;input&quot; === t &amp;&amp; !!e.checked || &quot;option&quot; === t &amp;&amp; !!e.selected&#x000A;                }, selected: function (e) {&#x000A;                    return e.parentNode &amp;&amp; e.parentNode.selectedIndex, !0 === e.selected&#x000A;                }, empty: function (e) {&#x000A;                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType &lt; 6) return !1;&#x000A;                    return !0&#x000A;                }, parent: function (e) {&#x000A;                    return !b.pseudos.empty(e)&#x000A;                }, header: function (e) {&#x000A;                    return J.test(e.nodeName)&#x000A;                }, input: function (e) {&#x000A;                    return Q.test(e.nodeName)&#x000A;                }, button: function (e) {&#x000A;                    var t = e.nodeName.toLowerCase();&#x000A;                    return &quot;input&quot; === t &amp;&amp; &quot;button&quot; === e.type || &quot;button&quot; === t&#x000A;                }, text: function (e) {&#x000A;                    var t;&#x000A;                    return &quot;input&quot; === e.nodeName.toLowerCase() &amp;&amp; &quot;text&quot; === e.type &amp;&amp; (null == (t = e.getAttribute(&quot;type&quot;)) || &quot;text&quot; === t.toLowerCase())&#x000A;                }, first: ve(function () {&#x000A;                    return [0]&#x000A;                }), last: ve(function (e, t) {&#x000A;                    return [t - 1]&#x000A;                }), eq: ve(function (e, t, n) {&#x000A;                    return [n &lt; 0 ? n + t : n]&#x000A;                }), even: ve(function (e, t) {&#x000A;                    for (var n = 0; n &lt; t; n += 2) e.push(n);&#x000A;                    return e&#x000A;                }), odd: ve(function (e, t) {&#x000A;                    for (var n = 1; n &lt; t; n += 2) e.push(n);&#x000A;                    return e&#x000A;                }), lt: ve(function (e, t, n) {&#x000A;                    for (var r = n &lt; 0 ? n + t : t &lt; n ? t : n; 0 &lt;= --r;) e.push(r);&#x000A;                    return e&#x000A;                }), gt: ve(function (e, t, n) {&#x000A;                    for (var r = n &lt; 0 ? n + t : n; ++r &lt; t;) e.push(r);&#x000A;                    return e&#x000A;                })&#x000A;            }&#x000A;        }).pseudos.nth = b.pseudos.eq, {radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) b.pseudos[e] = de(e);&#x000A;        for (e in {submit: !0, reset: !0}) b.pseudos[e] = he(e);&#x000A;&#x000A;        function me() {&#x000A;        }&#x000A;&#x000A;        function xe(e) {&#x000A;            for (var t = 0, n = e.length, r = &quot;&quot;; t &lt; n; t++) r += e[t].value;&#x000A;            return r&#x000A;        }&#x000A;&#x000A;        function be(s, e, t) {&#x000A;            var u = e.dir, l = e.next, c = l || u, f = t &amp;&amp; &quot;parentNode&quot; === c, p = r++;&#x000A;            return e.first ? function (e, t, n) {&#x000A;                while (e = e[u]) if (1 === e.nodeType || f) return s(e, t, n);&#x000A;                return !1&#x000A;            } : function (e, t, n) {&#x000A;                var r, i, o, a = [k, p];&#x000A;                if (n) {&#x000A;                    while (e = e[u]) if ((1 === e.nodeType || f) &amp;&amp; s(e, t, n)) return !0&#x000A;                } else while (e = e[u]) if (1 === e.nodeType || f) if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l &amp;&amp; l === e.nodeName.toLowerCase()) e = e[u] || e; else {&#x000A;                    if ((r = i[c]) &amp;&amp; r[0] === k &amp;&amp; r[1] === p) return a[2] = r[2];&#x000A;                    if ((i[c] = a)[2] = s(e, t, n)) return !0&#x000A;                }&#x000A;                return !1&#x000A;            }&#x000A;        }&#x000A;&#x000A;        function we(i) {&#x000A;            return 1 &lt; i.length ? function (e, t, n) {&#x000A;                var r = i.length;&#x000A;                while (r--) if (!i[r](e, t, n)) return !1;&#x000A;                return !0&#x000A;            } : i[0]&#x000A;        }&#x000A;&#x000A;        function Te(e, t, n, r, i) {&#x000A;            for (var o, a = [], s = 0, u = e.length, l = null != t; s &lt; u; s++) (o = e[s]) &amp;&amp; (n &amp;&amp; !n(o, r, i) || (a.push(o), l &amp;&amp; t.push(s)));&#x000A;            return a&#x000A;        }&#x000A;&#x000A;        function Ce(d, h, g, v, y, e) {&#x000A;            return v &amp;&amp; !v[S] &amp;&amp; (v = Ce(v)), y &amp;&amp; !y[S] &amp;&amp; (y = Ce(y, e)), le(function (e, t, n, r) {&#x000A;                var i, o, a, s = [], u = [], l = t.length, c = e || function (e, t, n) {&#x000A;                    for (var r = 0, i = t.length; r &lt; i; r++) se(e, t[r], n);&#x000A;                    return n&#x000A;                }(h || &quot;*&quot;, n.nodeType ? [n] : n, []), f = !d || !e &amp;&amp; h ? c : Te(c, s, d, n, r), p = g ? y || (e ? d : l || v) ? [] : t : f;&#x000A;                if (g &amp;&amp; g(f, p, n, r), v) {&#x000A;                    i = Te(p, u), v(i, [], n, r), o = i.length;&#x000A;                    while (o--) (a = i[o]) &amp;&amp; (p[u[o]] = !(f[u[o]] = a))&#x000A;                }&#x000A;                if (e) {&#x000A;                    if (y || d) {&#x000A;                        if (y) {&#x000A;                            i = [], o = p.length;&#x000A;                            while (o--) (a = p[o]) &amp;&amp; i.push(f[o] = a);&#x000A;                            y(null, p = [], i, r)&#x000A;                        }&#x000A;                        o = p.length;&#x000A;                        while (o--) (a = p[o]) &amp;&amp; -1 &lt; (i = y ? P(e, a) : s[o]) &amp;&amp; (e[i] = !(t[i] = a))&#x000A;                    }&#x000A;                } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p)&#x000A;            })&#x000A;        }&#x000A;&#x000A;        function Ee(e) {&#x000A;            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[&quot; &quot;], s = o ? 1 : 0, u = be(function (e) {&#x000A;                return e === i&#x000A;            }, a, !0), l = be(function (e) {&#x000A;                return -1 &lt; P(i, e)&#x000A;            }, a, !0), c = [function (e, t, n) {&#x000A;                var r = !o &amp;&amp; (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));&#x000A;                return i = null, r&#x000A;            }]; s &lt; r; s++) if (t = b.relative[e[s].type]) c = [be(we(c), t)]; else {&#x000A;                if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {&#x000A;                    for (n = ++s; n &lt; r; n++) if (b.relative[e[n].type]) break;&#x000A;                    return Ce(1 &lt; s &amp;&amp; we(c), 1 &lt; s &amp;&amp; xe(e.slice(0, s - 1).concat({value: &quot; &quot; === e[s - 2].type ? &quot;*&quot; : &quot;&quot;})).replace($, &quot;$1&quot;), t, s &lt; n &amp;&amp; Ee(e.slice(s, n)), n &lt; r &amp;&amp; Ee(e = e.slice(n)), n &lt; r &amp;&amp; xe(e))&#x000A;                }&#x000A;                c.push(t)&#x000A;            }&#x000A;            return we(c)&#x000A;        }&#x000A;&#x000A;        return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = se.tokenize = function (e, t) {&#x000A;            var n, r, i, o, a, s, u, l = x[e + &quot; &quot;];&#x000A;            if (l) return t ? 0 : l.slice(0);&#x000A;            a = e, s = [], u = b.preFilter;&#x000A;            while (a) {&#x000A;                for (o in n &amp;&amp; !(r = _.exec(a)) || (r &amp;&amp; (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) &amp;&amp; (n = r.shift(), i.push({value: n, type: r[0].replace($, &quot; &quot;)}), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] &amp;&amp; !(r = u[o](r)) || (n = r.shift(), i.push({value: n, type: o, matches: r}), a = a.slice(n.length));&#x000A;                if (!n) break&#x000A;            }&#x000A;            return t ? a.length : a ? se.error(e) : x(e, s).slice(0)&#x000A;        }, f = se.compile = function (e, t) {&#x000A;            var n, v, y, m, x, r, i = [], o = [], a = A[e + &quot; &quot;];&#x000A;            if (!a) {&#x000A;                t || (t = h(e)), n = t.length;&#x000A;                while (n--) (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);&#x000A;                (a = A(e, (v = o, m = 0 &lt; (y = i).length, x = 0 &lt; v.length, r = function (e, t, n, r, i) {&#x000A;                    var o, a, s, u = 0, l = &quot;0&quot;, c = e &amp;&amp; [], f = [], p = w, d = e || x &amp;&amp; b.find.TAG(&quot;*&quot;, i), h = k += null == p ? 1 : Math.random() || .1, g = d.length;&#x000A;                    for (i &amp;&amp; (w = t == C || t || i); l !== g &amp;&amp; null != (o = d[l]); l++) {&#x000A;                        if (x &amp;&amp; o) {&#x000A;                            a = 0, t || o.ownerDocument == C || (T(o), n = !E);&#x000A;                            while (s = v[a++]) if (s(o, t || C, n)) {&#x000A;                                r.push(o);&#x000A;                                break&#x000A;                            }&#x000A;                            i &amp;&amp; (k = h)&#x000A;                        }&#x000A;                        m &amp;&amp; ((o = !s &amp;&amp; o) &amp;&amp; u--, e &amp;&amp; c.push(o))&#x000A;                    }&#x000A;                    if (u += l, m &amp;&amp; l !== u) {&#x000A;                        a = 0;&#x000A;                        while (s = y[a++]) s(c, f, t, n);&#x000A;                        if (e) {&#x000A;                            if (0 &lt; u) while (l--) c[l] || f[l] || (f[l] = q.call(r));&#x000A;                            f = Te(f)&#x000A;                        }&#x000A;                        H.apply(r, f), i &amp;&amp; !e &amp;&amp; 0 &lt; f.length &amp;&amp; 1 &lt; u + y.length &amp;&amp; se.uniqueSort(r)&#x000A;                    }&#x000A;                    return i &amp;&amp; (k = h, w = p), c&#x000A;                }, m ? le(r) : r))).selector = e&#x000A;            }&#x000A;            return a&#x000A;        }, g = se.select = function (e, t, n, r) {&#x000A;            var i, o, a, s, u, l = &quot;function&quot; == typeof e &amp;&amp; e, c = !r &amp;&amp; h(e = l.selector || e);&#x000A;            if (n = n || [], 1 === c.length) {&#x000A;                if (2 &lt; (o = c[0] = c[0].slice(0)).length &amp;&amp; &quot;ID&quot; === (a = o[0]).type &amp;&amp; 9 === t.nodeType &amp;&amp; E &amp;&amp; b.relative[o[1].type]) {&#x000A;                    if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;&#x000A;                    l &amp;&amp; (t = t.parentNode), e = e.slice(o.shift().value.length)&#x000A;                }&#x000A;                i = G.needsContext.test(e) ? 0 : o.length;&#x000A;                while (i--) {&#x000A;                    if (a = o[i], b.relative[s = a.type]) break;&#x000A;                    if ((u = b.find[s]) &amp;&amp; (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) &amp;&amp; ye(t.parentNode) || t))) {&#x000A;                        if (o.splice(i, 1), !(e = r.length &amp;&amp; xe(o))) return H.apply(n, r), n;&#x000A;                        break&#x000A;                    }&#x000A;                }&#x000A;            }&#x000A;            return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) &amp;&amp; ye(t.parentNode) || t), n&#x000A;        }, d.sortStable = S.split(&quot;&quot;).sort(j).join(&quot;&quot;) === S, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function (e) {&#x000A;            return 1 &amp; e.compareDocumentPosition(C.createElement(&quot;fieldset&quot;))&#x000A;        }), ce(function (e) {&#x000A;            return e.innerHTML = &quot;&lt;a href=&#39;#&#39;&gt;&lt;/a&gt;&quot;, &quot;#&quot; === e.firstChild.getAttribute(&quot;href&quot;)&#x000A;        }) || fe(&quot;type|href|height|width&quot;, function (e, t, n) {&#x000A;            if (!n) return e.getAttribute(t, &quot;type&quot; === t.toLowerCase() ? 1 : 2)&#x000A;        }), d.attributes &amp;&amp; ce(function (e) {&#x000A;            return e.innerHTML = &quot;&lt;input/&gt;&quot;, e.firstChild.setAttribute(&quot;value&quot;, &quot;&quot;), &quot;&quot; === e.firstChild.getAttribute(&quot;value&quot;)&#x000A;        }) || fe(&quot;value&quot;, function (e, t, n) {&#x000A;            if (!n &amp;&amp; &quot;input&quot; === e.nodeName.toLowerCase()) return e.defaultValue&#x000A;        }), ce(function (e) {&#x000A;            return null == e.getAttribute(&quot;disabled&quot;)&#x000A;        }) || fe(R, function (e, t, n) {&#x000A;            var r;&#x000A;            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) &amp;&amp; r.specified ? r.value : null&#x000A;        }), se&#x000A;    }(C);&#x000A;    S.find = d, S.expr = d.selectors, S.expr[&quot;:&quot;] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape;&#x000A;    var h = function (e, t, n) {&#x000A;        var r = [], i = void 0 !== n;&#x000A;        while ((e = e[t]) &amp;&amp; 9 !== e.nodeType) if (1 === e.nodeType) {&#x000A;            if (i &amp;&amp; S(e).is(n)) break;&#x000A;            r.push(e)&#x000A;        }&#x000A;        return r&#x000A;    }, T = function (e, t) {&#x000A;        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType &amp;&amp; e !== t &amp;&amp; n.push(e);&#x000A;        return n&#x000A;    }, k = S.expr.match.needsContext;&#x000A;&#x000A;    function A(e, t) {&#x000A;        return e.nodeName &amp;&amp; e.nodeName.toLowerCase() === t.toLowerCase()&#x000A;    }&#x000A;&#x000A;    var N = /^&lt;([a-z][^\/\0&gt;:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?&gt;(?:&lt;\/\1&gt;|)$/i;&#x000A;&#x000A;    function j(e, n, r) {&#x000A;        return m(n) ? S.grep(e, function (e, t) {&#x000A;            return !!n.call(e, t, e) !== r&#x000A;        }) : n.nodeType ? S.grep(e, function (e) {&#x000A;            return e === n !== r&#x000A;        }) : &quot;string&quot; != typeof n ? S.grep(e, function (e) {&#x000A;            return -1 &lt; i.call(n, e) !== r&#x000A;        }) : S.filter(n, e, r)&#x000A;    }&#x000A;&#x000A;    S.filter = function (e, t, n) {&#x000A;        var r = t[0];&#x000A;        return n &amp;&amp; (e = &quot;:not(&quot; + e + &quot;)&quot;), 1 === t.length &amp;&amp; 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function (e) {&#x000A;            return 1 === e.nodeType&#x000A;        }))&#x000A;    }, S.fn.extend({&#x000A;        find: function (e) {&#x000A;            var t, n, r = this.length, i = this;&#x000A;            if (&quot;string&quot; != typeof e) return this.pushStack(S(e).filter(function () {&#x000A;                for (t = 0; t &lt; r; t++) if (S.contains(i[t], this)) return !0&#x000A;            }));&#x000A;            for (n = this.pushStack([]), t = 0; t &lt; r; t++) S.find(e, i[t], n);&#x000A;            return 1 &lt; r ? S.uniqueSort(n) : n&#x000A;        }, filter: function (e) {&#x000A;            return this.pushStack(j(this, e || [], !1))&#x000A;        }, not: function (e) {&#x000A;            return this.pushStack(j(this, e || [], !0))&#x000A;        }, is: function (e) {&#x000A;            return !!j(this, &quot;string&quot; == typeof e &amp;&amp; k.test(e) ? S(e) : e || [], !1).length&#x000A;        }&#x000A;    });&#x000A;    var D, q = /^(?:\s*(&lt;[\w\W]+&gt;)[^&gt;]*|#([\w-]+))$/;&#x000A;    (S.fn.init = function (e, t, n) {&#x000A;        var r, i;&#x000A;        if (!e) return this;&#x000A;        if (n = n || D, &quot;string&quot; == typeof e) {&#x000A;            if (!(r = &quot;&lt;&quot; === e[0] &amp;&amp; &quot;&gt;&quot; === e[e.length - 1] &amp;&amp; 3 &lt;= e.length ? [null, e, null] : q.exec(e)) || !r[1] &amp;&amp; t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);&#x000A;            if (r[1]) {&#x000A;                if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t &amp;&amp; t.nodeType ? t.ownerDocument || t : E, !0)), N.test(r[1]) &amp;&amp; S.isPlainObject(t)) for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);&#x000A;                return this&#x000A;            }&#x000A;            return (i = E.getElementById(r[2])) &amp;&amp; (this[0] = i, this.length = 1), this&#x000A;        }&#x000A;        return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this)&#x000A;    }).prototype = S.fn, D = S(E);&#x000A;    var L = /^(?:parents|prev(?:Until|All))/, H = {children: !0, contents: !0, next: !0, prev: !0};&#x000A;&#x000A;    function O(e, t) {&#x000A;        while ((e = e[t]) &amp;&amp; 1 !== e.nodeType) ;&#x000A;        return e&#x000A;    }&#x000A;&#x000A;    S.fn.extend({&#x000A;        has: function (e) {&#x000A;            var t = S(e, this), n = t.length;&#x000A;            return this.filter(function () {&#x000A;                for (var e = 0; e &lt; n; e++) if (S.contains(this, t[e])) return !0&#x000A;            })&#x000A;        }, closest: function (e, t) {&#x000A;            var n, r = 0, i = this.length, o = [], a = &quot;string&quot; != typeof e &amp;&amp; S(e);&#x000A;            if (!k.test(e)) for (; r &lt; i; r++) for (n = this[r]; n &amp;&amp; n !== t; n = n.parentNode) if (n.nodeType &lt; 11 &amp;&amp; (a ? -1 &lt; a.index(n) : 1 === n.nodeType &amp;&amp; S.find.matchesSelector(n, e))) {&#x000A;                o.push(n);&#x000A;                break&#x000A;            }&#x000A;            return this.pushStack(1 &lt; o.length ? S.uniqueSort(o) : o)&#x000A;        }, index: function (e) {&#x000A;            return e ? &quot;string&quot; == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] &amp;&amp; this[0].parentNode ? this.first().prevAll().length : -1&#x000A;        }, add: function (e, t) {&#x000A;            return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))&#x000A;        }, addBack: function (e) {&#x000A;            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))&#x000A;        }&#x000A;    }), S.each({&#x000A;        parent: function (e) {&#x000A;            var t = e.parentNode;&#x000A;            return t &amp;&amp; 11 !== t.nodeType ? t : null&#x000A;        }, parents: function (e) {&#x000A;            return h(e, &quot;parentNode&quot;)&#x000A;        }, parentsUntil: function (e, t, n) {&#x000A;            return h(e, &quot;parentNode&quot;, n)&#x000A;        }, next: function (e) {&#x000A;            return O(e, &quot;nextSibling&quot;)&#x000A;        }, prev: function (e) {&#x000A;            return O(e, &quot;previousSibling&quot;)&#x000A;        }, nextAll: function (e) {&#x000A;            return h(e, &quot;nextSibling&quot;)&#x000A;        }, prevAll: function (e) {&#x000A;            return h(e, &quot;previousSibling&quot;)&#x000A;        }, nextUntil: function (e, t, n) {&#x000A;            return h(e, &quot;nextSibling&quot;, n)&#x000A;        }, prevUntil: function (e, t, n) {&#x000A;            return h(e, &quot;previousSibling&quot;, n)&#x000A;        }, siblings: function (e) {&#x000A;            return T((e.parentNode || {}).firstChild, e)&#x000A;        }, children: function (e) {&#x000A;            return T(e.firstChild)&#x000A;        }, contents: function (e) {&#x000A;            return null != e.contentDocument &amp;&amp; r(e.contentDocument) ? e.contentDocument : (A(e, &quot;template&quot;) &amp;&amp; (e = e.content || e), S.merge([], e.childNodes))&#x000A;        }&#x000A;    }, function (r, i) {&#x000A;        S.fn[r] = function (e, t) {&#x000A;            var n = S.map(this, i, e);&#x000A;            return &quot;Until&quot; !== r.slice(-5) &amp;&amp; (t = e), t &amp;&amp; &quot;string&quot; == typeof t &amp;&amp; (n = S.filter(t, n)), 1 &lt; this.length &amp;&amp; (H[r] || S.uniqueSort(n), L.test(r) &amp;&amp; n.reverse()), this.pushStack(n)&#x000A;        }&#x000A;    });&#x000A;    var P = /[^\x20\t\r\n\f]+/g;&#x000A;&#x000A;    function R(e) {&#x000A;        return e&#x000A;    }&#x000A;&#x000A;    function M(e) {&#x000A;        throw e&#x000A;    }&#x000A;&#x000A;    function I(e, t, n, r) {&#x000A;        var i;&#x000A;        try {&#x000A;            e &amp;&amp; m(i = e.promise) ? i.call(e).done(t).fail(n) : e &amp;&amp; m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))&#x000A;        } catch (e) {&#x000A;            n.apply(void 0, [e])&#x000A;        }&#x000A;    }&#x000A;&#x000A;    S.Callbacks = function (r) {&#x000A;        var e, n;&#x000A;        r = &quot;string&quot; == typeof r ? (e = r, n = {}, S.each(e.match(P) || [], function (e, t) {&#x000A;            n[t] = !0&#x000A;        }), n) : S.extend({}, r);&#x000A;        var i, t, o, a, s = [], u = [], l = -1, c = function () {&#x000A;            for (a = a || r.once, o = i = !0; u.length; l = -1) {&#x000A;                t = u.shift();&#x000A;                while (++l &lt; s.length) !1 === s[l].apply(t[0], t[1]) &amp;&amp; r.stopOnFalse &amp;&amp; (l = s.length, t = !1)&#x000A;            }&#x000A;            r.memory || (t = !1), i = !1, a &amp;&amp; (s = t ? [] : &quot;&quot;)&#x000A;        }, f = {&#x000A;            add: function () {&#x000A;                return s &amp;&amp; (t &amp;&amp; !i &amp;&amp; (l = s.length - 1, u.push(t)), function n(e) {&#x000A;                    S.each(e, function (e, t) {&#x000A;                        m(t) ? r.unique &amp;&amp; f.has(t) || s.push(t) : t &amp;&amp; t.length &amp;&amp; &quot;string&quot; !== w(t) &amp;&amp; n(t)&#x000A;                    })&#x000A;                }(arguments), t &amp;&amp; !i &amp;&amp; c()), this&#x000A;            }, remove: function () {&#x000A;                return S.each(arguments, function (e, t) {&#x000A;                    var n;&#x000A;                    while (-1 &lt; (n = S.inArray(t, s, n))) s.splice(n, 1), n &lt;= l &amp;&amp; l--&#x000A;                }), this&#x000A;            }, has: function (e) {&#x000A;                return e ? -1 &lt; S.inArray(e, s) : 0 &lt; s.length&#x000A;            }, empty: function () {&#x000A;                return s &amp;&amp; (s = []), this&#x000A;            }, disable: function () {&#x000A;                return a = u = [], s = t = &quot;&quot;, this&#x000A;            }, disabled: function () {&#x000A;                return !s&#x000A;            }, lock: function () {&#x000A;                return a = u = [], t || i || (s = t = &quot;&quot;), this&#x000A;            }, locked: function () {&#x000A;                return !!a&#x000A;            }, fireWith: function (e, t) {&#x000A;                return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this&#x000A;            }, fire: function () {&#x000A;                return f.fireWith(this, arguments), this&#x000A;            }, fired: function () {&#x000A;                return !!o&#x000A;            }&#x000A;        };&#x000A;        return f&#x000A;    }, S.extend({&#x000A;        Deferred: function (e) {&#x000A;            var o = [[&quot;notify&quot;, &quot;progress&quot;, S.Callbacks(&quot;memory&quot;), S.Callbacks(&quot;memory&quot;), 2], [&quot;resolve&quot;, &quot;done&quot;, S.Callbacks(&quot;once memory&quot;), S.Callbacks(&quot;once memory&quot;), 0, &quot;resolved&quot;], [&quot;reject&quot;, &quot;fail&quot;, S.Callbacks(&quot;once memory&quot;), S.Callbacks(&quot;once memory&quot;), 1, &quot;rejected&quot;]], i = &quot;pending&quot;, a = {&#x000A;                state: function () {&#x000A;                    return i&#x000A;                }, always: function () {&#x000A;                    return s.done(arguments).fail(arguments), this&#x000A;                }, &quot;catch&quot;: function (e) {&#x000A;                    return a.then(null, e)&#x000A;                }, pipe: function () {&#x000A;                    var i = arguments;&#x000A;                    return S.Deferred(function (r) {&#x000A;                        S.each(o, function (e, t) {&#x000A;                            var n = m(i[t[4]]) &amp;&amp; i[t[4]];&#x000A;                            s[t[1]](function () {&#x000A;                                var e = n &amp;&amp; n.apply(this, arguments);&#x000A;                                e &amp;&amp; m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + &quot;With&quot;](this, n ? [e] : arguments)&#x000A;                            })&#x000A;                        }), i = null&#x000A;                    }).promise()&#x000A;                }, then: function (t, n, r) {&#x000A;                    var u = 0;&#x000A;&#x000A;                    function l(i, o, a, s) {&#x000A;                        return function () {&#x000A;                            var n = this, r = arguments, e = function () {&#x000A;                                var e, t;&#x000A;                                if (!(i &lt; u)) {&#x000A;                                    if ((e = a.apply(n, r)) === o.promise()) throw new TypeError(&quot;Thenable self-resolution&quot;);&#x000A;                                    t = e &amp;&amp; (&quot;object&quot; == typeof e || &quot;function&quot; == typeof e) &amp;&amp; e.then, m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R &amp;&amp; (n = void 0, r = [e]), (s || o.resolveWith)(n, r))&#x000A;                                }&#x000A;                            }, t = s ? e : function () {&#x000A;                                try {&#x000A;                                    e()&#x000A;                                } catch (e) {&#x000A;                                    S.Deferred.exceptionHook &amp;&amp; S.Deferred.exceptionHook(e, t.stackTrace), u &lt;= i + 1 &amp;&amp; (a !== M &amp;&amp; (n = void 0, r = [e]), o.rejectWith(n, r))&#x000A;                                }&#x000A;                            };&#x000A;                            i ? t() : (S.Deferred.getStackHook &amp;&amp; (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t))&#x000A;                        }&#x000A;                    }&#x000A;&#x000A;                    return S.Deferred(function (e) {&#x000A;                        o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M))&#x000A;                    }).promise()&#x000A;                }, promise: function (e) {&#x000A;                    return null != e ? S.extend(e, a) : a&#x000A;                }&#x000A;            }, s = {};&#x000A;            return S.each(o, function (e, t) {&#x000A;                var n = t[2], r = t[5];&#x000A;                a[t[1]] = n.add, r &amp;&amp; n.add(function () {&#x000A;                    i = r&#x000A;                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {&#x000A;                    return s[t[0] + &quot;With&quot;](this === s ? void 0 : this, arguments), this&#x000A;                }, s[t[0] + &quot;With&quot;] = n.fireWith&#x000A;            }), a.promise(s), e &amp;&amp; e.call(s, s), s&#x000A;        }, when: function (e) {&#x000A;            var n = arguments.length, t = n, r = Array(t), i = s.call(arguments), o = S.Deferred(), a = function (t) {&#x000A;                return function (e) {&#x000A;                    r[t] = this, i[t] = 1 &lt; arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i)&#x000A;                }&#x000A;            };&#x000A;            if (n &lt;= 1 &amp;&amp; (I(e, o.done(a(t)).resolve, o.reject, !n), &quot;pending&quot; === o.state() || m(i[t] &amp;&amp; i[t].then))) return o.then();&#x000A;            while (t--) I(i[t], a(t), o.reject);&#x000A;            return o.promise()&#x000A;        }&#x000A;    });&#x000A;    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;&#x000A;    S.Deferred.exceptionHook = function (e, t) {&#x000A;        C.console &amp;&amp; C.console.warn &amp;&amp; e &amp;&amp; W.test(e.name) &amp;&amp; C.console.warn(&quot;jQuery.Deferred exception: &quot; + e.message, e.stack, t)&#x000A;    }, S.readyException = function (e) {&#x000A;        C.setTimeout(function () {&#x000A;            throw e&#x000A;        })&#x000A;    };&#x000A;    var F = S.Deferred();&#x000A;&#x000A;    function B() {&#x000A;        E.removeEventListener(&quot;DOMContentLoaded&quot;, B), C.removeEventListener(&quot;load&quot;, B), S.ready()&#x000A;    }&#x000A;&#x000A;    S.fn.ready = function (e) {&#x000A;        return F.then(e)[&quot;catch&quot;](function (e) {&#x000A;            S.readyException(e)&#x000A;        }), this&#x000A;    }, S.extend({&#x000A;        isReady: !1, readyWait: 1, ready: function (e) {&#x000A;            (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e &amp;&amp; 0 &lt; --S.readyWait || F.resolveWith(E, [S])&#x000A;        }&#x000A;    }), S.ready.then = F.then, &quot;complete&quot; === E.readyState || &quot;loading&quot; !== E.readyState &amp;&amp; !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener(&quot;DOMContentLoaded&quot;, B), C.addEventListener(&quot;load&quot;, B));&#x000A;    var $ = function (e, t, n, r, i, o, a) {&#x000A;        var s = 0, u = e.length, l = null == n;&#x000A;        if (&quot;object&quot; === w(n)) for (s in i = !0, n) $(e, t, s, n[s], !0, o, a); else if (void 0 !== r &amp;&amp; (i = !0, m(r) || (a = !0), l &amp;&amp; (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {&#x000A;            return l.call(S(e), n)&#x000A;        })), t)) for (; s &lt; u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));&#x000A;        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o&#x000A;    }, _ = /^-ms-/, z = /-([a-z])/g;&#x000A;&#x000A;    function U(e, t) {&#x000A;        return t.toUpperCase()&#x000A;    }&#x000A;&#x000A;    function X(e) {&#x000A;        return e.replace(_, &quot;ms-&quot;).replace(z, U)&#x000A;    }&#x000A;&#x000A;    var V = function (e) {&#x000A;        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType&#x000A;    };&#x000A;&#x000A;    function G() {&#x000A;        this.expando = S.expando + G.uid++&#x000A;    }&#x000A;&#x000A;    G.uid = 1, G.prototype = {&#x000A;        cache: function (e) {&#x000A;            var t = e[this.expando];&#x000A;            return t || (t = {}, V(e) &amp;&amp; (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {value: t, configurable: !0}))), t&#x000A;        }, set: function (e, t, n) {&#x000A;            var r, i = this.cache(e);&#x000A;            if (&quot;string&quot; == typeof t) i[X(t)] = n; else for (r in t) i[X(r)] = t[r];&#x000A;            return i&#x000A;        }, get: function (e, t) {&#x000A;            return void 0 === t ? this.cache(e) : e[this.expando] &amp;&amp; e[this.expando][X(t)]&#x000A;        }, access: function (e, t, n) {&#x000A;            return void 0 === t || t &amp;&amp; &quot;string&quot; == typeof t &amp;&amp; void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)&#x000A;        }, remove: function (e, t) {&#x000A;            var n, r = e[this.expando];&#x000A;            if (void 0 !== r) {&#x000A;                if (void 0 !== t) {&#x000A;                    n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length;&#x000A;                    while (n--) delete r[t[n]]&#x000A;                }&#x000A;                (void 0 === t || S.isEmptyObject(r)) &amp;&amp; (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])&#x000A;            }&#x000A;        }, hasData: function (e) {&#x000A;            var t = e[this.expando];&#x000A;            return void 0 !== t &amp;&amp; !S.isEmptyObject(t)&#x000A;        }&#x000A;    };&#x000A;    var Y = new G, Q = new G, J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, K = /[A-Z]/g;&#x000A;&#x000A;    function Z(e, t, n) {&#x000A;        var r, i;&#x000A;        if (void 0 === n &amp;&amp; 1 === e.nodeType) if (r = &quot;data-&quot; + t.replace(K, &quot;-$&amp;&quot;).toLowerCase(), &quot;string&quot; == typeof (n = e.getAttribute(r))) {&#x000A;            try {&#x000A;                n = &quot;true&quot; === (i = n) || &quot;false&quot; !== i &amp;&amp; (&quot;null&quot; === i ? null : i === +i + &quot;&quot; ? +i : J.test(i) ? JSON.parse(i) : i)&#x000A;            } catch (e) {&#x000A;            }&#x000A;            Q.set(e, t, n)&#x000A;        } else n = void 0;&#x000A;        return n&#x000A;    }&#x000A;&#x000A;    S.extend({&#x000A;        hasData: function (e) {&#x000A;            return Q.hasData(e) || Y.hasData(e)&#x000A;        }, data: function (e, t, n) {&#x000A;            return Q.access(e, t, n)&#x000A;        }, removeData: function (e, t) {&#x000A;            Q.remove(e, t)&#x000A;        }, _data: function (e, t, n) {&#x000A;            return Y.access(e, t, n)&#x000A;        }, _removeData: function (e, t) {&#x000A;            Y.remove(e, t)&#x000A;        }&#x000A;    }), S.fn.extend({&#x000A;        data: function (n, e) {&#x000A;            var t, r, i, o = this[0], a = o &amp;&amp; o.attributes;&#x000A;            if (void 0 === n) {&#x000A;                if (this.length &amp;&amp; (i = Q.get(o), 1 === o.nodeType &amp;&amp; !Y.get(o, &quot;hasDataAttrs&quot;))) {&#x000A;                    t = a.length;&#x000A;                    while (t--) a[t] &amp;&amp; 0 === (r = a[t].name).indexOf(&quot;data-&quot;) &amp;&amp; (r = X(r.slice(5)), Z(o, r, i[r]));&#x000A;                    Y.set(o, &quot;hasDataAttrs&quot;, !0)&#x000A;                }&#x000A;                return i&#x000A;            }&#x000A;            return &quot;object&quot; == typeof n ? this.each(function () {&#x000A;                Q.set(this, n)&#x000A;            }) : $(this, function (e) {&#x000A;                var t;&#x000A;                if (o &amp;&amp; void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;&#x000A;                this.each(function () {&#x000A;                    Q.set(this, n, e)&#x000A;                })&#x000A;            }, null, e, 1 &lt; arguments.length, null, !0)&#x000A;        }, removeData: function (e) {&#x000A;            return this.each(function () {&#x000A;                Q.remove(this, e)&#x000A;            })&#x000A;        }&#x000A;    }), S.extend({&#x000A;        queue: function (e, t, n) {&#x000A;            var r;&#x000A;            if (e) return t = (t || &quot;fx&quot;) + &quot;queue&quot;, r = Y.get(e, t), n &amp;&amp; (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)), r || []&#x000A;        }, dequeue: function (e, t) {&#x000A;            t = t || &quot;fx&quot;;&#x000A;            var n = S.queue(e, t), r = n.length, i = n.shift(), o = S._queueHooks(e, t);&#x000A;            &quot;inprogress&quot; === i &amp;&amp; (i = n.shift(), r--), i &amp;&amp; (&quot;fx&quot; === t &amp;&amp; n.unshift(&quot;inprogress&quot;), delete o.stop, i.call(e, function () {&#x000A;                S.dequeue(e, t)&#x000A;            }, o)), !r &amp;&amp; o &amp;&amp; o.empty.fire()&#x000A;        }, _queueHooks: function (e, t) {&#x000A;            var n = t + &quot;queueHooks&quot;;&#x000A;            return Y.get(e, n) || Y.access(e, n, {&#x000A;                empty: S.Callbacks(&quot;once memory&quot;).add(function () {&#x000A;                    Y.remove(e, [t + &quot;queue&quot;, n])&#x000A;                })&#x000A;            })&#x000A;        }&#x000A;    }), S.fn.extend({&#x000A;        queue: function (t, n) {&#x000A;            var e = 2;&#x000A;            return &quot;string&quot; != typeof t &amp;&amp; (n = t, t = &quot;fx&quot;, e--), arguments.length &lt; e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function () {&#x000A;                var e = S.queue(this, t, n);&#x000A;                S._queueHooks(this, t), &quot;fx&quot; === t &amp;&amp; &quot;inprogress&quot; !== e[0] &amp;&amp; S.dequeue(this, t)&#x000A;            })&#x000A;        }, dequeue: function (e) {&#x000A;            return this.each(function () {&#x000A;                S.dequeue(this, e)&#x000A;            })&#x000A;        }, clearQueue: function (e) {&#x000A;            return this.queue(e || &quot;fx&quot;, [])&#x000A;        }, promise: function (e, t) {&#x000A;            var n, r = 1, i = S.Deferred(), o = this, a = this.length, s = function () {&#x000A;                --r || i.resolveWith(o, [o])&#x000A;            };&#x000A;            &quot;string&quot; != typeof e &amp;&amp; (t = e, e = void 0), e = e || &quot;fx&quot;;&#x000A;            while (a--) (n = Y.get(o[a], e + &quot;queueHooks&quot;)) &amp;&amp; n.empty &amp;&amp; (r++, n.empty.add(s));&#x000A;            return s(), i.promise(t)&#x000A;        }&#x000A;    });&#x000A;    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, te = new RegExp(&quot;^(?:([+-])=|)(&quot; + ee + &quot;)([a-z%]*)$&quot;, &quot;i&quot;), ne = [&quot;Top&quot;, &quot;Right&quot;, &quot;Bottom&quot;, &quot;Left&quot;], re = E.documentElement, ie = function (e) {&#x000A;        return S.contains(e.ownerDocument, e)&#x000A;    }, oe = {composed: !0};&#x000A;    re.getRootNode &amp;&amp; (ie = function (e) {&#x000A;        return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument&#x000A;    });&#x000A;    var ae = function (e, t) {&#x000A;        return &quot;none&quot; === (e = t || e).style.display || &quot;&quot; === e.style.display &amp;&amp; ie(e) &amp;&amp; &quot;none&quot; === S.css(e, &quot;display&quot;)&#x000A;    };&#x000A;&#x000A;    function se(e, t, n, r) {&#x000A;        var i, o, a = 20, s = r ? function () {&#x000A;            return r.cur()&#x000A;        } : function () {&#x000A;            return S.css(e, t, &quot;&quot;)&#x000A;        }, u = s(), l = n &amp;&amp; n[3] || (S.cssNumber[t] ? &quot;&quot; : &quot;px&quot;), c = e.nodeType &amp;&amp; (S.cssNumber[t] || &quot;px&quot; !== l &amp;&amp; +u) &amp;&amp; te.exec(S.css(e, t));&#x000A;        if (c &amp;&amp; c[3] !== l) {&#x000A;            u /= 2, l = l || c[3], c = +u || 1;&#x000A;            while (a--) S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) &lt;= 0 &amp;&amp; (a = 0), c /= o;&#x000A;            c *= 2, S.style(e, t, c + l), n = n || []&#x000A;        }&#x000A;        return n &amp;&amp; (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r &amp;&amp; (r.unit = l, r.start = c, r.end = i)), i&#x000A;    }&#x000A;&#x000A;    var ue = {};&#x000A;&#x000A;    function le(e, t) {&#x000A;        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c &lt; f; c++) (r = e[c]).style &amp;&amp; (n = r.style.display, t ? (&quot;none&quot; === n &amp;&amp; (l[c] = Y.get(r, &quot;display&quot;) || null, l[c] || (r.style.display = &quot;&quot;)), &quot;&quot; === r.style.display &amp;&amp; ae(r) &amp;&amp; (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = S.css(o, &quot;display&quot;), o.parentNode.removeChild(o), &quot;none&quot; === u &amp;&amp; (u = &quot;block&quot;), ue[s] = u)))) : &quot;none&quot; !== n &amp;&amp; (l[c] = &quot;none&quot;, Y.set(r, &quot;display&quot;, n)));&#x000A;        for (c = 0; c &lt; f; c++) null != l[c] &amp;&amp; (e[c].style.display = l[c]);&#x000A;        return e&#x000A;    }&#x000A;&#x000A;    S.fn.extend({&#x000A;        show: function () {&#x000A;            return le(this, !0)&#x000A;        }, hide: function () {&#x000A;            return le(this)&#x000A;        }, toggle: function (e) {&#x000A;            return &quot;boolean&quot; == typeof e ? e ? this.show() : this.hide() : this.each(function () {&#x000A;                ae(this) ? S(this).show() : S(this).hide()&#x000A;            })&#x000A;        }&#x000A;    });&#x000A;    var ce, fe, pe = /^(?:checkbox|radio)$/i, de = /&lt;([a-z][^\/\0&gt;\x20\t\r\n\f]*)/i, he = /^$|^module$|\/(?:java|ecma)script/i;&#x000A;    ce = E.createDocumentFragment().appendChild(E.createElement(&quot;div&quot;)), (fe = E.createElement(&quot;input&quot;)).setAttribute(&quot;type&quot;, &quot;radio&quot;), fe.setAttribute(&quot;checked&quot;, &quot;checked&quot;), fe.setAttribute(&quot;name&quot;, &quot;t&quot;), ce.appendChild(fe), y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = &quot;&lt;textarea&gt;x&lt;/textarea&gt;&quot;, y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = &quot;&lt;option&gt;&lt;/option&gt;&quot;, y.option = !!ce.lastChild;&#x000A;    var ge = {thead: [1, &quot;&lt;table&gt;&quot;, &quot;&lt;/table&gt;&quot;], col: [2, &quot;&lt;table&gt;&lt;colgroup&gt;&quot;, &quot;&lt;/colgroup&gt;&lt;/table&gt;&quot;], tr: [2, &quot;&lt;table&gt;&lt;tbody&gt;&quot;, &quot;&lt;/tbody&gt;&lt;/table&gt;&quot;], td: [3, &quot;&lt;table&gt;&lt;tbody&gt;&lt;tr&gt;&quot;, &quot;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&quot;], _default: [0, &quot;&quot;, &quot;&quot;]};&#x000A;&#x000A;    function ve(e, t) {&#x000A;        var n;&#x000A;        return n = &quot;undefined&quot; != typeof e.getElementsByTagName ? e.getElementsByTagName(t || &quot;*&quot;) : &quot;undefined&quot; != typeof e.querySelectorAll ? e.querySelectorAll(t || &quot;*&quot;) : [], void 0 === t || t &amp;&amp; A(e, t) ? S.merge([e], n) : n&#x000A;    }&#x000A;&#x000A;    function ye(e, t) {&#x000A;        for (var n = 0, r = e.length; n &lt; r; n++) Y.set(e[n], &quot;globalEval&quot;, !t || Y.get(t[n], &quot;globalEval&quot;))&#x000A;    }&#x000A;&#x000A;    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, y.option || (ge.optgroup = ge.option = [1, &quot;&lt;select multiple=&#39;multiple&#39;&gt;&quot;, &quot;&lt;/select&gt;&quot;]);&#x000A;    var me = /&lt;|&amp;#?\w+;/;&#x000A;&#x000A;    function xe(e, t, n, r, i) {&#x000A;        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d &lt; h; d++) if ((o = e[d]) || 0 === o) if (&quot;object&quot; === w(o)) S.merge(p, o.nodeType ? [o] : o); else if (me.test(o)) {&#x000A;            a = a || f.appendChild(t.createElement(&quot;div&quot;)), s = (de.exec(o) || [&quot;&quot;, &quot;&quot;])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2], c = u[0];&#x000A;            while (c--) a = a.lastChild;&#x000A;            S.merge(p, a.childNodes), (a = f.firstChild).textContent = &quot;&quot;&#x000A;        } else p.push(t.createTextNode(o));&#x000A;        f.textContent = &quot;&quot;, d = 0;&#x000A;        while (o = p[d++]) if (r &amp;&amp; -1 &lt; S.inArray(o, r)) i &amp;&amp; i.push(o); else if (l = ie(o), a = ve(f.appendChild(o), &quot;script&quot;), l &amp;&amp; ye(a), n) {&#x000A;            c = 0;&#x000A;            while (o = a[c++]) he.test(o.type || &quot;&quot;) &amp;&amp; n.push(o)&#x000A;        }&#x000A;        return f&#x000A;    }&#x000A;&#x000A;    var be = /^([^.]*)(?:\.(.+)|)/;&#x000A;&#x000A;    function we() {&#x000A;        return !0&#x000A;    }&#x000A;&#x000A;    function Te() {&#x000A;        return !1&#x000A;    }&#x000A;&#x000A;    function Ce(e, t) {&#x000A;        return e === function () {&#x000A;            try {&#x000A;                return E.activeElement&#x000A;            } catch (e) {&#x000A;            }&#x000A;        }() == (&quot;focus&quot; === t)&#x000A;    }&#x000A;&#x000A;    function Ee(e, t, n, r, i, o) {&#x000A;        var a, s;&#x000A;        if (&quot;object&quot; == typeof t) {&#x000A;            for (s in &quot;string&quot; != typeof n &amp;&amp; (r = r || n, n = void 0), t) Ee(e, s, n, r, t[s], o);&#x000A;            return e&#x000A;        }&#x000A;        if (null == r &amp;&amp; null == i ? (i = n, r = n = void 0) : null == i &amp;&amp; (&quot;string&quot; == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Te; else if (!i) return e;&#x000A;        return 1 === o &amp;&amp; (a = i, (i = function (e) {&#x000A;            return S().off(e), a.apply(this, arguments)&#x000A;        }).guid = a.guid || (a.guid = S.guid++)), e.each(function () {&#x000A;            S.event.add(this, t, i, r, n)&#x000A;        })&#x000A;    }&#x000A;&#x000A;    function Se(e, i, o) {&#x000A;        o ? (Y.set(e, i, !1), S.event.add(e, i, {&#x000A;            namespace: !1, handler: function (e) {&#x000A;                var t, n, r = Y.get(this, i);&#x000A;                if (1 &amp; e.isTrigger &amp;&amp; this[i]) {&#x000A;                    if (r.length) (S.event.special[i] || {}).delegateType &amp;&amp; e.stopPropagation(); else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n &amp;&amp; n.value&#x000A;                } else r.length &amp;&amp; (Y.set(this, i, {value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this)}), e.stopImmediatePropagation())&#x000A;            }&#x000A;        })) : void 0 === Y.get(e, i) &amp;&amp; S.event.add(e, i, we)&#x000A;    }&#x000A;&#x000A;    S.event = {&#x000A;        global: {}, add: function (t, e, n, r, i) {&#x000A;            var o, a, s, u, l, c, f, p, d, h, g, v = Y.get(t);&#x000A;            if (V(t)) {&#x000A;                n.handler &amp;&amp; (n = (o = n).handler, i = o.selector), i &amp;&amp; S.find.matchesSelector(re, i), n.guid || (n.guid = S.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function (e) {&#x000A;                    return &quot;undefined&quot; != typeof S &amp;&amp; S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0&#x000A;                }), l = (e = (e || &quot;&quot;).match(P) || [&quot;&quot;]).length;&#x000A;                while (l--) d = g = (s = be.exec(e[l]) || [])[1], h = (s[2] || &quot;&quot;).split(&quot;.&quot;).sort(), d &amp;&amp; (f = S.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = S.event.special[d] || {}, c = S.extend({type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i &amp;&amp; S.expr.match.needsContext.test(i), namespace: h.join(&quot;.&quot;)}, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup &amp;&amp; !1 !== f.setup.call(t, r, h, a) || t.addEventListener &amp;&amp; t.addEventListener(d, a)), f.add &amp;&amp; (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), S.event.global[d] = !0)&#x000A;            }&#x000A;        }, remove: function (e, t, n, r, i) {&#x000A;            var o, a, s, u, l, c, f, p, d, h, g, v = Y.hasData(e) &amp;&amp; Y.get(e);&#x000A;            if (v &amp;&amp; (u = v.events)) {&#x000A;                l = (t = (t || &quot;&quot;).match(P) || [&quot;&quot;]).length;&#x000A;                while (l--) if (d = g = (s = be.exec(t[l]) || [])[1], h = (s[2] || &quot;&quot;).split(&quot;.&quot;).sort(), d) {&#x000A;                    f = S.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] &amp;&amp; new RegExp(&quot;(^|\\.)&quot; + h.join(&quot;\\.(?:.*\\.|)&quot;) + &quot;(\\.|$)&quot;), a = o = p.length;&#x000A;                    while (o--) c = p[o], !i &amp;&amp; g !== c.origType || n &amp;&amp; n.guid !== c.guid || s &amp;&amp; !s.test(c.namespace) || r &amp;&amp; r !== c.selector &amp;&amp; (&quot;**&quot; !== r || !c.selector) || (p.splice(o, 1), c.selector &amp;&amp; p.delegateCount--, f.remove &amp;&amp; f.remove.call(e, c));&#x000A;                    a &amp;&amp; !p.length &amp;&amp; (f.teardown &amp;&amp; !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle), delete u[d])&#x000A;                } else for (d in u) S.event.remove(e, d + t[l], n, r, !0);&#x000A;                S.isEmptyObject(u) &amp;&amp; Y.remove(e, &quot;handle events&quot;)&#x000A;            }&#x000A;        }, dispatch: function (e) {&#x000A;            var t, n, r, i, o, a, s = new Array(arguments.length), u = S.event.fix(e), l = (Y.get(this, &quot;events&quot;) || Object.create(null))[u.type] || [], c = S.event.special[u.type] || {};&#x000A;            for (s[0] = u, t = 1; t &lt; arguments.length; t++) s[t] = arguments[t];&#x000A;            if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {&#x000A;                a = S.event.handlers.call(this, u, l), t = 0;&#x000A;                while ((i = a[t++]) &amp;&amp; !u.isPropagationStopped()) {&#x000A;                    u.currentTarget = i.elem, n = 0;&#x000A;                    while ((o = i.handlers[n++]) &amp;&amp; !u.isImmediatePropagationStopped()) u.rnamespace &amp;&amp; !1 !== o.namespace &amp;&amp; !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) &amp;&amp; !1 === (u.result = r) &amp;&amp; (u.preventDefault(), u.stopPropagation()))&#x000A;                }&#x000A;                return c.postDispatch &amp;&amp; c.postDispatch.call(this, u), u.result&#x000A;            }&#x000A;        }, handlers: function (e, t) {&#x000A;            var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;&#x000A;            if (u &amp;&amp; l.nodeType &amp;&amp; !(&quot;click&quot; === e.type &amp;&amp; 1 &lt;= e.button)) for (; l !== this; l = l.parentNode || this) if (1 === l.nodeType &amp;&amp; (&quot;click&quot; !== e.type || !0 !== l.disabled)) {&#x000A;                for (o = [], a = {}, n = 0; n &lt; u; n++) void 0 === a[i = (r = t[n]).selector + &quot; &quot;] &amp;&amp; (a[i] = r.needsContext ? -1 &lt; S(i, this).index(l) : S.find(i, this, null, [l]).length), a[i] &amp;&amp; o.push(r);&#x000A;                o.length &amp;&amp; s.push({elem: l, handlers: o})&#x000A;            }&#x000A;            return l = this, u &lt; t.length &amp;&amp; s.push({elem: l, handlers: t.slice(u)}), s&#x000A;        }, addProp: function (t, e) {&#x000A;            Object.defineProperty(S.Event.prototype, t, {&#x000A;                enumerable: !0, configurable: !0, get: m(e) ? function () {&#x000A;                    if (this.originalEvent) return e(this.originalEvent)&#x000A;                } : function () {&#x000A;                    if (this.originalEvent) return this.originalEvent[t]&#x000A;                }, set: function (e) {&#x000A;                    Object.defineProperty(this, t, {enumerable: !0, configurable: !0, writable: !0, value: e})&#x000A;                }&#x000A;            })&#x000A;        }, fix: function (e) {&#x000A;            return e[S.expando] ? e : new S.Event(e)&#x000A;        }, special: {&#x000A;            load: {noBubble: !0}, click: {&#x000A;                setup: function (e) {&#x000A;                    var t = this || e;&#x000A;                    return pe.test(t.type) &amp;&amp; t.click &amp;&amp; A(t, &quot;input&quot;) &amp;&amp; Se(t, &quot;click&quot;, we), !1&#x000A;                }, trigger: function (e) {&#x000A;                    var t = this || e;&#x000A;                    return pe.test(t.type) &amp;&amp; t.click &amp;&amp; A(t, &quot;input&quot;) &amp;&amp; Se(t, &quot;click&quot;), !0&#x000A;                }, _default: function (e) {&#x000A;                    var t = e.target;&#x000A;                    return pe.test(t.type) &amp;&amp; t.click &amp;&amp; A(t, &quot;input&quot;) &amp;&amp; Y.get(t, &quot;click&quot;) || A(t, &quot;a&quot;)&#x000A;                }&#x000A;            }, beforeunload: {&#x000A;                postDispatch: function (e) {&#x000A;                    void 0 !== e.result &amp;&amp; e.originalEvent &amp;&amp; (e.originalEvent.returnValue = e.result)&#x000A;                }&#x000A;            }&#x000A;        }&#x000A;    }, S.removeEvent = function (e, t, n) {&#x000A;        e.removeEventListener &amp;&amp; e.removeEventListener(t, n)&#x000A;    }, S.Event = function (e, t) {&#x000A;        if (!(this instanceof S.Event)) return new S.Event(e, t);&#x000A;        e &amp;&amp; e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented &amp;&amp; !1 === e.returnValue ? we : Te, this.target = e.target &amp;&amp; 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t &amp;&amp; S.extend(this, t), this.timeStamp = e &amp;&amp; e.timeStamp || Date.now(), this[S.expando] = !0&#x000A;    }, S.Event.prototype = {&#x000A;        constructor: S.Event, isDefaultPrevented: Te, isPropagationStopped: Te, isImmediatePropagationStopped: Te, isSimulated: !1, preventDefault: function () {&#x000A;            var e = this.originalEvent;&#x000A;            this.isDefaultPrevented = we, e &amp;&amp; !this.isSimulated &amp;&amp; e.preventDefault()&#x000A;        }, stopPropagation: function () {&#x000A;            var e = this.originalEvent;&#x000A;            this.isPropagationStopped = we, e &amp;&amp; !this.isSimulated &amp;&amp; e.stopPropagation()&#x000A;        }, stopImmediatePropagation: function () {&#x000A;            var e = this.originalEvent;&#x000A;            this.isImmediatePropagationStopped = we, e &amp;&amp; !this.isSimulated &amp;&amp; e.stopImmediatePropagation(), this.stopPropagation()&#x000A;        }&#x000A;    }, S.each({altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, &quot;char&quot;: !0, code: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: !0}, S.event.addProp), S.each({focus: &quot;focusin&quot;, blur: &quot;focusout&quot;}, function (e, t) {&#x000A;        S.event.special[e] = {&#x000A;            setup: function () {&#x000A;                return Se(this, e, Ce), !1&#x000A;            }, trigger: function () {&#x000A;                return Se(this, e), !0&#x000A;            }, _default: function () {&#x000A;                return !0&#x000A;            }, delegateType: t&#x000A;        }&#x000A;    }), S.each({mouseenter: &quot;mouseover&quot;, mouseleave: &quot;mouseout&quot;, pointerenter: &quot;pointerover&quot;, pointerleave: &quot;pointerout&quot;}, function (e, i) {&#x000A;        S.event.special[e] = {&#x000A;            delegateType: i, bindType: i, handle: function (e) {&#x000A;                var t, n = e.relatedTarget, r = e.handleObj;&#x000A;                return n &amp;&amp; (n === this || S.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t&#x000A;            }&#x000A;        }&#x000A;    }), S.fn.extend({&#x000A;        on: function (e, t, n, r) {&#x000A;            return Ee(this, e, t, n, r)&#x000A;        }, one: function (e, t, n, r) {&#x000A;            return Ee(this, e, t, n, r, 1)&#x000A;        }, off: function (e, t, n) {&#x000A;            var r, i;&#x000A;            if (e &amp;&amp; e.preventDefault &amp;&amp; e.handleObj) return r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + &quot;.&quot; + r.namespace : r.origType, r.selector, r.handler), this;&#x000A;            if (&quot;object&quot; == typeof e) {&#x000A;                for (i in e) this.off(i, t, e[i]);&#x000A;                return this&#x000A;            }&#x000A;            return !1 !== t &amp;&amp; &quot;function&quot; != typeof t || (n = t, t = void 0), !1 === n &amp;&amp; (n = Te), this.each(function () {&#x000A;                S.event.remove(this, e, n, t)&#x000A;            })&#x000A;        }&#x000A;    });&#x000A;    var ke = /&lt;script|&lt;style|&lt;link/i, Ae = /checked\s*(?:[^=]|=\s*.checked.)/i, Ne = /^\s*&lt;!(?:\[CDATA\[|--)|(?:\]\]|--)&gt;\s*$/g;&#x000A;&#x000A;    function je(e, t) {&#x000A;        return A(e, &quot;table&quot;) &amp;&amp; A(11 !== t.nodeType ? t : t.firstChild, &quot;tr&quot;) &amp;&amp; S(e).children(&quot;tbody&quot;)[0] || e&#x000A;    }&#x000A;&#x000A;    function De(e) {&#x000A;        return e.type = (null !== e.getAttribute(&quot;type&quot;)) + &quot;/&quot; + e.type, e&#x000A;    }&#x000A;&#x000A;    function qe(e) {&#x000A;        return &quot;true/&quot; === (e.type || &quot;&quot;).slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute(&quot;type&quot;), e&#x000A;    }&#x000A;&#x000A;    function Le(e, t) {&#x000A;        var n, r, i, o, a, s;&#x000A;        if (1 === t.nodeType) {&#x000A;            if (Y.hasData(e) &amp;&amp; (s = Y.get(e).events)) for (i in Y.remove(t, &quot;handle events&quot;), s) for (n = 0, r = s[i].length; n &lt; r; n++) S.event.add(t, i, s[i][n]);&#x000A;            Q.hasData(e) &amp;&amp; (o = Q.access(e), a = S.extend({}, o), Q.set(t, a))&#x000A;        }&#x000A;    }&#x000A;&#x000A;    function He(n, r, i, o) {&#x000A;        r = g(r);&#x000A;        var e, t, a, s, u, l, c = 0, f = n.length, p = f - 1, d = r[0], h = m(d);&#x000A;        if (h || 1 &lt; f &amp;&amp; &quot;string&quot; == typeof d &amp;&amp; !y.checkClone &amp;&amp; Ae.test(d)) return n.each(function (e) {&#x000A;            var t = n.eq(e);&#x000A;            h &amp;&amp; (r[0] = d.call(this, e, t.html())), He(t, r, i, o)&#x000A;        });&#x000A;        if (f &amp;&amp; (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length &amp;&amp; (e = t), t || o)) {&#x000A;            for (s = (a = S.map(ve(e, &quot;script&quot;), De)).length; c &lt; f; c++) u = e, c !== p &amp;&amp; (u = S.clone(u, !0, !0), s &amp;&amp; S.merge(a, ve(u, &quot;script&quot;))), i.call(n[c], u, c);&#x000A;            if (s) for (l = a[a.length - 1].ownerDocument, S.map(a, qe), c = 0; c &lt; s; c++) u = a[c], he.test(u.type || &quot;&quot;) &amp;&amp; !Y.access(u, &quot;globalEval&quot;) &amp;&amp; S.contains(l, u) &amp;&amp; (u.src &amp;&amp; &quot;module&quot; !== (u.type || &quot;&quot;).toLowerCase() ? S._evalUrl &amp;&amp; !u.noModule &amp;&amp; S._evalUrl(u.src, {nonce: u.nonce || u.getAttribute(&quot;nonce&quot;)}, l) : b(u.textContent.replace(Ne, &quot;&quot;), u, l))&#x000A;        }&#x000A;        return n&#x000A;    }&#x000A;&#x000A;    function Oe(e, t, n) {&#x000A;        for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || S.cleanData(ve(r)), r.parentNode &amp;&amp; (n &amp;&amp; ie(r) &amp;&amp; ye(ve(r, &quot;script&quot;)), r.parentNode.removeChild(r));&#x000A;        return e&#x000A;    }&#x000A;&#x000A;    S.extend({&#x000A;        htmlPrefilter: function (e) {&#x000A;            return e&#x000A;        }, clone: function (e, t, n) {&#x000A;            var r, i, o, a, s, u, l, c = e.cloneNode(!0), f = ie(e);&#x000A;            if (!(y.noCloneChecked || 1 !== e.nodeType &amp;&amp; 11 !== e.nodeType || S.isXMLDoc(e))) for (a = ve(c), r = 0, i = (o = ve(e)).length; r &lt; i; r++) s = o[r], u = a[r], void 0, &quot;input&quot; === (l = u.nodeName.toLowerCase()) &amp;&amp; pe.test(s.type) ? u.checked = s.checked : &quot;input&quot; !== l &amp;&amp; &quot;textarea&quot; !== l || (u.defaultValue = s.defaultValue);&#x000A;            if (t) if (n) for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r &lt; i; r++) Le(o[r], a[r]); else Le(e, c);&#x000A;            return 0 &lt; (a = ve(c, &quot;script&quot;)).length &amp;&amp; ye(a, !f &amp;&amp; ve(e, &quot;script&quot;)), c&#x000A;        }, cleanData: function (e) {&#x000A;            for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++) if (V(n)) {&#x000A;                if (t = n[Y.expando]) {&#x000A;                    if (t.events) for (r in t.events) i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);&#x000A;                    n[Y.expando] = void 0&#x000A;                }&#x000A;                n[Q.expando] &amp;&amp; (n[Q.expando] = void 0)&#x000A;            }&#x000A;        }&#x000A;    }), S.fn.extend({&#x000A;        detach: function (e) {&#x000A;            return Oe(this, e, !0)&#x000A;        }, remove: function (e) {&#x000A;            return Oe(this, e)&#x000A;        }, text: function (e) {&#x000A;            return $(this, function (e) {&#x000A;                return void 0 === e ? S.text(this) : this.empty().each(function () {&#x000A;                    1 !== this.nodeType &amp;&amp; 11 !== this.nodeType &amp;&amp; 9 !== this.nodeType || (this.textContent = e)&#x000A;                })&#x000A;            }, null, e, arguments.length)&#x000A;        }, append: function () {&#x000A;            return He(this, arguments, function (e) {&#x000A;                1 !== this.nodeType &amp;&amp; 11 !== this.nodeType &amp;&amp; 9 !== this.nodeType || je(this, e).appendChild(e)&#x000A;            })&#x000A;        }, prepend: function () {&#x000A;            return He(this, arguments, function (e) {&#x000A;                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {&#x000A;                    var t = je(this, e);&#x000A;                    t.insertBefore(e, t.firstChild)&#x000A;                }&#x000A;            })&#x000A;        }, before: function () {&#x000A;            return He(this, arguments, function (e) {&#x000A;                this.parentNode &amp;&amp; this.parentNode.insertBefore(e, this)&#x000A;            })&#x000A;        }, after: function () {&#x000A;            return He(this, arguments, function (e) {&#x000A;                this.parentNode &amp;&amp; this.parentNode.insertBefore(e, this.nextSibling)&#x000A;            })&#x000A;        }, empty: function () {&#x000A;            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType &amp;&amp; (S.cleanData(ve(e, !1)), e.textContent = &quot;&quot;);&#x000A;            return this&#x000A;        }, clone: function (e, t) {&#x000A;            return e = null != e &amp;&amp; e, t = null == t ? e : t, this.map(function () {&#x000A;                return S.clone(this, e, t)&#x000A;            })&#x000A;        }, html: function (e) {&#x000A;            return $(this, function (e) {&#x000A;                var t = this[0] || {}, n = 0, r = this.length;&#x000A;                if (void 0 === e &amp;&amp; 1 === t.nodeType) return t.innerHTML;&#x000A;                if (&quot;string&quot; == typeof e &amp;&amp; !ke.test(e) &amp;&amp; !ge[(de.exec(e) || [&quot;&quot;, &quot;&quot;])[1].toLowerCase()]) {&#x000A;                    e = S.htmlPrefilter(e);&#x000A;                    try {&#x000A;                        for (; n &lt; r; n++) 1 === (t = this[n] || {}).nodeType &amp;&amp; (S.cleanData(ve(t, !1)), t.innerHTML = e);&#x000A;                        t = 0&#x000A;                    } catch (e) {&#x000A;                    }&#x000A;                }&#x000A;                t &amp;&amp; this.empty().append(e)&#x000A;            }, null, e, arguments.length)&#x000A;        }, replaceWith: function () {&#x000A;            var n = [];&#x000A;            return He(this, arguments, function (e) {&#x000A;                var t = this.parentNode;&#x000A;                S.inArray(this, n) &lt; 0 &amp;&amp; (S.cleanData(ve(this)), t &amp;&amp; t.replaceChild(e, this))&#x000A;            }, n)&#x000A;        }&#x000A;    }), S.each({appendTo: &quot;append&quot;, prependTo: &quot;prepend&quot;, insertBefore: &quot;before&quot;, insertAfter: &quot;after&quot;, replaceAll: &quot;replaceWith&quot;}, function (e, a) {&#x000A;        S.fn[e] = function (e) {&#x000A;            for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o &lt;= i; o++) t = o === i ? this : this.clone(!0), S(r[o])[a](t), u.apply(n, t.get());&#x000A;            return this.pushStack(n)&#x000A;        }&#x000A;    });&#x000A;    var Pe = new RegExp(&quot;^(&quot; + ee + &quot;)(?!px)[a-z%]+$&quot;, &quot;i&quot;), Re = function (e) {&#x000A;        var t = e.ownerDocument.defaultView;&#x000A;        return t &amp;&amp; t.opener || (t = C), t.getComputedStyle(e)&#x000A;    }, Me = function (e, t, n) {&#x000A;        var r, i, o = {};&#x000A;        for (i in t) o[i] = e.style[i], e.style[i] = t[i];&#x000A;        for (i in r = n.call(e), t) e.style[i] = o[i];&#x000A;        return r&#x000A;    }, Ie = new RegExp(ne.join(&quot;|&quot;), &quot;i&quot;);&#x000A;&#x000A;    function We(e, t, n) {&#x000A;        var r, i, o, a, s = e.style;&#x000A;        return (n = n || Re(e)) &amp;&amp; (&quot;&quot; !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)), !y.pixelBoxStyles() &amp;&amp; Pe.test(a) &amp;&amp; Ie.test(t) &amp;&amp; (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + &quot;&quot; : a&#x000A;    }&#x000A;&#x000A;    function Fe(e, t) {&#x000A;        return {&#x000A;            get: function () {&#x000A;                if (!e()) return (this.get = t).apply(this, arguments);&#x000A;                delete this.get&#x000A;            }&#x000A;        }&#x000A;    }&#x000A;&#x000A;    !function () {&#x000A;        function e() {&#x000A;            if (l) {&#x000A;                u.style.cssText = &quot;position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0&quot;, l.style.cssText = &quot;position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%&quot;, re.appendChild(u).appendChild(l);&#x000A;                var e = C.getComputedStyle(l);&#x000A;                n = &quot;1%&quot; !== e.top, s = 12 === t(e.marginLeft), l.style.right = &quot;60%&quot;, o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = &quot;absolute&quot;, i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null&#x000A;            }&#x000A;        }&#x000A;&#x000A;        function t(e) {&#x000A;            return Math.round(parseFloat(e))&#x000A;        }&#x000A;&#x000A;        var n, r, i, o, a, s, u = E.createElement(&quot;div&quot;), l = E.createElement(&quot;div&quot;);&#x000A;        l.style &amp;&amp; (l.style.backgroundClip = &quot;content-box&quot;, l.cloneNode(!0).style.backgroundClip = &quot;&quot;, y.clearCloneStyle = &quot;content-box&quot; === l.style.backgroundClip, S.extend(y, {&#x000A;            boxSizingReliable: function () {&#x000A;                return e(), r&#x000A;            }, pixelBoxStyles: function () {&#x000A;                return e(), o&#x000A;            }, pixelPosition: function () {&#x000A;                return e(), n&#x000A;            }, reliableMarginLeft: function () {&#x000A;                return e(), s&#x000A;            }, scrollboxSize: function () {&#x000A;                return e(), i&#x000A;            }, reliableTrDimensions: function () {&#x000A;                var e, t, n, r;&#x000A;                return null == a &amp;&amp; (e = E.createElement(&quot;table&quot;), t = E.createElement(&quot;tr&quot;), n = E.createElement(&quot;div&quot;), e.style.cssText = &quot;position:absolute;left:-11111px;border-collapse:separate&quot;, t.style.cssText = &quot;border:1px solid&quot;, t.style.height = &quot;1px&quot;, n.style.height = &quot;9px&quot;, n.style.display = &quot;block&quot;, re.appendChild(e).appendChild(t).appendChild(n), r = C.getComputedStyle(t), a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight, re.removeChild(e)), a&#x000A;            }&#x000A;        }))&#x000A;    }();&#x000A;    var Be = [&quot;Webkit&quot;, &quot;Moz&quot;, &quot;ms&quot;], $e = E.createElement(&quot;div&quot;).style, _e = {};&#x000A;&#x000A;    function ze(e) {&#x000A;        var t = S.cssProps[e] || _e[e];&#x000A;        return t || (e in $e ? e : _e[e] = function (e) {&#x000A;            var t = e[0].toUpperCase() + e.slice(1), n = Be.length;&#x000A;            while (n--) if ((e = Be[n] + t) in $e) return e&#x000A;        }(e) || e)&#x000A;    }&#x000A;&#x000A;    var Ue = /^(none|table(?!-c[ea]).+)/, Xe = /^--/, Ve = {position: &quot;absolute&quot;, visibility: &quot;hidden&quot;, display: &quot;block&quot;}, Ge = {letterSpacing: &quot;0&quot;, fontWeight: &quot;400&quot;};&#x000A;&#x000A;    function Ye(e, t, n) {&#x000A;        var r = te.exec(t);&#x000A;        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || &quot;px&quot;) : t&#x000A;    }&#x000A;&#x000A;    function Qe(e, t, n, r, i, o) {&#x000A;        var a = &quot;width&quot; === t ? 1 : 0, s = 0, u = 0;&#x000A;        if (n === (r ? &quot;border&quot; : &quot;content&quot;)) return 0;&#x000A;        for (; a &lt; 4; a += 2) &quot;margin&quot; === n &amp;&amp; (u += S.css(e, n + ne[a], !0, i)), r ? (&quot;content&quot; === n &amp;&amp; (u -= S.css(e, &quot;padding&quot; + ne[a], !0, i)), &quot;margin&quot; !== n &amp;&amp; (u -= S.css(e, &quot;border&quot; + ne[a] + &quot;Width&quot;, !0, i))) : (u += S.css(e, &quot;padding&quot; + ne[a], !0, i), &quot;padding&quot; !== n ? u += S.css(e, &quot;border&quot; + ne[a] + &quot;Width&quot;, !0, i) : s += S.css(e, &quot;border&quot; + ne[a] + &quot;Width&quot;, !0, i));&#x000A;        return !r &amp;&amp; 0 &lt;= o &amp;&amp; (u += Math.max(0, Math.ceil(e[&quot;offset&quot; + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u&#x000A;    }&#x000A;&#x000A;    function Je(e, t, n) {&#x000A;        var r = Re(e), i = (!y.boxSizingReliable() || n) &amp;&amp; &quot;border-box&quot; === S.css(e, &quot;boxSizing&quot;, !1, r), o = i, a = We(e, t, r), s = &quot;offset&quot; + t[0].toUpperCase() + t.slice(1);&#x000A;        if (Pe.test(a)) {&#x000A;            if (!n) return a;&#x000A;            a = &quot;auto&quot;&#x000A;        }&#x000A;        return (!y.boxSizingReliable() &amp;&amp; i || !y.reliableTrDimensions() &amp;&amp; A(e, &quot;tr&quot;) || &quot;auto&quot; === a || !parseFloat(a) &amp;&amp; &quot;inline&quot; === S.css(e, &quot;display&quot;, !1, r)) &amp;&amp; e.getClientRects().length &amp;&amp; (i = &quot;border-box&quot; === S.css(e, &quot;boxSizing&quot;, !1, r), (o = s in e) &amp;&amp; (a = e[s])), (a = parseFloat(a) || 0) + Qe(e, t, n || (i ? &quot;border&quot; : &quot;content&quot;), o, r, a) + &quot;px&quot;&#x000A;    }&#x000A;&#x000A;    function Ke(e, t, n, r, i) {&#x000A;        return new Ke.prototype.init(e, t, n, r, i)&#x000A;    }&#x000A;&#x000A;    S.extend({&#x000A;        cssHooks: {&#x000A;            opacity: {&#x000A;                get: function (e, t) {&#x000A;                    if (t) {&#x000A;                        var n = We(e, &quot;opacity&quot;);&#x000A;                        return &quot;&quot; === n ? &quot;1&quot; : n&#x000A;                    }&#x000A;                }&#x000A;            }&#x000A;        }, cssNumber: {animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, gridArea: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnStart: !0, gridRow: !0, gridRowEnd: !0, gridRowStart: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0}, cssProps: {}, style: function (e, t, n, r) {&#x000A;            if (e &amp;&amp; 3 !== e.nodeType &amp;&amp; 8 !== e.nodeType &amp;&amp; e.style) {&#x000A;                var i, o, a, s = X(t), u = Xe.test(t), l = e.style;&#x000A;                if (u || (t = ze(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a &amp;&amp; &quot;get&quot; in a &amp;&amp; void 0 !== (i = a.get(e, !1, r)) ? i : l[t];&#x000A;                &quot;string&quot; === (o = typeof n) &amp;&amp; (i = te.exec(n)) &amp;&amp; i[1] &amp;&amp; (n = se(e, t, i), o = &quot;number&quot;), null != n &amp;&amp; n == n &amp;&amp; (&quot;number&quot; !== o || u || (n += i &amp;&amp; i[3] || (S.cssNumber[s] ? &quot;&quot; : &quot;px&quot;)), y.clearCloneStyle || &quot;&quot; !== n || 0 !== t.indexOf(&quot;background&quot;) || (l[t] = &quot;inherit&quot;), a &amp;&amp; &quot;set&quot; in a &amp;&amp; void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))&#x000A;            }&#x000A;        }, css: function (e, t, n, r) {&#x000A;            var i, o, a, s = X(t);&#x000A;            return Xe.test(t) || (t = ze(s)), (a = S.cssHooks[t] || S.cssHooks[s]) &amp;&amp; &quot;get&quot; in a &amp;&amp; (i = a.get(e, !0, n)), void 0 === i &amp;&amp; (i = We(e, t, r)), &quot;normal&quot; === i &amp;&amp; t in Ge &amp;&amp; (i = Ge[t]), &quot;&quot; === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i&#x000A;        }&#x000A;    }), S.each([&quot;height&quot;, &quot;width&quot;], function (e, u) {&#x000A;        S.cssHooks[u] = {&#x000A;            get: function (e, t, n) {&#x000A;                if (t) return !Ue.test(S.css(e, &quot;display&quot;)) || e.getClientRects().length &amp;&amp; e.getBoundingClientRect().width ? Je(e, u, n) : Me(e, Ve, function () {&#x000A;                    return Je(e, u, n)&#x000A;                })&#x000A;            }, set: function (e, t, n) {&#x000A;                var r, i = Re(e), o = !y.scrollboxSize() &amp;&amp; &quot;absolute&quot; === i.position, a = (o || n) &amp;&amp; &quot;border-box&quot; === S.css(e, &quot;boxSizing&quot;, !1, i), s = n ? Qe(e, u, n, a, i) : 0;&#x000A;                return a &amp;&amp; o &amp;&amp; (s -= Math.ceil(e[&quot;offset&quot; + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Qe(e, u, &quot;border&quot;, !1, i) - .5)), s &amp;&amp; (r = te.exec(t)) &amp;&amp; &quot;px&quot; !== (r[3] || &quot;px&quot;) &amp;&amp; (e.style[u] = t, t = S.css(e, u)), Ye(0, t, s)&#x000A;            }&#x000A;        }&#x000A;    }), S.cssHooks.marginLeft = Fe(y.reliableMarginLeft, function (e, t) {&#x000A;        if (t) return (parseFloat(We(e, &quot;marginLeft&quot;)) || e.getBoundingClientRect().left - Me(e, {marginLeft: 0}, function () {&#x000A;            return e.getBoundingClientRect().left&#x000A;        })) + &quot;px&quot;&#x000A;    }), S.each({margin: &quot;&quot;, padding: &quot;&quot;, border: &quot;Width&quot;}, function (i, o) {&#x000A;        S.cssHooks[i + o] = {&#x000A;            expand: function (e) {&#x000A;                for (var t = 0, n = {}, r = &quot;string&quot; == typeof e ? e.split(&quot; &quot;) : [e]; t &lt; 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];&#x000A;                return n&#x000A;            }&#x000A;        }, &quot;margin&quot; !== i &amp;&amp; (S.cssHooks[i + o].set = Ye)&#x000A;    }), S.fn.extend({&#x000A;        css: function (e, t) {&#x000A;            return $(this, function (e, t, n) {&#x000A;                var r, i, o = {}, a = 0;&#x000A;                if (Array.isArray(t)) {&#x000A;                    for (r = Re(e), i = t.length; a &lt; i; a++) o[t[a]] = S.css(e, t[a], !1, r);&#x000A;                    return o&#x000A;                }&#x000A;                return void 0 !== n ? S.style(e, t, n) : S.css(e, t)&#x000A;            }, e, t, 1 &lt; arguments.length)&#x000A;        }&#x000A;    }), ((S.Tween = Ke).prototype = {&#x000A;        constructor: Ke, init: function (e, t, n, r, i, o) {&#x000A;            this.elem = e, this.prop = n, this.easing = i || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (S.cssNumber[n] ? &quot;&quot; : &quot;px&quot;)&#x000A;        }, cur: function () {&#x000A;            var e = Ke.propHooks[this.prop];&#x000A;            return e &amp;&amp; e.get ? e.get(this) : Ke.propHooks._default.get(this)&#x000A;        }, run: function (e) {&#x000A;            var t, n = Ke.propHooks[this.prop];&#x000A;            return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step &amp;&amp; this.options.step.call(this.elem, this.now, this), n &amp;&amp; n.set ? n.set(this) : Ke.propHooks._default.set(this), this&#x000A;        }&#x000A;    }).init.prototype = Ke.prototype, (Ke.propHooks = {&#x000A;        _default: {&#x000A;            get: function (e) {&#x000A;                var t;&#x000A;                return 1 !== e.elem.nodeType || null != e.elem[e.prop] &amp;&amp; null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, &quot;&quot;)) &amp;&amp; &quot;auto&quot; !== t ? t : 0&#x000A;            }, set: function (e) {&#x000A;                S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] &amp;&amp; null == e.elem.style[ze(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit)&#x000A;            }&#x000A;        }&#x000A;    }).scrollTop = Ke.propHooks.scrollLeft = {&#x000A;        set: function (e) {&#x000A;            e.elem.nodeType &amp;&amp; e.elem.parentNode &amp;&amp; (e.elem[e.prop] = e.now)&#x000A;        }&#x000A;    }, S.easing = {&#x000A;        linear: function (e) {&#x000A;            return e&#x000A;        }, swing: function (e) {&#x000A;            return .5 - Math.cos(e * Math.PI) / 2&#x000A;        }, _default: &quot;swing&quot;&#x000A;    }, S.fx = Ke.prototype.init, S.fx.step = {};&#x000A;    var Ze, et, tt, nt, rt = /^(?:toggle|show|hide)$/, it = /queueHooks$/;&#x000A;&#x000A;    function ot() {&#x000A;        et &amp;&amp; (!1 === E.hidden &amp;&amp; C.requestAnimationFrame ? C.requestAnimationFrame(ot) : C.setTimeout(ot, S.fx.interval), S.fx.tick())&#x000A;    }&#x000A;&#x000A;    function at() {&#x000A;        return C.setTimeout(function () {&#x000A;            Ze = void 0&#x000A;        }), Ze = Date.now()&#x000A;    }&#x000A;&#x000A;    function st(e, t) {&#x000A;        var n, r = 0, i = {height: e};&#x000A;        for (t = t ? 1 : 0; r &lt; 4; r += 2 - t) i[&quot;margin&quot; + (n = ne[r])] = i[&quot;padding&quot; + n] = e;&#x000A;        return t &amp;&amp; (i.opacity = i.width = e), i&#x000A;    }&#x000A;&#x000A;    function ut(e, t, n) {&#x000A;        for (var r, i = (lt.tweeners[t] || []).concat(lt.tweeners[&quot;*&quot;]), o = 0, a = i.length; o &lt; a; o++) if (r = i[o].call(n, t, e)) return r&#x000A;    }&#x000A;&#x000A;    function lt(o, e, t) {&#x000A;        var n, a, r = 0, i = lt.prefilters.length, s = S.Deferred().always(function () {&#x000A;            delete u.elem&#x000A;        }), u = function () {&#x000A;            if (a) return !1;&#x000A;            for (var e = Ze || at(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r &lt; i; r++) l.tweens[r].run(n);&#x000A;            return s.notifyWith(o, [l, n, t]), n &lt; 1 &amp;&amp; i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)&#x000A;        }, l = s.promise({&#x000A;            elem: o, props: S.extend({}, e), opts: S.extend(!0, {specialEasing: {}, easing: S.easing._default}, t), originalProperties: e, originalOptions: t, startTime: Ze || at(), duration: t.duration, tweens: [], createTween: function (e, t) {&#x000A;                var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);&#x000A;                return l.tweens.push(n), n&#x000A;            }, stop: function (e) {&#x000A;                var t = 0, n = e ? l.tweens.length : 0;&#x000A;                if (a) return this;&#x000A;                for (a = !0; t &lt; n; t++) l.tweens[t].run(1);&#x000A;                return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this&#x000A;            }&#x000A;        }), c = l.props;&#x000A;        for (!function (e, t) {&#x000A;            var n, r, i, o, a;&#x000A;            for (n in e) if (i = t[r = X(n)], o = e[n], Array.isArray(o) &amp;&amp; (i = o[1], o = e[n] = o[0]), n !== r &amp;&amp; (e[r] = o, delete e[n]), (a = S.cssHooks[r]) &amp;&amp; &quot;expand&quot; in a) for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i); else t[r] = i&#x000A;        }(c, l.opts.specialEasing); r &lt; i; r++) if (n = lt.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) &amp;&amp; (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;&#x000A;        return S.map(c, ut, l), m(l.opts.start) &amp;&amp; l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), S.fx.timer(S.extend(u, {elem: o, anim: l, queue: l.opts.queue})), l&#x000A;    }&#x000A;&#x000A;    S.Animation = S.extend(lt, {&#x000A;        tweeners: {&#x000A;            &quot;*&quot;: [function (e, t) {&#x000A;                var n = this.createTween(e, t);&#x000A;                return se(n.elem, e, te.exec(t), n), n&#x000A;            }]&#x000A;        }, tweener: function (e, t) {&#x000A;            m(e) ? (t = e, e = [&quot;*&quot;]) : e = e.match(P);&#x000A;            for (var n, r = 0, i = e.length; r &lt; i; r++) n = e[r], lt.tweeners[n] = lt.tweeners[n] || [], lt.tweeners[n].unshift(t)&#x000A;        }, prefilters: [function (e, t, n) {&#x000A;            var r, i, o, a, s, u, l, c, f = &quot;width&quot; in t || &quot;height&quot; in t, p = this, d = {}, h = e.style, g = e.nodeType &amp;&amp; ae(e), v = Y.get(e, &quot;fxshow&quot;);&#x000A;            for (r in n.queue || (null == (a = S._queueHooks(e, &quot;fx&quot;)).unqueued &amp;&amp; (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {&#x000A;                a.unqueued || s()&#x000A;            }), a.unqueued++, p.always(function () {&#x000A;                p.always(function () {&#x000A;                    a.unqueued--, S.queue(e, &quot;fx&quot;).length || a.empty.fire()&#x000A;                })&#x000A;            })), t) if (i = t[r], rt.test(i)) {&#x000A;                if (delete t[r], o = o || &quot;toggle&quot; === i, i === (g ? &quot;hide&quot; : &quot;show&quot;)) {&#x000A;                    if (&quot;show&quot; !== i || !v || void 0 === v[r]) continue;&#x000A;                    g = !0&#x000A;                }&#x000A;                d[r] = v &amp;&amp; v[r] || S.style(e, r)&#x000A;            }&#x000A;            if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d)) for (r in f &amp;&amp; 1 === e.nodeType &amp;&amp; (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v &amp;&amp; v.display) &amp;&amp; (l = Y.get(e, &quot;display&quot;)), &quot;none&quot; === (c = S.css(e, &quot;display&quot;)) &amp;&amp; (l ? c = l : (le([e], !0), l = e.style.display || l, c = S.css(e, &quot;display&quot;), le([e]))), (&quot;inline&quot; === c || &quot;inline-block&quot; === c &amp;&amp; null != l) &amp;&amp; &quot;none&quot; === S.css(e, &quot;float&quot;) &amp;&amp; (u || (p.done(function () {&#x000A;                h.display = l&#x000A;            }), null == l &amp;&amp; (c = h.display, l = &quot;none&quot; === c ? &quot;&quot; : c)), h.display = &quot;inline-block&quot;)), n.overflow &amp;&amp; (h.overflow = &quot;hidden&quot;, p.always(function () {&#x000A;                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]&#x000A;            })), u = !1, d) u || (v ? &quot;hidden&quot; in v &amp;&amp; (g = v.hidden) : v = Y.access(e, &quot;fxshow&quot;, {display: l}), o &amp;&amp; (v.hidden = !g), g &amp;&amp; le([e], !0), p.done(function () {&#x000A;                for (r in g || le([e]), Y.remove(e, &quot;fxshow&quot;), d) S.style(e, r, d[r])&#x000A;            })), u = ut(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g &amp;&amp; (u.end = u.start, u.start = 0))&#x000A;        }], prefilter: function (e, t) {&#x000A;            t ? lt.prefilters.unshift(e) : lt.prefilters.push(e)&#x000A;        }&#x000A;    }), S.speed = function (e, t, n) {&#x000A;        var r = e &amp;&amp; &quot;object&quot; == typeof e ? S.extend({}, e) : {complete: n || !n &amp;&amp; t || m(e) &amp;&amp; e, duration: e, easing: n &amp;&amp; t || t &amp;&amp; !m(t) &amp;&amp; t};&#x000A;        return S.fx.off ? r.duration = 0 : &quot;number&quot; != typeof r.duration &amp;&amp; (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), null != r.queue &amp;&amp; !0 !== r.queue || (r.queue = &quot;fx&quot;), r.old = r.complete, r.complete = function () {&#x000A;            m(r.old) &amp;&amp; r.old.call(this), r.queue &amp;&amp; S.dequeue(this, r.queue)&#x000A;        }, r&#x000A;    }, S.fn.extend({&#x000A;        fadeTo: function (e, t, n, r) {&#x000A;            return this.filter(ae).css(&quot;opacity&quot;, 0).show().end().animate({opacity: t}, e, n, r)&#x000A;        }, animate: function (t, e, n, r) {&#x000A;            var i = S.isEmptyObject(t), o = S.speed(e, n, r), a = function () {&#x000A;                var e = lt(this, S.extend({}, t), o);&#x000A;                (i || Y.get(this, &quot;finish&quot;)) &amp;&amp; e.stop(!0)&#x000A;            };&#x000A;            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)&#x000A;        }, stop: function (i, e, o) {&#x000A;            var a = function (e) {&#x000A;                var t = e.stop;&#x000A;                delete e.stop, t(o)&#x000A;            };&#x000A;            return &quot;string&quot; != typeof i &amp;&amp; (o = e, e = i, i = void 0), e &amp;&amp; this.queue(i || &quot;fx&quot;, []), this.each(function () {&#x000A;                var e = !0, t = null != i &amp;&amp; i + &quot;queueHooks&quot;, n = S.timers, r = Y.get(this);&#x000A;                if (t) r[t] &amp;&amp; r[t].stop &amp;&amp; a(r[t]); else for (t in r) r[t] &amp;&amp; r[t].stop &amp;&amp; it.test(t) &amp;&amp; a(r[t]);&#x000A;                for (t = n.length; t--;) n[t].elem !== this || null != i &amp;&amp; n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));&#x000A;                !e &amp;&amp; o || S.dequeue(this, i)&#x000A;            })&#x000A;        }, finish: function (a) {&#x000A;            return !1 !== a &amp;&amp; (a = a || &quot;fx&quot;), this.each(function () {&#x000A;                var e, t = Y.get(this), n = t[a + &quot;queue&quot;], r = t[a + &quot;queueHooks&quot;], i = S.timers, o = n ? n.length : 0;&#x000A;                for (t.finish = !0, S.queue(this, a, []), r &amp;&amp; r.stop &amp;&amp; r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this &amp;&amp; i[e].queue === a &amp;&amp; (i[e].anim.stop(!0), i.splice(e, 1));&#x000A;                for (e = 0; e &lt; o; e++) n[e] &amp;&amp; n[e].finish &amp;&amp; n[e].finish.call(this);&#x000A;                delete t.finish&#x000A;            })&#x000A;        }&#x000A;    }), S.each([&quot;toggle&quot;, &quot;show&quot;, &quot;hide&quot;], function (e, r) {&#x000A;        var i = S.fn[r];&#x000A;        S.fn[r] = function (e, t, n) {&#x000A;            return null == e || &quot;boolean&quot; == typeof e ? i.apply(this, arguments) : this.animate(st(r, !0), e, t, n)&#x000A;        }&#x000A;    }), S.each({slideDown: st(&quot;show&quot;), slideUp: st(&quot;hide&quot;), slideToggle: st(&quot;toggle&quot;), fadeIn: {opacity: &quot;show&quot;}, fadeOut: {opacity: &quot;hide&quot;}, fadeToggle: {opacity: &quot;toggle&quot;}}, function (e, r) {&#x000A;        S.fn[e] = function (e, t, n) {&#x000A;            return this.animate(r, e, t, n)&#x000A;        }&#x000A;    }), S.timers = [], S.fx.tick = function () {&#x000A;        var e, t = 0, n = S.timers;&#x000A;        for (Ze = Date.now(); t &lt; n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);&#x000A;        n.length || S.fx.stop(), Ze = void 0&#x000A;    }, S.fx.timer = function (e) {&#x000A;        S.timers.push(e), S.fx.start()&#x000A;    }, S.fx.interval = 13, S.fx.start = function () {&#x000A;        et || (et = !0, ot())&#x000A;    }, S.fx.stop = function () {&#x000A;        et = null&#x000A;    }, S.fx.speeds = {slow: 600, fast: 200, _default: 400}, S.fn.delay = function (r, e) {&#x000A;        return r = S.fx &amp;&amp; S.fx.speeds[r] || r, e = e || &quot;fx&quot;, this.queue(e, function (e, t) {&#x000A;            var n = C.setTimeout(e, r);&#x000A;            t.stop = function () {&#x000A;                C.clearTimeout(n)&#x000A;            }&#x000A;        })&#x000A;    }, tt = E.createElement(&quot;input&quot;), nt = E.createElement(&quot;select&quot;).appendChild(E.createElement(&quot;option&quot;)), tt.type = &quot;checkbox&quot;, y.checkOn = &quot;&quot; !== tt.value, y.optSelected = nt.selected, (tt = E.createElement(&quot;input&quot;)).value = &quot;t&quot;, tt.type = &quot;radio&quot;, y.radioValue = &quot;t&quot; === tt.value;&#x000A;    var ct, ft = S.expr.attrHandle;&#x000A;    S.fn.extend({&#x000A;        attr: function (e, t) {&#x000A;            return $(this, S.attr, e, t, 1 &lt; arguments.length)&#x000A;        }, removeAttr: function (e) {&#x000A;            return this.each(function () {&#x000A;                S.removeAttr(this, e)&#x000A;            })&#x000A;        }&#x000A;    }), S.extend({&#x000A;        attr: function (e, t, n) {&#x000A;            var r, i, o = e.nodeType;&#x000A;            if (3 !== o &amp;&amp; 8 !== o &amp;&amp; 2 !== o) return &quot;undefined&quot; == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o &amp;&amp; S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? ct : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : i &amp;&amp; &quot;set&quot; in i &amp;&amp; void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + &quot;&quot;), n) : i &amp;&amp; &quot;get&quot; in i &amp;&amp; null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r)&#x000A;        }, attrHooks: {&#x000A;            type: {&#x000A;                set: function (e, t) {&#x000A;                    if (!y.radioValue &amp;&amp; &quot;radio&quot; === t &amp;&amp; A(e, &quot;input&quot;)) {&#x000A;                        var n = e.value;&#x000A;                        return e.setAttribute(&quot;type&quot;, t), n &amp;&amp; (e.value = n), t&#x000A;                    }&#x000A;                }&#x000A;            }&#x000A;        }, removeAttr: function (e, t) {&#x000A;            var n, r = 0, i = t &amp;&amp; t.match(P);&#x000A;            if (i &amp;&amp; 1 === e.nodeType) while (n = i[r++]) e.removeAttribute(n)&#x000A;        }&#x000A;    }), ct = {&#x000A;        set: function (e, t, n) {&#x000A;            return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n&#x000A;        }&#x000A;    }, S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {&#x000A;        var a = ft[t] || S.find.attr;&#x000A;        ft[t] = function (e, t, n) {&#x000A;            var r, i, o = t.toLowerCase();&#x000A;            return n || (i = ft[o], ft[o] = r, r = null != a(e, t, n) ? o : null, ft[o] = i), r&#x000A;        }&#x000A;    });&#x000A;    var pt = /^(?:input|select|textarea|button)$/i, dt = /^(?:a|area)$/i;&#x000A;&#x000A;    function ht(e) {&#x000A;        return (e.match(P) || []).join(&quot; &quot;)&#x000A;    }&#x000A;&#x000A;    function gt(e) {&#x000A;        return e.getAttribute &amp;&amp; e.getAttribute(&quot;class&quot;) || &quot;&quot;&#x000A;    }&#x000A;&#x000A;    function vt(e) {&#x000A;        return Array.isArray(e) ? e : &quot;string&quot; == typeof e &amp;&amp; e.match(P) || []&#x000A;    }&#x000A;&#x000A;    S.fn.extend({&#x000A;        prop: function (e, t) {&#x000A;            return $(this, S.prop, e, t, 1 &lt; arguments.length)&#x000A;        }, removeProp: function (e) {&#x000A;            return this.each(function () {&#x000A;                delete this[S.propFix[e] || e]&#x000A;            })&#x000A;        }&#x000A;    }), S.extend({&#x000A;        prop: function (e, t, n) {&#x000A;            var r, i, o = e.nodeType;&#x000A;            if (3 !== o &amp;&amp; 8 !== o &amp;&amp; 2 !== o) return 1 === o &amp;&amp; S.isXMLDoc(e) || (t = S.propFix[t] || t, i = S.propHooks[t]), void 0 !== n ? i &amp;&amp; &quot;set&quot; in i &amp;&amp; void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i &amp;&amp; &quot;get&quot; in i &amp;&amp; null !== (r = i.get(e, t)) ? r : e[t]&#x000A;        }, propHooks: {&#x000A;            tabIndex: {&#x000A;                get: function (e) {&#x000A;                    var t = S.find.attr(e, &quot;tabindex&quot;);&#x000A;                    return t ? parseInt(t, 10) : pt.test(e.nodeName) || dt.test(e.nodeName) &amp;&amp; e.href ? 0 : -1&#x000A;                }&#x000A;            }&#x000A;        }, propFix: {&quot;for&quot;: &quot;htmlFor&quot;, &quot;class&quot;: &quot;className&quot;}&#x000A;    }), y.optSelected || (S.propHooks.selected = {&#x000A;        get: function (e) {&#x000A;            var t = e.parentNode;&#x000A;            return t &amp;&amp; t.parentNode &amp;&amp; t.parentNode.selectedIndex, null&#x000A;        }, set: function (e) {&#x000A;            var t = e.parentNode;&#x000A;            t &amp;&amp; (t.selectedIndex, t.parentNode &amp;&amp; t.parentNode.selectedIndex)&#x000A;        }&#x000A;    }), S.each([&quot;tabIndex&quot;, &quot;readOnly&quot;, &quot;maxLength&quot;, &quot;cellSpacing&quot;, &quot;cellPadding&quot;, &quot;rowSpan&quot;, &quot;colSpan&quot;, &quot;useMap&quot;, &quot;frameBorder&quot;, &quot;contentEditable&quot;], function () {&#x000A;        S.propFix[this.toLowerCase()] = this&#x000A;    }), S.fn.extend({&#x000A;        addClass: function (t) {&#x000A;            var e, n, r, i, o, a, s, u = 0;&#x000A;            if (m(t)) return this.each(function (e) {&#x000A;                S(this).addClass(t.call(this, e, gt(this)))&#x000A;            });&#x000A;            if ((e = vt(t)).length) while (n = this[u++]) if (i = gt(n), r = 1 === n.nodeType &amp;&amp; &quot; &quot; + ht(i) + &quot; &quot;) {&#x000A;                a = 0;&#x000A;                while (o = e[a++]) r.indexOf(&quot; &quot; + o + &quot; &quot;) &lt; 0 &amp;&amp; (r += o + &quot; &quot;);&#x000A;                i !== (s = ht(r)) &amp;&amp; n.setAttribute(&quot;class&quot;, s)&#x000A;            }&#x000A;            return this&#x000A;        }, removeClass: function (t) {&#x000A;            var e, n, r, i, o, a, s, u = 0;&#x000A;            if (m(t)) return this.each(function (e) {&#x000A;                S(this).removeClass(t.call(this, e, gt(this)))&#x000A;            });&#x000A;            if (!arguments.length) return this.attr(&quot;class&quot;, &quot;&quot;);&#x000A;            if ((e = vt(t)).length) while (n = this[u++]) if (i = gt(n), r = 1 === n.nodeType &amp;&amp; &quot; &quot; + ht(i) + &quot; &quot;) {&#x000A;                a = 0;&#x000A;                while (o = e[a++]) while (-1 &lt; r.indexOf(&quot; &quot; + o + &quot; &quot;)) r = r.replace(&quot; &quot; + o + &quot; &quot;, &quot; &quot;);&#x000A;                i !== (s = ht(r)) &amp;&amp; n.setAttribute(&quot;class&quot;, s)&#x000A;            }&#x000A;            return this&#x000A;        }, toggleClass: function (i, t) {&#x000A;            var o = typeof i, a = &quot;string&quot; === o || Array.isArray(i);&#x000A;            return &quot;boolean&quot; == typeof t &amp;&amp; a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function (e) {&#x000A;                S(this).toggleClass(i.call(this, e, gt(this), t), t)&#x000A;            }) : this.each(function () {&#x000A;                var e, t, n, r;&#x000A;                if (a) {&#x000A;                    t = 0, n = S(this), r = vt(i);&#x000A;                    while (e = r[t++]) n.hasClass(e) ? n.removeClass(e) : n.addClass(e)&#x000A;                } else void 0 !== i &amp;&amp; &quot;boolean&quot; !== o || ((e = gt(this)) &amp;&amp; Y.set(this, &quot;__className__&quot;, e), this.setAttribute &amp;&amp; this.setAttribute(&quot;class&quot;, e || !1 === i ? &quot;&quot; : Y.get(this, &quot;__className__&quot;) || &quot;&quot;))&#x000A;            })&#x000A;        }, hasClass: function (e) {&#x000A;            var t, n, r = 0;&#x000A;            t = &quot; &quot; + e + &quot; &quot;;&#x000A;            while (n = this[r++]) if (1 === n.nodeType &amp;&amp; -1 &lt; (&quot; &quot; + ht(gt(n)) + &quot; &quot;).indexOf(t)) return !0;&#x000A;            return !1&#x000A;        }&#x000A;    });&#x000A;    var yt = /\r/g;&#x000A;    S.fn.extend({&#x000A;        val: function (n) {&#x000A;            var r, e, i, t = this[0];&#x000A;            return arguments.length ? (i = m(n), this.each(function (e) {&#x000A;                var t;&#x000A;                1 === this.nodeType &amp;&amp; (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = &quot;&quot; : &quot;number&quot; == typeof t ? t += &quot;&quot; : Array.isArray(t) &amp;&amp; (t = S.map(t, function (e) {&#x000A;                    return null == e ? &quot;&quot; : e + &quot;&quot;&#x000A;                })), (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) &amp;&amp; &quot;set&quot; in r &amp;&amp; void 0 !== r.set(this, t, &quot;value&quot;) || (this.value = t))&#x000A;            })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) &amp;&amp; &quot;get&quot; in r &amp;&amp; void 0 !== (e = r.get(t, &quot;value&quot;)) ? e : &quot;string&quot; == typeof (e = t.value) ? e.replace(yt, &quot;&quot;) : null == e ? &quot;&quot; : e : void 0&#x000A;        }&#x000A;    }), S.extend({&#x000A;        valHooks: {&#x000A;            option: {&#x000A;                get: function (e) {&#x000A;                    var t = S.find.attr(e, &quot;value&quot;);&#x000A;                    return null != t ? t : ht(S.text(e))&#x000A;                }&#x000A;            }, select: {&#x000A;                get: function (e) {&#x000A;                    var t, n, r, i = e.options, o = e.selectedIndex, a = &quot;select-one&quot; === e.type, s = a ? null : [], u = a ? o + 1 : i.length;&#x000A;                    for (r = o &lt; 0 ? u : a ? o : 0; r &lt; u; r++) if (((n = i[r]).selected || r === o) &amp;&amp; !n.disabled &amp;&amp; (!n.parentNode.disabled || !A(n.parentNode, &quot;optgroup&quot;))) {&#x000A;                        if (t = S(n).val(), a) return t;&#x000A;                        s.push(t)&#x000A;                    }&#x000A;                    return s&#x000A;                }, set: function (e, t) {&#x000A;                    var n, r, i = e.options, o = S.makeArray(t), a = i.length;&#x000A;                    while (a--) ((r = i[a]).selected = -1 &lt; S.inArray(S.valHooks.option.get(r), o)) &amp;&amp; (n = !0);&#x000A;                    return n || (e.selectedIndex = -1), o&#x000A;                }&#x000A;            }&#x000A;        }&#x000A;    }), S.each([&quot;radio&quot;, &quot;checkbox&quot;], function () {&#x000A;        S.valHooks[this] = {&#x000A;            set: function (e, t) {&#x000A;                if (Array.isArray(t)) return e.checked = -1 &lt; S.inArray(S(e).val(), t)&#x000A;            }&#x000A;        }, y.checkOn || (S.valHooks[this].get = function (e) {&#x000A;            return null === e.getAttribute(&quot;value&quot;) ? &quot;on&quot; : e.value&#x000A;        })&#x000A;    }), y.focusin = &quot;onfocusin&quot; in C;&#x000A;    var mt = /^(?:focusinfocus|focusoutblur)$/, xt = function (e) {&#x000A;        e.stopPropagation()&#x000A;    };&#x000A;    S.extend(S.event, {&#x000A;        trigger: function (e, t, n, r) {&#x000A;            var i, o, a, s, u, l, c, f, p = [n || E], d = v.call(e, &quot;type&quot;) ? e.type : e, h = v.call(e, &quot;namespace&quot;) ? e.namespace.split(&quot;.&quot;) : [];&#x000A;            if (o = f = a = n = n || E, 3 !== n.nodeType &amp;&amp; 8 !== n.nodeType &amp;&amp; !mt.test(d + S.event.triggered) &amp;&amp; (-1 &lt; d.indexOf(&quot;.&quot;) &amp;&amp; (d = (h = d.split(&quot;.&quot;)).shift(), h.sort()), u = d.indexOf(&quot;:&quot;) &lt; 0 &amp;&amp; &quot;on&quot; + d, (e = e[S.expando] ? e : new S.Event(d, &quot;object&quot; == typeof e &amp;&amp; e)).isTrigger = r ? 2 : 3, e.namespace = h.join(&quot;.&quot;), e.rnamespace = e.namespace ? new RegExp(&quot;(^|\\.)&quot; + h.join(&quot;\\.(?:.*\\.|)&quot;) + &quot;(\\.|$)&quot;) : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), c = S.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {&#x000A;                if (!r &amp;&amp; !c.noBubble &amp;&amp; !x(n)) {&#x000A;                    for (s = c.delegateType || d, mt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;&#x000A;                    a === (n.ownerDocument || E) &amp;&amp; p.push(a.defaultView || a.parentWindow || C)&#x000A;                }&#x000A;                i = 0;&#x000A;                while ((o = p[i++]) &amp;&amp; !e.isPropagationStopped()) f = o, e.type = 1 &lt; i ? s : c.bindType || d, (l = (Y.get(o, &quot;events&quot;) || Object.create(null))[e.type] &amp;&amp; Y.get(o, &quot;handle&quot;)) &amp;&amp; l.apply(o, t), (l = u &amp;&amp; o[u]) &amp;&amp; l.apply &amp;&amp; V(o) &amp;&amp; (e.result = l.apply(o, t), !1 === e.result &amp;&amp; e.preventDefault());&#x000A;                return e.type = d, r || e.isDefaultPrevented() || c._default &amp;&amp; !1 !== c._default.apply(p.pop(), t) || !V(n) || u &amp;&amp; m(n[d]) &amp;&amp; !x(n) &amp;&amp; ((a = n[u]) &amp;&amp; (n[u] = null), S.event.triggered = d, e.isPropagationStopped() &amp;&amp; f.addEventListener(d, xt), n[d](), e.isPropagationStopped() &amp;&amp; f.removeEventListener(d, xt), S.event.triggered = void 0, a &amp;&amp; (n[u] = a)), e.result&#x000A;            }&#x000A;        }, simulate: function (e, t, n) {&#x000A;            var r = S.extend(new S.Event, n, {type: e, isSimulated: !0});&#x000A;            S.event.trigger(r, null, t)&#x000A;        }&#x000A;    }), S.fn.extend({&#x000A;        trigger: function (e, t) {&#x000A;            return this.each(function () {&#x000A;                S.event.trigger(e, t, this)&#x000A;            })&#x000A;        }, triggerHandler: function (e, t) {&#x000A;            var n = this[0];&#x000A;            if (n) return S.event.trigger(e, t, n, !0)&#x000A;        }&#x000A;    }), y.focusin || S.each({focus: &quot;focusin&quot;, blur: &quot;focusout&quot;}, function (n, r) {&#x000A;        var i = function (e) {&#x000A;            S.event.simulate(r, e.target, S.event.fix(e))&#x000A;        };&#x000A;        S.event.special[r] = {&#x000A;            setup: function () {&#x000A;                var e = this.ownerDocument || this.document || this, t = Y.access(e, r);&#x000A;                t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1)&#x000A;            }, teardown: function () {&#x000A;                var e = this.ownerDocument || this.document || this, t = Y.access(e, r) - 1;&#x000A;                t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r))&#x000A;            }&#x000A;        }&#x000A;    });&#x000A;    var bt = C.location, wt = {guid: Date.now()}, Tt = /\?/;&#x000A;    S.parseXML = function (e) {&#x000A;        var t, n;&#x000A;        if (!e || &quot;string&quot; != typeof e) return null;&#x000A;        try {&#x000A;            t = (new C.DOMParser).parseFromString(e, &quot;text/xml&quot;)&#x000A;        } catch (e) {&#x000A;        }&#x000A;        return n = t &amp;&amp; t.getElementsByTagName(&quot;parsererror&quot;)[0], t &amp;&amp; !n || S.error(&quot;Invalid XML: &quot; + (n ? S.map(n.childNodes, function (e) {&#x000A;            return e.textContent&#x000A;        }).join(&quot;\n&quot;) : e)), t&#x000A;    };&#x000A;    var Ct = /\[\]$/, Et = /\r?\n/g, St = /^(?:submit|button|image|reset|file)$/i, kt = /^(?:input|select|textarea|keygen)/i;&#x000A;&#x000A;    function At(n, e, r, i) {&#x000A;        var t;&#x000A;        if (Array.isArray(e)) S.each(e, function (e, t) {&#x000A;            r || Ct.test(n) ? i(n, t) : At(n + &quot;[&quot; + (&quot;object&quot; == typeof t &amp;&amp; null != t ? e : &quot;&quot;) + &quot;]&quot;, t, r, i)&#x000A;        }); else if (r || &quot;object&quot; !== w(e)) i(n, e); else for (t in e) At(n + &quot;[&quot; + t + &quot;]&quot;, e[t], r, i)&#x000A;    }&#x000A;&#x000A;    S.param = function (e, t) {&#x000A;        var n, r = [], i = function (e, t) {&#x000A;            var n = m(t) ? t() : t;&#x000A;            r[r.length] = encodeURIComponent(e) + &quot;=&quot; + encodeURIComponent(null == n ? &quot;&quot; : n)&#x000A;        };&#x000A;        if (null == e) return &quot;&quot;;&#x000A;        if (Array.isArray(e) || e.jquery &amp;&amp; !S.isPlainObject(e)) S.each(e, function () {&#x000A;            i(this.name, this.value)&#x000A;        }); else for (n in e) At(n, e[n], t, i);&#x000A;        return r.join(&quot;&amp;&quot;)&#x000A;    }, S.fn.extend({&#x000A;        serialize: function () {&#x000A;            return S.param(this.serializeArray())&#x000A;        }, serializeArray: function () {&#x000A;            return this.map(function () {&#x000A;                var e = S.prop(this, &quot;elements&quot;);&#x000A;                return e ? S.makeArray(e) : this&#x000A;            }).filter(function () {&#x000A;                var e = this.type;&#x000A;                return this.name &amp;&amp; !S(this).is(&quot;:disabled&quot;) &amp;&amp; kt.test(this.nodeName) &amp;&amp; !St.test(e) &amp;&amp; (this.checked || !pe.test(e))&#x000A;            }).map(function (e, t) {&#x000A;                var n = S(this).val();&#x000A;                return null == n ? null : Array.isArray(n) ? S.map(n, function (e) {&#x000A;                    return {name: t.name, value: e.replace(Et, &quot;\r\n&quot;)}&#x000A;                }) : {name: t.name, value: n.replace(Et, &quot;\r\n&quot;)}&#x000A;            }).get()&#x000A;        }&#x000A;    });&#x000A;    var Nt = /%20/g, jt = /#.*$/, Dt = /([?&amp;])_=[^&amp;]*/, qt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Lt = /^(?:GET|HEAD)$/, Ht = /^\/\//, Ot = {}, Pt = {}, Rt = &quot;*/&quot;.concat(&quot;*&quot;), Mt = E.createElement(&quot;a&quot;);&#x000A;&#x000A;    function It(o) {&#x000A;        return function (e, t) {&#x000A;            &quot;string&quot; != typeof e &amp;&amp; (t = e, e = &quot;*&quot;);&#x000A;            var n, r = 0, i = e.toLowerCase().match(P) || [];&#x000A;            if (m(t)) while (n = i[r++]) &quot;+&quot; === n[0] ? (n = n.slice(1) || &quot;*&quot;, (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)&#x000A;        }&#x000A;    }&#x000A;&#x000A;    function Wt(t, i, o, a) {&#x000A;        var s = {}, u = t === Pt;&#x000A;&#x000A;        function l(e) {&#x000A;            var r;&#x000A;            return s[e] = !0, S.each(t[e] || [], function (e, t) {&#x000A;                var n = t(i, o, a);&#x000A;                return &quot;string&quot; != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1)&#x000A;            }), r&#x000A;        }&#x000A;&#x000A;        return l(i.dataTypes[0]) || !s[&quot;*&quot;] &amp;&amp; l(&quot;*&quot;)&#x000A;    }&#x000A;&#x000A;    function Ft(e, t) {&#x000A;        var n, r, i = S.ajaxSettings.flatOptions || {};&#x000A;        for (n in t) void 0 !== t[n] &amp;&amp; ((i[n] ? e : r || (r = {}))[n] = t[n]);&#x000A;        return r &amp;&amp; S.extend(!0, e, r), e&#x000A;    }&#x000A;&#x000A;    Mt.href = bt.href, S.extend({&#x000A;        active: 0, lastModified: {}, etag: {}, ajaxSettings: {url: bt.href, type: &quot;GET&quot;, isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol), global: !0, processData: !0, async: !0, contentType: &quot;application/x-www-form-urlencoded; charset=UTF-8&quot;, accepts: {&quot;*&quot;: Rt, text: &quot;text/plain&quot;, html: &quot;text/html&quot;, xml: &quot;application/xml, text/xml&quot;, json: &quot;application/json, text/javascript&quot;}, contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/}, responseFields: {xml: &quot;responseXML&quot;, text: &quot;responseText&quot;, json: &quot;responseJSON&quot;}, converters: {&quot;* text&quot;: String, &quot;text html&quot;: !0, &quot;text json&quot;: JSON.parse, &quot;text xml&quot;: S.parseXML}, flatOptions: {url: !0, context: !0}}, ajaxSetup: function (e, t) {&#x000A;            return t ? Ft(Ft(e, S.ajaxSettings), t) : Ft(S.ajaxSettings, e)&#x000A;        }, ajaxPrefilter: It(Ot), ajaxTransport: It(Pt), ajax: function (e, t) {&#x000A;            &quot;object&quot; == typeof e &amp;&amp; (t = e, e = void 0), t = t || {};&#x000A;            var c, f, p, n, d, r, h, g, i, o, v = S.ajaxSetup({}, t), y = v.context || v, m = v.context &amp;&amp; (y.nodeType || y.jquery) ? S(y) : S.event, x = S.Deferred(), b = S.Callbacks(&quot;once memory&quot;), w = v.statusCode || {}, a = {}, s = {}, u = &quot;canceled&quot;, T = {&#x000A;                readyState: 0, getResponseHeader: function (e) {&#x000A;                    var t;&#x000A;                    if (h) {&#x000A;                        if (!n) {&#x000A;                            n = {};&#x000A;                            while (t = qt.exec(p)) n[t[1].toLowerCase() + &quot; &quot;] = (n[t[1].toLowerCase() + &quot; &quot;] || []).concat(t[2])&#x000A;                        }&#x000A;                        t = n[e.toLowerCase() + &quot; &quot;]&#x000A;                    }&#x000A;                    return null == t ? null : t.join(&quot;, &quot;)&#x000A;                }, getAllResponseHeaders: function () {&#x000A;                    return h ? p : null&#x000A;                }, setRequestHeader: function (e, t) {&#x000A;                    return null == h &amp;&amp; (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this&#x000A;                }, overrideMimeType: function (e) {&#x000A;                    return null == h &amp;&amp; (v.mimeType = e), this&#x000A;                }, statusCode: function (e) {&#x000A;                    var t;&#x000A;                    if (e) if (h) T.always(e[T.status]); else for (t in e) w[t] = [w[t], e[t]];&#x000A;                    return this&#x000A;                }, abort: function (e) {&#x000A;                    var t = e || u;&#x000A;                    return c &amp;&amp; c.abort(t), l(0, t), this&#x000A;                }&#x000A;            };&#x000A;            if (x.promise(T), v.url = ((e || v.url || bt.href) + &quot;&quot;).replace(Ht, bt.protocol + &quot;//&quot;), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || &quot;*&quot;).toLowerCase().match(P) || [&quot;&quot;], null == v.crossDomain) {&#x000A;                r = E.createElement(&quot;a&quot;);&#x000A;                try {&#x000A;                    r.href = v.url, r.href = r.href, v.crossDomain = Mt.protocol + &quot;//&quot; + Mt.host != r.protocol + &quot;//&quot; + r.host&#x000A;                } catch (e) {&#x000A;                    v.crossDomain = !0&#x000A;                }&#x000A;            }&#x000A;            if (v.data &amp;&amp; v.processData &amp;&amp; &quot;string&quot; != typeof v.data &amp;&amp; (v.data = S.param(v.data, v.traditional)), Wt(Ot, v, t, T), h) return T;&#x000A;            for (i in (g = S.event &amp;&amp; v.global) &amp;&amp; 0 == S.active++ &amp;&amp; S.event.trigger(&quot;ajaxStart&quot;), v.type = v.type.toUpperCase(), v.hasContent = !Lt.test(v.type), f = v.url.replace(jt, &quot;&quot;), v.hasContent ? v.data &amp;&amp; v.processData &amp;&amp; 0 === (v.contentType || &quot;&quot;).indexOf(&quot;application/x-www-form-urlencoded&quot;) &amp;&amp; (v.data = v.data.replace(Nt, &quot;+&quot;)) : (o = v.url.slice(f.length), v.data &amp;&amp; (v.processData || &quot;string&quot; == typeof v.data) &amp;&amp; (f += (Tt.test(f) ? &quot;&amp;&quot; : &quot;?&quot;) + v.data, delete v.data), !1 === v.cache &amp;&amp; (f = f.replace(Dt, &quot;$1&quot;), o = (Tt.test(f) ? &quot;&amp;&quot; : &quot;?&quot;) + &quot;_=&quot; + wt.guid++ + o), v.url = f + o), v.ifModified &amp;&amp; (S.lastModified[f] &amp;&amp; T.setRequestHeader(&quot;If-Modified-Since&quot;, S.lastModified[f]), S.etag[f] &amp;&amp; T.setRequestHeader(&quot;If-None-Match&quot;, S.etag[f])), (v.data &amp;&amp; v.hasContent &amp;&amp; !1 !== v.contentType || t.contentType) &amp;&amp; T.setRequestHeader(&quot;Content-Type&quot;, v.contentType), T.setRequestHeader(&quot;Accept&quot;, v.dataTypes[0] &amp;&amp; v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + (&quot;*&quot; !== v.dataTypes[0] ? &quot;, &quot; + Rt + &quot;; q=0.01&quot; : &quot;&quot;) : v.accepts[&quot;*&quot;]), v.headers) T.setRequestHeader(i, v.headers[i]);&#x000A;            if (v.beforeSend &amp;&amp; (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();&#x000A;            if (u = &quot;abort&quot;, b.add(v.complete), T.done(v.success), T.fail(v.error), c = Wt(Pt, v, t, T)) {&#x000A;                if (T.readyState = 1, g &amp;&amp; m.trigger(&quot;ajaxSend&quot;, [T, v]), h) return T;&#x000A;                v.async &amp;&amp; 0 &lt; v.timeout &amp;&amp; (d = C.setTimeout(function () {&#x000A;                    T.abort(&quot;timeout&quot;)&#x000A;                }, v.timeout));&#x000A;                try {&#x000A;                    h = !1, c.send(a, l)&#x000A;                } catch (e) {&#x000A;                    if (h) throw e;&#x000A;                    l(-1, e)&#x000A;                }&#x000A;            } else l(-1, &quot;No Transport&quot;);&#x000A;&#x000A;            function l(e, t, n, r) {&#x000A;                var i, o, a, s, u, l = t;&#x000A;                h || (h = !0, d &amp;&amp; C.clearTimeout(d), c = void 0, p = r || &quot;&quot;, T.readyState = 0 &lt; e ? 4 : 0, i = 200 &lt;= e &amp;&amp; e &lt; 300 || 304 === e, n &amp;&amp; (s = function (e, t, n) {&#x000A;                    var r, i, o, a, s = e.contents, u = e.dataTypes;&#x000A;                    while (&quot;*&quot; === u[0]) u.shift(), void 0 === r &amp;&amp; (r = e.mimeType || t.getResponseHeader(&quot;Content-Type&quot;));&#x000A;                    if (r) for (i in s) if (s[i] &amp;&amp; s[i].test(r)) {&#x000A;                        u.unshift(i);&#x000A;                        break&#x000A;                    }&#x000A;                    if (u[0] in n) o = u[0]; else {&#x000A;                        for (i in n) {&#x000A;                            if (!u[0] || e.converters[i + &quot; &quot; + u[0]]) {&#x000A;                                o = i;&#x000A;                                break&#x000A;                            }&#x000A;                            a || (a = i)&#x000A;                        }&#x000A;                        o = o || a&#x000A;                    }&#x000A;                    if (o) return o !== u[0] &amp;&amp; u.unshift(o), n[o]&#x000A;                }(v, T, n)), !i &amp;&amp; -1 &lt; S.inArray(&quot;script&quot;, v.dataTypes) &amp;&amp; S.inArray(&quot;json&quot;, v.dataTypes) &lt; 0 &amp;&amp; (v.converters[&quot;text script&quot;] = function () {&#x000A;                }), s = function (e, t, n, r) {&#x000A;                    var i, o, a, s, u, l = {}, c = e.dataTypes.slice();&#x000A;                    if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];&#x000A;                    o = c.shift();&#x000A;                    while (o) if (e.responseFields[o] &amp;&amp; (n[e.responseFields[o]] = t), !u &amp;&amp; r &amp;&amp; e.dataFilter &amp;&amp; (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if (&quot;*&quot; === o) o = u; else if (&quot;*&quot; !== u &amp;&amp; u !== o) {&#x000A;                        if (!(a = l[u + &quot; &quot; + o] || l[&quot;* &quot; + o])) for (i in l) if ((s = i.split(&quot; &quot;))[1] === o &amp;&amp; (a = l[u + &quot; &quot; + s[0]] || l[&quot;* &quot; + s[0]])) {&#x000A;                            !0 === a ? a = l[i] : !0 !== l[i] &amp;&amp; (o = s[0], c.unshift(s[1]));&#x000A;                            break&#x000A;                        }&#x000A;                        if (!0 !== a) if (a &amp;&amp; e[&quot;throws&quot;]) t = a(t); else try {&#x000A;                            t = a(t)&#x000A;                        } catch (e) {&#x000A;                            return {state: &quot;parsererror&quot;, error: a ? e : &quot;No conversion from &quot; + u + &quot; to &quot; + o}&#x000A;                        }&#x000A;                    }&#x000A;                    return {state: &quot;success&quot;, data: t}&#x000A;                }(v, s, T, i), i ? (v.ifModified &amp;&amp; ((u = T.getResponseHeader(&quot;Last-Modified&quot;)) &amp;&amp; (S.lastModified[f] = u), (u = T.getResponseHeader(&quot;etag&quot;)) &amp;&amp; (S.etag[f] = u)), 204 === e || &quot;HEAD&quot; === v.type ? l = &quot;nocontent&quot; : 304 === e ? l = &quot;notmodified&quot; : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e &amp;&amp; l || (l = &quot;error&quot;, e &lt; 0 &amp;&amp; (e = 0))), T.status = e, T.statusText = (t || l) + &quot;&quot;, i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g &amp;&amp; m.trigger(i ? &quot;ajaxSuccess&quot; : &quot;ajaxError&quot;, [T, v, i ? o : a]), b.fireWith(y, [T, l]), g &amp;&amp; (m.trigger(&quot;ajaxComplete&quot;, [T, v]), --S.active || S.event.trigger(&quot;ajaxStop&quot;)))&#x000A;            }&#x000A;&#x000A;            return T&#x000A;        }, getJSON: function (e, t, n) {&#x000A;            return S.get(e, t, n, &quot;json&quot;)&#x000A;        }, getScript: function (e, t) {&#x000A;            return S.get(e, void 0, t, &quot;script&quot;)&#x000A;        }&#x000A;    }), S.each([&quot;get&quot;, &quot;post&quot;], function (e, i) {&#x000A;        S[i] = function (e, t, n, r) {&#x000A;            return m(t) &amp;&amp; (r = r || n, n = t, t = void 0), S.ajax(S.extend({url: e, type: i, dataType: r, data: t, success: n}, S.isPlainObject(e) &amp;&amp; e))&#x000A;        }&#x000A;    }), S.ajaxPrefilter(function (e) {&#x000A;        var t;&#x000A;        for (t in e.headers) &quot;content-type&quot; === t.toLowerCase() &amp;&amp; (e.contentType = e.headers[t] || &quot;&quot;)&#x000A;    }), S._evalUrl = function (e, t, n) {&#x000A;        return S.ajax({&#x000A;            url: e, type: &quot;GET&quot;, dataType: &quot;script&quot;, cache: !0, async: !1, global: !1, converters: {&#x000A;                &quot;text script&quot;: function () {&#x000A;                }&#x000A;            }, dataFilter: function (e) {&#x000A;                S.globalEval(e, t, n)&#x000A;            }&#x000A;        })&#x000A;    }, S.fn.extend({&#x000A;        wrapAll: function (e) {&#x000A;            var t;&#x000A;            return this[0] &amp;&amp; (m(e) &amp;&amp; (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode &amp;&amp; t.insertBefore(this[0]), t.map(function () {&#x000A;                var e = this;&#x000A;                while (e.firstElementChild) e = e.firstElementChild;&#x000A;                return e&#x000A;            }).append(this)), this&#x000A;        }, wrapInner: function (n) {&#x000A;            return m(n) ? this.each(function (e) {&#x000A;                S(this).wrapInner(n.call(this, e))&#x000A;            }) : this.each(function () {&#x000A;                var e = S(this), t = e.contents();&#x000A;                t.length ? t.wrapAll(n) : e.append(n)&#x000A;            })&#x000A;        }, wrap: function (t) {&#x000A;            var n = m(t);&#x000A;            return this.each(function (e) {&#x000A;                S(this).wrapAll(n ? t.call(this, e) : t)&#x000A;            })&#x000A;        }, unwrap: function (e) {&#x000A;            return this.parent(e).not(&quot;body&quot;).each(function () {&#x000A;                S(this).replaceWith(this.childNodes)&#x000A;            }), this&#x000A;        }&#x000A;    }), S.expr.pseudos.hidden = function (e) {&#x000A;        return !S.expr.pseudos.visible(e)&#x000A;    }, S.expr.pseudos.visible = function (e) {&#x000A;        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)&#x000A;    }, S.ajaxSettings.xhr = function () {&#x000A;        try {&#x000A;            return new C.XMLHttpRequest&#x000A;        } catch (e) {&#x000A;        }&#x000A;    };&#x000A;    var Bt = {0: 200, 1223: 204}, $t = S.ajaxSettings.xhr();&#x000A;    y.cors = !!$t &amp;&amp; &quot;withCredentials&quot; in $t, y.ajax = $t = !!$t, S.ajaxTransport(function (i) {&#x000A;        var o, a;&#x000A;        if (y.cors || $t &amp;&amp; !i.crossDomain) return {&#x000A;            send: function (e, t) {&#x000A;                var n, r = i.xhr();&#x000A;                if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) r[n] = i.xhrFields[n];&#x000A;                for (n in i.mimeType &amp;&amp; r.overrideMimeType &amp;&amp; r.overrideMimeType(i.mimeType), i.crossDomain || e[&quot;X-Requested-With&quot;] || (e[&quot;X-Requested-With&quot;] = &quot;XMLHttpRequest&quot;), e) r.setRequestHeader(n, e[n]);&#x000A;                o = function (e) {&#x000A;                    return function () {&#x000A;                        o &amp;&amp; (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, &quot;abort&quot; === e ? r.abort() : &quot;error&quot; === e ? &quot;number&quot; != typeof r.status ? t(0, &quot;error&quot;) : t(r.status, r.statusText) : t(Bt[r.status] || r.status, r.statusText, &quot;text&quot; !== (r.responseType || &quot;text&quot;) || &quot;string&quot; != typeof r.responseText ? {binary: r.response} : {text: r.responseText}, r.getAllResponseHeaders()))&#x000A;                    }&#x000A;                }, r.onload = o(), a = r.onerror = r.ontimeout = o(&quot;error&quot;), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {&#x000A;                    4 === r.readyState &amp;&amp; C.setTimeout(function () {&#x000A;                        o &amp;&amp; a()&#x000A;                    })&#x000A;                }, o = o(&quot;abort&quot;);&#x000A;                try {&#x000A;                    r.send(i.hasContent &amp;&amp; i.data || null)&#x000A;                } catch (e) {&#x000A;                    if (o) throw e&#x000A;                }&#x000A;            }, abort: function () {&#x000A;                o &amp;&amp; o()&#x000A;            }&#x000A;        }&#x000A;    }), S.ajaxPrefilter(function (e) {&#x000A;        e.crossDomain &amp;&amp; (e.contents.script = !1)&#x000A;    }), S.ajaxSetup({&#x000A;        accepts: {script: &quot;text/javascript, application/javascript, application/ecmascript, application/x-ecmascript&quot;}, contents: {script: /\b(?:java|ecma)script\b/}, converters: {&#x000A;            &quot;text script&quot;: function (e) {&#x000A;                return S.globalEval(e), e&#x000A;            }&#x000A;        }&#x000A;    }), S.ajaxPrefilter(&quot;script&quot;, function (e) {&#x000A;        void 0 === e.cache &amp;&amp; (e.cache = !1), e.crossDomain &amp;&amp; (e.type = &quot;GET&quot;)&#x000A;    }), S.ajaxTransport(&quot;script&quot;, function (n) {&#x000A;        var r, i;&#x000A;        if (n.crossDomain || n.scriptAttrs) return {&#x000A;            send: function (e, t) {&#x000A;                r = S(&quot;&lt;script&gt;&quot;).attr(n.scriptAttrs || {}).prop({charset: n.scriptCharset, src: n.url}).on(&quot;load error&quot;, i = function (e) {&#x000A;                    r.remove(), i = null, e &amp;&amp; t(&quot;error&quot; === e.type ? 404 : 200, e.type)&#x000A;                }), E.head.appendChild(r[0])&#x000A;            }, abort: function () {&#x000A;                i &amp;&amp; i()&#x000A;            }&#x000A;        }&#x000A;    });&#x000A;    var _t, zt = [], Ut = /(=)\?(?=&amp;|$)|\?\?/;&#x000A;    S.ajaxSetup({&#x000A;        jsonp: &quot;callback&quot;, jsonpCallback: function () {&#x000A;            var e = zt.pop() || S.expando + &quot;_&quot; + wt.guid++;&#x000A;            return this[e] = !0, e&#x000A;        }&#x000A;    }), S.ajaxPrefilter(&quot;json jsonp&quot;, function (e, t, n) {&#x000A;        var r, i, o, a = !1 !== e.jsonp &amp;&amp; (Ut.test(e.url) ? &quot;url&quot; : &quot;string&quot; == typeof e.data &amp;&amp; 0 === (e.contentType || &quot;&quot;).indexOf(&quot;application/x-www-form-urlencoded&quot;) &amp;&amp; Ut.test(e.data) &amp;&amp; &quot;data&quot;);&#x000A;        if (a || &quot;jsonp&quot; === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Ut, &quot;$1&quot; + r) : !1 !== e.jsonp &amp;&amp; (e.url += (Tt.test(e.url) ? &quot;&amp;&quot; : &quot;?&quot;) + e.jsonp + &quot;=&quot; + r), e.converters[&quot;script json&quot;] = function () {&#x000A;            return o || S.error(r + &quot; was not called&quot;), o[0]&#x000A;        }, e.dataTypes[0] = &quot;json&quot;, i = C[r], C[r] = function () {&#x000A;            o = arguments&#x000A;        }, n.always(function () {&#x000A;            void 0 === i ? S(C).removeProp(r) : C[r] = i, e[r] &amp;&amp; (e.jsonpCallback = t.jsonpCallback, zt.push(r)), o &amp;&amp; m(i) &amp;&amp; i(o[0]), o = i = void 0&#x000A;        }), &quot;script&quot;&#x000A;    }), y.createHTMLDocument = ((_t = E.implementation.createHTMLDocument(&quot;&quot;).body).innerHTML = &quot;&lt;form&gt;&lt;/form&gt;&lt;form&gt;&lt;/form&gt;&quot;, 2 === _t.childNodes.length), S.parseHTML = function (e, t, n) {&#x000A;        return &quot;string&quot; != typeof e ? [] : (&quot;boolean&quot; == typeof t &amp;&amp; (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument(&quot;&quot;)).createElement(&quot;base&quot;)).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n &amp;&amp; [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o &amp;&amp; o.length &amp;&amp; S(o).remove(), S.merge([], i.childNodes)));&#x000A;        var r, i, o&#x000A;    }, S.fn.load = function (e, t, n) {&#x000A;        var r, i, o, a = this, s = e.indexOf(&quot; &quot;);&#x000A;        return -1 &lt; s &amp;&amp; (r = ht(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t &amp;&amp; &quot;object&quot; == typeof t &amp;&amp; (i = &quot;POST&quot;), 0 &lt; a.length &amp;&amp; S.ajax({url: e, type: i || &quot;GET&quot;, dataType: &quot;html&quot;, data: t}).done(function (e) {&#x000A;            o = arguments, a.html(r ? S(&quot;&lt;div&gt;&quot;).append(S.parseHTML(e)).find(r) : e)&#x000A;        }).always(n &amp;&amp; function (e, t) {&#x000A;            a.each(function () {&#x000A;                n.apply(this, o || [e.responseText, t, e])&#x000A;            })&#x000A;        }), this&#x000A;    }, S.expr.pseudos.animated = function (t) {&#x000A;        return S.grep(S.timers, function (e) {&#x000A;            return t === e.elem&#x000A;        }).length&#x000A;    }, S.offset = {&#x000A;        setOffset: function (e, t, n) {&#x000A;            var r, i, o, a, s, u, l = S.css(e, &quot;position&quot;), c = S(e), f = {};&#x000A;            &quot;static&quot; === l &amp;&amp; (e.style.position = &quot;relative&quot;), s = c.offset(), o = S.css(e, &quot;top&quot;), u = S.css(e, &quot;left&quot;), (&quot;absolute&quot; === l || &quot;fixed&quot; === l) &amp;&amp; -1 &lt; (o + u).indexOf(&quot;auto&quot;) ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) &amp;&amp; (t = t.call(e, n, S.extend({}, s))), null != t.top &amp;&amp; (f.top = t.top - s.top + a), null != t.left &amp;&amp; (f.left = t.left - s.left + i), &quot;using&quot; in t ? t.using.call(e, f) : c.css(f)&#x000A;        }&#x000A;    }, S.fn.extend({&#x000A;        offset: function (t) {&#x000A;            if (arguments.length) return void 0 === t ? this : this.each(function (e) {&#x000A;                S.offset.setOffset(this, t, e)&#x000A;            });&#x000A;            var e, n, r = this[0];&#x000A;            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {top: e.top + n.pageYOffset, left: e.left + n.pageXOffset}) : {top: 0, left: 0} : void 0&#x000A;        }, position: function () {&#x000A;            if (this[0]) {&#x000A;                var e, t, n, r = this[0], i = {top: 0, left: 0};&#x000A;                if (&quot;fixed&quot; === S.css(r, &quot;position&quot;)) t = r.getBoundingClientRect(); else {&#x000A;                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;&#x000A;                    while (e &amp;&amp; (e === n.body || e === n.documentElement) &amp;&amp; &quot;static&quot; === S.css(e, &quot;position&quot;)) e = e.parentNode;&#x000A;                    e &amp;&amp; e !== r &amp;&amp; 1 === e.nodeType &amp;&amp; ((i = S(e).offset()).top += S.css(e, &quot;borderTopWidth&quot;, !0), i.left += S.css(e, &quot;borderLeftWidth&quot;, !0))&#x000A;                }&#x000A;                return {top: t.top - i.top - S.css(r, &quot;marginTop&quot;, !0), left: t.left - i.left - S.css(r, &quot;marginLeft&quot;, !0)}&#x000A;            }&#x000A;        }, offsetParent: function () {&#x000A;            return this.map(function () {&#x000A;                var e = this.offsetParent;&#x000A;                while (e &amp;&amp; &quot;static&quot; === S.css(e, &quot;position&quot;)) e = e.offsetParent;&#x000A;                return e || re&#x000A;            })&#x000A;        }&#x000A;    }), S.each({scrollLeft: &quot;pageXOffset&quot;, scrollTop: &quot;pageYOffset&quot;}, function (t, i) {&#x000A;        var o = &quot;pageYOffset&quot; === i;&#x000A;        S.fn[t] = function (e) {&#x000A;            return $(this, function (e, t, n) {&#x000A;                var r;&#x000A;                if (x(e) ? r = e : 9 === e.nodeType &amp;&amp; (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];&#x000A;                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n&#x000A;            }, t, e, arguments.length)&#x000A;        }&#x000A;    }), S.each([&quot;top&quot;, &quot;left&quot;], function (e, n) {&#x000A;        S.cssHooks[n] = Fe(y.pixelPosition, function (e, t) {&#x000A;            if (t) return t = We(e, n), Pe.test(t) ? S(e).position()[n] + &quot;px&quot; : t&#x000A;        })&#x000A;    }), S.each({Height: &quot;height&quot;, Width: &quot;width&quot;}, function (a, s) {&#x000A;        S.each({padding: &quot;inner&quot; + a, content: s, &quot;&quot;: &quot;outer&quot; + a}, function (r, o) {&#x000A;            S.fn[o] = function (e, t) {&#x000A;                var n = arguments.length &amp;&amp; (r || &quot;boolean&quot; != typeof e), i = r || (!0 === e || !0 === t ? &quot;margin&quot; : &quot;border&quot;);&#x000A;                return $(this, function (e, t, n) {&#x000A;                    var r;&#x000A;                    return x(e) ? 0 === o.indexOf(&quot;outer&quot;) ? e[&quot;inner&quot; + a] : e.document.documentElement[&quot;client&quot; + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body[&quot;scroll&quot; + a], r[&quot;scroll&quot; + a], e.body[&quot;offset&quot; + a], r[&quot;offset&quot; + a], r[&quot;client&quot; + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i)&#x000A;                }, s, n ? e : void 0, n)&#x000A;            }&#x000A;        })&#x000A;    }), S.each([&quot;ajaxStart&quot;, &quot;ajaxStop&quot;, &quot;ajaxComplete&quot;, &quot;ajaxError&quot;, &quot;ajaxSuccess&quot;, &quot;ajaxSend&quot;], function (e, t) {&#x000A;        S.fn[t] = function (e) {&#x000A;            return this.on(t, e)&#x000A;        }&#x000A;    }), S.fn.extend({&#x000A;        bind: function (e, t, n) {&#x000A;            return this.on(e, null, t, n)&#x000A;        }, unbind: function (e, t) {&#x000A;            return this.off(e, null, t)&#x000A;        }, delegate: function (e, t, n, r) {&#x000A;            return this.on(t, e, n, r)&#x000A;        }, undelegate: function (e, t, n) {&#x000A;            return 1 === arguments.length ? this.off(e, &quot;**&quot;) : this.off(t, e || &quot;**&quot;, n)&#x000A;        }, hover: function (e, t) {&#x000A;            return this.mouseenter(e).mouseleave(t || e)&#x000A;        }&#x000A;    }), S.each(&quot;blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu&quot;.split(&quot; &quot;), function (e, n) {&#x000A;        S.fn[n] = function (e, t) {&#x000A;            return 0 &lt; arguments.length ? this.on(n, null, e, t) : this.trigger(n)&#x000A;        }&#x000A;    });&#x000A;    var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;&#x000A;    S.proxy = function (e, t) {&#x000A;        var n, r, i;&#x000A;        if (&quot;string&quot; == typeof t &amp;&amp; (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function () {&#x000A;            return e.apply(t || this, r.concat(s.call(arguments)))&#x000A;        }).guid = e.guid = e.guid || S.guid++, i&#x000A;    }, S.holdReady = function (e) {&#x000A;        e ? S.readyWait++ : S.ready(!0)&#x000A;    }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function (e) {&#x000A;        var t = S.type(e);&#x000A;        return (&quot;number&quot; === t || &quot;string&quot; === t) &amp;&amp; !isNaN(e - parseFloat(e))&#x000A;    }, S.trim = function (e) {&#x000A;        return null == e ? &quot;&quot; : (e + &quot;&quot;).replace(Xt, &quot;&quot;)&#x000A;    }, &quot;function&quot; == typeof define &amp;&amp; define.amd &amp;&amp; define(&quot;jquery&quot;, [], function () {&#x000A;        return S&#x000A;    });&#x000A;    var Vt = C.jQuery, Gt = C.$;&#x000A;    return S.noConflict = function (e) {&#x000A;        return C.$ === S &amp;&amp; (C.$ = Gt), e &amp;&amp; C.jQuery === S &amp;&amp; (C.jQuery = Vt), S&#x000A;    }, &quot;undefined&quot; == typeof e &amp;&amp; (C.jQuery = C.$ = S), S&#x000A;});&#x000A;</textarea>
<a class="ui button" id="copy-text" href="#">一键复制</a>
<a class="ui button edit-blob" title="只有登陆后才可以编辑" href="/youngyajun/websocket-chatroom-demo/edit/master/src/main/resources/static/js/jquery.js">编辑</a>
<a class="ui button web-ide" target="_blank" href="/-/ide/project/youngyajun/websocket-chatroom-demo/edit/master/-/src/main/resources/static/js/jquery.js">Web IDE</a>
<a class="ui button edit-raw" target="_blank" href="/youngyajun/websocket-chatroom-demo/raw/master/src/main/resources/static/js/jquery.js">原始数据</a>
<a class="ui button edit-blame" href="/youngyajun/websocket-chatroom-demo/blame/master/src/main/resources/static/js/jquery.js">按行查看</a>
<a class="ui button edit-history" href="/youngyajun/websocket-chatroom-demo/commits/master/src/main/resources/static/js/jquery.js">历史</a>
</div>
<script>
  "use strict";
  try {
    if((gon.wait_fork!=undefined && gon.wait_fork==true) || (gon.wait_fetch!=undefined && gon.wait_fetch==true)){
      $('.edit-blob').popup({content:"当前仓库正在后台处理中,暂时无法编辑", on: 'hover', delay: { show: 200, hide: 200 }});
      $('.edit-blob').click(function(e){
        e.preventDefault();
      })
    }
  
    var setUrl = function() {
      var params = window.location.search
      if (params==undefined || $.trim(params).length==0) return;
      $('span.options').children('.basic').find('a').each(function(index,ele){
        var origin_href = $(ele).attr('href');
        if (origin_href!="#" && origin_href.indexOf('?') == -1){
          $(ele).attr('href',origin_href+params);
        }
      });
    }
  
    setUrl();
  
    var clipboard = null,
        $btncopy  = $("#copy-text");
  
    clipboard = new Clipboard("#copy-text", {
      text: function(trigger) {
        return $("#blob_raw").val();
      }
    })
  
    clipboard.on('success', function(e) {
      $btncopy.popup('hide');
      $btncopy.popup('destroy');
      $btncopy.popup({content: '已复制', position: 'bottom center'});
      $btncopy.popup('show');
    })
  
    clipboard.on('error', function(e) {
      var giteeModal = new GiteeModalHelper({okText: '确定'});
      giteeModal.alert("一键复制", '复制失败，请手动复制');
    })
  
    $(function() {
      $btncopy.popup({
        content: '点击复制',
        position: 'bottom center'
      })
    })
  
  } catch (error) {
    console.log('blob/action error:' + error);
  }
  
  $('.disabled-edit-readonly').popup({
    content: "只读文件不可编辑",
    className: {
      popup: 'ui popup',
    },
    position: 'bottom center',
  })
  $('.disabled-edit-readonly, .disabled-edit-status').click(function() {
    return false
  })
  $('.has_tooltip').popup({
    position: 'top center'
  });
</script>
<style>
  .disabled-edit-readonly, .disabled-edit-status {
    background-color: #dcddde !important;
    color: rgba(0, 0, 0, 0.4) !important;
    opacity: 0.3 !important;
    background-image: none !important;
    -webkit-box-shadow: none !important;
            box-shadow: none !important;
    cursor: default !important; }
</style>
</div>
</div>
<div class='contributor-description'><span class='recent-commit' style='margin-top: 0.7rem'>
<a class="commit-author-link  js-popover-card " data-username="youngyajun" href="/youngyajun">youngyajun</a>
<span>提交于</span>
<span class='timeago commit-date' title='2021-05-26 05:06:15 +0800'>
2021-05-26 05:06
</span>
.
<a href="/youngyajun/websocket-chatroom-demo/commit/0573d6683df3ab9547899c5f7fa4c3d41c160707">最基本功能版提交</a>
</span>
</div>
</div>
<div class='clearfix'></div>
<div class='file_content code'>
<div class='lines white'>
</div>
<script>
  window.Gitee.initReadmeCatalog();
  toMathMlCode('','markdown-body');
  $('.file_content a, .catalog-li a.anchor').click(function () {
    var anchor = $(this).attr('href')
    window.location.hash = anchor
  })
</script>

</div>
</div>
<div class='tree_progress'></div>
<div class='ui small modal' id='modal-linejump'>
<div class='ui custom form content'>
<div class='field'>
<div class='ui right action input'>
<input placeholder='跳转至某一行...' type='number'>
<div class='ui orange button'>
跳转
</div>
</div>
</div>
</div>
</div>


<div class='row column inner-comment' id='blob-comment'>
<input type="hidden" name="comment_path" id="comment_path" value="src/main/resources/static/js/jquery.js" />
<div class='tree-comments'>
<h3 id='tree_comm_title'>
评论
(
<span class='comments-count'>
0
</span>
)
</h3>
<div class='ui threaded comments middle aligned' id='notes-list'></div>
<input type="hidden" name="ajax_add_note_id" id="ajax_add_note_id" />
<div class='text-center'>
<div class='tip-loading' style='display: none'>
<div class='ui active mini inline loader'></div>
正在加载...
</div>
</div>
</div>
<script>
  "use strict";
  $(function(){
    var page = 1
    var commentsCount = 0
    var $container = $('.tree-comments')
    var $comments = $container.find('.ui.comments')
    var $tipLoading = $container.find('.tip-loading')
    var $btnLoad = $container.find('.btn-load-more')
    var noteAnchor = new Gitee.NoteAnchor({ defaultAnchor: '#tree_comm_title' })
  
    if (commentsCount < 1) {
      return;
    }
  
    var path;
    if ($('#comment_path').val() === '') {
      path = '/';
    } else {
      path = $('#comment_path').val();
    }
  
    function loadComments () {
      $btnLoad.hide();
      $tipLoading.show();
      $.ajax({
        url: '/youngyajun/websocket-chatroom-demo/comment_list',
        data: {
          page: page,
          path: path
        },
        success: function(data) {
          var err;
          try {
            $tipLoading.hide();
            $btnLoad.show();
            if (data.status !== 0) {
              $btnLoad.text('无更多评论')
              return $btnLoad.prop('disabled', true).addClass('disabled');
            } else {
              TreeComment.CommentListHandler(data);
              page += 1;
              if (data.comments_count < 10) {
                $('#ajax_add_note_id').val('');
                $btnLoad.text('无更多评论')
                $btnLoad.prop('disabled', true).addClass('disabled');
              }
              // osctree can not load script
              $comments.find('.timeago').timeago();
              $comments.find('.commenter-role-label').popup();
              noteAnchor.locate();
              toMathMlCode('', 'comments');
              return $('.markdown-body pre code').each(function(i, block) {
                return hljs.highlightBlock(block);
              });
            }
          } catch (error) {
            err = error;
            return console.log('loadComments error:' + err);
          }
        }
      });
    };
  
  
    function checkLoad () {
      var listTop, top;
      top = $(window).scrollTop();
      listTop = $container.offset().top;
      if (listTop >= top && listTop < top + $(window).height()) {
        $(window).off('scroll', checkLoad);
        return loadComments();
      }
    };
  
    $btnLoad.on('click', loadComments);
    loadComments()
  })
</script>

</div>
<div class='inner-comment-box' id='comment-box'>
<p>
你可以在<a href="/login">登录</a>后，发表评论
</p>

</div>

<div class='complaint'>
<div class='ui modal small form' id='landing-comments-complaint-modal'>
<i class='iconfont icon-close close'></i>
<div class='header'>
举报
</div>
<div class='content'>
<div class='appeal-success-tip hide'>
<i class='iconfont icon-ic_msg_success'></i>
<div class='appeal-success-text'>
举报成功
</div>
<span>
我们将于2个工作日内通过站内信反馈结果给你！
</span>
</div>
<div class='appeal-tip'>
请认真填写举报原因，尽可能描述详细。
</div>
<div class='ui form appeal-form'>
<div class='inline field'>
<label class='left-part appeal-type-wrap'>
举报类型
</label>
<div class='ui dropdown selection' id='appeal-comments-types'>
<div class='text default'>
请选择举报类型
</div>
<i class='dropdown icon'></i>
<div class='menu'></div>
</div>
</div>
<div class='inline field'>
<label class='left-part'>
举报原因
</label>
<textarea class='appeal-reason' id='appeal-comment-reason' name='msg' placeholder='请说明举报原因' rows='3'></textarea>
</div>
<div class='ui message callback-msg hide'></div>
<div class='ui small error text message exceeded-size-tip'></div>
</div>
</div>
<div class='actions'>
<div class='ui button blank cancel'>
取消
</div>
<div class='ui orange icon button disabled ok' id='complaint-comment-confirm'>
发送
</div>
</div>
</div>
<script>
  var $complaintCommentsModal = $('#landing-comments-complaint-modal'),
      $complainCommentType = $complaintCommentsModal.find('#appeal-comments-types'),
      $complaintModalTip = $complaintCommentsModal.find('.callback-msg'),
      $complaintCommentsContent = $complaintCommentsModal.find('.appeal-reason'),
      $complaintCommentBtn = $complaintCommentsModal.find('#complaint-comment-confirm'),
      complaintSending = false,
      initedCommentsType = false;
  
  function initCommentsTypeList() {
    if (!initedCommentsType) {
      $.ajax({
        url: "/appeals/fetch_types",
        method: 'get',
        data: {'type': 'comment'},
        success: function (data) {
          var result = '';
          for (var i = 0; i < data.length; i++) {
            result = result + "<div class='item' data-value='" + data[i].id + "'>" + data[i].name + "</div>";
          }
          $complainCommentType.find('.menu').html(result);
        }
      });
      $complainCommentType.dropdown({showOnFocus: false});
      initedCommentsType = true;
    }
  }
  $complainCommentType.on('click', function() {
    $complaintCommentsModal.modal({
      autofocus: false,
      onApprove: function() {
        return false;
      },
      onHidden: function() {
        restoreCommonentDefault();
      }
    }).modal('show');
  });
  
  $complaintCommentsContent.on('change keyup', function(e) {
    var content = $(this).val();
    if ($.trim(content).length > 0 && $complainCommentType.dropdown('get value').length > 0 ) {
      $complaintCommentBtn.removeClass('disabled');
      return;
    }
    $complaintCommentBtn.addClass('disabled');
  });
  
  
  $complainCommentType.dropdown({
    showOnFocus: false,
    onChange: function(value, text, $selectedItem) {
      if (value.length > 0 && $.trim($complaintCommentsContent.val()).length > 0) {
        $complaintCommentBtn.removeClass('disabled');
        return
      }
      $complaintCommentBtn.addClass('disabled');
    }
  });
  
  function restoreCommonentDefault() {
    $complainCommentType.dropdown('restore defaults');
    $complaintCommentsContent.val('');
    $('.exceeded-size-tip').text('').hide();
    $complaintModalTip.text('').hide();
    setTimeout(function() {
      setCommentSendTip(false);
    }, 1500);
  }
  
  $complaintCommentBtn.on('click',function(e){
    var reason = $complaintCommentsContent.val();
    var appealableId = $('#landing-comments-complaint-modal').attr('data-id');
    if (complaintSending) {
      return;
    }
    var appealType = $complainCommentType.dropdown('get value');
    var formData = new FormData();
    formData.append('appeal_type_id', appealType);
    formData.append('reason', reason);
    formData.append('appeal_type','Note');
    formData.append('target_id',appealableId);
    $.ajax({
      type: 'POST',
      url: "/appeals",
      cache: false,
      contentType: false,
      processData: false,
      data: formData,
      beforeSend: function() {
        setCommentSendStatus(true);
      },
      success: function(res) {
        if (res.status == 200) {
          setCommentSendTip(true);
          setTimeout(function() {
            $complaintCommentsModal.modal('hide');
            restoreCommonentDefault();
          }, 3000);
        }
        setCommentSendStatus(false);
      },
      error: function(err) {
        showCommonTips(err.responseJSON.message, 'error');
        setCommentSendStatus(false);
      }
    })
  });
  
  function showCommonTips(text, type) {
    $complaintModalTip.text(text).show();
    if (type == 'error') {
      $complaintModalTip.removeClass('success').addClass('error');
    } else {
      $complaintModalTip.removeClass('error').addClass('success');
    }
  }
  
  function setCommentSendStatus(value) {
    complaintSending = value;
    if (complaintSending) {
      $complaintCommentBtn.addClass('loading');
      $complaintCommentsContent.attr('readonly', true);
      $complainCommentType.attr('readonly', true);
    } else {
      $complaintCommentBtn.removeClass('loading');
      $complaintCommentsContent.attr('readonly', false);
      $complainCommentType.attr('readonly', false);
    }
  }
  
  function setCommentSendTip(value) {
    if (value) {
      $('.appeal-success-tip').removeClass('hide');
      $('.appeal-tip').addClass('hide');
      $('.appeal-form').addClass('hide');
      $('#landing-comments-complaint-modal .actions').addClass('hide');
    } else {
      $('.appeal-success-tip').addClass('hide');
      $('.appeal-tip').removeClass('hide');
      $('.appeal-form').removeClass('hide');
      $('#landing-comments-complaint-modal .actions').removeClass('hide');
    }
  }
</script>

</div>
<script>
  "use strict";
  $('.js-check-star').checkbox('set unchecked')
</script>

</div>
</div>
</div>
<div class='four wide column' style='display: none;'>
<div class='project__right-side'>
<div class='side-item intro'>
<div class='header'>
<h4>简介</h4>
</div>
<div class='content'>
<span class='git-project-desc-text'>简单的websocket-chatroom参考视频副本项目</span>
<a class='hide spread' href='javascript:void(0);'>
展开
<i class='caret down icon'></i>
</a>
<a class='retract hide' href='javascript:void(0);'>
收起
<i class='caret up icon'></i>
</a>
<div class='intro-list'>
<div class='blank d-flex d-flex-between dropdown item js-project-label_show label-list-line-feed project-label-list ui' data-labels='[]' data-url='/youngyajun/websocket-chatroom-demo/update_description'>
<div class='mixed-label'>
</div>

<div class='default'>暂无标签</div>
</div>
<div class='hide item'>
<i class='iconfont icon-link'></i>
<span class='git-project-homepage'>
<a rel="nofollow" id="homepage" target="_blank" href=""></a>
</span>
</div>
<div class='item'>
<i class='iconfont icon-tag-program'></i>
<span class='summary-languages'>
Java
<span class='text-muted'>
等 4 种语言
<i class='icon dropdown'></i>
</span>
</span>
<div class='ui popup summary-languages-popup'>
<div class='row'>
<div class='lang'>
<a href="/explore/all?lang=Java">Java</a>
</div>
<div class='lang-bar'>
<div class='bar' style='width: 56.6%;'></div>
</div>
<a class="percentage" href="/explore/all?lang=Java">56.6%</a>
</div>
<div class='row'>
<div class='lang'>
<a href="/explore/all?lang=JavaScript">JavaScript</a>
</div>
<div class='lang-bar'>
<div class='bar' style='width: 21.9%;'></div>
</div>
<a class="percentage" href="/explore/all?lang=JavaScript">21.9%</a>
</div>
<div class='row'>
<div class='lang'>
<a href="/explore/all?lang=HTML">HTML</a>
</div>
<div class='lang-bar'>
<div class='bar' style='width: 12.1%;'></div>
</div>
<a class="percentage" href="/explore/all?lang=HTML">12.1%</a>
</div>
<div class='row'>
<div class='lang'>
<a href="/explore/all?lang=CSS">CSS</a>
</div>
<div class='lang-bar'>
<div class='bar' style='width: 9.4%;'></div>
</div>
<a class="percentage" href="/explore/all?lang=CSS">9.4%</a>
</div>
</div>
</div>

</div>
</div>
<div class='content intro-form'>
<div class='ui small input'>
<textarea name='project[description]' placeholder='描述' rows='5'></textarea>
</div>
<div class='ui small input'>
<input data-regex-value='(^$)|(^(http|https):\/\/(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]).*)|(^(http|https):\/\/[a-zA-Z0-9]+([_\-\.]{1}[a-zA-Z0-9]+)*\.[a-zA-Z]{2,10}(:[0-9]{1,10})?(\?.*)?(\/.*)?$)' name='project[homepage]' placeholder='主页(eg: https://gitee.com)' type='text'>
</div>
<button class='ui orange button mt-1 btn-save'>
保存更改
</button>
<div class='ui blank button btn-cancel-edit'>
取消
</div>
</div>
</div>
<div class='side-item release'>
<div class='header'>
<h4>发行版</h4>
</div>
<div class='content'>
<span class='text-muted'>
暂无发行版
</span>
</div>
</div>
<div class='side-item contrib' data-url='/youngyajun/websocket-chatroom-demo/contributors_count?ref=master' id='contributor'>
<div class='header'>
<h4>
贡献者
<span class='text-muted' id='contributor-count'></span>
</h4>
<a class="ui link button pull-right" href="/youngyajun/websocket-chatroom-demo/contributors?ref=master">全部</a>
</div>
<div class='content' id='contributor-list'></div>
<div class='ui active centered inline loader' id='contributor-loader'></div>
</div>
<div class='side-item events' data-url='/youngyajun/websocket-chatroom-demo/events.json' id='proj-events'>
<div class='header'>
<h4>近期动态</h4>
</div>
<div class='content'>
<div class='ui comments' id='event-list'></div>
<a class="loadmore hide" href="javascript:void(0);">加载更多
<i class='icon dropdown'></i>
</a><center>
<div class='text-muted nomore hide'>不能加载更多了</div>
<div class='ui inline loader active'></div>
</center>
</div>
</div>
</div>
<div class='ui modal tiny' id='edit-project-description'>
<i class='iconfont icon-close close'></i>
<div class='header'>编辑仓库简介</div>
<div class='content'>
<div class='item mb-2'>
<div class='title label'>简介内容</div>
<div class='ui small input'>
<textarea maxlength='200' name='project[description]' placeholder='描述' rows='5'>简单的websocket-chatroom参考视频副本项目</textarea>
</div>
</div>
<div class='item mb-2'>
<div class='title label'>主页</div>
<div class='ui small input'>
<input data-regex-value='(^$)|(^(http|https):\/\/(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]).*)|(^(http|https):\/\/[a-zA-Z0-9]+([_\-\.]{1}[a-zA-Z0-9]+)*\.[a-zA-Z]{2,10}(:[0-9]{1,10})?(\?.*)?(\/.*)?$)' name='project[homepage]' placeholder='主页(eg: https://gitee.com)' type='text' value=''>
</div>
</div>
</div>
<div class='actions'>
<button class='ui button blank cancel'>取消</button>
<button class='ui button orange btn-save'>保存更改</button>
</div>
</div>

<script>
  window.gon.projectRightSide = {
    homepage: "",
    description: "简单的websocket-chatroom参考视频副本项目",
    url: '/youngyajun/websocket-chatroom-demo/update_description',
    i18n: {
      invalidHomepage: '不是有效的 http 地址',
      descriptionLimitExceeded: '简介长度不得超过%{limit}个字符',
      noDescription: '暂无描述',
      noPermission: '无权限操作！',
      requestError: '修改发生错误，请稍后重试！'
    }
  }
  window.gon.cloneArrSelectedLabel = [] || []
  $(function () {
    var $editModal = $('#edit-project-description')
    $editModal.modal({
      onShow: function () {
        window.globalUtils.getFocus($editModal.find('textarea'))
      }
    })
    $('.project__right-side').on('click', '.header .btn-edit', function () {
      $editModal.modal('show')
    })
    $('#license-popup').popup({ position: 'bottom center', lastResort: 'bottom center' })
  
    $('.js-project-label_show').projectLabel({
      i18n: {
        empty: "标签名不能为空",
        verify: "标签名只允许包含中文、字母、数字或者中划线(-)，不能以中划线开头，且长度少于35个字符",
        max: "最多选择 5 个标签"
      }
    })
  })
</script>

</div>
</div>
</div>
<script>
  (function() {
    $(function() {
      Tree.init();
      return TreeCommentActions.init();
    });
  
  }).call(this);
</script>

</div>
<script>
  (function() {
    var donateModal;
  
    Gitee.modalHelper = new GiteeModalHelper({
      alertText: '提示',
      okText: '确定'
    });
  
    donateModal = new ProjectDonateModal({
      el: '#project-donate-modal',
      alipayUrl: '/youngyajun/websocket-chatroom-demo/alipay',
      wepayUrl: '/youngyajun/websocket-chatroom-demo/wepay',
      nameIsBlank: '名称不能为空',
      nameTooLong: '名称过长（最多为 36 个字符）',
      modalHelper: Gitee.modalHelper
    });
  
    if (null === 'true') {
      donateModal.show();
    }
  
    $('#project-donate').on('click', function() {
      return donateModal.show();
    });
  
  }).call(this);
</script>
<script>
  Tree.initHighlightTheme('white')
</script>


</div>
<div class='gitee-project-extension'>
<div class='extension public'>1</div>
<div class='extension https'>https://gitee.com/youngyajun/websocket-chatroom-demo.git</div>
<div class='extension ssh'>git@gitee.com:youngyajun/websocket-chatroom-demo.git</div>
<div class='extension namespace'>youngyajun</div>
<div class='extension repo'>websocket-chatroom-demo</div>
<div class='extension name'>websocket-chatroom-demo</div>
<div class='extension branch'>master</div>
</div>

<script>
  $(function() {
    GitLab.GfmAutoComplete.dataSource = "/youngyajun/websocket-chatroom-demo/autocomplete_sources"
    GitLab.GfmAutoComplete.Emoji.assetBase = '/assets/emoji'
    GitLab.GfmAutoComplete.setup();
  });
</script>

<footer id='git-footer-main'>
<div class='ui container'>
<div class='logo-row'>
<a href="https://gitee.com"><img alt='Gitee — 基于 Git 的代码托管和研发协作平台' class='logo-img' src='/static/images/logo-black.svg?t=158106666'>
</a></div>
<div class='name-important'>
深圳市奥思网络科技有限公司版权所有
</div>
<div class='ui two column grid d-flex-center'>
<div class='nine wide column git-footer-left'>
<div class='ui four column grid' id='footer-left'>
<div class='column'>
<div class='ui link list'>
<div class='item'>
<a class="item" href="/all-about-git">Git 大全</a>
</div>
<div class='item'>
<a class="item" rel="nofollow" href="https://oschina.gitee.io/learn-git-branching/">Git 命令学习</a>
</div>
<div class='item'>
<a class="item" rel="nofollow" href="https://copycat.gitee.com/">CopyCat 代码克隆检测</a>
</div>
<div class='item'>
<a class="item" href="/appclient">APP与插件下载</a>
</div>
</div>
</div>
<div class='column'>
<div class='ui link list'>
<div class='item'>
<a class="item" href="/gitee_reward">Gitee Reward</a>
</div>
<div class='item'>
<a class="item" href="/gitee-stars">Gitee 封面人物</a>
</div>
<div class='item'>
<a class="item" href="/gvp">GVP 项目</a>
</div>
<div class='item'>
<a class="item" rel="nofollow" href="https://blog.gitee.com/">Gitee 博客</a>
</div>
<div class='item'>
<a class="item" href="/enterprises#nonprofit-plan">Gitee 公益计划</a>
</div>
</div>
</div>
<div class='column'>
<div class='ui link list'>
<div class='item'>
<a class="item" href="/api/v5/swagger">OpenAPI</a>
</div>
<div class='item'>
<a class="item" href="/help">帮助文档</a>
</div>
<div class='item'>
<a class="item" href="/self_services">在线自助服务</a>
</div>
<div class='item'>
<a class="item" href="/help/articles/4378">更新日志</a>
</div>
</div>
</div>
<div class='column'>
<div class='ui link list'>
<div class='item'>
<a class="item" href="/about_us">关于我们</a>
</div>
<div class='item'>
<a class="item" rel="nofollow" href="https://www.oschina.net/news/131099/oschina-hiring">加入我们</a>
</div>
<div class='item'>
<a class="item" href="/terms">使用条款</a>
</div>
<div class='item'>
<a class="item" href="/oschina/git-osc/issues">意见建议</a>
</div>
<div class='item'>
<a class="item" href="/links.html">合作伙伴</a>
</div>
</div>
</div>
</div>
</div>
<div class='seven wide column right aligned followus git-footer-right'>
<div class='qrcode mini_app'>
<img alt="微信小程序" src="https://assets.gitee.com/assets/mini_app-e5eee5a21c552b69ae6bf2cf87406b59.jpg" />
<p class='mini_app-text'>微信小程序</p>
</div>
<div class='qrcode weixin'>
<img alt="微信服务号" src="https://assets.gitee.com/assets/qrcode-weixin-9e7cfb27165143d2b8e8b268a52ea822.jpg" />
<p class='weixin-text'>微信服务号</p>
</div>
<div class='phone-and-qq column'>
<div class='ui list official-support-container'>
<div class='item'>
<a class="icon-popup" title="点击加入 Gitee 官方群" rel="nofollow" href="//qm.qq.com/cgi-bin/qm/qr?k=OUfztMuf7jElTIf78lMuNT_D_lZYOWnd"><i class='iconfont icon-logo-qq'></i>
<span>官方技术交流QQ群：515965326</span>
</a></div>
<div class='item mail-and-zhihu'>
<a rel="nofollow" href="mailto: git@oschina.cn"><i class='iconfont icon-msg-mail'></i>
<span id='git-footer-email'>git#oschina.cn</span>
</a></div>
<div class='item mail-and-zhihu'>
<a target="_blank" rel="nofollow" href="https://www.zhihu.com/org/ma-yun-osc/"><i class='iconfont icon-zhihu'></i>
<span>Gitee</span>
</a></div>
<div class='item tel'>
<a>
<i class='iconfont icon-tel'></i>
<span>售前及售后使用咨询：400-606-0201</span>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
<div class='bottombar'>
<div class='ui container'>
<div class='ui d-flex d-flex-between'>
<div class='seven wide column partner d-flex'>
<div class='open-atom d-flex-center'>
<img class="logo-openatom mr-1" alt="开放原子开源基金会" src="https://assets.gitee.com/assets/logo-openatom-d083391cc8a54e283529f3fc11cc38ca.svg" />
<a target="_blank" rel="nofollow" href="https://www.openatom.org/">开放原子开源基金会</a>
<div class='sub-title ml-1'>合作代码托管平台</div>
</div>
<div class='report-12377 d-flex-center ml-3'>
<img class="report-12377__logo mr-1" alt="违法和不良信息举报中心" src="https://assets.gitee.com/assets/12377@2x-1aa42ed2d2256f82a61ecf57be1ec244.png" />
<a target="_blank" rel="nofollow" href="https://12377.cn">违法和不良信息举报中心</a>
</div>
<div class='copyright ml-3'>
<a rel="nofollow" href="http://beian.miit.gov.cn/">粤ICP备12009483号</a>
</div>
</div>
<div class='nine wide column right aligned'>
<i class='icon world'></i>
<a href="/language/zh-CN">简 体</a>
/
<a href="/language/zh-TW">繁 體</a>
/
<a href="/language/en">English</a>
</div>
</div>
</div>
</div>
</footer>

<script>
  var officialEmail = $('#git-footer-email').text()
  $('#git-footer-main .icon-popup').popup({ position: 'bottom center' })
  $('#git-footer-email').text(officialEmail.replace('#', '@'))
  window.gon.popover_card_locale = {
    follow:"关注",
    unfollow:"已关注",
    gvp_title: "GVP - Gitee 最有价值开源项目",
    project: "项目",
    org: "开源组织",
    member: "",
    author: "作者",
    user_blocked: "该用户已被屏蔽或已注销",
    net_error: "网络错误",
    unknown_exception: "未知异常"
  }
  window.gon.select_message = {
    placeholder: "请输入个人空间地址或完整的邮箱地址"
  }
</script>
<script src="https://assets.gitee.com/webpacks/popover_card-f39945758963ad1d01cc.bundle.js"></script>
<link rel="stylesheet" media="all" href="https://assets.gitee.com/webpacks/css/gitee_nps-69491f94919350b0258c.css" />
<script src="https://assets.gitee.com/webpacks/gitee_nps-fc17df2911a31f92e96f.bundle.js"></script>


<div class='side-toolbar'>
<div class='button toolbar-help'>
<i class='iconfont icon-help'></i>
</div>
<div class='ui popup left center dark'>点此查找更多帮助</div>
<div class='toolbar-help-dialog'>
<div class='toolbar-dialog-header'>
<h3 class='toolbar-dialog-title'>搜索帮助</h3>
<form class="toolbar-help-search-form" action="/help/load_keywords_data" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
<div class='ui icon input fluid toolbar-help-search'>
<input name='keywords' placeholder='请输入产品名称或问题' type='text'>
<i class='icon search'></i>
</div>
</form>

<i class='iconfont icon-close toolbar-dialog-close-icon'></i>
</div>
<div class='toolbar-dialog-content'>
<div class='toolbar-help-hot-search'>
<div class='toolbar-roll'>
<a class="init active" title="Git 命令在线学习" href="https://oschina.gitee.io/learn-git-branching/?utm_source==gitee-help-widget"><i class='Blue icon icon-command iconfont'></i>
<span>Git 命令在线学习</span>
</a><a class="init " title="如何在 Gitee 导入 GitHub 仓库" href="https://gitee.com/help/articles/4261?utm_source==gitee-help-widget"><i class='icon icon-clipboard iconfont orange'></i>
<span>如何在 Gitee 导入 GitHub 仓库</span>
</a></div>
<div class='toolbar-list'>
<div class='toolbar-list-item'>
<a href="/help/articles/4114">Git 仓库基础操作</a>
</div>
<div class='toolbar-list-item'>
<a href="/help/articles/4166">企业版和社区版功能对比</a>
</div>
<div class='toolbar-list-item'>
<a href="/help/articles/4191">SSH 公钥设置</a>
</div>
<div class='toolbar-list-item'>
<a href="/help/articles/4194">如何处理代码冲突</a>
</div>
<div class='toolbar-list-item'>
<a href="/help/articles/4232">仓库体积过大，如何减小？</a>
</div>
<div class='toolbar-list-item'>
<a href="/help/articles/4279">如何找回被删除的仓库数据</a>
</div>
<div class='toolbar-list-item'>
<a href="/help/articles/4283">Gitee 产品配额说明</a>
</div>
<div class='toolbar-list-item'>
<a href="/help/articles/4284">GitHub仓库快速导入Gitee及同步更新</a>
</div>
<div class='toolbar-list-item'>
<a href="/help/articles/4328">什么是 Release（发行版）</a>
</div>
<div class='toolbar-list-item'>
<a href="/help/articles/4354">将 PHP 项目自动发布到 packagist.org</a>
</div>
</div>
</div>
<div class='toolbar-help-search-reseult'>
<div class='toolbar-help-flex-column'>
<div class='ui centered inline loader toolbar-help-loader'></div>
<div class='toolbar-list'></div>
<div class='toolbar-help-link-to-help'>
<a target="_blank" href="">查看更多搜索结果</a>
</div>
</div>
</div>
</div>
</div>
<script>
  var opt = { position: 'left center'};
  var $helpSideToolbar = $('.button.toolbar-help');
  var $toolbarRoll = $('.toolbar-roll');
  
  $(function() {
    if (false) {
      $helpSideToolbar.popup(opt).popup({lastResort:'left center'})
    } else {
      $helpSideToolbar.popup({lastResort:'left center'}).popup('show', opt);
      setTimeout(function() {
        $helpSideToolbar.popup('hide', opt);
      }, 3000);
    }
  
    if ($toolbarRoll.length) {
      setInterval(function() {
        var $nextActiveLink = $toolbarRoll.find('a.active').next();
        if (!$nextActiveLink.length) {
          $nextActiveLink = $toolbarRoll.find('a:first-child');
        }
        $nextActiveLink.attr('class', 'active').siblings().removeClass('active init');
      }, 5000);
    }
  })
</script>

<div class='popup button' id='home-comment'>
<i class='iconfont icon-comment'></i>
</div>
<div class='ui popup dark'>评论</div>
<div class='toolbar-appeal popup button'>
<i class='iconfont icon-report'></i>
</div>
<div class='ui popup dark'>
仓库举报
</div>
<script>
  $('.toolbar-appeal').popup({ position: 'left center' });
</script>

<div class='button gotop popup' id='gotop'>
<i class='iconfont icon-top'></i>
</div>
<div class='ui popup dark'>回到顶部</div>
</div>
<div class='form modal normal-modal tiny ui' id='unlanding-complaint-modal'>
<i class='iconfont icon-close close'></i>
<div class='header'>
登录提示
</div>
<div class='container actions'>
<div class='content'>
该操作需登录 Gitee 帐号，请先登录后再操作。
</div>
<div class='ui orange icon large button ok'>
立即登录
</div>
<div class='ui button blank cancel'>
没有帐号，去注册
</div>
</div>
</div>
<script>
  var $elm = $('.toolbar-appeal');
  
  $elm.on('click', function() {
    var modals = $("#unlanding-complaint-modal.normal-modal");
    if (modals.length > 1) {
      modals.eq(0).modal('show');
    } else {
      modals.modal('show');
    }
  })
  $("#unlanding-complaint-modal.normal-modal").modal({
    onDeny: function() {
      window.location.href = "/signup?from=";
    },
    onApprove: function() {
      window.location.href = "/login?from=";
    }
  })
</script>

<style>
  .side-toolbar .bdsharebuttonbox a {
    font-size: 24px;
    color: white !important;
    opacity: 0.9;
    margin: 6px 6px 0px 6px;
    background-image: none;
    text-indent: 0;
    height: auto;
    width: auto;
  }
</style>
<style>
  #udesk_btn a {
    margin: 0px 20px 167px 0px !important;
  }
</style>
<script>
  (function() {
    $('#project-user-message').popup({
      position: 'left center'
    });
  
  }).call(this);
</script>
<script>
  Gitee.initSideToolbar({
    hasComment: true,
    commentUrl: '/youngyajun/websocket-chatroom-demo#tree_comm_title'
  })
</script>





<script>
  (function() {
    this.__gac = {
      domain: 'www.oschina.net'
    };
  
  }).call(this);
</script>

<script src="https://assets.gitee.com/webpacks/build_status-6c80de070289f47ed94e.bundle.js"></script>
</body>
</html>