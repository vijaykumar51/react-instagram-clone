import React, { useState } from 'react';
import { StyledSelectPostMedia } from './SelectPostMedia.styled';
import Overlay from '../../HOC/Overlay/Overlay';
import { Icon } from '../../../core';

function SelectPostMedia() {
	const [, setUploadedFile] = useState();
	const [preview, setPreview] = useState();

	const handleFileUpload = (event) => {
		if (event?.target?.files?.[0]) {
			setUploadedFile(event.target.files[0]);

			const reader = new FileReader();
			reader.onload = function (e) {
				console.log('event onload', e);
				setPreview(e.target.result);
			};
			reader.readAsDataURL(event.target.files[0]);
		}
		// console.log(event.target.files[0]);
		// setUploadedFile(event.target.files[0]);
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
				{preview && <img height='200px' width='300px' src={preview} alt='upload preview' />}
			</div>
		</StyledSelectPostMedia>
	);
}

export default Overlay(SelectPostMedia);
