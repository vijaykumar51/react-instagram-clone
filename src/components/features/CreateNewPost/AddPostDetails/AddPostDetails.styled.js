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
		justify-content: center;
		align-items: center;
		font-size: 16px;
		font-weight: 600;
		height: 42px;
	}

	.add-details-container {
		display: flex;
	}

	.image-preview-container {
		flex-basis: 70%;
	}

	.image-preview-container .uploaded-image-preview {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

`;
