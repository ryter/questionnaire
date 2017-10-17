$(function(){
	var $formSections = $('.form__section'),
		$header = $(".header"),
		$headerLinks = $(".item__links"),
		scrollToBlocks = $headerLinks.map(function(){
			var linkHref = $(this).attr("href");
			if (linkHref.length) { return linkHref;
			}
		});

	$(window).scroll(function(){
		activeHeaderLink();
	});

	function activeHeaderLink() {
		var scrollTop = $(window).scrollTop() + $(window).height()*0.9;
		var scrolledItems = scrollToBlocks.map(function(item, index){
			var elemtTop = $(this).offset().top;
			if (elemtTop < scrollTop && elemtTop > $(window).scrollTop()) {
				return this;
			}
		});
		var lastScrolledItem = scrolledItems[0];

		$headerLinks.removeClass('active');
		$('.item__links[href="'+ lastScrolledItem +'"]').addClass('active');

		if($(window).scrollTop() === $(document).height() - $(window).height()) {
			$headerLinks.removeClass('active');
			$('.nav__item:last-child .item__links').addClass('active');
		}
	}
});