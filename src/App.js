import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { LoginPage, ProfilePage, SavedPostsPage, TaggedPostsPage, UploadedPostsPage } from './pages';
import { StyledApp } from './App.styled';
import { AddNewPostDetails, Post, SelectNewPostMedia } from './components/features';

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
					<Route path='create'>
						<Route path='select' element={<SelectNewPostMedia />} />
						<Route path='details' element={<AddNewPostDetails />} />
						<Route path='' exact element={<Navigate replace to='select' />} />
					</Route>
					{/**
					 * TODO: alternate approach, instead of using Post directly as route component,
					 * create a separate PostPage that includes post navigation buttons which are right now part of Overlay HOC right now
					 */ }
					<Route path='post/:postId' element={<Post />} />
					<Route path='*' element={<Navigate replace to='/' />} />
				</Routes>
			</BrowserRouter>
		</StyledApp>
	);
}

App.whyDidYouRender = true;

export default App;
