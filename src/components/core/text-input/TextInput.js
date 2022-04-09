import PropTypes from 'prop-types';
import React from 'react';
import { StyledTextInput } from './TextInput.styled';

function TextInput({ placeholder, onChange }) {
	return (
		<StyledTextInput>
			<textarea placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />
		</StyledTextInput>
	);
}

TextInput.propTypes = {
	placeholder: PropTypes.string,
	onChange: PropTypes.func.isRequired
};

TextInput.defaultProps = {
	placeholder: ''
};

export default TextInput;
