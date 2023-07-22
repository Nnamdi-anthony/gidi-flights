/* eslint-disable no-plusplus,no-undef,no-restricted-globals */
import React, { Component } from 'react';
import * as _ from 'lodash';
import * as qs from 'query-string';
import './FlightBookings_Form.scss';
import GridRow from '../../Utilities/GridRow';
import { ListOfCountries } from '../../SampleData/ListOfCountries';
import { guid } from '../../Utilities/guid';
import PassengerFlight_Form from './PassengerFlight_Form';

class FlightBookings_Form extends Component {
	constructor(props) {
		super(props);

		// set state
		this.state = {
			countries: ''
		};

		// bind methods
		this.getCountriesUpdates = this.getCountriesUpdates.bind(this);
		this.getCountriesUpdates_local = this.getCountriesUpdates_local.bind(
			this
		);
	}

	componentDidMount() {
		// this.getCountriesUpdates();
		this.getCountriesUpdates_local();
	}

	getCountriesUpdates_local() {
		this.setState({
			countries: ListOfCountries
		});
	}

	getCountriesUpdates() {
		// set the namespace
		const headers = {
			'Content-Type': 'application/json'
		};

		const apiURL = `https://restcountries.eu/rest/v2/all`;

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
					countries: response
				});
			})
			.error(_err => {
				// eslint-disable-next-line no-console
				console.log(_err);
			});
	}

	render() {
		let nationality = [];
		let countriesRea = [];
		let country = [];
		let allNationsType = [];
		const genderTypes = ['Male', 'Female'].map(data => (
			<option key={guid()} value={data}>
				{data}
			</option>
		));
		const documentType = ['Passport'].map(data => (
			<option key={guid()} value={data}>
				{data}
			</option>
		));
		const { countries } = this.state;
		if (countries) {
			countriesRea = _.uniqBy(countries, data => data.demonym);
			countriesRea.map(data =>
				!_.isEmpty(data.demonym)
					? allNationsType.push(data.demonym)
					: null
			);
			allNationsType = _.sortBy(allNationsType);
			nationality = allNationsType.map(data =>
				!_.isEmpty(data) && _.toLower(data) !== 'nigerian' ? (
					<option key={guid()} value={data}>
						{data}
					</option>
				) : null
			);
			country = countriesRea.map(data =>
				!_.isEmpty(data.name) && _.toLower(data.name) !== 'nigeria' ? (
					<option key={guid()} value={data.name}>
						{data.name}
					</option>
				) : null
			);
		}

		const { numAdults, numChild, numInfants } = this.props;

		const infants_Form = [];
		const adults_Form = [];
		const children_Form = [];
		let ix = 1;
		if (numAdults) {
			for (let i = 0; i < numAdults; i++) {
				adults_Form.push(
					<PassengerFlight_Form
						numPassCount={ix++}
						nationality={nationality}
						country={country}
						documentType={documentType}
						genderTypes={genderTypes}
						key={guid()}
						passengeType='adult'
					/>
				);
			}
		}
		if (numChild) {
			for (let i = 0; i < numChild; i++) {
				children_Form.push(
					<PassengerFlight_Form
						numPassCount={ix++}
						nationality={nationality}
						country={country}
						documentType={documentType}
						genderTypes={genderTypes}
						key={guid()}
						passengeType='child'
					/>
				);
			}
		}
		if (numInfants) {
			for (let i = 0; i < numInfants; i++) {
				infants_Form.push(
					<PassengerFlight_Form
						numPassCount={ix++}
						nationality={nationality}
						country={country}
						documentType={documentType}
						genderTypes={genderTypes}
						key={guid()}
						passengeType='infant'
					/>
				);
			}
		}

		const urlParams = location.search;
		const searchParams = qs.parse(urlParams);

		return (
			<section className='passenger-form-requests passenger-request-form'>
				<GridRow>
					<section className='formData'>
						<input
							type='hidden'
							name='checkout_uid'
							value={searchParams.checkout_uid}
						/>
						{adults_Form}
						{children_Form}
						{infants_Form}
					</section>
				</GridRow>
			</section>
		);
	}
}

export default FlightBookings_Form;
