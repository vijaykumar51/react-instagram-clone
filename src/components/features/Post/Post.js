import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { StyledPost } from './Post.styled';
import { getComments, getPostDetails } from '../../../services/temp-store';
import { Carousel, Icon, PostHeader } from '../../core';
import Overlay from '../HOC/Overlay/Overlay';
import Comments from '../Comments/Comments';

function Post({ setPreviousItemUrl, setNextItemUrl }) {
	// TODO: check the portal usecase here
	// const location = useLocation();
	// console.log('state', location.state);
	// const { modal } = location.state ?? {};

	const [currentPostData, setCurrentPostData] = useState({});
	const [comments, setComments] = useState([]);

	const params = useParams();
	const { postId } = params;

	useEffect(() => {
		const { prevPostId, postData, nextPostId } = getPostDetails(postId);
		setCurrentPostData(postData);
		setPreviousItemUrl(`/post/${prevPostId}`);
		setNextItemUrl(`/post/${nextPostId}`);
		setComments(getComments());
	}, [postId]);

	return (
		<StyledPost>
			<div className='main-container'>
				<div className='section left-section'>
					<Carousel imageData={currentPostData.images} />
				</div>
				<div className='section right-section'>
					<div className='header-container'><PostHeader /></div>
					<div className='comment-section-container'><Comments comments={comments} /></div>
					<div className='post-interaction-options'>
						<button type='button' aria-label='like-button'><Icon type='like' /></button>
						<button type='button' aria-label='comment-button'><Icon type='comment' /></button>
						<button type='button' aria-label='share-button'><Icon type='share' /></button>
						<button type='button' aria-label='bookmark-button' className='bookmark-button'><Icon type='bookmark' /></button>
					</div>
					<div className='stats-container'>{currentPostData.uploadTime}</div>
					<div className='new-comment'>Add a comment...</div>
				</div>
			</div>
		</StyledPost>
	);
}

Post.propTypes = {
	setPreviousItemUrl: PropTypes.func,
	setNextItemUrl: PropTypes.func
};

Post.defaultProps = {
	setPreviousItemUrl: null,
	setNextItemUrl: null
};

Post.whyDidYourRender = true;

export default Overlay(Post);
