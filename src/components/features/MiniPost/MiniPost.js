import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Icon } from '../../core';
import { StyledMiniPost } from './MiniPost.styled';

function MiniPost({ id, likeCount, commentCount, sources }) {
	const [thumbnailImage] = sources;
	const hasMultipleImages = sources.length > 1;
	return (
		<NavLink to={`/post/${id}`} state={{ modal: true }}>
			<StyledMiniPost>
				<img className='mini-post-image' src={thumbnailImage.url} alt='uploaded-post' />
				{hasMultipleImages && (
					<div className='multi-image-highlighter'>
						<Icon type='multi-image' />
					</div>
				)}
				<div className='overlay'>
					<div className='post-stats'>
						<Icon type='post-likes' />
						<span className='count'>{likeCount}</span>
					</div>
					<div className='post-stats'>
						<Icon type='post-comments' />
						<span className='count'>{commentCount}</span>
					</div>
				</div>
			</StyledMiniPost>
		</NavLink>
	);
}

MiniPost.propTypes = {
	id: PropTypes.string.isRequired,
	likeCount: PropTypes.number.isRequired,
	commentCount: PropTypes.number.isRequired,
	sources: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired)).isRequired,
};

MiniPost.whyDidYouRender = true;
export default MiniPost;
