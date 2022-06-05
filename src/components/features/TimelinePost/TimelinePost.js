import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { getPostDetails } from '../../../services/temp-store';
import Post from '../Post/Post';
import { StyledTimelinePost } from './TimelinePost.styled';

function TimelinePost({ id: postId }) {
	// TODO: find the proper way to get state from redux based on parameter
	const { posts: allPosts } = useSelector((state) => state.uploadedPosts);
	const { postData } = getPostDetails(allPosts, postId);

	return (
		<StyledTimelinePost>
			<Post postInfo={postData} orientation='vertical' />
		</StyledTimelinePost>
	);
}

TimelinePost.propTypes = {
	id: PropTypes.string.isRequired,
};

TimelinePost.whyDidYouRender = true;

export default TimelinePost;
