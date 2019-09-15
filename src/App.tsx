import React from 'react';

import './App.css';
import Calculator from './components/Calculator';

const App: React.FC = () => {
	return (
		<div className="app-container">
			{' '}
			<Calculator />
		</div>
	);
};

export default App;
