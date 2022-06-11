import React from 'react';
import { Link } from 'react-router-dom';
import { RegisterForm } from '../../components/features';
import { StyledRegister } from './Register.styled';

function Register() {
	return (
		<StyledRegister>
			<RegisterForm />
			<div className='sign-in-link-container'>
				<span>Already have an account?</span>
				<Link to='/'>Log In</Link>
			</div>
		</StyledRegister>
	);
}

Register.whyDidYouRender = true;

export default Register;
