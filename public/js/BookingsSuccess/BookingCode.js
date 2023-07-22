import React from 'react';
import './BookingCode.scss';

export default function BookingCode({ bookingCode = 'KADMDJ' }) {
	return (
		<div>
			<section className='g3-simple-card small-padding set-text-center'>
				<article className='note-of-thanks'>
					<h3 className='set-text-bold'>
						<i className='fas fa-file-invoice-dollar fa-4x set-base-text-color small-bottom-margin' />
						<br />
						Thank you. <br /> Your booking is pre-registered.
					</h3>
					<h5>
						Please note that availability and price may not be
						guaranteed until we have received payment. Your
						pre-registration will laps at midnight if payment has
						not been received. You will receive an email with all
						your booking details.
					</h5>
					<div className='primary-booking-code set-base-text-color'>
						<div>Booking Code Reference</div>
						<h2 className='no-margin set-text-bold booking-code'>
							{bookingCode}
						</h2>
					</div>
				</article>
			</section>
		</div>
	);
}
