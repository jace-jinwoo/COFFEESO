$(document).ready(function(){
	// 전체화면 페이드 효과

  setInterval(function(){
    $('.cover').fadeOut(1000).fadeIn(1000);
  },2000);

	// Title 영역 재설정
	$('.title').fadeIn(1800);
  $('.lLine').animate({
		width: 39+'%'
	}, 1800);
	$('.rLine').animate({
		width: 14+'%'
	}, 1800);
});
