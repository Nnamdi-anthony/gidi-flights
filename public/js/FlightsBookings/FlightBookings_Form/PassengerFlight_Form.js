/* eslint-disable no-undef */
import React, { Component } from 'react';
import './FlightBookings_Form.scss';
import GridRow from '../../Utilities/GridRow';
import GridColumn from '../../Utilities/GridColumn';

class PassengerFlight_Form extends Component {
	componentDidMount() {
		// pick a date of birth
		jQuery('#date_of_birth').datepicker({
			changeMonth: true,
			changeYear: true,
			showButtonPanel: true,
			dateFormat: 'yy-mm-dd',
			maxDate: this.props.passengeType === 'adult' ? '-18Y' : '+0D',
			minDate: '-100Y'
		});

		// document date of expiration
		jQuery('#document_expiration_date').datepicker({
			changeMonth: true,
			changeYear: true,
			showButtonPanel: true,
			dateFormat: 'yy-mm-dd'
		});
	}

	render() {
		const {
			documentType,
			country,
			genderTypes,
			nationality,
			passengeType,
			numPassCount
		} = this.props;

		return (
			<section>
				<h3 className='no-bottom-margin'>
					#{numPassCount} Passenger
					<small className='text-capitalize'>({passengeType})</small>
				</h3>
				<GridRow reset>
					<GridColumn col='half'>
						<div className='form-group'>
							<input
								type='text'
								placeholder='Last name'
								name='last_name[]'
								id='last_name'
								className='form-control'
								autoComplete='off'
							/>
						</div>
					</GridColumn>
					<GridColumn col='half'>
						<div className='form-group'>
							<input
								type='text'
								placeholder='First and middle names'
								name='first_name[]'
								id='first_name'
								className='form-control'
								autoComplete='off'
							/>
						</div>
					</GridColumn>
				</GridRow>
				<GridRow reset>
					<GridColumn col='one-third'>
						<div className='form-group'>
							<select name='gender[]' id='gender'>
								<option value=''>Gender</option>
								{genderTypes}
							</select>
						</div>
					</GridColumn>
					<GridColumn col='one-third'>
						<div className='form-group'>
							<select name='nationality[]' id='nationality'>
								<option value=''>Nationality</option>
								<option value='Nigerian'>Nigerian</option>
								{nationality}
							</select>
						</div>
					</GridColumn>
					<GridColumn col='one-third'>
						<div className='form-group'>
							<input
								type='text'
								placeholder='Date of Birth'
								name='date_of_birth[]'
								id='date_of_birth'
								className='form-control pick-a-date-module'
								autoComplete='off'
							/>
						</div>
					</GridColumn>
				</GridRow>
				<GridRow reset>
					<GridColumn col='half'>
						<div className='form-group'>
							<select name='document_type[]' id='document_type'>
								<option value=''>Document Type</option>
								{documentType}
							</select>
						</div>
					</GridColumn>
					<GridColumn col='half'>
						<div className='form-group'>
							<input
								type='text'
								placeholder='Document number'
								name='document_number[]'
								id='document_number'
								className='form-control'
								autoComplete='off'
							/>
						</div>
					</GridColumn>
				</GridRow>
				<GridRow reset>
					<GridColumn col='half'>
						<div className='form-group'>
							<input
								type='text'
								placeholder='Document Expiration Date'
								name='document_expiration_date[]'
								id='document_expiration_date'
								className='form-control pick-a-date-module'
								autoComplete='off'
							/>
						</div>
					</GridColumn>
					<GridColumn col='half'>
						<div className='form-group'>
							<select
								name='document_issuance_country[]'
								id='document_issuance_country'
							>
								<option value=''>
									Document Issuance Country
								</option>
								<option value='Nigeria'>Nigeria</option>
								{country}
							</select>
							<input
								type='hidden'
								name='passenger_type'
								value={passengeType}
							/>
						</div>
					</GridColumn>
				</GridRow>
				{numPassCount <= 1 ? (
					<section>
						<br />
						<GridRow reset>
							<GridColumn col='full'>
								<h3 className='no-margin'>
									Contact Information
								</h3>
							</GridColumn>
						</GridRow>
						<GridRow reset>
							<GridColumn col='half'>
								<div className='form-group'>
									<input
										type='email'
										placeholder='Email'
										name='email'
										id='email'
										className='form-control'
										autoComplete='off'
									/>
								</div>
							</GridColumn>

							<GridColumn col='half'>
								<div className='form-group'>
									<input
										type='text'
										placeholder='Phone Number'
										name='phone_number'
										id='phone_number'
										className='form-control'
										autoComplete='off'
									/>
								</div>
							</GridColumn>
						</GridRow>
					</section>
				) : null}
				<hr className='breaking-line' />
			</section>
		);
	}
}

export default PassengerFlight_Form;
