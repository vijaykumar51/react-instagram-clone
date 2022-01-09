import React from 'react';
import { MiniPost } from '../../../components/features';
import { StyledUploadedPosts } from './UploadedPosts.styled';

function UploadedPosts() {
	return (
		<StyledUploadedPosts>
			<MiniPost />
			<MiniPost />
			<MiniPost />
			<MiniPost />
			<MiniPost />
		</StyledUploadedPosts>
	);
}

export default UploadedPosts;
