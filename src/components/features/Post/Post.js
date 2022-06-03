import PropTypes from 'prop-types';
import React from 'react';
import { Carousel, Icon, PostHeader } from '../../core';
import Comments from '../Comments/Comments';
import { StyledPost } from './Post.styled';

function Post({ postInfo, comments }) {
	if (!postInfo) {
		return <StyledPost>Post data not available</StyledPost>;
	}

	return (
		<StyledPost>
			<div className='section left-section'>
				<Carousel imageData={postInfo?.images} />
			</div>
			<div className='section right-section'>
				<div className='header-container'>
					<PostHeader />
				</div>
				<div className='comment-section-container'>
					<Comments comments={comments} />
				</div>
				<div className='post-interaction-options'>
					<button type='button' aria-label='like-button'>
						<Icon type='like' />
					</button>
					<button type='button' aria-label='comment-button'>
						<Icon type='comment' />
					</button>
					<button type='button' aria-label='share-button'>
						<Icon type='share' />
					</button>
					<button
						type='button'
						aria-label='bookmark-button'
						className='bookmark-button'
					>
						<Icon type='bookmark' />
					</button>
				</div>
				<div className='stats-container'>{postInfo?.uploadTime}</div>
				<div className='new-comment'>Add a comment...</div>
			</div>
		</StyledPost>
	);
}

Post.propTypes = {
	postInfo: PropTypes.shape({
		uploadTime: PropTypes.string,
		images: PropTypes.arrayOf(PropTypes.string),
	}),
	comments: PropTypes.shape({
		commentBy: PropTypes.string.isRequired,
		comment: PropTypes.string.isRequired,
	}),
};

Post.defaultProps = {
	postInfo: null,
	comments: [],
};

Post.whyDidYourRender = true;

export default Post;
