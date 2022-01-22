import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../../core';
import { StyledCommments } from './Comments.styled';

function Comments({ comments }) {
	return (
		<StyledCommments>
			{comments && comments.map(({ commentBy, timestamp, comment, replies }) => (
				<div key={`${commentBy}@${timestamp}`} className='comment-container'>
					<Comment author={commentBy} timestamp={timestamp} text={comment} />
					{/* TODO: revisit if the replies should be inside the component or outside */}
					{replies?.length && (
						<div className='reply-container'>
							<Comments comments={replies} />
						</div>
					)}
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
export default Comments;
