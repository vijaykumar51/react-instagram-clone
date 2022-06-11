import React, { memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getComments, getPostDetails } from '../../../services/temp-store';
import { Icon } from '../../core';
import Overlay from '../HOC/Overlay/Overlay';
import Post from '../Post/Post';
import { StyledPostWithNavigation } from './PostWithNavigation.styled';

function PostWithNavigation() {
	const [previousItemUrl, setPreviousItemUrl] = useState();
	const [nextItemUrl, setNextItemUrl] = useState();

	const [currentPostData, setCurrentPostData] = useState({});
	const [comments, setComments] = useState([]);

	// TODO: find the proper way to get state from redux based on parameter
	const { posts: uploadedPosts } = useSelector((state) => state.uploadedPosts);

	const params = useParams();
	const { postId } = params;
	useEffect(() => {
		const { prevPostId, postData, nextPostId } = getPostDetails(
			uploadedPosts,
			postId
		);
		setCurrentPostData(postData);
		setPreviousItemUrl(prevPostId ? `/post/${prevPostId}` : null);
		setNextItemUrl(nextPostId ? `/post/${nextPostId}` : null);
		setComments(getComments());
	}, [postId]);

	return (
		<StyledPostWithNavigation>
			<div className='nav-link-container'>
				{previousItemUrl && (
					<Link to={previousItemUrl} className='nav-link previous-item-link'>
						<Icon type='angular-bracket' />
					</Link>
				)}
			</div>
			<div className='post-container-area'>
				<Post postInfo={currentPostData} comments={comments} />
			</div>
			<div className='nav-link-container'>
				{nextItemUrl && (
					<Link to={nextItemUrl} className='nav-link next-item-link'>
						<Icon type='angular-bracket' />
					</Link>
				)}
			</div>
		</StyledPostWithNavigation>
	);
}

PostWithNavigation.whyDidYouRender = true;

export default Overlay(memo(PostWithNavigation));
