import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header, ProfileOverview } from '../../components/features';

import { StyledProfile } from './Profile.styled';

function Profile() {
	return (
		<StyledProfile>
			<Header />
			<ProfileOverview />
			<div className='all-posts-container'>
				<Outlet />
			</div>
		</StyledProfile>
	);
}

Profile.whyDidYouRender = true;

export default Profile;
