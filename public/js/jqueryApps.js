/* eslint-disable no-use-before-define */
/* eslint-disable radix */
/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
/* eslint-disable func-names */
(function ($) {
	$(document).ready(function () {
		const departureCity = $('#departure_city');
		const arrivalCity = $('#arrival_city');
		const departureDate = $('#departure_date');
		const arrivalDate = $('#arrival_date');
		const moreOptions = $('#more_options');
		const numTravellersShow = $('#num_of_travellers');
		const numAdults = $('#num_adults');
		const numChild = $('#num_child');
		const numInfant = $('#num_infant');
		const returnTripBtn = $('#return_trip');
		const oneWayTripBtn = $('#one_way_trip');
		const numTravellersContent = $('#num_of_travllers_content');
		const countNumTravellers = $('.num_amount_trallers');
		const closeModalBtn = $('.close-button');

		// template results function
		const templateResults = repo => {
			if (repo.loading) {
				return repo.text;
			}

			let markup = `<div class='select2-result-repository clearfix'>
				<div class='select2-result-repository__meta'>
				<div class='select2-result-repository__title'>
				(
				${repo.code}
				) 
				${repo.airportName}
				,
				${repo.state}
			</div>`;

			markup +=
				"<div class='select2-result-repository__statistics'>" +
				"<div class='select2-result-repository__watchers'>" +
				repo.countryName +
				'</div>' +
				'</div>' +
				'</div></div>';

			return markup;
		};

		// date function
		const getDate = element => {
			let date;
			const dateFormat = 'yy-mm-dd';

			try {
				date = $.datepicker.parseDate(dateFormat, element.value);
			} catch (error) {
				date = null;
			}

			return date;
		};

		// selection templates

		const selectionTemplate = repo => {
			return repo.airportName || repo.text;
		};

		// add the show-modal class
		numTravellersShow.on('click', function () {
			numTravellersContent.addClass('g3-show-modal');
		});

		// remove the show-modal class
		closeModalBtn.on('click', function () {
			numTravellersContent.removeClass('g3-show-modal');
		});

		$('.g3-close-button.commons').on('click', function () {
			$('#prefrerred_class').toggleClass('g3-show-modal');
		});

		// hide or show more options
		moreOptions.on('click', function () {
			$('.otherOptions-content').toggleClass('no-display');
			e.preventDefault();
		});

		// check the right trip button
		$('.choosing-trip-button').each(function () {
			$(this).click(function (e) {
				// check the data type current
				const isshowReturnTrip = $(this).data('return');

				if (isshowReturnTrip) {
					// set the trip type
					$('#trip_type_choice').val('return_trip');

					// arrivate date
					arrivalDate.parent().show();

					$(this).addClass('btn-danger button'); // change the highlighting style
					oneWayTripBtn.removeClass('btn-danger button'); // change the highlighting style

					departureDate.parent().removeClass('g3-two-fifth'); // correct the width of the departure date parent
					departureDate.parent().addClass('g3-one-fifth'); // correct the width of the departure date parent
				} else {
					// set the trip type
					$('#trip_type_choice').val('one_way_trip');

					// arrival date
					arrivalDate
						.val('')
						.parent()
						.hide();

					$(this).addClass('btn-danger button'); // change the highlighting style
					returnTripBtn.removeClass('btn-danger button'); // change the highlighting style

					departureDate.parent().addClass('g3-two-fifth'); // correct the width of the departure date parent
					departureDate.parent().removeClass('g3-one-fifth'); // correct the width of the departure date parent
				}

				e.preventDefault();
			});
		});

		// init the departure city
		departureCity.select2({
			ajax: {
				url:
					gidi_flights_data.travelden.travelden_api_base_url +
					'/airports',
				dataType: 'json',
				delay: 250,
				data(params) {
					return {
						city: params.term
					};
				},
				headers: {
					'X-Api-Key': gidi_flights_data.travelden.travelden_api_key,
					'X-Auth-Token':
					gidi_flights_data.travelden.travelden_api_token
				},
				method: 'GET',
				timeout: 0,
				processResults(data, params) {
					data.forEach(function (d) {
						d.id = d.code; // or e.id = e.userId;
					});
					params.page = params.page || 1;
					return {
						results: data,
						pagination: {
							more: params.page * 10 < data.length
						}
					};
				},
				cache: true
			},
			placeholder: 'Enter Departure City',
			escapeMarkup(markup) {
				return markup;
			},
			minimumInputLength: 2,
			width: '100%',
			templateResult: templateResults,
			templateSelection: selectionTemplate
		});

		// another destination
		arrivalCity.select2({
			ajax: {
				url:
					gidi_flights_data.travelden.travelden_api_base_url +
					'/airports',
				dataType: 'json',
				delay: 250,
				data(params) {
					return {
						city: params.term
					};
				},
				headers: {
					'X-Api-Key': gidi_flights_data.travelden.travelden_api_key,
					'X-Auth-Token':
					gidi_flights_data.travelden.travelden_api_token
				},
				method: 'GET',
				timeout: 0,
				processResults(data, params) {
					data.forEach(function (d) {
						d.id = d.code; // or e.id = e.userId;
					});
					params.page = params.page || 1;
					return {
						results: data,
						pagination: {
							more: params.page * 10 < data.length
						}
					};
				},
				cache: true
			},
			placeholder: 'Enter Arrival City',
			escapeMarkup(markup) {
				return markup;
			},
			minimumInputLength: 2,
			width: '100%',
			templateResult: templateResults,
			templateSelection: selectionTemplate
		});

		// switching of dates
		const startingFrom = departureDate
			.datepicker({
				defaultDate: '+0D',
				dateFormat: 'yy-mm-dd',
				changeMonth: true,
				numberOfMonths: 1,
				minDate: '+0D',
				maxDate: '+9M'
			})
			.on('change', function () {
				endingAt.datepicker('option', 'minDate', getDate(this));
			});

		const endingAt = arrivalDate
			.datepicker({
				defaultDate: '+0D',
				dateFormat: 'yy-mm-dd',
				changeMonth: true,
				numberOfMonths: 1,
				minDate: '+0D',
				maxDate: '+2M'
			})
			.on('change', function () {
				startingFrom.datepicker('option', 'maxDate', getDate(this));
			});

		// increase and recalibrate travellers number
		$('#num_adults, #num_child, #num_infant').on('change', function () {
			const numChildVal = numChild.val();
			const numInfantsVal = numInfant.val();
			const numAdultsVal = numAdults.val();
			const totalCapacity =
				Number.parseInt(numChildVal) +
				Number.parseInt(numInfantsVal) +
				Number.parseInt(numAdultsVal);
			const maxChildNum = numChild.data('maxpassengers');

			// set the output to the user
			countNumTravellers.html(totalCapacity);
			$('#num_of_travellers_count').val(totalCapacity);

			// set the number of adults
			numAdults.attr(
				'max',
				Math.abs(
					maxChildNum -
					(Number.parseInt(numChildVal) +
						Number.parseInt(numInfantsVal))
				)
			);

			// set the number of children
			numChild.attr(
				'max',
				Math.abs(
					maxChildNum -
					(Number.parseInt(numAdultsVal) +
						Number.parseInt(numInfantsVal))
				)
			);

			// make sure infants are not bigger than adults
			if (numAdultsVal >= 5) {
				numInfant.attr('max', Math.abs(numAdultsVal - maxChildNum));
			} else if (maxChildNum !== totalCapacity) {
				numInfant.attr('max', Math.abs(Number.parseInt(numAdultsVal)));
			} else {
				numInfant.attr('max', Math.abs(Number.parseInt(numInfantsVal)));
			}

			// give a notice for total capacity
			if (totalCapacity !== maxChildNum) {
				$('#capacity-alert').addClass('no-display');
			} else {
				$('#capacity-alert')
					.removeClass('no-display')
					.find('.spit-content')
					.text('The maximum number of travellers allowed is 9.');
			}

			// give a notice for total capacity
			if (numAdultsVal !== numInfantsVal) {
				$('#child-alert').addClass('no-display');
			} else {
				$('#child-alert')
					.removeClass('no-display')
					.find('.spit-content')
					.text(
						'The number of Infants cannot exceed the number of adults. Ratio is 1:1.'
					);
			}
		});

		// change class text
		$('#passenger_class').on('change', function () {
			$('.travllTextClass').text($(this).val());
		});
	});
})(jQuery);
