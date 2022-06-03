import React from 'react';
import { Header } from '../../components/features';
import { StyledHome } from './Home.styled';

function Home() {
	return (
		<StyledHome>
			<Header />
			<div className='posts-pages-nav'>
				<div className='timeline-container'>timeline</div>
				<div className='secondary-action-container'>friends suggestions</div>
			</div>
		</StyledHome>
	);
}

Home.whyDidYouRender = true;

export default Home;
