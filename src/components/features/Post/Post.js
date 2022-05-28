import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getComments, getPostDetails } from '../../../services/temp-store';
import { Carousel, Icon, PostHeader } from '../../core';
import Comments from '../Comments/Comments';
import Overlay from '../HOC/Overlay/Overlay';
import { StyledPost } from './Post.styled';

// TODO: pass every data posts needs in props, don't use useParams
function Post({ setPreviousItemUrl, setNextItemUrl }) {
	const [currentPostData, setCurrentPostData] = useState({});
	const [comments, setComments] = useState([]);
	// TODO: find the proper way to get state from redux based on parameter
	const { posts: uploadedPosts } = useSelector((state) => state.uploadedPosts);
	const params = useParams();
	const { postId } = params;
	useEffect(() => {
		const { prevPostId, postData, nextPostId } = getPostDetails(
			uploadedPosts,
			postId
		);
		setCurrentPostData(postData);
		setPreviousItemUrl(prevPostId ? `/post/${prevPostId}` : null);
		setNextItemUrl(nextPostId ? `/post/${nextPostId}` : null);
		setComments(getComments());
	}, [postId]);

	if (!currentPostData) {
		return <StyledPost>Post not found</StyledPost>;
	}

	return (
		<StyledPost>
			<div className='main-container'>
				<div className='section left-section'>
					<Carousel imageData={currentPostData?.images} />
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
					<div className='stats-container'>{currentPostData?.uploadTime}</div>
					<div className='new-comment'>Add a comment...</div>
				</div>
			</div>
		</StyledPost>
	);
}

Post.propTypes = {
	setPreviousItemUrl: PropTypes.func,
	setNextItemUrl: PropTypes.func,
};

Post.defaultProps = {
	setPreviousItemUrl: null,
	setNextItemUrl: null,
};

Post.whyDidYourRender = true;

export default Overlay(Post);
