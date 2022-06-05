import React from 'react';
import { useSelector } from 'react-redux';
import { Header, TimelinePost } from '../../components/features';
import { StyledHome } from './Home.styled';

function Home() {
	const { posts = [] } = useSelector((state) => state.uploadedPosts);

	return (
		<StyledHome>
			<Header />
			<div className='posts-pages-nav'>
				<div className='timeline-container'>
					{posts.length === 0 && <div>No posts on your timeline.</div>}
					{posts.map((post) => (
						<TimelinePost key={post.id} id={post.id} />
					))}
				</div>
				<div className='secondary-action-container'>friends suggestions</div>
			</div>
		</StyledHome>
	);
}

Home.whyDidYouRender = true;

export default Home;
