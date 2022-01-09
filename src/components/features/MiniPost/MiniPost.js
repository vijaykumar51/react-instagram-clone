import React from 'react';
import { Icon } from '../../core';
import { StyledMiniPost } from './MiniPost.styled';

function MiniPost() {
	return (
		<StyledMiniPost>
			<img className='mini-post-image' src='/images/post-1.jpeg' alt='uploaded-post' />
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
	);
}

export default MiniPost;
