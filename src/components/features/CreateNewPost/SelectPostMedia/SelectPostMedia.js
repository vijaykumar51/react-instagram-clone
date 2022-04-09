import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setImage } from '../../../../store/slices/newPostSlice';
import { Icon } from '../../../core';
import Overlay from '../../HOC/Overlay/Overlay';
import { StyledSelectPostMedia } from './SelectPostMedia.styled';

function SelectPostMedia() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleFileUpload = (event) => {
		if (event?.target?.files?.[0]) {
			dispatch(setImage({ image: URL.createObjectURL(event.target.files[0]) }));
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
