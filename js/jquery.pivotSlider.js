/**
 * @author Jinwoo Park
 */

// 이미지 슬라이드 만들기

$.fn.pivot = function(options){
	// 변수 선언
	var $target = $(this); // panel 역할
	var $items = $target.children(); // 이미지 영역을 정하고, 쭉 나열
	var $container = $target.wrap('<div></div>').parent();  // 캔버스(보여주는 화면) 역할
	var option = {width: 500, height: 450};
	
	// 매개변수 처리
	$.extend(option, options); // extend(); 객체 확장 메소드로 플러그인 때 사용
	
	// 스타일 처리
	$target.css({
		width: $items.length*option.width,
		height: option.height,
		position: 'absolute'	
	});
	$items.css({
		'float': 'left',
		width: option.width,
		height: option.height
	});	
	$container.css({
		position: 'relative',
		width: option.width,
		height: option.height,
		overflow: 'hidden'
	});
	
	
	// 메소드 이벤트 처리
	var originalLeft = 0; // 처음위치
	var oldLeft = 0; // 나중 위치
	var nowPosition = 0; // 애니메이션 캔버스 인덱스 값
	var isDown = false; // 클릭 된 상태 값
	
	$target.on('mousedown', function(event){
		isDown = true;
		oldLeft = originalLeft = event.clientX;
		event.preventDefault();
	}); 
	
	// 1번째 방법
	$target.on('mousemove', function(event){
		if(isDown){
			var distance =oldLeft-event.clientX;
			oldLeft = event.clientX;
			$target.animate({
				left: '-='+distance
			}, 0);
			$target.stop(true);
		};
		event.preventDefault();
	});
	
	// 2번째 방법
	// $target.on('mousemove', function(event){
		// if(isDown){
			// var distance =event.clientX-oldLeft;
			// oldLeft = event.clientX;
			// $target.animate({
				// left: '+='+distance
			// }, 0);
			// $target.stop(true);
		// };
		// event.preventDefault();
	// });
	$target.on('mouseup', function(event){
		isDown = false;
		
		function movePosition(direction){
			var changePosition = nowPosition + direction;
			
			if(changePosition>=0 && changePosition<$items.length){
				nowPosition = changePosition;
			};
		};
		if(originalLeft-event.clientX > option.width/4){
			movePosition(1);
		}else if(originalLeft-event.clientX < -option.width/4){
			movePosition(-1);
		};
		$target.animate({
			left: -nowPosition*option.width
		}, 300);
		event.preventDefault();		
	});
}



