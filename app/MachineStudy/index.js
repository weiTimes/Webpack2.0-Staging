// node库
import 'normalize.css';
import store from 'store';
import 'swiper/dist/css/swiper.min.css';
import swiper from 'swiper';
import 'smartbox/source/jquery.smartbox.min.css';
import smartbox from 'smartbox/source/jquery.smartbox.min.js';
import Mock from 'mockjs';



// 功能组件
import HeaderComponent from './components/header.html';

// 第三方库
import '../lib/css/liMarquee.css';
import '../lib/css/zoomify.min.css';
import '../lib/js/jquery.validate.js';
import '../lib/js/TabSwitch.js';
import '../lib/js/jquery.liMarquee.js';
import '../lib/js/zoomify.min.js';

// scss
import '../lib/css/normaluse.scss';
import './index.scss';


// 1. 先插入公共组件
$('.machine-study').html(HeaderComponent);
// 2. 再导入相关的js
require('./js/public.js');

/**
 * tab切换
 */
$('.tabs').myTab({
	operate: 'mouseover',
	time: 3000,
	auto: false,
	delayTime: 0
});

// 表单验证
$('form').validate({
	type: {
		isChecked: function(value, errorMsg, el) {
			var i = 0;
			var $collection = $(el).find('input:checked');
			if (!$collection.length) {
				return errorMsg;
			}
		}
	},
	onFocus: function() {
		this.parent().addClass('active');
		return false;
	},
	onBlur: function() {
		var $parent = this.parent();
		var _status = parseInt(this.attr('data-status'));
		$parent.removeClass('active');
		if (!_status) {
			$parent.addClass('error');
		}
		return false;
	}
});

/**
 * 弹框
 * @type {String}
 */
$("#basic").smartbox({
	title: '标题',
	footer: '底部',
	width: 500,
	height: 300,
	content: '<p class="introduce_msg">smartbox.js 是一款基于jquery 的<span style="color: red;">开源的</span>弹出层插件，它小巧但功能强大，允许用户在一个界面同时弹出多个对话框。弹出的内容支持多种形式，样式简洁多样。想要了解更多可以查看<a target="_blank" href="http://smartbox.huangsw.com/cn/introduce.html">官方文档</a>。 查看源码以及demo可以访问<a href="https://github.com/huangshuwei/jquery.smartbox" target="_blank">我的github</a>。</p>',
	isAutoShow: false
});

$("#basic_open").click(function() {
	$("#basic").smartbox("open");
});

/**
 * 数据mock
 */
let data = Mock.mock({
	// 属性 list 的值是一个数组，其中含有 1 到 10 个元素
	'list|1-10': [{
		// 属性 id 是一个自增数，起始值为 1，每次增 1
		'id|+1': 1
	}]
});
// 输出结果
console.log(JSON.stringify(data, null, 4));

// @ 占位符
let data2 = Mock.mock({
	name: {
		first: '@FIRST',
		middle: '@FIRST',
		last: '@LAST',
		full: '@first @middle @last'
	}
});
console.log(JSON.stringify(data2, null, 4));

/**
 *  是否显示回到顶部按钮
 */
showToTopButton();

// 用户的登录退出
let userInfo = store.get('user');
// 如果有用户名，则显示用户名
if (userInfo) {
	$('.had-login').remove('hide').html(`hello, ${store.get('user').name}, 点击退出`);
}
// 未登录状态的点击事件
$('.un-login').on('click', function() {
	store.set('user', {
		name: 'yewei',
		age: '100'
	});
	$(this).addClass('hide');
	$('.had-login').removeClass('hide').html(`hello, ${store.get("user").name}, Click Logout`);
});
// 登录状态的点击事件
$('.had-login').on('click', function() {
	store.remove('user');
	$(this).addClass('hide');
	$('.un-login').removeClass('hide');
});


// swiper
let mySwiper = new Swiper('.swiper-container-banner', {
	loop: true,
	autoplay: 2000,
	speed: 1000,
	autoplayDisableOnInteraction: false,
	grabCursor: true,
	// 如果需要分页器
	pagination: '.swiper-pagination',

	// 如果需要前进后退按钮
	nextButton: '.swiper-button-next',
	prevButton: '.swiper-button-prev',

	// 如果需要滚动条
	scrollbar: '.swiper-scrollbar',
});

// swiper滚屏展示
let mySwiperBox = new Swiper('.swiper-container-box', {
	slidesPerView: 5,
	centeredSlides: true,
	loop: true,
	autoplay: 2000,
	speed: 1000,
	autoplayDisableOnInteraction: false,
	grabCursor: true,
	// 如果需要分页器
	pagination: '.swiper-pagination',

	// 如果需要前进后退按钮
	nextButton: '.swiper-button-next',
	prevButton: '.swiper-button-prev',

	// 如果需要滚动条
	scrollbar: '.swiper-scrollbar',
});

// 回到顶部
$('.to-top').click(() => {
	$('html, body').animate({
		scrollTop: 0
	}, 'slow');
	return false;
});

// fetch
fetch('http://lf.snssdk.com/neihan/service/tabs/?essence=1&iid=3216590132&device_id=32613520945&ac=wifi&channel=360&aid=7&app_name=joke_essay&version_code=612&version_name=6.1.2&device_platform=android&ssmix=a&device_type=sansung&device_brand=xiaomi&os_api=28&os_version=6.10.1&uuid=326135942187625&openudid=3dg6s95rhg2a3dg5&manifest_version_code=612&resolution=1450*2800&dpi=620&update_version_code=6120', {
		mode: "no-cors"
	})
	.then((res) => {
		console.log(res);
	});

/**
 * 无缝滚动
 */
$('.dowebok').liMarquee();

function showToTopButton() {
	$(window).scroll(function() {
		let scrollValue = $(window).scrollTop();
		scrollValue > 100 ? $('.to-top').fadeIn() : $('.to-top').fadeOut();
	});
}

/**
 * 图片缩放
 */
$('.zoomify').zoomify();