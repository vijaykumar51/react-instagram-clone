import React from 'react';
// import { useParams } from 'react-router-dom';
import { StyledPost } from './Post.styled';
import { getComments, getPostDetails } from '../../../services/temp-store';
import { Carousel, Icon, PostHeader } from '../../core';
import Overlay from '../HOC/Overlay/Overlay';
import Comments from '../Comments/Comments';

function Post() {
	// TODO: check the portal usecase here
	// const location = useLocation();
	// console.log('state', location.state);
	// const { modal } = location.state ?? {};

	// const params = useParams();
	// const { postId } = params;

	const postId = 'post1';
	const { postData: currentPostData } = getPostDetails(postId);
	const comments = getComments();

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

export default Overlay(Post);
