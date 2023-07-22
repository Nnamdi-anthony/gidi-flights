import React from 'react';
import GridContainer from '../Utilities/GridContainer';
import GridColumn from '../Utilities/GridColumn';
import { cstm_format_date } from '../Utilities/DateFormatter';

const FlightDetails_TimelineHeader = ({
	title = 'Flight Name',
	date = '2019-09-11',
	iconType = 'fas fa-plane-departure'
}) => {
	return (
		<>
			<GridContainer reset htmlClass='no-bottom-padding'>
				<GridColumn
					col='half'
					htmlClass='set-base-text-color set-text-600'
				>
					<i className={iconType} /> {title}
				</GridColumn>
				<GridColumn col='half' htmlClass='set-text-right'>
					{cstm_format_date(date)}
				</GridColumn>
			</GridContainer>
		</>
	);
};

export default FlightDetails_TimelineHeader;
