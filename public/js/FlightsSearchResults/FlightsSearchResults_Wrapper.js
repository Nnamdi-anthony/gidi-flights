/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-plusplus */
/* eslint-disable array-callback-return */
import * as _ from 'lodash';
import * as qs from 'query-string';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { SampleTravelDenData } from '../SampleData/SampleData';
import { SampleInternationalData } from '../SampleData/SampleInternationalData';
import { SinglePagrRequest } from '../SampleData/SinglePageRequest';
import GridColumn from '../Utilities/GridColumn';
import GridContainer from '../Utilities/GridContainer';
import FlightsSearchResults from './FlightsSearchResults';
import FlightsSearch_Sidebar from './FlightsSearch_Sidebar';
import { EmptyRequest } from '../SampleData/EmptyRequest';

const LoadingIcon = () => {
	return (
		<>
			<GridContainer>
				<GridColumn col='full'>
					<div className='medium-padding set-text-center text-capitalize'>
						<div className='fa-5x house-shaking-icon'>
							<div className='moving-clouds fa-2x first-child'>
								<i className='fas fa-cloud' />
								<i className='fas fa-cloud' />
								<i className='fas fa-cloud' />
								<i className='fas fa-cloud' />
								<i className='fas fa-cloud' />
								<i className='fas fa-cloud' />
							</div>

							<div className='roticon-small'>
								<i className='set-base-text-color fas fa-plane fa-2x shaking-icon' />
							</div>

							<div className='moving-clouds fa-1x last-child'>
								<i className='fas fa-cloud' />
								<i className='fas fa-cloud' />
								<i className='fas fa-cloud' />
								<i className='fas fa-cloud' />
								<i className='fas fa-cloud' />
								<i className='fas fa-cloud' />
							</div>
						</div>
						<h4 className='set-text-300'>Loading...</h4>
					</div>
				</GridColumn>
			</GridContainer>
		</>
	);
};

const NoResultsFound = () => {
	return (
		<>
			<GridContainer>
				<GridColumn col='full'>
					<div className='g3-simple-card medium-padding set-text-center text-capitalize'>
						<div className='fa-2x set-base-text-color'>
							<span className='fa-stack fa-2x'>
								<i className='fas fa-ban fa-stack-2x' />
								<i className='fas fa-plane-departure fa-stack-1x' />
							</span>
						</div>
						<h1 className='set-text-300'>No Results to Display</h1>
						<h4>
							we are so sorry, but there seems to be no result to
							your search, please try again.
						</h4>
					</div>
				</GridColumn>
			</GridContainer>
		</>
	);
};

