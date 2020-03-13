$(document).ready(function(){
	// 전체화면 페이드 효과

	$('.cover').fadeOut(1500).fadeIn(1500);
	setInterval(function(){
		$('.cover').fadeOut(1500).fadeIn(1500);
	}, 3000);

	// 배경 이미지 사이즈 설정
	$('.splashImg').fadeIn(0).css({
		width: 100+'%',
		height: 100+'%'
	});

	// Title 영역 재설정
	$('.lLine').animate({
		width: 38+'%'
	}, 1800);
	$('.header').fadeIn(1800);
	$('.rLine').animate({
		width: 15+'%'
	}, 1800);
});
