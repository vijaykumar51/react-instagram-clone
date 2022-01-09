import React from 'react';
import { ProfileInfo, ProfilePicture } from '../../core';
import { StyledProfileOverview } from './ProfileOverview.styled';

function ProfileOverview() {
	return (
		<StyledProfileOverview>
			<div className='profile-picture-container'>
				<ProfilePicture />
			</div>
			<div className='profile-info-container'>
				<ProfileInfo />
			</div>
		</StyledProfileOverview>
	);
}

export default ProfileOverview;
