import React, { useEffect, useState } from 'react';

import { Input } from '../../core';

function LoginForm() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isFormValid, setIsFormValid] = useState(false);

	useEffect(() => {
		setIsFormValid(!!email && !!password);
	}, [email, password]);

	return (
		<div>
			<h2>Login Form</h2>
			<Input type='text' label='Email address' value={email} onChange={setEmail} />
			<Input type='password' label='Password' value={password} onChange={setPassword} />
			<div>Form Valid - {JSON.stringify(isFormValid)}</div>
		</div>
	);
}

export default LoginForm;
