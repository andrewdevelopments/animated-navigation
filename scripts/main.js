(function ($) {
	'use strict';

	$('.burger').on('click', function() {
		$(this).toggleClass('icon-active');
		$('.navbar').removeClass('active-submenu');
		$('.item-with-children').removeClass('active');

		setTimeout(function() {
			$('.navbar').toggleClass('icon-active');
		}, 300);
	});
	$('.item-with-children a').each(function() {
		$(this).on('click', function() {
			$('.navbar').addClass('active-submenu');
			$(this).parent().addClass('active');
		});
	});
	$('.back').on('click', function() {
		$('.navbar').removeClass('active-submenu');
		$('.item-with-children').removeClass('active');
	});

})(jQuery);
