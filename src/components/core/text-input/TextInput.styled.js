import styled from 'styled-components';

export const StyledTextInput = styled.div`
	border-bottom: 1px solid rgb(219, 219, 219);
	height: 100%;
	width: 100%;
	
	textarea {
		border: none;
		box-sizing: border-box;
		color: rgb(38, 38, 38);
		font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
		font-size: 16px;
		font-weight: 400;
		height: 100%;
		line-height: 24px;
		padding: 0 16px;
		resize: none;
		width: 100%;
	}

	textarea:focus-visible {
		outline: none;
	}
`;
