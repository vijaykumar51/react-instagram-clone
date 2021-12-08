import React, { useState } from 'react';

import TestComponent from './components/Test';

import './App.css';

function App() {
	const [count, setCount] = useState(0);

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
