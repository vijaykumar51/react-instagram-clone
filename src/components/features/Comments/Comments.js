import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../../core';
import { StyledCommments } from './Comments.styled';

function Comments({ comments }) {
	return (
		<StyledCommments>
			{comments && comments.map(({ commentBy, timestamp, comment, replies }) => (
				<div key={`${commentBy}@${timestamp}`} className='comment-container'>
					<Comment author={commentBy} timestamp={timestamp} text={comment} replies={replies} />
				</div>
			))}
		</StyledCommments>
	);
}

Comments.propTypes = {
	comments: PropTypes.arrayOf(PropTypes.shape({
		commentBy: PropTypes.string.isRequired,
		timestamp: PropTypes.number.isRequired,
		comment: PropTypes.string.isRequired,
		replies: PropTypes.arrayOf(PropTypes.shape({
			commentBy: PropTypes.string.isRequired,
			timestamp: PropTypes.number.isRequired,
			comment: PropTypes.string.isRequired,
		}))
	}))
};

Comments.defaultProps = {
	comments: []
};

Comments.whyDidYouRender = true;
export default memo(Comments);
