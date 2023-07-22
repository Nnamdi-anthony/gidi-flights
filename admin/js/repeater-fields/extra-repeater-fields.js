(function($) {
	'use strict';

	$(document).ready(function() {
		// passenger type selection
		$('.gidi-flights-repeater-container').on(
			'change',
			'.repeater-container-wrap .choose_passenger_type',
			function() {
				var crrVal = $(this).val();
				// alert(crrVal);
				if (crrVal == 'infant' || crrVal == 'child') {
					$(this)
						.parent()
						.parent()
						.parent()
						.siblings('.special-contact-wrapper')
						.find('.special-contact')
						.remove();
				} else if (crrVal == 'adult') {
					$(this)
						.parent()
						.parent()
						.parent()
						.siblings('.special-contact-wrapper')
						.html('') // destructive replacement is taken place here within the dom
						.append($(this).data('contact'));
				}
				return false;
			}
		);
	});
})(jQuery);
