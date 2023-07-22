import React from 'react';
import './RadioBox.scss';

const RadioBox = ({ text, value, id, name, checked, onchange }) => {
	return (
		<>
			<label className='raddy-container' htmlFor={id}>
				<span className='raddy-text'>{text}</span>
				<input
					type='radio'
					value={value}
					checked={checked}
					id={id}
					name={name}
					onChange={onchange}
				/>
				<span className='raddy-checkmark' />
			</label>
		</>
	);
};

export default RadioBox;
