import styled from 'styled-components';

export const StyledPost = styled.article`
	background: rgba(0, 0, 0, 0.65);
	display: flex;
	align-items: center;
	height: 100vh;
	box-sizing: border-box;
	padding: 30px 100px;

	// TODO: Make this main-container as  a HOC

	.main-container {
		background: #eee;
		display: flex;
		flex: 1;
		max-height: 80vh;
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
		flex-basis: 40%;
	}

	.image-container {
		background: rgba(0, 0, 0, 1);
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		width: 100%;
	}

	.image-container .post-image {
		width: 100%;
		height: 100%;
		max-width: 100%;
		max-height: 100%;
		object-fit: contain;
	}
`;
