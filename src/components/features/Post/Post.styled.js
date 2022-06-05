import styled from 'styled-components';

export const StyledPost = styled.article`
	background-color: #fff;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	flex: 1;
	max-height: 80vh;
	min-height: 450px;

	.section {
		flex: 1;
	}

	.left-section {
		display: flex;
		align-items: center;
		flex-basis: 60%;
	}

	.right-section {
		display: flex;
		flex-direction: column;
		flex-basis: 40%;
	}

	.top-header-container {
		display: none;
	}

	.comment-section-container {
		flex: 1 1 300px;
		overflow: auto;
	}

	.post-interaction-options {
		border-top: 1px solid rgb(239, 239, 239);
		display: flex;
		gap: 5px;
		padding: 6px 8px;
	}

	.post-interaction-options button {
		background: none;
		border: none;
		color: #000;
		cursor: pointer;
		padding: 8px;
	}

	.post-interaction-options button svg {
		color: rgb(39, 39, 39);
		fill: rgb(39, 39, 39);
	}

	.post-interaction-options button svg:hover {
		color: rgb(142, 142, 142);
		fill: rgb(142, 142, 142);
	}

	.post-interaction-options .bookmark-button {
		margin-left: auto;
	}

	.stats-container {
		color: rgb(142, 142, 142);
		font-size: 10px;
		font-weight: 400;
		padding-left: 16px;
		padding-bottom: 16px;
	}

	.new-comment {
		border-top: 1px solid rgb(239, 239, 239);
		color: rgb(38, 38, 38);
		padding: 16px;
	}

	// TODO: check how to reuse the css here and how to correctly switch between orientations
	&.orientation-vertical {
		flex-direction: column;
		max-height: unset;

		.top-header-container {
			display: block;
		}

		.right-section .right-header-container,
		.right-section .comment-section-container,
		.right-section .new-comment {
			display: none;
		}
	}

	@media (max-width: 600px) {
		flex-direction: column;

		.top-header-container {
			display: block;
		}

		.right-section .right-header-container,
		.right-section .comment-section-container,
		.right-section .new-comment {
			display: none;
		}
	}
`;
