import React from 'react';
import PropTypes from 'prop-types';

import { StyledButton } from './Button.styled';

function Button({ children, size, disabled, onClick }) {
	return (
		<StyledButton className={`${size} ${disabled && 'disabled'}`}>
			<button type='button' onClick={onClick}>
				{children}
			</button>
		</StyledButton>
	);
}

Button.propTypes = {
	children: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	size: PropTypes.string,
	disabled: PropTypes.bool,
};

Button.defaultProps = {
	size: '',
	disabled: false,
};

export default Button;
