import React from 'react';

const FlightDetails_TimeLineCard = ({
	departingTime,
	departingAirport,
	arrivalTime,
	arrivalAirport
}) => {
	return (
		<>
			<section className='airportsTimeline'>
				<section className='separatorTimeline' />
				<section className='fromTimeline'>
					<span>
						{departingTime} - {departingAirport}
					</span>
				</section>
				<section className='toTimeline'>
					<span>
						{arrivalTime} - {arrivalAirport}
					</span>
				</section>
			</section>
		</>
	);
};

export default FlightDetails_TimeLineCard;
