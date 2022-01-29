import React, { memo } from 'react';
import Icon from '../icon/Icon';
import ProfilePicture from '../profile-picture/ProfilePicture';
import { StyledPostHeader } from './PostHeader.styled';

function PostHeader() {
	return (
		<StyledPostHeader>
			<ProfilePicture size='smallest' />
			<div className='info-container'>
				<div className='username'>vijay.malik.31</div>
				<div className='location-info'>Kheerganga</div>
			</div>
			<Icon type='post-actions' />
		</StyledPostHeader>
	);
}

PostHeader.whyDidYouRender = true;

export default memo(PostHeader);
