import React from 'react';
import Icon from '../icon/Icon';
import { StyledProfileInfo } from './ProfileInfo.styled';

function ProfileInfo() {
	return (
		<StyledProfileInfo>
			<div className='id-info'>
				<span className='user-id'>vijay.malik.31</span>
				<Icon type='settings' />
			</div>
			<div className='stats'>
				<span className='stat'>
					<span className='stat-number'>5</span>
					<span className='stat-type'>posts</span>
				</span>
				<span className='stat'>
					<span className='stat-number'>151</span>
					<span className='stat-type'>followers</span>
				</span>
				<span className='stat'>
					<span className='stat-number'>267</span>
					<span className='stat-type'>following</span>
				</span>
			</div>
			<div className='bio'>
				<div className='user-name'>Vijay Malik</div>
				<div className='bio-line'>Live a life worth telling a story about</div>
			</div>
		</StyledProfileInfo>
	);
}

export default ProfileInfo;
