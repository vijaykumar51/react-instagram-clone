import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Icon, Input } from '../../core';
import { StyledLoginForm } from './LoginForm.styled';

function LoginForm() {
	const naviagte = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isFormValid, setIsFormValid] = useState(false);

	useEffect(() => {
		setIsFormValid(!!email && !!password);
	}, [email, password]);

	const login = () => {
		signInWithEmailAndPassword(getAuth(), email, password)
			.then(() => naviagte('/profile'))
			.catch((error) => {
				console.error('error while logging in', error);
			});
	};

	return (
		<StyledLoginForm className='login-form'>
			<div className='logo-container'>
				<Icon type='logo-large' className='logo-container' />
			</div>
			<div className='form-fields-container'>
				<Input
					type='text'
					label='Email address'
					value={email}
					onChange={setEmail}
				/>
				<Input
					type='password'
					label='Password'
					value={password}
					onChange={setPassword}
				/>
				<Button size='full-bleed' disabled={!isFormValid} onClick={login}>
					Log In
				</Button>
			</div>
		</StyledLoginForm>
	);
}

LoginForm.whyDidYouRender = true;

export default LoginForm;
