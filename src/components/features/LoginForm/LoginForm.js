import React, { useEffect, useState } from 'react';

import { Button, Input } from '../../core';
import { StyledLoginForm } from './LoginForm.styled';

function LoginForm() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isFormValid, setIsFormValid] = useState(false);

	useEffect(() => {
		setIsFormValid(!!email && !!password);
	}, [email, password]);

	const login = () => {
		console.log('Form submission', email, password);
	};

	return (
		<StyledLoginForm>
			<div className='login-form'>
				<div>Instagram</div>
				<Input type='text' label='Email address' value={email} onChange={setEmail} />
				<Input type='password' label='Password' value={password} onChange={setPassword} />
				<Button size='full-bleed' disabled={!isFormValid} onClick={login}>
					Log In
				</Button>
			</div>
		</StyledLoginForm>
	);
}

LoginForm.whyDidYouRender = true;

export default LoginForm;
