import React from 'react';
import { StyledTextInput } from './TextInput.styled';

function TextInput() {
	return (
		<StyledTextInput>
			<textarea placeholder='Write a caption...' />
		</StyledTextInput>
	);
}

export default TextInput;
