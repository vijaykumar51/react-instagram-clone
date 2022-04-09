import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCaption } from '../../../../store/slices/newPostSlice';
import { PostHeader, TextInput } from '../../../core';
import Overlay from '../../HOC/Overlay/Overlay';
import { StyledAddPostDetails } from './AddPostDetails.styled';

function AddPostDetails() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const uploadedImage = useSelector((state) => state.newPost.imageData);
	const [postCaption, setPostCaption] = useState();

	const sharePost = () => {
		dispatch(setCaption({ caption: postCaption }));
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
					{uploadedImage && (
						<img
							src={uploadedImage}
							alt='upload preview'
							className='uploaded-image-preview'
						/>
					)}
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
