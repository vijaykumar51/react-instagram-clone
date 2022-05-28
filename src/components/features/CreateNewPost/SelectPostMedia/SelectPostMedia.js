import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setImages } from '../../../../store/slices/newPostSlice';
import { Icon } from '../../../core';
import Overlay from '../../HOC/Overlay/Overlay';
import { StyledSelectPostMedia } from './SelectPostMedia.styled';

function getBase64(file) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = (error) => reject(error);
	});
}

function SelectPostMedia() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleFileUpload = async (event) => {
		if (event?.target?.files?.length) {
			const imageData = await Promise.all(
				Array.from(event.target.files).map(async (img) => getBase64(img))
			);
			// URL.createObjectURL(img)
			dispatch(setImages({ images: imageData }));
			navigate('/create/details');
		}
	};

	return (
		<StyledSelectPostMedia>
			<div className='header'>Create New Post</div>
			<div className='media-selector-container'>
				<Icon type='media' />
				<h2 className='upload-instructions'>Drag photos here</h2>
				<div className='upload-button-container'>
					<input
						type='file'
						id='uploadedFiles'
						name='uploadedFiles'
						accept='image/png, image/jpeg'
						multiple
						onChange={handleFileUpload}
					/>
					{/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
					<label htmlFor='uploadedFiles' className='upload-label'>
						Select from computer
					</label>
				</div>
			</div>
		</StyledSelectPostMedia>
	);
}

SelectPostMedia.whyDidYouRender = true;

export default Overlay(SelectPostMedia);
