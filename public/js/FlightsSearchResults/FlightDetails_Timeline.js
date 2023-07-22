/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import * as _ from 'lodash';
import React, { Component } from 'react';
import FlightDetails_TimelineFooter from './FlightDetails_TimelineFooter';
import FlightDetails_TimelineHeader from './FlightDetails_TimelineHeader';
import FlightDetails_TimelineAirline from './FlightDetails_TimelineAirline';
import FlightDetails_TimeLineCard from './FlightDetails_TimeLineCard';
import { guid } from '../Utilities/guid';
import { cstm_format_date } from '../Utilities/DateFormatter';

class FlightDetails_Timeline extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { data, search_params } = this.props;
		const departingFlightData = _.head(data);
		const arrivalFlightData =
			_.toLower(search_params.tripType) === _.toLower('return')
				? _.last(data)
				: null;
		const totalKeys =
			_.size(departingFlightData.flightSegmentWSResponses) - 1;
		let totalKeys2 = '';
		if (arrivalFlightData) {
			totalKeys2 = _.size(arrivalFlightData.flightSegmentWSResponses) - 1;
		}

		return (
			<div>
				<section className='departing-town'>
					<FlightDetails_TimelineHeader
						title='Departure'
						date={departingFlightData.departureDateTime}
					/>
					<section className='flight-details-timelines'>
						{departingFlightData.flightSegmentWSResponses.map(
							(resp, ikDexy) =>
								ikDexy === totalKeys ? (
									<FlightDetails_TimelineAirline
										airlineName={resp.marketingAirline}
										key={guid()}
										flightNumber={
											resp.marketingAirlineCode +
											resp.flightNumber
										}
									>
										<FlightDetails_TimeLineCard
											arrivalAirport={resp.arrivalAirport}
											arrivalTime={cstm_format_date(
												resp.arrivalDateTime
											)}
											departingAirport={
												resp.departureAirport
											}
											departingTime={cstm_format_date(
												resp.departureDateTime
											)}
										/>
									</FlightDetails_TimelineAirline>
								) : (
									<FlightDetails_TimelineAirline
										stopName={resp.arrivalAirport}
										airlineName={resp.marketingAirline}
										key={guid()}
										flightNumber={
											resp.marketingAirlineCode +
											resp.flightNumber
										}
									>
										<FlightDetails_TimeLineCard
											arrivalAirport={resp.arrivalAirport}
											arrivalTime={cstm_format_date(
												resp.arrivalDateTime
											)}
											departingAirport={
												resp.departureAirport
											}
											departingTime={cstm_format_date(
												resp.departureDateTime
											)}
										/>
									</FlightDetails_TimelineAirline>
								)
						)}
						<FlightDetails_TimelineFooter
							arrivalDate={departingFlightData.arrivalDateTime}
							duration={departingFlightData.duration}
						/>
					</section>
				</section>
				{arrivalFlightData ? (
					<section className='departing-town'>
						<FlightDetails_TimelineHeader
							iconType='fas fa-plane-arrival'
							title='Arrival'
							date={arrivalFlightData.arrivalDateTime}
						/>
						<section className='flight-details-timelines'>
							{arrivalFlightData.flightSegmentWSResponses.map(
								(resp, ikDexy) =>
									ikDexy === totalKeys2 ? (
										<FlightDetails_TimelineAirline
											airlineName={resp.marketingAirline}
											key={guid()}
											flightNumber={
												resp.marketingAirlineCode +
												resp.flightNumber
											}
										>
											<FlightDetails_TimeLineCard
												arrivalAirport={
													resp.arrivalAirport
												}
												arrivalTime={cstm_format_date(
													resp.arrivalDateTime
												)}
												departingAirport={
													resp.departureAirport
												}
												departingTime={cstm_format_date(
													resp.departureDateTime
												)}
											/>
										</FlightDetails_TimelineAirline>
									) : (
										<FlightDetails_TimelineAirline
											stopName={resp.arrivalAirport}
											airlineName={resp.marketingAirline}
											key={guid()}
											flightNumber={
												resp.marketingAirlineCode +
												resp.flightNumber
											}
										>
											<FlightDetails_TimeLineCard
												arrivalAirport={
													resp.arrivalAirport
												}
												arrivalTime={cstm_format_date(
													resp.arrivalDateTime
												)}
												departingAirport={
													resp.departureAirport
												}
												departingTime={cstm_format_date(
													resp.departureDateTime
												)}
											/>
										</FlightDetails_TimelineAirline>
									)
							)}
							<FlightDetails_TimelineFooter
								arrivalDate={arrivalFlightData.arrivalDateTime}
								duration={arrivalFlightData.duration}
							/>
						</section>
					</section>
				) : null}
			</div>
		);
	}
}

export default FlightDetails_Timeline;
