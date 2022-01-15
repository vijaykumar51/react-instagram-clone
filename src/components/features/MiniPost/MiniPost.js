import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Icon } from '../../core';
import { StyledMiniPost } from './MiniPost.styled';

function MiniPost({ id }) {
	return (
		<NavLink to={`/post/${id}`} state={{ modal: true }}>
			<StyledMiniPost>
				<img className='mini-post-image' src={`/images/posts/${id}.jpg`} alt='uploaded-post' />
				<div className='overlay'>
					<div className='post-stats'>
						<Icon type='post-likes' />
						<span className='count'>30</span>
					</div>
					<div className='post-stats'>
						<Icon type='post-comments' />
						<span className='count'>12</span>
					</div>
				</div>
			</StyledMiniPost>
		</NavLink>
	);
}

MiniPost.propTypes = {
	id: PropTypes.string.isRequired,
};

export default MiniPost;
