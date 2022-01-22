import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
	const [post] = getPostDetails(postId);
	const comments = getComments();

	return (
		<StyledPost>
			<button className='post-close-icon' type='button' onClick={() => navigate(-1)}>
				<Icon type='post-close' />
			</button>
			{/* TODO: make this main-container as a HOC */}
			<div className='main-container'>
				<div className='section left-section'>
					<Carousel imageData={post.images} />
				</div>
				<div className='section right-section'>
					<div className='header-container'><PostHeader /></div>
					<div className='comment-section-container'><Comments comments={comments} /></div>
					<div className='interaction-options'>Like comment</div>
					<div className='stats-container'>Stats</div>
					<div className='new-comment'>comment here</div>
				</div>
			</div>
		</StyledPost>
	);
}

export default Post;
