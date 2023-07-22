/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
/* eslint-disable func-names */
/* eslint-disable no-plusplus */
/* eslint-disable no-console */
/* eslint-disable no-restricted-globals */
import * as _ from 'lodash';
import * as qs from 'query-string';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GridContainer from '../Utilities/GridContainer';
import GridColumn from '../Utilities/GridColumn';
import { cstm_format_date } from '../Utilities/DateFormatter';
import FlightDetails_Timeline from '../FlightsSearchResults/FlightDetails_Timeline';
import SimpleModal from '../Utilities/SimpleModal';
import FlightBookings_Form from './FlightBookings_Form/FlightBookings_Form';
import PaymentOptions from './FlightBookings_Form/PaymentOptions';
import ConfirmConditions from './FlightBookings_Form/ConfirmConditions';
import NoLongerAvailable from '../Utilities/NoLongerAvailable';

const IterationPlan = ({
	date = 'Thurs, 14 Feb',
	departureTime = '"1999-02-18T16:49:00"',
	arrivalTime = '"1999-02-18T16:49:00"',
	departureAirport = 'LOS',
	arrivalAirport = 'YXU',
	iconType = 'plane'
}) => {
	const departingTime = new Date(departureTime).toLocaleTimeString([], {
		hour: '2-digit',
		minute: '2-digit',
		hour12: false
	});
	const arrivingTime = new Date(arrivalTime).toLocaleTimeString([], {
		hour: '2-digit',
		minute: '2-digit',
		hour12: false
	});
	return (
		<div className='iteration-plan'>
			<div className='date'>{cstm_format_date(date)}</div>
			<div className='details'>
				<div className='departure'>
					{departingTime} - {departureAirport}
				</div>
				<div className='icon-holder'>
					<i className={`fas fa-${iconType}`} />
				</div>
				<div className='arrival'>
					{arrivingTime} - {arrivalAirport}
				</div>
			</div>
		</div>
	);
};

class FlightBookings_Wrapper extends Component {
	constructor(props) {
		super(props);

		this.state = {
			flightDetails: {},
			flightSearch: '',
			numAdults: '',
			numInfants: '',
			numChild: '',
			showModalDialog: false,
			departingAirport: '',
			arrivingAirport: '',
			results: false
		};

		this.showModal = this.showModal.bind(this);
		this.hideModal = this.hideModal.bind(this);
		this.submitForm = this.submitForm.bind(this);
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
			`/${searchParams.checkout_uid}`;

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
					results: true,
					flightDetails: response.full_search_results,
					flightSearch: response.full_search_params,
					numAdults: response.adult_count,
					numInfants: response.infant_count,
					numChild: response.child_count,
					departingAirport: response.d_airport,
					arrivingAirport: response.a_airport,
					price:
						response.full_search_results.pricingInfoWSResponse
							.totalFare
				});
			})
			.error(_err => {
				console.log(_err);
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

	submitForm(e) {
		// const formElems = formElems;
		const passengerData = [];
		const contactInfo = {};
		const overallData = {};
		const formElems = e.target.elements;

		this.setState({
			clickingDisabled: true
		});

		// payment methods
		overallData.paymentMethod = formElems.payment_method.value;

		// store the passneger information
		if (formElems.last_name.length > 0) {
			for (let i = 0; i < formElems.last_name.length; i++) {
				passengerData.push({
					surname: formElems.last_name[i].value,
					otherNames: formElems.first_name[i].value,
					gender: formElems.gender[i].value,
					nationality: formElems.nationality[i].value,
					date_of_birth: formElems.date_of_birth[i].value,
					document_type: formElems.document_type[i].value,
					document_number: formElems.document_number[i].value,
					document_expiration_date:
						formElems.document_expiration_date[i].value,
					document_issuance_country:
						formElems.document_issuance_country[i].value,
					passenger_type: formElems.passenger_type[i].value
				});
			}
		} else {
			passengerData.push({
				surname: formElems.last_name.value,
				otherNames: formElems.first_name.value,
				gender: formElems.gender.value,
				nationality: formElems.nationality.value,
				date_of_birth: formElems.date_of_birth.value,
				document_type: formElems.document_type.value,
				document_number: formElems.document_number.value,
				document_expiration_date:
					formElems.document_expiration_date.value,
				document_issuance_country:
					formElems.document_issuance_country.value,
				passenger_type: formElems.passenger_type.value
			});
		}

		// contact information
		contactInfo.email = formElems.email.value;
		contactInfo.phoneNumber = formElems.phone_number.value;

		// uid
		overallData.uid = formElems.checkout_uid.value;
		overallData.contactInformation = contactInfo;
		overallData.passengerData = passengerData;

		const stOvData = JSON.stringify(overallData);

		// send the stringified data to the api for insertion
		// set the namespace
		const namespace = 'gidi-flights/v1';
		const route = 'passengers';
		const nounce = gidi_flights_data.heartbeat.nounce;
		const headers = {
			'X-WP-Nonce': nounce,
			'Content-Type': 'application/json'
		};

		const apiURL = `${
			gidi_flights_data.heartbeat.url
		}${namespace}/${route}`;

		// init the settings to use jquery for the data fetching
		const jqAjax_Settings = {
			url: apiURL,
			method: 'POST',
			timeout: 0,
			headers,
			data: stOvData
		};

		// send the request
		jQuery
			.ajax(jqAjax_Settings)
			.done(response => {
				if (response) {
					window.location = `${
						gidi_flights_data.heartbeat.trocess_checkout
					}?type_uid=${response}`;
				}
			})
			.error(_err => {
				console.log(_err);
				this.setState({
					clickingDisabled: false
				});
			});

		// prevent default for the form
		e.preventDefault();
	}

	render = () => {
		const {
			flightDetails,
			flightSearch,
			numAdults,
			numChild,
			price,
			numInfants,
			departingAirport,
			arrivingAirport,
			clickingDisabled,
			results
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

		if (results) {
			return (
				<>
					<GridContainer>
						<form
							method='POST'
							action={
								gidi_flights_data.heartbeat.trocess_checkout
							}
							onSubmit={this.submitForm}
						>
							<GridColumn col='two-third'>
								<section className='g3-simple-card small-padding'>
									<div className='alert alert-info'>
										<span className='small-right-margin'>
											<i className='fas fa-info-circle' />
										</span>
										<span>
											Please enter your personal
											information as it appears on your
											identification document.
										</span>
									</div>
									<FlightBookings_Form
										numChild={numChild}
										numInfants={numInfants}
										numAdults={numAdults}
									/>
								</section>

								<section className='g3-simple-card small-padding'>
									<PaymentOptions />
								</section>

								<section className='g3-simple-card small-padding'>
									<ConfirmConditions
										isWorking={clickingDisabled}
									/>
								</section>
							</GridColumn>
						</form>
						<GridColumn col='one-third'>
							<section className='g3-simple-card small-padding booking-card-details'>
								<div className='g3-card-header'>
									<h4 className='text-capitalize set-text-600 card-h4'>
										<i className='fa fa-warn' />
										Gentle Reminder
									</h4>
								</div>

								<div className='g3-card-content set-text-600'>
									Please note that Certain recommendation has
									at least one stop in a country that is
									different from the selected origin and
									destination. <br /> <br />
									Please ensure that you have all the needed
									documents to board.
								</div>
							</section>
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
	};
}

document.addEventListener('DOMContentLoaded', () => {
	if (document.getElementById('bookings-page-app')) {
		ReactDOM.render(
			<FlightBookings_Wrapper />,
			document.getElementById('bookings-page-app')
		);
	}
});
