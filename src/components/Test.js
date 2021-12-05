import React from 'react';

const TestComponent = () => {
	console.log('Test componenet called');
	return (
		<div>
			<h1>Hello user</h1>
		</div>
	);
};

TestComponent.whyDidYouRender = true;

export default TestComponent;
