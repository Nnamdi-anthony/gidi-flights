import React from 'react';

function GridContainer({
	reset,
	htmlID = '',
	htmlClass = '',
	children,
	innerHtmlClass = ''
}) {
	return (
		<>
			<div className={htmlClass + ' g3-container'} id={htmlID}>
				<div
					className={
						'g3-hold-fort' +
						(reset ? ' g3-reset-fort' : '') +
						(innerHtmlClass ? ' ' + innerHtmlClass : '')
					}
				>
					{children}
				</div>
			</div>
		</>
	);
}

export default GridContainer;
