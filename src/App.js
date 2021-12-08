import React, { useState } from 'react';

import './App.css';

import TestComponent from './components/Test';

function App() {
	const [count, setCount] = useState(0);
	const abc = 'xzy';
	const pqr = 'sf';
	const sdf = 'xdv';

	const countHandler = () => {
		setCount((prevCount) => prevCount + 1);
	};

	return (
		<div>
			<h1>React instagram clone | Count = {count}</h1>
			<button type='button' onClick={countHandler}>
				Increase
			</button>
			<TestComponent />
		</div>
	);
}

App.whyDidYouRender = true;

export default App;
