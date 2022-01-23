import React from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { StyledPost } from './Post.styled';
import { getComments, getPostDetails } from '../../../services/temp-store';
import { Carousel, Icon, PostHeader } from '../../core';
import Comments from '../Comments/Comments';

function Post() {
	const navigate = useNavigate();

	// TODO: check the portal usecase here
	// const location = useLocation();
	// console.log('state', location.state);
	// const { modal } = location.state ?? {};

	const params = useParams();
	const { postId } = params;
	const { prevPostId, postData: currentPostData, nextPostId } = getPostDetails(postId);
	const comments = getComments();

	return (
		<StyledPost>
			<button className='post-close-icon' type='button' onClick={() => navigate(-1)}>
				<Icon type='post-close' />
			</button>
			<div className='post-nav-container'>
				<div>
					{prevPostId
					&& (
						<Link to={`/post/${prevPostId}`} className='post-nav-link previous-post-link'>
							<Icon type='angular-bracket' />
						</Link>
					)}
				</div>
				{/* TODO: make this main-container as a HOC */}
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
				<div>
					{ nextPostId
					&& (
						<Link to={`/post/${nextPostId}`} className='post-nav-link next-post-link'>
							<Icon type='angular-bracket' />
						</Link>
					)}
				</div>
			</div>
		</StyledPost>
	);
}

export default Post;
