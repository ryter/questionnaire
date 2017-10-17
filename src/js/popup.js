$(function(){
	$('.skills-block  .description__btn').click(function(){
		$('body').addClass('open-portfolio');
	});

	$('.close').click(function(){
		$('body').removeClass('open-portfolio');
	});
});