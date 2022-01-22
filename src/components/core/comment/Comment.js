import PropTypes from 'prop-types';
import React from 'react';
import ProfilePicture from '../profile-picture/ProfilePicture';
import { StyledComment } from './Comment.styled';

function Comment({ author, timestamp, text }) {
	return (
		<StyledComment>
			<div className='profile-pic-container'>
				<ProfilePicture size='smallest' />
			</div>
			<div className='comment'>
				<span className='author'>{author}</span>
				<span className='text'>{text}</span>
				<div className='comment-stats'>{timestamp}</div>
			</div>
		</StyledComment>
	);
}

Comment.propTypes = {
	author: PropTypes.string.isRequired,
	timestamp: PropTypes.number.isRequired,
	text: PropTypes.string.isRequired
};

Comment.whyDidYouRender = true;
export default Comment;
