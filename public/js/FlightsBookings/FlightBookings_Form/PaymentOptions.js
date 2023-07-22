/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import GridRow from '../../Utilities/GridRow';
import GridContainer from '../../Utilities/GridContainer';
import GridColumn from '../../Utilities/GridColumn';
import './PaymentOptions.scss';
import RadioBox from '../../Utilities/RadioBox/RadioBox';

class PaymentOptions extends Component {
	render() {
		const payMethods = [
			{
				icon: 'fas fa-credit-card',
				text: 'Payment By Card',
				name: 'card_payment_method'
			},
			{
				icon: 'fas fa-university',
				text: 'Book on Hold(Bank Deposit)',
				name: 'bank_payment_method'
			}
		];

		return (
			<GridContainer reset>
				<GridColumn col='full'>
					<h3 className='no-margin no-padding'>Payment Methods</h3>
				</GridColumn>
				{payMethods.map(data => (
					<GridRow key={data.name}>
						<GridColumn col='full'>
							<label
								htmlFor={data.name}
								className='smthingOptions'
							>
								<RadioBox
									name='payment_method'
									id={data.name}
									value={data.name}
								/>
								<span className='usTexty'>
									<i className={data.icon} /> {data.text}
								</span>
							</label>
						</GridColumn>
					</GridRow>
				))}
			</GridContainer>
		);
	}
}

export default PaymentOptions;
