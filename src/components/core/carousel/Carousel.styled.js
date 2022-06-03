import styled from 'styled-components';

export const StyledCarousel = styled.div`
	aspect-ratio: 1/1;
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
		min-width: 150px;
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

	.post-count-dots {
		position: absolute;
		bottom: 20px;
		display: flex;
		gap: 5px;
		justify-content: center;
		width: 100%;
	}

	.post-count-dots .post-dot {
		background: rgba(255, 255, 255, 0.4);
		border-radius: 50%;
		height: 6px;
		width: 6px;
	}

	.post-count-dots .post-dot.current {
		background: rgba(255, 255, 255, 1);
		height: 7px;
		width: 7px;
	}
`;
