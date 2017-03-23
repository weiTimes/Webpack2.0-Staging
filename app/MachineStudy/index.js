// node库
import 'normalize.css';
import store from 'store';
import swiper from 'swiper';

// 功能组件
import HeaderComponent from './components/header.html';

// scss
import '../lib/css/normaluse.scss';
import './index.scss';

console.log('机器人学院');

// 1. 先插入公共组件
$('.machine-study').append(HeaderComponent);
// 2. 再导入相关的js
require('./js/public.js');

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