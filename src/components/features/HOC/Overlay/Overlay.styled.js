import styled from 'styled-components';

export const StyledOverlay = styled.div`
	background: rgba(0, 0, 0, 0.65);
	display: flex;
	flex-direction: column;
	height: 100vh;
	max-height: 100vh;
	box-sizing: border-box;
	position: relative;

	.overlay-header {
		display: flex;
		justify-content: right;
		width: 100%;
	}

	.close-icon {
		background: none;
		border: none;
		cursor: pointer;
		margin: 20px;
	}

	.overlay-content-container {
		display: flex;
		flex: 1;
		justify-content: center;
		align-items: center;
		min-height: 0;
		overflow: auto;
		width: 100%;
	}
`;
