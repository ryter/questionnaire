$(function(){
	var $body = $('body'),
		$headerMenuBtn = $('.header__menu-btn');


	var $header = $(".header"),
		headerHeight = $header.outerHeight(),
		$headerLinks = $(".item__links"),
		scrollToBlocks = $headerLinks.map(function(){
			var linkHref = $(this).attr("href");
			if (linkHref.length) {
				return linkHref;
			}
		});

	activeHeaderLink();

	$(window).scroll(function(){
		activeHeaderLink();
	});


	function activeHeaderLink(){
		var scrollTop = $(window).scrollTop() + headerHeight + 15;
		var scrolledItems = scrollToBlocks.map(function(){
			var elemtTop = $(this).offset().top;
			if (elemtTop < scrollTop) {
				return this;
			}
		});
		var lastScrolledItem = scrolledItems[scrolledItems.length - 1];

		$headerLinks.removeClass('active');
		$('.item__links[href="'+ lastScrolledItem +'"]').addClass('active');
		if($(window).scrollTop() === $(document).height() - $(window).height()) {
			$headerLinks.removeClass('active');
			$('.nav__item:last-child .item__links').addClass('active');
		}
	}






	$(document).on('click', '.scroll-to-element', function(){
		var $this = $(this),
			linkHref = $this.attr('href');

		$('.scroll-to-element').removeClass('active');
		$this.addClass('active');

		if($body.hasClass('menu-open')){
			$headerMenuBtn.removeClass('active');
			$body.removeClass('menu-open');
		}

		$(linkHref).animatescroll({
			scrollSpeed: 1000,
			padding: 60
		});
	});

	$headerMenuBtn.click(function(){
		$(this).toggleClass('active');
		$body.toggleClass('menu-open');
	});
});