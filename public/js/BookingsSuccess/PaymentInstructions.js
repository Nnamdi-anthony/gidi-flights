/* eslint-disable no-console */
/* eslint-disable no-undef */
import React from 'react';
import './PaymentInstructions.scss';

function cardPayNow(
	txtRef,
	amount = 1,
	customerDetails = {
		first_name: '',
		last_name: '',
		email: '',
		phone_number: ''
	},
	paymentDetails = {
		description: 'Pay Internet',
		site_logo:
			'https://gidievents.com/wp-content/uploads/2018/11/cropped-gidi-logo2-1-180x180.png',
		site_title: 'gidievents'
	}
) {
	// pay using card
	// const PBFKey = 'FLWPUBK-aa82cac8ee08f5bb206f937db274081a-X';
	const PBFKey = gidi_flights_data.payments.public_key;
	const { first_name, last_name, email, phone_number } = customerDetails;
	const { description, site_logo, site_title } = paymentDetails;

	getpaidSetup({
		PBFPubKey: PBFKey,
		customer_email: email,
		customer_firstname: first_name,
		customer_lastname: last_name,
		custom_description: description,
		custom_logo: site_logo,
		custom_title: site_title,
		amount,
		customer_phone: phone_number,
		country: 'NG',
		currency: 'NGN',
		txref: txtRef,
		onclose() {},
		callback(response) {
			const flw_ref = response.tx.flwRef; // collect flwRef returned and pass to a 					server page to complete status check.
			console.log(flw_ref);
			console.log(
				'This is the response returned after a charge',
				response
			);
			if (
				response.tx.chargeResponseCode === '00' ||
				response.tx.chargeResponseCode === '0'
			) {
				Swal.fire({
					title: 'Check Your Mail!',
					text:
						'Please check your mail for your booking confirmation',
					type: 'success',
					confirmButtonText: 'ok'
				});
			} else {
				// redirect to a failure page.
				Swal.fire({
					title: 'Error!',
					text: 'Payment Failed',
					type: 'error',
					confirmButtonText: 'ok'
				});
			}
		}
	});
}

function PaymentInstructions({
	booking_method = 'bank_payment_method',
	amount = 1,
	code = '',
	email = '',
	phone_number = ''
}) {
	return (
		<div>
			<section className='g3-simple-card small-padding'>
				<section className='paymentAdvise set-text-center'>
					<h3 className='set-text-500 no-margin'>
						Payment Instructions
					</h3>
					<p className='no-margin'>
						If you do need to change your payment method, please
						contact customer care. <br />
					</p>
				</section>
				{booking_method === 'bank_payment_method' ? (
					<section className='paymentAdviseContent'>
						<h5 className='set-text-bold set-text-center'>
							You have choosen to pay by Bank Deposit
						</h5>
						<p className='set-text-bold set-text-center'>
							To complete payment, please pay the sum of {amount}{' '}
							to the following account and follow the instructions
							below
						</p>
						<table className='table-responsive table-striped table-bordered table-hover'>
							<tbody>
								<tr>
									<td>Bank Name</td>
									<td>
										{gidi_flights_data.payments.bank_name}
									</td>
								</tr>
								<tr>
									<td>Account Type</td>
									<td>
										{
											gidi_flights_data.payments
												.bank_acc_type
										}
									</td>
								</tr>
								<tr>
									<td>Account Number</td>
									<td>
										{
											gidi_flights_data.payments
												.bank_acc_number
										}
									</td>
								</tr>
								<tr>
									<td>Instructions</td>
									<td>
										{
											gidi_flights_data.payments
												.bank_deposit_instruction
										}
									</td>
								</tr>
							</tbody>
						</table>
					</section>
				) : (
					<section className='paymentAdviseContent text-center'>
						<h5 className='set-text-bold set-text-center'>
							You have choosen to pay by Card(FlutterWave)
						</h5>
						<p className='set-text-bold set-text-center'>
							To complete payment, please click the button below
						</p>
						<button
							className='button btn-lg text-center center-block'
							type='button'
							onClick={() => {
								cardPayNow(
									code,
									amount,
									{
										email,
										phone_number
									},
									{
										description:
											'Paying for flight on gidievents.com'
									}
								);
							}}
						>
							Pay Now
						</button>
					</section>
				)}
			</section>
		</div>
	);
}

export default PaymentInstructions;
