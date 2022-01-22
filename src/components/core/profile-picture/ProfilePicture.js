import PropTypes from 'prop-types';
import React from 'react';
import { StyledProfilePicture } from './ProfilePicture.styled';

function ProfilePicture({ size }) {
	// TODO: revisit the profile picture width and component
	return (
		<StyledProfilePicture>
			<img className={`user-profile-picture ${size}`} src='/images/vijay-profile-image.jpeg' alt='user-avatar' />
		</StyledProfilePicture>
	);
}

ProfilePicture.propTypes = {
	size: PropTypes.string
};

ProfilePicture.defaultProps = {
	size: 'default'
};

export default ProfilePicture;
