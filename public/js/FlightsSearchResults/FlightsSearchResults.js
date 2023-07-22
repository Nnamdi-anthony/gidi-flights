/* eslint-disable import/no-named-as-default */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import * as _ from 'lodash';
import React, { Component } from 'react';
import GridColumn from '../Utilities/GridColumn';
import GridContainer from '../Utilities/GridContainer';
import { guid } from '../Utilities/guid';
import SimpleModal from '../Utilities/SimpleModal';
import FlightDetails_Timeline from './FlightDetails_Timeline';
import FlightsSearchResults_FlightsData from './FlightsSearchResults_FlightsData';
import Flight_Booking_Button from './Flight_Booking_Button';

class FlightsSearchResults extends Component {
	static defaultProps = {
		details: [],
		searchParameters: {}
	};

	constructor(props) {
		super(props);

		// bind events
		this.getTheLastCityCode = this.getTheLastCityCode.bind(this);
		this.getCurrentFlightDetails = this.getCurrentFlightDetails.bind(this);
		this.hideModal = this.hideModal.bind(this);
		this.showModal = this.showModal.bind(this);

		// set the state
		this.state = {
			showModalDialog: false,
			flight_details: false
		};
	}

	getCurrentFlightDetails(args = {}) {
		this.setState({
			flight_details: args
		});

		this.showModal();
	}

	/**
	 * Get the last city code
	 * @param {string} items - array of items
	 */
	// eslint-disable-next-line class-methods-use-this
	getTheLastCityCode(items = []) {
		const code = _.last(items);
		const cityCode = code.arrivalAirportCode;

		return cityCode;
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
		const { searchParameters } = this.props;
		const { flight_details } = this.state;
		let selectedModal = '';

		if (flight_details) {
			const flightCompleteData =
				flight_details.airItineraryWSResponse
					.originDestinationWSResponses;
			selectedModal = (
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
							<GridContainer reset htmlClass='no-top-padding'>
								<GridColumn col='full'>
									<FlightDetails_Timeline
										data={flightCompleteData}
										search_params={searchParameters}
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
											flight_details.pricingInfoWSResponse
												.totalFare}
									</h2>
								</div>
								<div className='booking-button'>
									<Flight_Booking_Button
										flightDetails={flight_details}
										flightSearchParams={searchParameters}
									/>
								</div>
							</div>
						</GridColumn>
					</GridContainer>
				</SimpleModal>
			);
		}

		return (
			<div>
				{this.props.details.map(flight => (
					<section className='loopy-search-results' key={guid()}>
						<GridContainer innerHtmlClass='smapleFlexxy'>
							<GridColumn
								clickAction={() =>
									this.getCurrentFlightDetails(flight)
								}
								col='four-fifth'
								htmlClass='pointy-cursor'
							>
								{flight.airItineraryWSResponse.originDestinationWSResponses.map(
									flightDetails => (
										<div key={guid()}>
											<FlightsSearchResults_FlightsData
												airplaneName={
													flightDetails.marketingAirline
												}
												departingCitytime={
													flightDetails.departureDateTime
												}
												arrivingCityTime={
													flightDetails.arrivalDateTime
												}
												departingCityCode={
													flightDetails.originAirportCode
												}
												arrivingCityCode={this.getTheLastCityCode(
													flightDetails.flightSegmentWSResponses
												)}
												flightLength={
													flightDetails.duration
												}
												numberOfStops={
													flightDetails.numberOfStops
												}
											/>
										</div>
									)
								)}
							</GridColumn>
							<GridColumn
								htmlClass='border-lefty'
								col='one-fifth'
							>
								<div className='flexWrapTheElem'>
									<div className='price-flight'>
										<h2 className='set-text-bold'>
											{gidi_flights_data.currency_symbol +
												flight.pricingInfoWSResponse
													.totalFare}
										</h2>
									</div>
									<div className='booking-button'>
										<Flight_Booking_Button
											flightDetails={flight}
											flightSearchParams={
												searchParameters
											}
										/>
									</div>
								</div>
							</GridColumn>
						</GridContainer>
					</section>
				))}
				{selectedModal}
			</div>
		);
	}
}

export default FlightsSearchResults;
