/**
 * 公共区域模块
 */

import '../scss/public.scss';

// 导航栏固定在顶部头部的方法
keepNavTop();


// 在导航条给当前页的链接加上标记
isCurrent();

function isCurrent() {

	let href = location.href;
	$.each($('.machine-nav__link'), function(i, n) {
		let splitLink = splitLinkFn($(this).attr('href'));
		if (href.indexOf(splitLink) !== -1) {
			$(this).addClass('current');
		}
	});
}

// 获得导航栏的a链接中的地址 例如index.html
function splitLinkFn(link) {
	let splitArr = link.split('/');
	return splitArr[splitArr.length - 1];
}

function keepNavTop() {
	var $win = $(window)

	var $nav = $('.machine-nav');

	var navTop = $('.machine-nav').length && $('.machine-nav').offset().top;

	var isFixed = 0;

	processScroll()

	$win.on('scroll', processScroll);

	function processScroll() {

		var i, scrollTop = $win.scrollTop();

		if (scrollTop >= navTop && !isFixed) {

			isFixed = 1;

			$nav.addClass('nav-fixed');

		} else if (scrollTop <= navTop && isFixed) {

			isFixed = 0;

			$nav.removeClass('nav-fixed');

		}
	}
}