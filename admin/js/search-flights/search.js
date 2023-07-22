(function($) {
	'use strict';

	$(document).ready(function() {
		const arrival_date_parent = $('#passenger_arrival_date').parent(),
			origin_flight = $('#passenger_origin'),
			destination_flight = $('#passenger_destination'),
			departure_date = $('#passenger_departure_date'),
			arrival_date = $('#passenger_arrival_date'),
			trip_type = $('#passenger_trip_type'),
			searchFlightResults = $('#flights_search_results'),
			testingAPI_Mode = false,
			// date function
			getDate = element => {
				var date;
				var dateFormat = 'yy-mm-dd';

				try {
					date = $.datepicker.parseDate(dateFormat, element.value);
				} catch (error) {
					console.error(error);
					date = null;
				}

				return date;
			},
			// selection templates
			selectionTemplate = repo => {
				return repo.airportName || repo.text;
			},
			// template results function
			templateResults = repo => {
				if (repo.loading) {
					return repo.text;
				}

				var markup =
					"<div class='select2-result-repository clearfix'>" +
					"<div class='select2-result-repository__meta'>" +
					"<div class='select2-result-repository__title'>" +
					'(' +
					repo.code +
					') ' +
					repo.airportName +
					', ' +
					repo.state;
				('</div>');

				markup +=
					"<div class='select2-result-repository__statistics'>" +
					"<div class='select2-result-repository__watchers'>" +
					repo.countryName +
					'</div>' +
					'</div>' +
					'</div></div>';

				return markup;
			},
			btn = $('#searchFlightsBtn');

		// same height
		const wrPpa_as = $(
			'#primary-selected-flight-data .g3-hold-fort'
		).outerHeight();
		$(
			'#primary-selected-flight-data > div > div > div.g3-one-fifth > div'
		).each(function() {
			$(this).css({ 'min-height': wrPpa_as + 'px' });
		});

		// set the arrival date to display or not
		trip_type.on('change', function() {
			var me = $(this);
			var vallUe = me.val();
			var folField = $('#passenger_class');
			var folFieldPrnt = folField.parent();

			if (vallUe == 'one_way') {
				folFieldPrnt
					.removeClass('g3-one-third')
					.addClass('g3-two-third');
				arrival_date_parent.hide();
			} else {
				folFieldPrnt
					.addClass('g3-one-third')
					.removeClass('g3-two-third');
				arrival_date_parent.show();
			}
		});

		// make for the selection of airports
		origin_flight.select2({
			ajax: {
				url:
					gidi_flights_data.travelden.travelden_api_base_url +
					'/airports',
				dataType: 'json',
				delay: 250,
				data: function(params) {
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
				processResults: function(data, params) {
					data.forEach(function(d, i) {
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
			placeholder: 'From',
			escapeMarkup: function(markup) {
				return markup;
			},
			minimumInputLength: 2,
			templateResult: templateResults,
			templateSelection: selectionTemplate
		});

		// another destination
		destination_flight.select2({
			ajax: {
				url:
					gidi_flights_data.travelden.travelden_api_base_url +
					'/airports',
				dataType: 'json',
				delay: 250,
				data: function(params) {
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
				processResults: function(data, params) {
					data.forEach(function(d, i) {
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
			placeholder: 'To',
			escapeMarkup: function(markup) {
				return markup;
			},
			minimumInputLength: 2,
			templateResult: templateResults,
			templateSelection: selectionTemplate
		});

		const startingFrom = departure_date
				.datepicker({
					defaultDate: '+0D',
					dateFormat: 'yy-mm-dd',
					changeMonth: true,
					numberOfMonths: 1,
					minDate: '+0D',
					maxDate: '+9M'
				})
				.on('change', function() {
					endingAt.datepicker('option', 'minDate', getDate(this));
				}),
			endingAt = arrival_date
				.datepicker({
					defaultDate: '+0D',
					dateFormat: 'yy-mm-dd',
					changeMonth: true,
					numberOfMonths: 1,
					minDate: '+0D',
					maxDate: '+2M'
				})
				.on('change', function() {
					startingFrom.datepicker('option', 'maxDate', getDate(this));
				});

		searchFlightResults.html(
			"<div class='sample-flexxy'><h1> <i class='fa-3x fas fa-plane'></i> <br /> Please Search For A Flight </h1></div>"
		);
		// when the get trip cost button is clicked
		btn.on('click', function() {
			var origin_flight_val = origin_flight.val(),
				destination_flight_val = destination_flight.val(),
				arrival_date_val = arrival_date.val(),
				departure_date_val = departure_date.val(),
				trip_type_val = trip_type.val(),
				travel_class_val = $('#passenger_class').val(),
				adult_passengers_val = $('#number_adult_passengers').val(),
				child_passengers_val = $('#number_child_passengers').val(),
				infant_passengers_val = $('#number_infant_passengers').val(),
				travelling_format,
				passengers_format,
				cabinType_format,
				settings;

			// reformat data
			passengers_format = '\n\t"passengers": [';
			passengers_format +=
				'\n\t\t{\n\t\t\t"quantity": ' +
				adult_passengers_val +
				',\n\t\t\t"code": "ADULT"\n\t\t}\n\t';
			if (child_passengers_val > 0) {
				passengers_format +=
					',\n\t\t{\n\t\t\t"quantity": ' +
					child_passengers_val +
					',\n\t\t\t"code": "CHILD"\n\t\t}\n\t';
			}
			if (infant_passengers_val > 0) {
				passengers_format +=
					',\n\t\t{\n\t\t\t"quantity": ' +
					infant_passengers_val +
					',\n\t\t\t"code": "INFANT"\n\t\t}\n\t';
			}
			passengers_format += ']';

			// travalling format
			travelling_format = '\n\t"segments": [';

			// testing mode only
			if (testingAPI_Mode) {
				travelling_format +=
					'\n\t\t{\n\t\t\t"origin": "' +
					'LOS' +
					'",\n\t\t\t"arriving": "' +
					'KAN' +
					'",\n\t\t\t"departureDate": "' +
					'2019-01-24' +
					'T00:00:00"\n\t\t}';
				travelling_format +=
					',\n\t\t{\n\t\t\t"origin": "' +
					'KAN' +
					'",\n\t\t\t"arriving": "' +
					'LOS' +
					'",\n\t\t\t"departureDate": "' +
					'2019-01-25' +
					'T00:00:00"\n\t\t}';
			} else {
				travelling_format +=
					'\n\t\t{\n\t\t\t"origin": "' +
					origin_flight_val +
					'",\n\t\t\t"arriving": "' +
					destination_flight_val +
					'",\n\t\t\t"departureDate": "' +
					departure_date_val +
					'T00:00:00"\n\t\t}';

				if (trip_type_val == 'return_trip') {
					travelling_format +=
						',\n\t\t{\n\t\t\t"origin": "' +
						destination_flight_val +
						'",\n\t\t\t"arriving": "' +
						origin_flight_val +
						'",\n\t\t\t"departureDate": "' +
						arrival_date_val +
						'T00:00:00"\n\t\t}';
				}
			}
			travelling_format += ']';

			// cabin type format
			if (testingAPI_Mode) {
				cabinType_format =
					'\n\t"preferredCabin": "' + 'Economy' + '"\n';
			} else {
				cabinType_format =
					'\n\t"preferredCabin": "' + travel_class_val + '"\n';
			}

			// ajax settings
			settings = {
				url:
					gidi_flights_data.travelden.travelden_api_base_url +
					'/search/itineraries',
				method: 'POST',
				dataType: 'json',
				timeout: 0,
				headers: {
					'Content-Type': 'application/json',
					'X-Api-Key': gidi_flights_data.travelden.travelden_api_key,
					'X-Auth-Token':
						gidi_flights_data.travelden.travelden_api_token
				},
				data:
					'{' +
					travelling_format +
					',' +
					passengers_format +
					',\n\t"sessionId": "unique_session_id",' +
					cabinType_format +
					'}'
			};

			// send a loading icon for the user
			searchFlightResults.html(
				'<div class="sk-folding-cube"><div class="sk-cube1 sk-cube"></div><div class="sk-cube2 sk-cube"></div><div class="sk-cube4 sk-cube"></div><div class="sk-cube3 sk-cube"></div></div>'
			);

			$.ajax(settings)
				.done(function(response) {
					var search_info = response.flightSearchRequest,
						search_results = response.pricedItineraryWSResponses,
						flightPlan = '',
						searchResHtml =
							"<div class='search-results-html-wrapper'>";
					searchResHtml += "<div class='g3-container'>";

					// console.log(search_results);

					$.each(search_results, (index, apiResponse) => {
						flightPlan =
							apiResponse.airItineraryWSResponse
								.originDestinationWSResponses;

						// begin row
						searchResHtml += "<div class='g3-hold-fort'>";
						searchResHtml += "<div class='g3-four-sixth'>";

						$.each(flightPlan, (index, itinery) => {
							searchResHtml +=
								"<div class='g3-hold-fort g3-reset-fort'>";

							// flight carrier name
							searchResHtml += "<div class='g3-two-third'>";
							searchResHtml +=
								'<h1 class="airline-name"> ' +
								apiResponse.airline +
								'</h1>';
							searchResHtml +=
								'<h4 class="itinery-title"> Departing From \t' +
								itinery.originAirport +
								' </h4>';
							searchResHtml +=
								'<h4>By ' +
								new Date(
									itinery.departureDateTime
								).toLocaleTimeString([], {
									hour: '2-digit',
									minute: '2-digit',
									hour12: false
								}) +
								' </h4>';
							searchResHtml += '<hr class="plain-lina"/>';
							searchResHtml +=
								'<h4 class="itinery-title"> Arriving at \t' +
								itinery.destinationAirport +
								' </h4>';
							searchResHtml +=
								'<h4>By ' +
								new Date(
									itinery.arrivalDateTime
								).toLocaleTimeString([], {
									hour: '2-digit',
									minute: '2-digit',
									hour12: false
								}) +
								' </h4>';
							searchResHtml += '</div>';

							// extra details itinery
							searchResHtml += "<div class='g3-one-third'>";
							searchResHtml +=
								'<h2> <i class="fas fa-clock"></i>  ' +
								itinery.duration +
								' </h2>';
							searchResHtml +=
								'<h2>' + itinery.numberOfStops + ' Stops </h2>';
							searchResHtml +=
								'<h2> <i class="fas fa-briefcase"></i>  ' +
								itinery.cabin +
								' </h2>';
							searchResHtml += '</div>';

							// close or reset fort
							searchResHtml += '</div>';
						});

						// close five-sixth
						searchResHtml += '</div>';

						// price of the fare and add button
						// var price = new Intl.NumberFormat('en-Us',)
						searchResHtml +=
							"<div class='g3-one-sixth'><div class='parent-0-wrap'><div class='parent-1-wrap'>";
						searchResHtml +=
							'<h1>' +
							gidi_flights_data.currency_symbol +
							apiResponse.pricingInfoWSResponse.totalFare +
							"</h1><button data-currentFlight='" +
							JSON.stringify(apiResponse) +
							"' type='button' class='button choose-this-trip'> Choose This </button>";
						searchResHtml += '</div></div></div>';

						// close the row
						searchResHtml += '</div>';
						searchResHtml += '<hr class="plain-lina"/>';
					});

					searchResHtml += '</div>';
					searchResHtml += '</div>';

					searchFlightResults.html(searchResHtml);
					const wrPpa = $(
						'.search-results-html-wrapper .g3-hold-fort'
					).outerHeight();
					$('.parent-0-wrap').each(function() {
						$(this).css({ 'min-height': wrPpa + 'px' });
					});

					$('.choose-this-trip.button').each(function() {
						$(this).click(function() {
							var contents = $(this).attr('data-currentFlight');
							$("input[name='selected_flights_data']")
								.val(contents)
								.trigger('change');
							var curParent = $(this)
								.parent()
								.parent()
								.parent()
								.parent();

							var movingPar = $(
								'#primary-selected-flight-data .g3-container'
							);
							movingPar.html('');
							curParent.clone().appendTo(movingPar);
						});
					});
				})
				.error(response => {
					// console.log(response);
					searchFlightResults.html(
						'<h2>Sorry an error occurred, please try again!</h2><h4> <strong>Reason:</strong> ' +
							response.responseText +
							'</h4>'
					);
				});
		});

		// confirm that the value for selected flight has changed
		$("input[name='selected_flights_data']").on('change', function() {
			var curVal = $(this).val();
			var convCurVal = JSON.parse(curVal);
			console.log(JSON.parse(curVal));
			var priceContainer = $(
				'#gidi_flights_bookings_booking_price .inside'
			);
			var priceHtml =
				"<h1 class='set-text-center'> <strong>Total Fare: " +
				gidi_flights_data.currency_symbol +
				convCurVal.pricingInfoWSResponse.totalFare +
				'</strong></h1>';
			priceContainer.html(priceHtml);
		});
	});
})(jQuery);
