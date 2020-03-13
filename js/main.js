$(document).ready(function(){
	// 배경화면 fadeIn 처리 및 풀스크린 조정
	$('.mainImg').fadeIn().css({
		width: 100+'%',
		height: 100+'%'
	});

	// Title 영역
	$('.koTitle').animate({
		opacity: 1
	}, 2500);
	$('.enTitle').animate({
		opacity: 1
	}, 2500);
	$('.lLine').animate({
		width: 26+'%'
	}, 1800);
	$('.rLine').animate({
		width: 26+'%'
	}, 1800);

	// 캔버스, 패널, 이미지 영역
	var screenWidth = $(window).width();
	var imgWidth = $(window).height()*0.33+1;
	var paddingValue = (screenWidth - imgWidth)/2;

	$('.panel img').css({
		paddingLeft: paddingValue,
		paddingRight: paddingValue
	});

	// 이미지 터치 슬라이드 기능
	var originalLeft = 0; // 처음위치
	var oldLeft = 0; // 나중 위치
	var nowPosition = 0; // 애니메이션 캔버스 인덱스 값
	var isDown = false; // 클릭 된 상태 값

	$('.panel').on({
		// 터치를 누를 때
		touchstart: function(event){
			isDown = true;
			oldLeft = originalLeft = event.originalEvent.touches[0].clientX;
			event.preventDefault();
		},
		// 터치로 이동할 때
		touchmove: function(event){
			if(isDown){
				var distance = oldLeft - event.originalEvent.touches[0].clientX;
				oldLeft = event.originalEvent.touches[0].clientX;
				$(this).animate({
					left: '-='+ distance
				}, 0);
				$(this).stop(true);
			};
			event.preventDefault();
		},

		// 터치를 뗄 때
		touchend:function(event){
			isDown = false;
			var scrWidth = $(window).width();
			if(originalLeft-oldLeft > scrWidth/4){
				movePosition(1);
				if(nowPosition==4){
					$('.btn_right').css({	display: 'none'	})
				};
				if(nowPosition==1){
					$('.btn_left').css({ display: 'inline-block'	})
				};
				$('.header2').eq(nowPosition-1).css({	display: 'none'	});
				$('.explanation').eq(nowPosition-1).css({	display: 'none'	});
			}else if(originalLeft-oldLeft < -scrWidth/4){
				movePosition(-1);
				if(nowPosition==3){
					$('.btn_right').css({	display: 'inline-block'	})
				};
				if(nowPosition==0){
					$('.btn_left').css({ display: 'none'	})
				};
				$('.header2').eq(nowPosition).css({	display: 'block' });
				$('.explanation').eq(nowPosition).css({	display: 'block' });
			};
			$(this).animate({
				left: -nowPosition*100+'%'
			}, 300);
			event.preventDefault();
		}
	});


	// 오른쪽 버튼 페이드인 효과
	$('.btn_right').fadeIn(1800);

	// 오른쪽 버튼 클릭 시
	$('.btn_right').click(function(){
		movePosition(1);
		$('.panel').animate({
			left: -nowPosition*100+'%'
		});

		if(nowPosition==4){
			$('.btn_right').css({
				display: 'none'
			})
		};
		if(nowPosition==1){
			$('.btn_left').css({
				display: 'inline-block'
			})
		};
		$('.header2').eq(nowPosition-1).css({
			display: 'none'
		});
		$('.explanation').eq(nowPosition-1).css({
			display: 'none'
		});
	});

	// 왼쪽 버튼 클릭 시
	$('.btn_left').click(function(){
		movePosition(-1);
		$('.panel').animate({
			left: -nowPosition*100+'%'
		})
		if(nowPosition==3){
			$('.btn_right').css({
				display: 'inline-block'
			})
		};
		if(nowPosition==0){
			$('.btn_left').css({
				display: 'none'
			})
		};

		$('.header2').eq(nowPosition).css({
			display: 'block'
		});
		$('.explanation').eq(nowPosition).css({
			display: 'block'
		});
	});

	// Panel 영역
	$('.panel img').fadeIn(1800);

	// Description 영역
	var hHeight = $('.header2').height();
	var pHeight = $('.explanation').height();
	var desHight = hHeight + pHeight;

	$('.description').css({
		height: desHight+30,
		display: 'none'
	});

	$('.description').fadeIn(1000);

	// more 영역
	$('.btn_more').fadeIn(1800);
	$('.btn_more').click(function(){
		switch(nowPosition){
			case 0:
				$('.more_link').attr('href', 'list01_history.html');
				break;
			case 1:
				$('.more_link').attr('href', 'list02_etymology.html');
				break;
			case 2:
				$('.more_link').attr('href', 'list03_cultivation.html');
				break;
			case 3:
				$('.more_link').attr('href', 'list04_classification.html');
				break;
			case 4:
				$('.more_link').attr('href', 'list05_efficacy.html');
				break;
		};
	});


	function movePosition(direction){
		var changePosition = nowPosition + direction;

		if(changePosition>=0 && changePosition<5){
			nowPosition = changePosition;
		};
	};

});
