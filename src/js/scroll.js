$(function(){
	var $formSections = $('.form__section');
	console.log($formSections);

	$(window).scrollTop(0, 0);

	$formSections.scrollex({
		enter: function() {
			$(this).addClass('active');
		},
		leave: function() {
			$(this).removeClass('active');
		}
	});

});