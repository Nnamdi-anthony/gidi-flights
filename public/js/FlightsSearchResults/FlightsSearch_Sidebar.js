/* eslint-disable radix */
import * as _ from 'lodash';
import React, {Component} from 'react';
import TimeRangeSlider from 'react-time-range-slider';
import CheckBox from '../Utilities/CheckBox';
import GridColumn from '../Utilities/GridColumn';
import {guid} from '../Utilities/guid';
import sortTimes from '../Utilities/SortTime';

const SideBearRowlings = ({
							  title,
							  children,
							  htmlID = `sidebarID-${guid()}`
						  }) => {
	return (
		<div className='g3-hold-fort'>
			<div className='g3-full'>
				<h6 className='side-bear-heading'>{title}</h6>
				<section id={htmlID}>{children}</section>
			</div>
		</div>
	);
};

class FlightsSearch_Sidebar extends Component {
	static defaultProps = {
		details: [],
		airlinesLIst: []
	};

	constructor(props) {
		super(props);

		this.state = {
			journey_Durationvalue: {
				start: '00:00',
				end: '23:59'
			},
			dest_Departurevalue: {
				start: '00:00',
				end: '23:59'
			},
			arriv_Departurevalue: {
				start: '00:00',
				end: '23:59'
			},
			dest_Arrivalvalue: {
				start: '00:00',
				end: '23:59'
			},
			arriv_Arrivalvalue: {
				start: '00:00',
				end: '23:59'
			},
			numStops: [
				{
					id: 0,
					value: 'Direct',
					name: 'direct'
				},
				{
					id: 1,
					value: '1 Stop',
					name: 'one_stop'
				},
				{
					id: 2,
					value: '+2 Stops',
					name: 'two_stops'
				}
			]
		};

		this.featureRef = React.createRef();
		this.arriv_DestinationtimeChangeHandler = this.arriv_DestinationtimeChangeHandler.bind(
			this
		);
		this.arriv_ArrivaltimeChangeHandler = this.arriv_ArrivaltimeChangeHandler.bind(
			this
		);
		this.dest_DestinationtimeChangeHandler = this.dest_DestinationtimeChangeHandler.bind(
			this
		);
		this.dest_ArrivaltimeChangeHandler = this.dest_ArrivaltimeChangeHandler.bind(
			this
		);
		this.journey_durationtimeChangeHandler = this.journey_durationtimeChangeHandler.bind(
			this
		);
	}

	componentWillReceiveProps(next) {
		const {journeyDurations} = next.sidebarData;
		const sortJDates = sortTimes(journeyDurations);
		const fiJDates = _.first(sortJDates);
		const laJDates = _.last(sortJDates);

		this.setState({
			journey_Durationvalue: {
				start: fiJDates,
				end: laJDates
			}
		});
	}

	arriv_DestinationtimeChangeHandler = time => {
		this.setState({
			arriv_Departurevalue: time
		});
	};

	arriv_ArrivaltimeChangeHandler = time => {
		this.setState({
			arriv_Arrivalvalue: time
		});
	};

	dest_DestinationtimeChangeHandler = time => {
		this.setState({
			dest_Departurevalue: time
		});
	};

	dest_ArrivaltimeChangeHandler = time => {
		this.setState({
			dest_Arrivalvalue: time
		});
	};

	journey_durationtimeChangeHandler = time => {
		this.setState({
			journey_Durationvalue: time
		});
	};

