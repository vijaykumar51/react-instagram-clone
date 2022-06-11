import styled from 'styled-components';

export const StyledRegister = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 70px;
	gap: 30px;

	// TODO: this css should not be here - clean it
	.sign-in-link-container {
		background-color: #fff;
		border: 1px solid rgb(219, 219, 219);
		border-radius: 3px;
		display: flex;
		justify-content: center;
		gap: 5px;
		padding: 25px 40px;
		width: 300px;
	}
`;
