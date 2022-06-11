import styled from 'styled-components';

export const StyledRegisterForm = styled.div`
	--border-radius: 3px;
	background-color: #fff;
	display: inline-flex;
	flex-direction: column;
	align-items: center;

	&.login-form {
		border: 1px solid rgb(219, 219, 219);
		border-radius: var(--border-radius);
		padding: 25px 40px;
		width: 300px;
	}

	.logo-container {
		margin-bottom: 36px;
	}

	.form-fields-container {
		display: flex;
		flex-direction: column;
		gap: 15px;
		width: 100%;
	}
`;
