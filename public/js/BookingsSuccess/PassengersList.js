import React from 'react';
import './PassengersList.scss';
import { cstm_format_date } from '../Utilities/DateFormatter';
import { guid } from '../Utilities/guid';

function PassengersList({ data, phone, email }) {
	return (
		<div>
			<section className='g3-simple-card small-padding'>
				<h4 className='no-margin set-text-bold'>Travellers</h4>
				<table className='passTable_own'>
					<tbody>
						{data.map((person, index) => (
							<tr key={guid}>
								<td className='number_type'>{index + 1}.</td>
								<td>
									<h6 className='no-margin no-padding'>
										{person.first_name +
											' ' +
											person.last_name}
									</h6>
									{cstm_format_date(person.date_of_birth)}
								</td>
							</tr>
						))}
					</tbody>
				</table>

				<br />
				<br />
				<h4 className='no-top-margin no-left-margin no-right-margin set-text-bold small-bottom-margin'>
					Contact Information
				</h4>
				<table className='table-bordered'>
					<tbody>
						<tr>
							<td className='col-md-6'>Email</td>
							<td className='col-md-6'>{email}</td>
						</tr>
						<tr>
							<td className='col-md-6'>Phone Number</td>
							<td className='col-md-6'>{phone}</td>
						</tr>
					</tbody>
				</table>
			</section>
		</div>
	);
}

export default PassengersList;
