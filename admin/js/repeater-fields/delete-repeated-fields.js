(function($) {
	'use strict';

	$(document).ready(function() {
		// delete block and data button
		$('.gidi-flights-repeater-container').on(
			'click',
			'.repeater-container-wrap button.delete-form',
			function() {
				const me = $(this),
					nounce = gidi_flights_data.heartbeat.nounce,
					id = me.data('deletable');

				const decision = confirm(
					'Do you really want to delete this passenger?'
				);

				if (decision) {
					if (id !== '') {
						$.ajax({
							url:
								gidi_flights_data.heartbeat.url +
								'gidi-flights/v1/passengers/' +
								id,
							method: 'DELETE',
							headers: {
								'X-WP-Nonce': nounce
							},
							data: {
								title: 'Hello LoverBoi'
							}
						})
							.done(response => {
								if (response)
									me.closest('div.g3-container').remove();
							})
							.error(err => console.log(err));
					} else {
						me.closest('div.g3-container').remove();
						// console.warn('The Deletable id is missing');
					}
				}

				return false;
			}
		);
	});
})(jQuery);
