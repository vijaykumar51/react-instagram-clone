import styled from 'styled-components';

export const StyledMiniPost = styled.div`
	position: relative;
	cursor: pointer;

	.mini-post-image {
		aspect-ratio: 1/1;
		object-fit: cover;
		width: 100%;
	}

	.multi-image-highlighter {
		position: absolute;
		margin: 8px 8px 0 0;
		top: 0;
		right: 0;
	}

	.overlay {
		background-color: rgba(10, 10, 10, 0.4);
		color: #fff;
		font-size: 18px;
		font-weight: 600;
		display: none;
		align-items: center;
		justify-content: center;
		gap: 25px;
		position: absolute;
		top: 0;
		left: 0;
		height: 290px;
		width: 100%;
	}

	.overlay .post-stats {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	&:hover .overlay {
		display: flex;
	}
`;
