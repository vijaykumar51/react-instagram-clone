import React from 'react';

import { Input } from '../../core';

function LoginForm() {
	return (
		<div>
			<h2>Login Form 2</h2>
			<Input type='text' label='Email address' />
			<Input type='password' label='Password' />
		</div>
	);
}

export default LoginForm;
