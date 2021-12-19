import styled from 'styled-components';

export const StyledLoginForm = styled.div`
	--border-radius: 3px;
	background-color: #fff;
	display: inline-flex;

	.login-form {
		border: 1px solid rgb(219, 219, 219);
		border-radius: var(--border-radius);
		display: flex;
		flex-direction: column;
		gap: 15px;
		padding: 25px 40px;
		width: 300px;
	}
`;
