import styled from 'styled-components';

export const StyledInput = styled.div`
	background: #fafafa;
	border: 1px solid rgb(219, 219, 219);
	border-radius: 3px;
	padding: 5px;
	position: relative;
	line-height: 18px;

	input {
		background: inherit;
		border: none;
		font-size: 14px;
		outline: none;
		width: 100%;
	}

	label {
		display: flex;
		height: 38px;
	}

	.display-label {
		color: rgb(142, 142, 142);
		height: 36px;
		line-height: 36px;
		position: absolute;
		transform-origin: top left;
		transition: transform ease-out 0.2s;
	}

	&.edit-mode {
		border-color: rgb(168, 168, 168);
	}

	&.edit-mode .display-label {
		transform: scale(0.83333) translateY(-12px);
	}

	&.edit-mode input {
		padding-top: 10px;
	}
`;
