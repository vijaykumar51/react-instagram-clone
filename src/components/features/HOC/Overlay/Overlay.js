import React, { useCallback } from 'react';
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

		const nextItemUrlHandler = useCallback((url) => setNextItemUrl(url), [WrappedComponent]);
		const prevItemUrlHandler = useCallback((url) => setPreviousItemUrl(url), [WrappedComponent]);

		return (
			<StyledOverlay>
				<div className='overlay-header'>
					<button className='close-icon' type='button' onClick={() => navigate(-1)}>
						<Icon type='close' />
					</button>
				</div>
				<div className='overlay-content-container'>
					<div className='nav-link-container'>
						{previousItemUrl
					&& (
						<Link to={previousItemUrl} className='nav-link previous-item-link'>
							<Icon type='angular-bracket' />
						</Link>
					)}
					</div>
					<div className='wrapper-component-container'>
						{ /* eslint-disable-next-line react/jsx-props-no-spreading */}
						<WrappedComponent {...props} setPreviousItemUrl={prevItemUrlHandler} setNextItemUrl={nextItemUrlHandler} />
					</div>
					<div className='nav-link-container'>
						{ nextItemUrl
					&& (
						<Link to={nextItemUrl} className='nav-link next-item-link'>
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

Overlay.whyDidYouRender = true;

export default Overlay;
