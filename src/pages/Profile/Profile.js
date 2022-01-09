import React from 'react';

import { Header, ProfileOverview } from '../../components/features';

import { StyledProfile } from './Profile.styled';

function Profile() {
	return (
		<StyledProfile>
			<Header />
			<ProfileOverview />
		</StyledProfile>
	);
}

Profile.whyDidYouRender = true;

export default Profile;
