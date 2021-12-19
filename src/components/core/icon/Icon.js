import React from 'react';
import PropTypes from 'prop-types';

import { StyledIcon } from './Icon.styled';

function Icon({ type }) {
	return <StyledIcon className={type} />;
}

Icon.propTypes = {
	type: PropTypes.string.isRequired,
};

export default Icon;
