/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable react/no-unused-state */
import * as _ from 'lodash';
import React, { Component } from 'react';

export const LoadingIcon = () => {
	return <i className='fas fa-spinner fa-pulse' />;
};

class Flight_Booking_Button extends Component {
	constructor(props) {
		super(props);

		this.goToCheckOutPage = this.goToCheckOutPage.bind(this);
		this.createTempCheckoutData = this.createTempCheckoutData.bind(this);

		this.state = {
			isWorking: false,
			text: 'Book Now'
		};
	}

	/**
	 * create temp checkout
	 *
	 * @memberof Flight_Booking_Button
	 */
	goToCheckOutPage = uuid => {
		window.location = `${
			gidi_flights_data.heartbeat.checkout_url
		}?checkout_uid=${uuid}&expire=1`;
	};

	/**
	 *create and store the choosen data and take the user to the checkout page
	 *
	 * @memberof Flight_Booking_Button
	 */
	createTempCheckoutData = () => {
		const { flightDetails, flightSearchParams } = this.props;

		this.setState({
			isWorking: true,
			text: <LoadingIcon />
		});

		// set the namespace
		const namespace = 'gidi-flights/v1';
		const route = 'temp/checkout';
		const nounce = gidi_flights_data.heartbeat.nounce;
		const headers = {
			'X-WP-Nonce': nounce,
			'Content-Type': 'application/json'
		};
		const tripDataMain = _.first(
			flightSearchParams.originDestinationRequests
		);
		const data = {
			arriving_airport: tripDataMain.destination,
			departing_airport: tripDataMain.origin,
			adult_count: flightSearchParams.adultCount,
			child_count: flightSearchParams.childCount,
			infant_count: flightSearchParams.infantCount,
			class_type: flightSearchParams.cabin,
			full_search_params: JSON.stringify(flightSearchParams),
			full_search_results: JSON.stringify(flightDetails),
			ticket_locale: flightSearchParams.ticketLocale,
			trip_type: flightSearchParams.tripType
		};
		const apiURL =
			gidi_flights_data.heartbeat.url + namespace + '/' + route;

		// init the settings to use jquery for the data fetching
		const jqAjax_Settings = {
			url: apiURL,
			method: 'POST',
			timeout: 0,
			headers,
			data: JSON.stringify(data)
		};

		// send the request
		jQuery
			.ajax(jqAjax_Settings)
			.done(response => {
				this.goToCheckOutPage(response.uuid);
			})
			.error(_err => {
				console.log(_err);
				this.setState({
					isWorking: false,
					text: 'Book Now'
				});
			});
	};

	render() {
		if (!this.state.isWorking) {
			return (
				<>
					<button
						type='button'
						onClick={this.createTempCheckoutData}
						className='button'
					>
						{this.state.text}
					</button>
				</>
			);
		}

		return (
			<>
				<button
					type='button'
					onClick={this.createTempCheckoutData}
					className='button'
					disabled='disabled'
					readOnly='readonly'
				>
					{this.state.text}
				</button>
			</>
		);
	}
}

export default Flight_Booking_Button;
