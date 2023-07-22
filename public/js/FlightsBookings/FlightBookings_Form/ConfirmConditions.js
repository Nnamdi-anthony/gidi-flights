/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable no-undef */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import GridColumn from '../../Utilities/GridColumn';
import GridContainer from '../../Utilities/GridContainer';
import './ConfirmConditions.scss';
import CheckBox from '../../Utilities/CheckBox';
import { LoadingIcon } from '../../FlightsSearchResults/Flight_Booking_Button';

class ConfirmConditions extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isChecked: false,
			text: 'Confirm Booking'
		};

		this.changeChecked = this.changeChecked.bind(this);
		this.changeLoading = this.changeLoading.bind(this);
	}

	changeChecked() {
		this.setState({
			isChecked: !this.state.isChecked
		});
	}

	changeLoading() {
		this.setState({
			text: <LoadingIcon />
		});
	}

	render() {
		const { isChecked, text } = this.state;

		return (
			<>
				<GridContainer reset>
					<GridColumn col='two-third'>
						<label
							htmlFor='accept_terms_conditions'
							className='no-margin no-padding'
							id='continue-label'
						>
							<div className='row'>
								<div className='col-md-1'>
									<CheckBox
										id='accept_terms_conditions'
										name='accept_terms_conditions'
										checked={this.state.isChecked}
										onchange={this.changeChecked}
									/>
								</div>
								<div className='col-md-11'>
									By Continuing with our reservation you agree
									with our{' '}
									<a
										href={
											gidi_flights_data.heartbeat
												.terms_conditions
										}
										className='set-base-text-color'
										target='_blank'
										rel='noopener noreferrer'
									>
										terms and conditions
									</a>{' '}
									and{' '}
									<a
										href={
											gidi_flights_data.heartbeat
												.airline_fare_rules
										}
										className='set-base-text-color'
										target='_blank'
										rel='noopener noreferrer'
									>
										{"airline's conditions and fare rules."}
									</a>
								</div>
							</div>
						</label>
					</GridColumn>
					<GridColumn col='one-third'>
						{!isChecked ? (
							<button
								type='submit'
								className='button btn-block'
								readOnly
								disabled
							>
								{text}
							</button>
						) : this.props.isWorking ? (
							<button
								type='submit'
								className='button btn-block'
								disabled
								readOnly
							>
								<LoadingIcon />
							</button>
						) : (
							<button type='submit' className='button btn-block'>
								{text}
							</button>
						)}
					</GridColumn>
				</GridContainer>
			</>
		);
	}
}

export default ConfirmConditions;
