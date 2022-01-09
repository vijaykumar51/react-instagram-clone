import React from 'react';
import { StyledProfilePicture } from './ProfilePicture.styled';

function ProfilePicture() {
	// TODO: revisit the profile picture width and component
	return (
		<StyledProfilePicture>
			<img className='user-profile-picture' src='images/vijay-profile-image.jpeg' alt='user-avatar' />
		</StyledProfilePicture>
	);
}

export default ProfilePicture;
