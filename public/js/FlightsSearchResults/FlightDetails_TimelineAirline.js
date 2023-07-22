import React from 'react';

const FlightDetails_TimelineAirline = ({
	children,
	airlineName = 'The Airline Name',
	flightNumber = 'p3898',
	stopName
}) => {
	return (
		<>
			<div className='content-details'>
				<div className='marketing_airline'>{airlineName}</div>
				<div className='flight_number'>
					Flight Number: <strong>{flightNumber}</strong>
				</div>
				{children}
				{stopName ? (
					<div className='flight-stop-metadata'>
						<div className='flight-stops'>
							<div className='airpotStopWrapper'>
								<div className='stop_att'>
									<span>Stop at {stopName}</span>
								</div>
							</div>
						</div>
					</div>
				) : null}
			</div>
		</>
	);
};

export default FlightDetails_TimelineAirline;
