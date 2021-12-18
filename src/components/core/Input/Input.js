import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { StyledInput } from './Input.styled';

const defaultInputType = 'text';
const allowedInputTypes = ['text', 'password'];

function Input(props) {
	const [isFocused, setIsFocused] = useState(false);

	const { type, label } = props;
	const inputType = !type || !allowedInputTypes.includes(type) ? defaultInputType : type;

	return (
		<StyledInput className={isFocused ? 'focused' : ''}>
			{/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
			<label>
				<span className='display-label'>{label}</span>
				<input type={inputType} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} />
			</label>
		</StyledInput>
	);
}

Input.propTypes = {
	type: PropTypes.string,
	label: PropTypes.string,
};

Input.defaultProps = {
	type: '',
	label: '',
};

export default Input;
