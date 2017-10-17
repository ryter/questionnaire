$(function(){
	var $pageInputs = $('input');

	$pageInputs.focus(function(){
		$(this).closest('.form-group').addClass('change');
	});

	$pageInputs.blur(function(){
		var $this = $(this),
			value = $this.val();
		if(!value) {
			$this.closest('.form-group').removeClass('change');
		}
	});

	//инициализация библиотеки для стилизации селектов
	$('select').minimalect({
		placeholder: 'Год рождения'
	});

	$('.minict_wrapper ul').niceScroll({
		cursorcolor:"#d9d9d9",
		cursorwidth: "4px"
	});

	$('.range').slider({
		value: 10,
		step: 0.1,
		min: 1,
		max: 10,
		tooltip: 'hide'
	});
});