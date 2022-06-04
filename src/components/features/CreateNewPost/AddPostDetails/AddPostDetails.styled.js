import styled from 'styled-components';

export const StyledAddPostDetails = styled.div`
	aspect-ratio: 16/9;
	background-color: #fff;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	flex: 1;
	min-height: 350px;
	max-height: 80%;
	min-width: 350px;
	max-width: 80%;
	margin: 50px;
	overflow: auto;

	.header {
		border-bottom: 1px solid rgb(219, 219, 219);
		color: rgb(38, 38, 38);
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-shrink: 0;
		font-size: 16px;
		font-weight: 600;
		height: 42px;
	}

	.header button {
		background: none;
		border: none;
		cursor: pointer;
		font-size: 16px;
		font-weight: 600;
		padding: 0 16px;
	}

	.header .share-post {
		color: rgb(0, 149, 246);
	}

	.add-details-container {
		display: flex;
		/** TODO: find a way to remove this hardcoding of 42px */
		height: calc(100% - 42px);
	}

	.image-preview-container {
		flex-basis: 70%;
		height: 100%;
	}

	.additional-details-container {
		display: flex;
		flex-direction: column;
		flex: 1 1 30%;
	}

	.caption-container {
		height: 210px;
	}
`;