class FlightsSearchResults_Wrapper extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchResults: [],
			search_params: {},
			currentPage: 1,
			intervalId: 0,
			perPage: 10,
			formData: {
				success: false,
				isLoaded: false
			}
		};

		// bind getSearchResults
		this.getSearchResults = this.getSearchResults.bind(this);
		this.handlePagination = this.handlePagination.bind(this);
		this.getDummyResults = this.getDummyResults.bind(this);
		this.getDummyResults_two = this.getDummyResults_two.bind(this);
		this.getDummyResults_three = this.getDummyResults_three.bind(this);
		this.getEmptyResults = this.getEmptyResults.bind(this);
		this.scrollStep = this.scrollStep.bind(this);
		this.scrollToTop = this.scrollToTop.bind(this);
	}

	componentDidMount() {
		// this.getSearchResults();
		// this.getDummyResults();
		this.getDummyResults_two();
		// this.getDummyResults_three();
		// this.getEmptyResults();
	}

	getDummyResults() {
		const sampleData = SampleTravelDenData;

		this.setState({
			searchResults: sampleData.pricedItineraryWSResponses,
			search_params: sampleData.flightSearchRequest,
			formData: {
				isLoaded: true,
				success: true
			}
		});
	}

	getDummyResults_two() {
		const sampleData = SampleInternationalData;

		this.setState({
			searchResults: sampleData.pricedItineraryWSResponses,
			search_params: sampleData.flightSearchRequest,
			formData: {
				isLoaded: true,
				success: true
			}
		});
	}

	getDummyResults_three() {
		const sampleData = SinglePagrRequest;

		this.setState({
			searchResults: sampleData.pricedItineraryWSResponses,
			search_params: sampleData.flightSearchRequest,
			formData: {
				isLoaded: true,
				success: true
			}
		});
	}

	getEmptyResults() {
		const sampleData = EmptyRequest;

		this.setState({
			searchResults: sampleData.pricedItineraryWSResponses,
			search_params: sampleData.flightSearchRequest,
			formData: {
				isLoaded: true,
				success: true
			}
		});
	}

	getSearchResults() {
		// browser data
		const urlParams = location.search;
		const searchParams = qs.parse(urlParams);

		// set the namespace
		const namespace = 'gidi-flights/v1';
		const route = 'search-for-flight';
		const nounce = gidi_flights_data.heartbeat.nounce;
		const headers = {
			'X-WP-Nonce': nounce,
			'Content-Type': 'application/json'
		};
		const data = {
			travel_class: searchParams.passenger_class,
			trip_type: searchParams.trip_type_choice,
			num_of_adults: searchParams.num_adults,
			num_of_children: searchParams.num_child,
			num_of_infants: searchParams.num_infant,
			departure_city: searchParams.departure_city,
			departure_time: searchParams.departure_date,
			arrival_city: searchParams.arrival_city,
			arrival_time: searchParams.arrival_date
		};
		const apiURL =
			gidi_flights_data.heartbeat.url + namespace + '/' + route;

		// init the settings to use jquery for the data fetching
		const jqAjax_Settings = {
			url: apiURL,
			method: 'POST',
			timeout: 0,
			headers,
			data: JSON.stringify(data),
			statusCode: {
				500: () => {
					this.setState({
						formData: {
							isLoaded: false,
							success: false
						}
					});
				}
			}
		};

		// send the request
		jQuery
			.ajax(jqAjax_Settings)
			.done(response => {
				this.setState({
					searchResults: response.pricedItineraryWSResponses,
					search_params: response.flightSearchRequest,
					formData: {
						isLoaded: true,
						success: true
					}
				});
			})
			.error(_err => {
				this.setState({
					formData: {
						isLoaded: true,
						success: false
					}
				});
			});
	}

	handlePagination(event) {
		this.setState({
			currentPage: Number(event.target.id)
		});
		this.scrollToTop();
	}

	scrollStep() {
		if (window.pageYOffset === 0) {
			clearInterval(this.state.intervalId);
		}
		window.scroll(0, window.pageYOffset - 50);
	}

	scrollToTop() {
		const intervalId = setInterval(this.scrollStep.bind(this), 30);
		this.setState({ intervalId });
	}

	render() {
		const {
			search_params,
			searchResults,
			currentPage,
			perPage
		} = this.state;
		const firstPage = (currentPage - 1) * perPage;
		const lastPage = Math.min(firstPage + perPage, searchResults.length);
		const currentPages = searchResults.slice(firstPage, lastPage);
		const pageNumbers = [];
		const totalPages = Math.ceil(searchResults.length / perPage);

		// set page numbers
		for (let i = 1; i <= totalPages; i++) {
			pageNumbers.push(i);
		}

		// render page numbers
		const renderPageNumbers = pageNumbers.map(number => {
			const currPageNum = currentPage === number ? 'active' : '';
			return (
				<li
					key={number}
					id={number}
					className={currPageNum}
					onClick={this.handlePagination}
				>
					{number}
				</li>
			);
		});

		/**
		 * get and store the sidbear data actions and things
		 */
		let allAirlines = [];
		let flightDuration = [];

		searchResults.map(respD => {
			const curRests =
				respD.airItineraryWSResponse.originDestinationWSResponses;

			curRests.map(innRsts => {
				flightDuration.push(
					_.replace(innRsts.duration, new RegExp('[hm]', 'g'), '')
				);

				innRsts.flightSegmentWSResponses.map(airline => {
					allAirlines.push(airline.marketingAirline);
				});
			});
		});

		allAirlines = _.uniq(_.sortBy(allAirlines)); // store all the airlines
		flightDuration = _.uniq(flightDuration); // store all the stops number

		const allposrt_port = search_params.originDestinationRequests;
		const firstPostrts = _.first(allposrt_port);
		const isReturn =
			_.toLower(search_params.tripType) === _.toLower('return')
				? true
				: null;
		const dataSidebar = {
			airlinesList: allAirlines,
			journeyDurations: flightDuration,
			departureAiport: _.get(firstPostrts, 'origin'),
			arrivalAirport: _.get(firstPostrts, 'destination'),
			isReturnTrip: isReturn
		};

		if (searchResults && _.size(searchResults) > 0) {
			return (
				<>
					<GridContainer>
						<GridColumn col='aside-bar'>
							<FlightsSearch_Sidebar sidebarData={dataSidebar} />
						</GridColumn>
						<GridColumn col='main-content'>
							<div className='counterPagination small-bottom-margin'>
								<span className='set-base-text-color'>
									{'Page ' + currentPage} of{' '}
								</span>
								{totalPages || 1}
								<div className='pull-right'>
									<span className='set-base-text-color'>
										{lastPage} results
									</span>{' '}
									of{' '}
									{searchResults.length > 0
										? searchResults.length
										: 0}
								</div>
							</div>
							<FlightsSearchResults
								details={currentPages}
								searchParameters={this.state.search_params}
							/>
							<section className='pagrination-wrapper'>
								<ul id='page-numbers'>{renderPageNumbers}</ul>
							</section>
						</GridColumn>
					</GridContainer>
				</>
			);
		}
		if (
			(!this.state.formData.success && !this.state.formData.isLoaded) ||
			_.size(searchResults) < 1
		) {
			return <NoResultsFound />;
		}
		return <LoadingIcon />;
	}
}

document.addEventListener('DOMContentLoaded', () => {
	if (document.getElementById('search-page-app')) {
		ReactDOM.render(
			<FlightsSearchResults_Wrapper />,
			document.getElementById('search-page-app')
		);
	}
});
