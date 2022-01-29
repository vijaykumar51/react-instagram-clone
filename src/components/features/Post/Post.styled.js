import styled from 'styled-components';

export const StyledPost = styled.article`
	.main-container {
		background: #eee;
		display: flex;
		flex: 1;
		max-height: 80vh;
		min-height: 450px;
		box-sizing: border-box;
		max-width: 80%;
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
		display: flex;
		flex-direction: column;
		flex-basis: 35%;
		min-width: 335px;
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

`;
