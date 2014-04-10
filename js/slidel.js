$.noConflict();

(function($) {
	
	// Document Ready	
	$(document).ready(function() {
		// Init Slider (Инициализация слайдера)
		$('#slider-main ul li').eq(0).addClass('active');
		
		
		// Сдвиг влево
		$('#slider-main .pull-left').click(function(event) {
			// Анулирует значения по умолчанию (т.е. не будет работать переход по ссылке, а просто клик)
			event.preventDefault();
			
			var parent = $('#slider-main ul'),
					currentSlide = $('#slider-main ul li.active'),
					prevSlide = $('#slider-main ul li').eq(currentSlide.index() - 1),
					widthPrevSlide = prevSlide.width();
					countSlides = $('#slider-main ul li').size();
					
			if(currentSlide.index() != 0) {					
				parent.css('left', parent.position().left + widthPrevSlide);
				
				$('#slider-main ul li').eq(currentSlide.index() - 1).addClass('active');
				currentSlide.removeClass('active');
			}
		});
		
		// Сдвиг вправо
		$('#slider-main .pull-right').click(function(e) {
			e.preventDefault();
			
			var parent = $('#slider-main ul'),
					currentSlide = $('#slider-main ul li.active'),
					widthCurSlide = currentSlide.width(),
					countSlides = $('#slider-main ul li').size();
					
			if(currentSlide.index() + 1 != countSlides - 1) {					
				parent.css('left', parent.position().left - widthCurSlide);
				
				$('#slider-main ul li').eq(currentSlide.index() + 1).addClass('active');
				currentSlide.removeClass('active');
			}
		});
	});
