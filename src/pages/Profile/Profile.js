import React from 'react';

import { Header } from '../../components/features';

import { StyledProfile } from './Profile.styled';

function Profile() {
	return (
		<StyledProfile>
			<Header />
			<h1>Profile page</h1>
		</StyledProfile>
	);
}

Profile.whyDidYouRender = true;

export default Profile;
