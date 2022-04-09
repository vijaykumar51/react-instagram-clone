import styled from 'styled-components';

export const StyledAddPostDetails = styled.div`
	background-color: #fff;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	flex: 1;
	min-width: 350px;
	min-height: 350px;
	max-width: 80%;
	margin: 50px;

	.header {
		border-bottom: 1px solid rgb(219, 219, 219);
		color: rgb(38, 38, 38);
		display: flex;
		justify-content: space-between;
		align-items: center;
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
	}

	.image-preview-container {
		flex-basis: 70%;
	}

	.image-preview-container .uploaded-image-preview {
	  border-bottom-left-radius: 10px;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.additional-details-container {
		display: flex;
		flex-direction: column;
		flex: 1;
	}

	.caption-container {
		height: 210px;
	}

`;
