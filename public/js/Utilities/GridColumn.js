import React from 'react';

function GridColumn({
	col = 'full',
	htmlClass = '',
	htmlID = '',
	children,
	clickAction
}) {
	return (
		<>
			<div
				onClick={clickAction}
				id={htmlID}
				className={'g3-' + col + ' ' + htmlClass}
			>
				{children}
			</div>
		</>
	);
}

export default GridColumn;
