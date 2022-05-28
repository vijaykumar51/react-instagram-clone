import React from 'react';
import { useSelector } from 'react-redux';
import { MiniPost } from '../../../components/features';
import { StyledUploadedPosts } from './UploadedPosts.styled';

function UploadedPosts() {
	const { posts: uploadedPosts } = useSelector((state) => state.uploadedPosts);

	return (
		<StyledUploadedPosts>
			{uploadedPosts.map((post) => (
				<MiniPost
					key={post.id}
					id={post.id}
					likeCount={post.stats?.likeCount}
					commentCount={post.stats?.commentCount}
					sources={post.images}
				/>
			))}
		</StyledUploadedPosts>
	);
}

UploadedPosts.whyDidYouRender = true;
export default UploadedPosts;
