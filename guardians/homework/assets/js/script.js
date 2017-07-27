$(document).ready(function(){



	// YEAR LINK<><><><><><><><><><><><><><><><><><><><>

	$(".year-link").on('click', function(event) {
		$(".timeline-year").scrollTop();
		var year = $(this).data('year')
		console.log(year);

	//HIDE AND SHOW<><><><><><><><><><><><><><><><><><>

		if(!$(".year-" + year).hasClass('show')){
			$(".show").removeClass('show');
			$(window).scrollTo(".timeline", 200);//Scroll function

		}else {
			$(window).scrollTo(".main-title-section", 200);
		}

		$(".year-" + year).toggleClass("show");//Makes window scroll up when you press the same year.
	});

});
