import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from '../../core';
import { StyledHeader } from './Header.styled';

function Header() {
	return (
		<StyledHeader>
			<div className='header-container'>
				<NavLink to='/home'>
					<Icon type='logo-small' />
				</NavLink>

				<div className='navigation-container'>
					<NavLink to='/home'>
						<Icon type='home' />
					</NavLink>
					<Icon type='direct-message' />
					<NavLink to='/create'>
						<Icon type='new-post' />
					</NavLink>
					<Icon type='explore' />
					<Icon type='activity' />
					<NavLink to='/profile'>
						<Icon type='avatar' />
					</NavLink>
				</div>
			</div>
		</StyledHeader>
	);
}

Header.whyDidYouRender = true;

export default Header;
