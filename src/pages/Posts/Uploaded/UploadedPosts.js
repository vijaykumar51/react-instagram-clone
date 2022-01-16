import React from 'react';
import { MiniPost } from '../../../components/features';
import { StyledUploadedPosts } from './UploadedPosts.styled';
import { getAllUploadedPosts } from '../../../services/temp-store';

function UploadedPosts() {
	return (
		<StyledUploadedPosts>
			{getAllUploadedPosts().map((post) => (
				<MiniPost
					key={post.id}
					id={post.id}
					likeCount={post.stats.likeCount}
					commentCount={post.stats.commentCount}
					sources={post.images}
				/>
			))}
		</StyledUploadedPosts>
	);
}

UploadedPosts.whyDidYouRender = true;
export default UploadedPosts;
