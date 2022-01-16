import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Icon from '../icon/Icon';
import { StyledCarousel } from './Carousel.styled';

function Carousel({ imageData }) {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const imageCount = imageData.length;
	const showLeftArrow = imageCount > 1 && currentImageIndex > 0;
	const showRightArrow = imageCount > 1 && currentImageIndex < imageCount - 1;

	const getNextImage = () => {
		if (currentImageIndex >= imageCount) return;
		setCurrentImageIndex((prevCount) => prevCount + 1);
	};

	const getPreviousImage = () => {
		if (currentImageIndex <= 0) return;
		setCurrentImageIndex((prevCount) => prevCount - 1);
	};

	return (
		<StyledCarousel>
			{showLeftArrow && (
				<button type='button' className='arrow-icon-container left-arrow' onClick={getPreviousImage}>
					<Icon type='left-arrow-small' />
				</button>
			)}
			{imageData.map(({ url }, index) => (
				<div
					key={Math.random().toString(36).substr(2, 9)}
					className={index === currentImageIndex ? 'current-image image-container' : 'image-container'}
				>
					<img className='post-image' src={url} alt='uploaded-post' />
				</div>
			))}
			{showRightArrow && (
				<button type='button' className='arrow-icon-container right-arrow' onClick={getNextImage}>
					<Icon type='right-arrow-small' />
				</button>
			)}
		</StyledCarousel>
	);
}

Carousel.propTypes = {
	imageData: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

Carousel.whyDidYouRender = true;
export default Carousel;
