import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { PostHeader } from '../../../core';
import Overlay from '../../HOC/Overlay/Overlay';
import { StyledAddPostDetails } from './AddPostDetails.styled';

function AddPostDetails() {
	const navigate = useNavigate();
	const [previewImage, setPreviewImage] = useState();

	const location = useLocation();
	const { uploadedFile } = location.state ?? {};

	useEffect(() => {
		if (!uploadedFile) navigate('/create');
		const reader = new FileReader();
		reader.onload = (e) => {
			setPreviewImage(e.target.result);
		};
		reader.readAsDataURL(uploadedFile);
	}, [uploadedFile]);

	return (
		<StyledAddPostDetails>
			<div className='header'>
			Create New Post
			</div>
			<div className='add-details-container'>
				<div className='image-preview-container'>
					{previewImage && <img src={previewImage} alt='upload preview' className='uploaded-image-preview' />}
				</div>
				<div>
					<PostHeader />
					write a caption
				</div>
			</div>
		</StyledAddPostDetails>
	);
}

AddPostDetails.whyDidYouRender = true;

export default Overlay(AddPostDetails);
