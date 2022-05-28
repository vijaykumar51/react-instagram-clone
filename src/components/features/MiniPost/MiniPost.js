import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from '../../core';
import { StyledMiniPost } from './MiniPost.styled';

function MiniPost({ id, likeCount, commentCount, sources }) {
	const [thumbnailImage] = sources;
	const hasMultipleImages = sources.length > 1;
	return (
		<NavLink to={`/post/${id}`} state={{ modal: true }}>
			<StyledMiniPost>
				{thumbnailImage && (
					<img
						className='mini-post-image'
						src={thumbnailImage}
						alt='uploaded-post'
					/>
				)}
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
	likeCount: PropTypes.number,
	commentCount: PropTypes.number,
	sources: PropTypes.arrayOf(PropTypes.string.isRequired),
};

MiniPost.defaultProps = {
	likeCount: 0,
	commentCount: 0,
	sources: [],
};

MiniPost.whyDidYouRender = true;
export default MiniPost;
