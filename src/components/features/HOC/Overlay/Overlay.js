import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../../../core';
import { StyledOverlay } from './Overlay.styled';

// TODO: fix the responsiveness
function Overlay(WrappedComponent) {
	function HOC(props) {
		const navigate = useNavigate();

		return (
			<StyledOverlay>
				<div className='overlay-header'>
					<button
						className='close-icon'
						type='button'
						onClick={() => navigate(-1)}
					>
						<Icon type='close' />
					</button>
				</div>
				<div className='overlay-content-container'>
					{/* <div className='wrapper-component-container'> */}
					{/* eslint-disable-next-line react/jsx-props-no-spreading */}
					<WrappedComponent {...props} />
					{/* </div> */}
				</div>
			</StyledOverlay>
		);
	}
	return HOC;
}

Overlay.whyDidYouRender = true;

export default Overlay;
