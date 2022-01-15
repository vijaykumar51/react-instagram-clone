import React from 'react';
import { MiniPost } from '../../../components/features';
import { StyledUploadedPosts } from './UploadedPosts.styled';

function UploadedPosts() {
	const uploadedImagesName = [
		'post-1',
		'post-2',
		'post-3',
		'post-4',
		'post-5',
		'post-6',
		'post-7',
		'post-8',
		'post-9',
		'post-10',
	];
	return (
		<StyledUploadedPosts>
			{uploadedImagesName.map((imageName) => (
				<MiniPost key={imageName} id={imageName} />
			))}
		</StyledUploadedPosts>
	);
}

export default UploadedPosts;
