import React from 'react';

const NoLongerAvailable = () => {
	return (
		<>
			<div className='container'>
				<div className='row'>
					<div className='col-md-12'>
						<section className='g3-simple-card small-padding'>
							<section className='paymentAdvise set-text-center'>
								<h3 className='set-text-500 no-margin'>
									<i className='fas fa-info-circle fa-4x set-base-text-color' />
									<br />
									No Longer Available
								</h3>
								<p className='no-margin'>
									s iteration is no longer available.If need
									to have a complaint, please contact customer
									care.
									<br />
								</p>
							</section>
							<section className='text-center'>
								<button
									className='button btn-lg text-center center-block'
									type='button'
									onClick={() => {
										window.location =
											gidi_flights_data.heartbeat.site_url;
									}}
								>
									Search For Flights Again
								</button>
							</section>
						</section>
					</div>
				</div>
			</div>
		</>
	);
};

export default NoLongerAvailable;
