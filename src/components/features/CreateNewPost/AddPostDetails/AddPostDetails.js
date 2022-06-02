import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
	clearNewPost,
	setCaption,
} from '../../../../store/slices/newPostSlice';
import { addPost } from '../../../../store/slices/uploadedPosts';
import { Carousel, PostHeader, TextInput } from '../../../core';
import Overlay from '../../HOC/Overlay/Overlay';
import { StyledAddPostDetails } from './AddPostDetails.styled';

function AddPostDetails() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [postCaption, setPostCaption] = useState();
	const uploadedImages = useSelector((state) => state.newPost.images);
	const newPostDetails = useSelector((state) => state.newPost);

	if (!uploadedImages?.length) {
		navigate('/create/select');
	}

	const sharePost = () => {
		// TODO: fix this. we shouldn't dispatch multiple dispatches on one action
		// find how to move newPost slice data to uploadedPosts
		dispatch(setCaption({ caption: postCaption }));
		dispatch(addPost(newPostDetails));
		dispatch(clearNewPost());
		navigate('/profile');
	};

	return (
		<StyledAddPostDetails>
			<div className='header'>
				<button type='button' onClick={() => navigate(-1)}>
					Back
				</button>
				<span>Create New Post</span>
				<button type='button' className='share-post' onClick={sharePost}>
					Share
				</button>
			</div>
			<div className='add-details-container'>
				<div className='image-preview-container'>
					<Carousel imageData={uploadedImages} />
				</div>
				<div className='additional-details-container'>
					<PostHeader />
					<div className='caption-container'>
						<TextInput
							placeholder='Write a caption...'
							onChange={setPostCaption}
						/>
					</div>
				</div>
			</div>
		</StyledAddPostDetails>
	);
}

AddPostDetails.whyDidYouRender = true;

export default Overlay(AddPostDetails);
