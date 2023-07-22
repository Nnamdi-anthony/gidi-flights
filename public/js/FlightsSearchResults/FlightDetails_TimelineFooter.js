import React from 'react';
import { cstm_format_date } from '../Utilities/DateFormatter';
import GridColumn from '../Utilities/GridColumn';
import GridContainer from '../Utilities/GridContainer';

const FlightDetails_TimelineFooter = ({ duration, arrivalDate }) => {
	return (
		<>
			<div className='content-footer'>
				<GridContainer reset htmlClass='no-bottom-padding'>
					<GridColumn col='half' htmlClass='reset-width'>
						Arrival:{' '}
						<span className='set-text-bold'>
							{cstm_format_date(arrivalDate)}
						</span>
					</GridColumn>
					<GridColumn col='half' htmlClass='set-text-right'>
						Duration:{' '}
						<span className='set-text-bold'>{duration}</span>
					</GridColumn>
				</GridContainer>
			</div>
		</>
	);
};

export default FlightDetails_TimelineFooter;
