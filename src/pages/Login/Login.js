import React from 'react';

import { LoginForm } from '../../components/features';
import { StyledLogin } from './Login.styled';

function Login() {
	return (
		<StyledLogin>
			<LoginForm />
		</StyledLogin>
	);
}

Login.whyDidYouRender = true;

export default Login;
