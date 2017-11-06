$(function(){
	var $slider = $('.range'),
		values = [0, 2.53, 5.03, 10];

	$slider.slider({
		value: 0,
		step: 0.01,
		min: 0,
		max: 10,
		animate: 500,
		tooltip: 'hide'
	}).on('slideStop', function(e){
		$slider.slider('setValue', _getClosest(e.value) );
	});

	function _getClosest(value) {
		var closest = null;
		$.each(values, function(_key, _value) {
			if (closest == null || Math.abs(this - value) < Math.abs(closest - value)) {
				closest = this;
			}
		});
		return closest;
	}
});