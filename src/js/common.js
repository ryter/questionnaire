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
});