	render() {
		const {
			airlinesList,
			departureAiport,
			arrivalAirport,
			isReturnTrip
		} = this.props.sidebarData;
		const {
			numStops,
			journey_Durationvalue,
			arriv_Arrivalvalue,
			arriv_Departurevalue,
			dest_Arrivalvalue,
			dest_Departurevalue
		} = this.state;

		return (
			<div>
				<div id='search-sidebar'>
					<section className='small-top-padding small-bottom-padding small-left-padding small-right-padding'>
						<div className='g3-container no-top-padding no-bottom-padding'>
							<div className='g3-hold-fort flexxy-top-bottom-center'>
								<GridColumn col='half'>
									<h2 className='set-base-text-color no-margin'>
										Filters
									</h2>
								</GridColumn>
								<GridColumn col='half'>
									<button className='button' type='button'>
										Reset
									</button>
								</GridColumn>
							</div>
							<SideBearRowlings
								htmlID='list_of_stops'
								title='Number of stopovers'
							>
								{numStops.map(num => (
									<div
										className='num_of_stops_wrapper'
										key={num.name}
									>
										<CheckBox
											name={num.name}
											value={num.value}
											id={num.id}
											text={num.value}
										/>
									</div>
								))}
							</SideBearRowlings>
							<SideBearRowlings
								title='Journey Durations'
								htmlID='journey_durations'
							>
								<div className='slider'>
									<div className='slider-horizontal'>
										<div>
											<div>
												<small className='set-base-text-color'>
													{
														journey_Durationvalue.start
													}{' '}
													-{' '}
													{journey_Durationvalue.end}
												</small>
											</div>
										</div>
										<TimeRangeSlider
											disabled={false}
											format={24}
											maxValue={journey_Durationvalue.end}
											minValue={
												journey_Durationvalue.start
											}
											name='journey_Durationvalue'
											onChange={
												this
													.journey_durationtimeChangeHandler
											}
											step='30'
											value={journey_Durationvalue}
										/>
									</div>
								</div>
							</SideBearRowlings>
							<SideBearRowlings
								title='Departure/Arrival Hours'
								htmlID='departure_arrival_hours'
							>
								<div className='slider'>
									<div className='slider-horizontal'>
										<div>
											<h6>
												{departureAiport} -{' '}
												{arrivalAirport}
											</h6>
											<div>
												<small>Departure</small>
											</div>
											<div>
												<small className='set-base-text-color'>
													{dest_Departurevalue.start}{' '}
													- {dest_Departurevalue.end}
												</small>
											</div>
										</div>
										<TimeRangeSlider
											disabled={false}
											format={24}
											maxValue='23:59'
											minValue='00:00'
											name='dest_Departurevalue'
											onChange={
												this
													.dest_DestinationtimeChangeHandler
											}
											step='30'
											value={dest_Departurevalue}
										/>
										<div>
											<div>
												<small>Arrival</small>
											</div>
											<div>
												<small className='set-base-text-color'>
													{dest_Arrivalvalue.start} -{' '}
													{dest_Arrivalvalue.end}
												</small>
											</div>
										</div>
										<TimeRangeSlider
											disabled={false}
											format={24}
											maxValue='23:59'
											minValue='00:00'
											name='dest_Arrivalvalue'
											onChange={
												this
													.dest_ArrivaltimeChangeHandler
											}
											step='30'
											value={dest_Arrivalvalue}
										/>
										{isReturnTrip ? (
											<>
												<div>
													<h6>
														{arrivalAirport} -{' '}
														{departureAiport}{' '}
													</h6>
													<div>
														<small>Departure</small>
													</div>
													<div>
														<small className='set-base-text-color'>
															{
																arriv_Departurevalue.start
															}{' '}
															-{' '}
															{
																arriv_Departurevalue.end
															}
														</small>
													</div>
												</div>

												<TimeRangeSlider
													disabled={false}
													format={24}
													maxValue='23:59'
													minValue='00:00'
													name='arriv_Departurevalue'
													onChange={
														this
															.arriv_DestinationtimeChangeHandler
													}
													step='30'
													value={arriv_Departurevalue}
												/>

												<div>
													<div>
														<small>Arrival</small>
													</div>
													<div>
														<small className='set-base-text-color'>
															{
																arriv_Arrivalvalue.start
															}{' '}
															-{' '}
															{
																arriv_Arrivalvalue.end
															}
														</small>
													</div>
												</div>

												<TimeRangeSlider
													disabled={false}
													format={24}
													maxValue='23:59'
													minValue='00:00'
													name='arriv_Arrivalvalue'
													onChange={
														this
															.arriv_ArrivaltimeChangeHandler
													}
													step='30'
													value={arriv_Arrivalvalue}
												/>
											</>
										) : null}
									</div>
								</div>
							</SideBearRowlings>
							<SideBearRowlings
								htmlID='airlines'
								title='Airlines'
							>
								{airlinesList.map(num => (
									<div
										className='num_of_stops_wrapper'
										key={guid()}
									>
										<CheckBox
											name={num}
											value={num}
											id={num}
											text={num}
										/>
									</div>
								))}
							</SideBearRowlings>
						</div>
					</section>
				</div>
			</div>
		);
	}
}

export default FlightsSearch_Sidebar;
