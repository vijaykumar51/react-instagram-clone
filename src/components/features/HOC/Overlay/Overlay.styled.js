import styled from 'styled-components';

export const StyledOverlay = styled.div`
	background: rgba(0, 0, 0, 0.65);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
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
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}

	.nav-link-container {
		width: 80px;
		display: flex;
		justify-content: center;
	}

	.nav-link {
		border-radius: 50%;
		border: none;
		background: #fff;
		cursor: pointer;
		display: inline-flex;
		padding: 8px;
	}

	.next-item-link svg {
		transform: rotate(90deg);
	}
	.previous-item-link svg {
		transform: rotate(-90deg);
	}

	.wrapper-component-container {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
	}
`;
