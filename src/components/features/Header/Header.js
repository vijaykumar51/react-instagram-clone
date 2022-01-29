import React from 'react';
import { NavLink } from 'react-router-dom';

import { Icon } from '../../core';

import { StyledHeader } from './Header.styled';

function Header() {
	return (
		<StyledHeader>
			<div className='header-container'>
				<Icon type='logo-small' />
				<div className='navigation-container'>
					<Icon type='home' />
					<Icon type='direct-message' />
					<NavLink to='/create'><Icon type='new-post' /></NavLink>
					<Icon type='explore' />
					<Icon type='activity' />
					<Icon type='avatar' />
				</div>
			</div>
		</StyledHeader>
	);
}

Header.whyDidYouRender = true;

export default Header;
