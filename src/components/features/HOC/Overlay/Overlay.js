import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../../../core';
import { StyledOverlay } from './Overlay.styled';

function Overlay(WrappedComponent) {
	function HOC() {
		const navigate = useNavigate();

		return (
			<StyledOverlay>
				<button className='post-close-icon' type='button' onClick={() => navigate(-1)}>
					<Icon type='post-close' />
				</button>
				<div className='post-nav-container'>
					<div>
						{/* {prevPostId
					&& (
						<Link to={`/post/${prevPostId}`} className='post-nav-link previous-post-link'>
							<Icon type='angular-bracket' />
						</Link>
					)} */}
					</div>
					<div>
						<WrappedComponent />
					</div>
					<div>
						{/* { nextPostId
					&& (
						<Link to={`/post/${nextPostId}`} className='post-nav-link next-post-link'>
							<Icon type='angular-bracket' />
						</Link>
					)} */}
					</div>
				</div>
			</StyledOverlay>
		);
	}
	return HOC;
}

export default Overlay;
