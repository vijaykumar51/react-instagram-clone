import React from 'react';
import { Link } from 'react-router-dom';
import { LoginForm } from '../../components/features';
import { StyledLogin } from './Login.styled';

function Login() {
	return (
		<StyledLogin>
			<LoginForm />
			<div className='registration-link-container'>
				<span>Don&apos;t have an account?</span>
				<Link to='/register'>Sign up</Link>
			</div>
		</StyledLogin>
	);
}

Login.whyDidYouRender = true;

export default Login;
