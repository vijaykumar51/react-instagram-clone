import styled from 'styled-components';

export const StyledSelectPostMedia = styled.div`
	aspect-ratio: 1/1;
	background-color: #fff;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	flex: 1;
	min-width: 350px;
	min-height: 350px;
	max-width: 650px;
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

	.media-selector-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 5px;
		height: 100%;
	}

	.upload-instructions {
		color: rgb(38, 38, 38);
		font-size: 22px;
		font-weight: 300;
		line-height: 22px;
	}

	#uploadedFiles {
		height: 1px;
		width: 1px;
		position: absolute;
		z-index: -1;
	}

	#uploadedFiles:focus + .upload-label {
		outline: -webkit-focus-ring-color auto 5px;
	}

	#uploadedFiles::-webkit-file-upload-button {
  	visibility: hidden;
	}

	.upload-label {
		background-color: rgb(0, 149, 246);
		border: none;
		border-radius: 3px;
		color: #fff;
		cursor: pointer;
		display: inline-block;
		font-weight: bold;
		padding: 10px 15px;
	}

`;
