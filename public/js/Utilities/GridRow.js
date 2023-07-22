import React from 'react';

function GridRow({ reset, htmlID = '', htmlClass = '', children }) {
	return (
		<>
			<div
				id={htmlID}
				className={
					'g3-hold-fort' + (reset ? ' g3-reset-fort' : '') + htmlClass
				}
			>
				{children}
			</div>
		</>
	);
}

export default GridRow;
