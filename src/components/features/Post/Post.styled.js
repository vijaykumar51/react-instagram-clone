import styled from 'styled-components';

export const StyledPost = styled.article`
	background: rgba(0, 0, 0, 0.65);
	display: flex;
	align-items: center;
	height: 100vh;
	box-sizing: border-box;
	padding: 30px 100px;
	position: relative;

	.post-close-icon {
		background: none;
		border: none;
		cursor: pointer;
		position: absolute;
		right: 20px;
		top: 20px;
	}

	// TODO: Make this main-container as  a HOC

	.main-container {
		background: #eee;
		display: flex;
		flex: 1;
		max-height: 80vh;
		min-height: 450px;
		box-sizing: border-box;
	}

	.section {
		flex: 1;
	}

	.left-section {
		display: flex;
		align-items: center;
		flex-basis: 60%;
	}

	.right-section {
		background-color: #fff;
		flex-basis: 40%;
	}
`;
