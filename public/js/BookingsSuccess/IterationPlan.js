import React from 'react';
import { cstm_format_date } from '../Utilities/DateFormatter';

const IterationPlan = ({
	date = 'Thurs, 14 Feb',
	departureTime = '"1999-02-18T16:49:00"',
	arrivalTime = '"1999-02-18T16:49:00"',
	departureAirport = 'LOS',
	arrivalAirport = 'YXU',
	iconType = 'plane'
}) => {
	const departingTime = new Date(departureTime).toLocaleTimeString([], {
		hour: '2-digit',
		minute: '2-digit',
		hour12: false
	});
	const arrivingTime = new Date(arrivalTime).toLocaleTimeString([], {
		hour: '2-digit',
		minute: '2-digit',
		hour12: false
	});
	return (
		<div className='iteration-plan'>
			<div className='date'>{cstm_format_date(date)}</div>
			<div className='details'>
				<div className='departure'>
					{departingTime} - {departureAirport}
				</div>
				<div className='icon-holder'>
					<i className={`fas fa-${iconType}`} />
				</div>
				<div className='arrival'>
					{arrivingTime} - {arrivalAirport}
				</div>
			</div>
		</div>
	);
};

export default IterationPlan;
