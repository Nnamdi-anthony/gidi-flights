import React from 'react';

function FlightsSearchResults_FlightsData({
	numberOfStops,
	departingCitytime,
	arrivingCityTime,
	airplaneName,
	departingCityCode,
	flightLength,
	arrivingCityCode
}) {
	// format the appearance of the number of stops
	let numOfStops = 0;
	if (numberOfStops === 1) {
		numOfStops = `${numberOfStops} Stop`;
	} else if (numberOfStops > 1) {
		numOfStops = `${numberOfStops} Stops`;
	} else {
		numOfStops = 'Direct';
	}

	// format the time been sent
	const departingTime = new Date(departingCitytime).toLocaleTimeString([], {
		hour: '2-digit',
		minute: '2-digit',
		hour12: false
	});
	const arrivingTime = new Date(arrivingCityTime).toLocaleTimeString([], {
		hour: '2-digit',
		minute: '2-digit',
		hour12: false
	});

	return (
		<section>
			<div className='g3-reset-fort g3-hold-fort center-certain-text'>
				<div className='g3-one-fifth'>
					<span className='marketing-airline-name'>
						{airplaneName}
					</span>
				</div>
				<div className='g3-four-fifth'>
					<div className='g3-reset-fort g3-hold-fort'>
						<div className='g3-one-fourth'>
							<div className='time'>{departingTime}</div>
							<div className='city'>({departingCityCode})</div>
						</div>
						<div className='g3-two-fourth'>
							<div className='set-text-center'>
								{flightLength}
							</div>
							<div className='set-text-center'>
								<div className='straight-borderline' />
							</div>
							<div className='set-text-center extra-details set-base-text-color'>
								<i className='fas fa-plane' /> {numOfStops}
							</div>
						</div>
						<div className='g3-one-fourth'>
							<div className='time'>{arrivingTime}</div>
							<div className='city'>({arrivingCityCode})</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

FlightsSearchResults_FlightsData.defaultProps = {
	arrivingCityCode: 'Arrival City',
	arrivingCityTime: 'Arrival Time',
	departingCityCode: 'Departure City',
	departingCitytime: 'Departure Time',
	airplaneName: 'Marketing Airline Name',
	flightLength: 'Length of Flight',
	numberOfStops: 'Number of Stops'
};

export default FlightsSearchResults_FlightsData;
