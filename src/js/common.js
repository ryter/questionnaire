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

	//стилизованный сколл в селекте
	$('.minict_wrapper ul').niceScroll({
		cursorcolor:"#d9d9d9",
		cursorwidth: "4px"
	});

	//слайдер навыков js
	$('.range').slider({
		value: 10,
		step: 0.01,
		min: 0,
		max: 10,
		tooltip: 'hide'
	});
});