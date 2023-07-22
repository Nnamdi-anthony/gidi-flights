/* eslint-disable import/prefer-default-export */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
/* eslint-disable func-names */
/* eslint-disable no-plusplus */
/* eslint-disable no-console */
/* eslint-disable no-restricted-globals */
import * as crypto from 'crypto-js';
import * as _ from 'lodash';
import * as qs from 'query-string';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FlightDetails_Timeline from '../FlightsSearchResults/FlightDetails_Timeline';
import GridColumn from '../Utilities/GridColumn';
import GridContainer from '../Utilities/GridContainer';
import SimpleModal from '../Utilities/SimpleModal';
import BookingCode from './BookingCode';
import './BookingsSuccess_Wrapper.scss'; // custom css stylings
import IterationPlan from './IterationPlan';
import PassengersList from './PassengersList';
import PaymentInstructions from './PaymentInstructions';
import NoLongerAvailable from '../Utilities/NoLongerAvailable';

class BookingsSuccess_Wrapper extends Component {
	constructor(props) {
		super(props);

		this.state = {
			flightDetails: {},
			flightSearch: '',
			numAdults: '',
			numInfants: '',
			numChild: '',
			passengers: [],
			showModalDialog: false,
			departingAirport: '',
			arrivingAirport: '',
			code: '',
			results: false,
			email: '',
			method: '',
			phone_number: ''
		};

		this.showModal = this.showModal.bind(this);
		this.hideModal = this.hideModal.bind(this);
		// this.submitForm = this.submitForm.bind(this);
	}

	componentDidMount() {
		// browser data
		const urlParams = location.search;
		const searchParams = qs.parse(urlParams);

		// set the namespace
		const namespace = 'gidi-flights/v1';
		const route = 'temp/checkout';
		const nounce = gidi_flights_data.heartbeat.nounce;
		const headers = {
			'X-WP-Nonce': nounce,
			'Content-Type': 'application/json'
		};

		const apiURL =
			gidi_flights_data.heartbeat.url +
			namespace +
			'/' +
			route +
			`/${searchParams.type_uid}`;

		// init the settings to use jquery for the data fetching
		const jqAjax_Settings = {
			url: apiURL,
			method: 'GET',
			timeout: 0,
			headers
		};

		// send the request
		jQuery
			.ajax(jqAjax_Settings)
			.done(response => {
				this.setState({
					flightDetails: response.full_search_results,
					flightSearch: response.full_search_params,
					numAdults: response.adult_count,
					numInfants: response.infant_count,
					numChild: response.child_count,
					departingAirport: response.d_airport,
					arrivingAirport: response.a_airport,
					price:
						response.full_search_results.pricingInfoWSResponse
							.totalFare,
					code: response.booking_code,
					passengers: response.passengers,
					email: response.email,
					method: response.payment_method,
					phone_number: response.phone_number,
					results: true
				});
			})
			.error(_err => {
				console.log(_err);
				this.setState({
					results: false
				});
			});
	}

	hideModal() {
		this.setState({
			showModalDialog: false
		});
	}

	showModal() {
		this.setState({
			showModalDialog: true
		});
	}

	render() {
		const {
			flightDetails,
			flightSearch,
			passengers,
			code,
			method,
			price,
			departingAirport,
			email,
			phone_number,
			results,
			arrivingAirport
		} = this.state;

		const trip1aa = flightDetails.airItineraryWSResponse;
		const tripType = _.get(trip1aa, 'directionIndicator');
		const trip1 = _.head(_.get(trip1aa, 'originDestinationWSResponses'));
		const trip2 =
			_.toLower(tripType) !== 'oneway'
				? _.last(_.get(trip1aa, 'originDestinationWSResponses'))
				: false;

		const flightTimelineData = _.get(
			trip1aa,
			'originDestinationWSResponses'
		);

		const tranxCode = code !== '' ? crypto.SHA256(code).toString() : null;

		if (results) {
			return (
				<>
					<GridContainer>
						<GridColumn col='two-third'>
							<BookingCode bookingCode={code} />
							<PaymentInstructions
								booking_method={method}
								amount={price}
								email={email}
								phone_number={phone_number}
								code={tranxCode}
							/>
							<PassengersList
								data={passengers}
								email={email}
								phone={phone_number}
							/>
						</GridColumn>
						<GridColumn col='one-third'>
							<section className='g3-simple-card small-padding booking-card-details'>
								<div className='g3-card-header'>
									<h4 className='text-capitalize set-text-600 card-h4'>
										Flight Summary
									</h4>
								</div>

								<div className='g3-card-content'>
									<IterationPlan
										date={_.get(trip1, 'departureDateTime')}
										arrivalAirport={arrivingAirport}
										departureAirport={departingAirport}
										arrivalTime={_.get(
											trip1,
											'arrivalDateTime'
										)}
										departureTime={_.get(
											trip1,
											'departureDateTime'
										)}
										iconType='plane-departure'
									/>

									{trip2 ? (
										<IterationPlan
											date={_.get(
												trip2,
												'departureDateTime'
											)}
											arrivalAirport={departingAirport}
											departureAirport={arrivingAirport}
											arrivalTime={_.get(
												trip2,
												'arrivalDateTime'
											)}
											departureTime={_.get(
												trip2,
												'departureDateTime'
											)}
											iconType='plane-arrival'
										/>
									) : null}

									<hr />
									<div className='g3-inner-card-footer show-as-flex'>
										<div className='total'>Total</div>
										<div className='price'>
											{`${
												gidi_flights_data.currency_symbol
											}${price || '0.00'}`}
										</div>
									</div>
								</div>

								<hr />

								<div className='g3-card-footer set-text-center'>
									<button
										type='button'
										className='button small-right-margin'
										onClick={window.print}
									>
										<i className='fas fa-print' /> Print
									</button>
									<button
										type='button'
										className='button'
										onClick={this.showModal}
									>
										View More Details
									</button>
								</div>
							</section>
						</GridColumn>
					</GridContainer>

					{flightTimelineData ? (
						<SimpleModal
							show={this.state.showModalDialog}
							handleClose={this.hideModal}
							width='800px'
							noPadding
						>
							<GridContainer htmlClass='setContainerFlexxy no-bottom-padding no-top-padding'>
								<GridColumn col='two-third'>
									<h3 className='no-margin flight-modal-heading'>
										Flight Details
									</h3>
									<GridContainer
										reset
										htmlClass='no-top-padding'
									>
										<GridColumn col='full'>
											<FlightDetails_Timeline
												data={flightTimelineData}
												search_params={flightSearch}
											/>
										</GridColumn>
									</GridContainer>
								</GridColumn>
								<GridColumn
									col='one-third'
									htmlClass='border-lefty attackdd'
								>
									<div className='flexWrapTheElem'>
										<div className='price-flight'>
											<h2 className='set-text-bold'>
												<small>Total Price</small>
												<br />
												{gidi_flights_data.currency_symbol +
													price}
											</h2>
										</div>
									</div>
								</GridColumn>
							</GridContainer>
						</SimpleModal>
					) : null}
				</>
			);
		}
		return <NoLongerAvailable />;
	}
}

document.addEventListener('DOMContentLoaded', () => {
	if (document.getElementById('bookings-success-page-app')) {
		ReactDOM.render(
			<BookingsSuccess_Wrapper />,
			document.getElementById('bookings-success-page-app')
		);
	}
});
