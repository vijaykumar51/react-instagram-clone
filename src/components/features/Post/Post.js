import React from 'react';
import { useParams } from 'react-router-dom';
import { StyledPost } from './Post.styled';

function Post() {
	// TODO: check the portal usecase here
	// const location = useLocation();
	// console.log('state', location.state);
	// const { modal } = location.state ?? {};

	const params = useParams();
	const { postId } = params;

	return (
		<StyledPost>
			{/* TODO: make this main-container as a HOC */}
			<div className='main-container'>
				<div className='section left-section'>
					<div className='image-container'>
						<img className='post-image' src={`/images/posts/${postId}.jpg`} alt='uploaded-post' />
					</div>
				</div>
				<div className='section right-section'>comment section</div>
			</div>
		</StyledPost>
	);
}

export default Post;
