import styled from 'styled-components';

export const StyledCarousel = styled.div`
	display: flex;
	align-items: center;
	height: 100%;
	width: 100%;
	position: relative;
	overflow: hidden;

	.image-container {
		background: rgba(0, 0, 0, 1);
		display: flex;
		align-items: center;
		justify-content: center;
		height: 0;
		width: 0;
		opacity: 0;
		transition: opacity 1s ease-in-out;
	}

	.image-container.current-image {
		height: 100%;
		width: 100%;
		opacity: 1;
	}

	.image-container .post-image {
		width: 100%;
		height: 100%;
		max-width: 100%;
		max-height: 100%;
		object-fit: contain;
	}

	.arrow-icon-container {
		background-color: transparent;
		border: 0px;
		display: flex;
		align-items: center;
		height: 100%;
		margin: 0 8px;
		position: absolute;
		z-index: 10;
	}

	.arrow-icon-container.left-arrow {
		left: 0;
	}

	.arrow-icon-container.right-arrow {
		top: 0;
		right: 0;
	}
`;
