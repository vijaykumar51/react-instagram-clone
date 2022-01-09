import styled from 'styled-components';

export const StyledHeader = styled.header`
	border-bottom: 1px solid rgb(219, 219, 219);
	padding: 3px 0;

	.header-container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: auto;
		padding: 12px 0;
		width: 935px;
	}

	.navigation-container {
		display: flex;
		gap: 20px;
	}
`;
