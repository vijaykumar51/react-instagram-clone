import PropTypes from 'prop-types';
import React, { memo, useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import Icon from '../icon/Icon';
import { StyledCarousel } from './Carousel.styled';

// TODO: optimize carousel, add smooth transitions
function Carousel({ imageData }) {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const imageCount = imageData?.length;
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
				<button
					type='button'
					className='arrow-icon-container left-arrow'
					onClick={getPreviousImage}
				>
					<Icon type='left-arrow-small' />
				</button>
			)}
			{/*
			 * TIP:
			 * Using uuid as key will re-render the images as the key will be different each time,
			 * This will result in image download request for all the images
			 */}
			{imageData?.map((url, index) => (
				<div
					key={uuidV4()}
					className={
						index === currentImageIndex
							? 'current-image image-container'
							: 'image-container'
					}
				>
					<img className='post-image' src={url} alt='uploaded-post' />
				</div>
			))}
			{showRightArrow && (
				<button
					type='button'
					className='arrow-icon-container right-arrow'
					onClick={getNextImage}
				>
					<Icon type='right-arrow-small' />
				</button>
			)}
			<div className='post-count-dots'>
				{imageData?.length > 1
					&& imageData?.map((url, index) => (
						<span
							key={uuidV4()}
							className={
								index === currentImageIndex ? 'post-dot current' : 'post-dot'
							}
						/>
					))}
			</div>
		</StyledCarousel>
	);
}

Carousel.propTypes = {
	imageData: PropTypes.arrayOf(PropTypes.string),
};

Carousel.defaultProps = {
	imageData: [],
};

Carousel.whyDidYouRender = true;
export default memo(Carousel);
