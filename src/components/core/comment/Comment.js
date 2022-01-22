import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import ProfilePicture from '../profile-picture/ProfilePicture';
import { StyledComment } from './Comment.styled';

function Comment({ author, timestamp, text, replies }) {
	const [showReplies, setShowReplies] = useState(false);

	const changeReplyShowStatus = () => setShowReplies((prevState) => !prevState);

	return (
		<StyledComment>
			<div className='profile-pic-container'>
				<ProfilePicture size='smallest' />
			</div>
			<div>
				<div className='comment'>
					<span className='author'>{author}</span>
					<span className='text'>{text}</span>
					<div className='comment-stats'>
						<Moment fromNow>{timestamp}</Moment>
					</div>
				</div>
				{replies.length > 0 && replies.length && (
					<button type='button' className='show-hide-reply-link' onClick={changeReplyShowStatus}>
						<span>{showReplies ? 'Hide replies' : `View replies (${replies.length})`}</span>
					</button>
				)}
				{showReplies && (
					<div className='replies-container'>
						{showReplies && replies.length > 0 && replies.map((reply) => (
							<Comment
								key={`${reply.commentBy}@${reply.timestamp}`}
								author={reply.commentBy}
								timestamp={timestamp}
								text={reply.comment}
							/>
						))}
					</div>
				)}
			</div>
		</StyledComment>
	);
}

Comment.propTypes = {
	author: PropTypes.string.isRequired,
	timestamp: PropTypes.number.isRequired,
	text: PropTypes.string.isRequired,
	replies: PropTypes.arrayOf(PropTypes.shape({
		commentBy: PropTypes.string.isRequired,
		timestamp: PropTypes.number.isRequired,
		comment: PropTypes.string.isRequired,
	}))
};

Comment.defaultProps = {
	replies: []
};

Comment.whyDidYouRender = true;
export default Comment;
