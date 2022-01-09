import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Icon } from '../../components/core';
import { Header, ProfileOverview } from '../../components/features';

import { StyledProfile } from './Profile.styled';

function Profile() {
	return (
		<StyledProfile>
			<Header />
			<ProfileOverview />
			<div className='posts-pages-nav'>
				<nav>
					<NavLink to='' className={({ isActive }) => `posts-nav-link ${isActive ? 'active-link' : ''}`} end>
						<Icon type='nav-link-posts' /> POSTS
					</NavLink>
					<NavLink
						to='saved'
						className={({ isActive }) => `posts-nav-link ${isActive ? 'active-link' : ''}`}
						end
					>
						<Icon type='nav-link-saved' /> SAVED
					</NavLink>
					<NavLink
						to='tagged'
						className={({ isActive }) => `posts-nav-link ${isActive ? 'active-link' : ''}`}
						end
					>
						<Icon type='nav-link-tagged' /> TAGGED
					</NavLink>
				</nav>
			</div>
			<div className='all-posts-container'>
				<Outlet />
			</div>
		</StyledProfile>
	);
}

Profile.whyDidYouRender = true;

export default Profile;
