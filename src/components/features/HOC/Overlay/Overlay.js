import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import { Icon } from '../../../core';
import { StyledOverlay } from './Overlay.styled';

// TODO: fix the responsiveness, finalize the responsiblities of the overlay
function Overlay(WrappedComponent) {
	function HOC(props) {
		const navigate = useNavigate();
		const [previousItemUrl, setPreviousItemUrl] = useState();
		const [nextItemUrl, setNextItemUrl] = useState();

		const nextItemUrlHandler = (url) => setNextItemUrl(url);
		const prevItemUrlHandler = (url) => setPreviousItemUrl(url);

		return (
			<StyledOverlay>
				<button className='post-close-icon' type='button' onClick={() => navigate(-1)}>
					<Icon type='post-close' />
				</button>
				<div className='post-nav-container'>
					<div>
						{previousItemUrl
					&& (
						<Link to={previousItemUrl} className='post-nav-link previous-post-link'>
							<Icon type='angular-bracket' />
						</Link>
					)}
					</div>
					<div className='wrapper-component-container'>
						{ /* eslint-disable-next-line react/jsx-props-no-spreading */}
						<WrappedComponent {...props} setPreviousItemUrl={prevItemUrlHandler} setNextItemUrl={nextItemUrlHandler} />
					</div>
					<div>
						{ nextItemUrl
					&& (
						<Link to={nextItemUrl} className='post-nav-link next-post-link'>
							<Icon type='angular-bracket' />
						</Link>
					)}
					</div>
				</div>
			</StyledOverlay>
		);
	}
	return HOC;
}

export default Overlay;
