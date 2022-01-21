import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { StyledPost } from './Post.styled';
import { getPostDetails } from '../../../services/temp-store';
import { Carousel, Icon } from '../../core';

function Post() {
	const navigate = useNavigate();

	// TODO: check the portal usecase here
	// const location = useLocation();
	// console.log('state', location.state);
	// const { modal } = location.state ?? {};

	const params = useParams();
	const { postId } = params;
	const [post] = getPostDetails(postId);

	return (
		<StyledPost>
			<button className='post-close-icon' type='button' tabIndex={-1} onClick={() => navigate(-1)}>
				<Icon type='post-close' />
			</button>
			{/* TODO: make this main-container as a HOC */}
			<div className='main-container'>
				<div className='section left-section'>
					<Carousel imageData={post.images} />
				</div>
				<div className='section right-section'>
					{post.uploadTime}
					<br />
					{JSON.stringify(post.images)}
				</div>
			</div>
		</StyledPost>
	);
}

export default Post;
