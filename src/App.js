import React, { useState } from 'react';

import { LoginForm } from './components/features';

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
			<LoginForm />
		</div>
	);
}

App.whyDidYouRender = true;

export default App;
