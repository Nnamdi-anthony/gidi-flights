import React from 'react';

const CheckBox = ({ text, value, id, name, checked, onchange }) => {
	return (
		<>
			<label className='checky-container' htmlFor={id}>
				<span className='checky-text'>{text}</span>
				<input
					type='checkbox'
					value={value}
					checked={checked}
					id={id}
					name={name}
					onChange={onchange}
				/>
				<span className='checky-checkmark' />
			</label>
		</>
	);
};

export default CheckBox;
