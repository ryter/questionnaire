$(function(){
	var $body = $('body'),
		$headerMenuBtn = $('.header__menu-btn');

	//анимация перехода от ссылок-якорей к целевым елементам
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
			padding: 30
		});
	});

	//заполнение моб.меню ссылками
	$('.header__nav').clone().appendTo('.mobile-menu');

	//кнопка открытия/закрытия моб.меню
	$headerMenuBtn.click(function(){
		$(this).toggleClass('active');
		$body.toggleClass('menu-open');
	});
});