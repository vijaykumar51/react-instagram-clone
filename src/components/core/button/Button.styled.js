import styled from 'styled-components';

export const StyledButton = styled.div`
	display: inline-flex;
	width: auto;

	button {
		background-color: rgb(0, 149, 246);
		border: none;
		border-radius: 3px;
		color: #fff;
		cursor: pointer;
		font-weight: bold;
		padding: 10px 15px;
	}

	&.disabled button {
		background-color: rgba(0, 149, 246, 0.3);
		cursor: default;
	}

	&.full-bleed {
		width: 100%;
	}

	&.full-bleed button {
		width: 100%;
	}

	&.large button {
		padding: 10px 45px;
	}

	&.medium button {
		padding: 10px 30px;
	}
`;
