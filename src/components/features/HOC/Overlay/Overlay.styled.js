import styled from 'styled-components';

export const StyledOverlay = styled.div`
	background: rgba(0, 0, 0, 0.65);
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	box-sizing: border-box;
	position: relative;

	.post-close-icon {
		background: none;
		border: none;
		cursor: pointer;
		position: absolute;
		right: 20px;
		top: 20px;
	}

	.post-nav-container {
		display: flex;
		flex: 1;
		justify-content: space-between;
		align-items: center;
	}

	.post-nav-link {
		border-radius: 50%;
		border: none;
		background: #fff;
		cursor: pointer;
		display: flex;
		margin: 0 30px;
		padding: 8px;
	}

	.next-post-link svg {
		transform: rotate(90deg);
	}
	.previous-post-link svg {
		transform: rotate(-90deg);
	}

	.wrapper-component-container {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;
