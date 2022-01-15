import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { LoginPage, ProfilePage, SavedPostsPage, TaggedPostsPage, UploadedPostsPage } from './pages';
import { StyledApp } from './App.styled';
import { Post } from './components/features';

function App() {
	return (
		<StyledApp>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<LoginPage />} />
					<Route path='/profile' element={<ProfilePage />}>
						<Route path='' element={<UploadedPostsPage />} />
						<Route path='saved' element={<SavedPostsPage />} />
						<Route path='tagged' element={<TaggedPostsPage />} />
					</Route>
					<Route path='post/:postId' element={<Post />} />
					<Route path='*' element={<LoginPage />} />
				</Routes>
			</BrowserRouter>
		</StyledApp>
	);
}

App.whyDidYouRender = true;

export default App;
