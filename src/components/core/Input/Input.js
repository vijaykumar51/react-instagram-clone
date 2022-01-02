import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';

import { StyledInput } from './Input.styled';

const defaultInputType = 'text';
const allowedInputTypes = ['text', 'password'];

function Input(props) {
	const [isInEditMode, setIsInEditMode] = useState(false);

	const { type, label, value, onChange: onChangeHandler } = props;
	const inputType = type && allowedInputTypes.includes(type) ? type : defaultInputType;

	const handleInputChange = (event) => {
		if (onChangeHandler) onChangeHandler(event?.target?.value);
	};

	return (
		<StyledInput className={isInEditMode ? 'edit-mode' : ''}>
			{/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
			<label>
				<span className='display-label'>{label}</span>
				<input
					type={inputType}
					value={value}
					onFocus={() => setIsInEditMode(true)}
					onBlur={() => setIsInEditMode(!!value)}
					onChange={handleInputChange}
				/>
			</label>
		</StyledInput>
	);
}

Input.propTypes = {
	type: PropTypes.string,
	label: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
	type: '',
	label: '',
	value: '',
};

Input.whyDidYouRender = true;

export default memo(Input);
