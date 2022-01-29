import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledSelectPostMedia } from './SelectPostMedia.styled';
import Overlay from '../../HOC/Overlay/Overlay';
import { Icon } from '../../../core';

function SelectPostMedia() {
	const navigate = useNavigate();

	const handleFileUpload = (event) => {
		if (event?.target?.files?.[0]) {
			navigate('/create/details', {
				state: { uploadedFile: event.target.files[0] }
			});
		}
	};

	return (
		<StyledSelectPostMedia>
			<div className='header'>
			Create New Post
			</div>
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
					<label htmlFor='uploadedFiles' className='upload-label'>Select from computer
					</label>
				</div>
			</div>
		</StyledSelectPostMedia>
	);
}

SelectPostMedia.whyDidYouRender = true;

export default Overlay(SelectPostMedia);
