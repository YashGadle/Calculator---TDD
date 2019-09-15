import React from 'react';

import './Display.css';

interface Props {
	displayValue: string;
}

const Display: React.FC<Props> = props => {
	const { displayValue } = props;
	return (
		<div className="display-container">
			<p className="display-value">{displayValue}</p>
		</div>
	);
};

export default Display;
