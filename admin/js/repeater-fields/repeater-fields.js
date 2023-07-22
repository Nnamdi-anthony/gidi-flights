(function($) {
	'use strict';

	$(document).ready(function() {

		// repeater field proper
		$('.gidi-flights-repeater-container').on(
			'click',
			'.repeater-container-wrap button.insert-new-passenger',
			function() {
				$(this)
					.closest('.repeater-container-wrap')
					.find('.passenger-repeater-body')
					.append($(this).data('row'));

				return false;
			}
		);
	});
})(jQuery);
