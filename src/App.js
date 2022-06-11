import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { StyledApp } from './App.styled';
import {
	AddNewPostDetails,
	PostWithNavigation,
	SelectNewPostMedia,
} from './components/features';
import {
	HomePage,
	LoginPage,
	ProfilePage,
	RegistrationPage,
	SavedPostsPage,
	TaggedPostsPage,
	UploadedPostsPage,
} from './pages';
import './services/auth/firebase-setup';
import { store } from './store/store';

function App() {
	return (
		<Provider store={store}>
			<StyledApp>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<LoginPage />} />
						<Route path='/register' element={<RegistrationPage />} />
						<Route path='/home' element={<HomePage />} />
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
						<Route path='post/:postId' element={<PostWithNavigation />} />
						<Route path='*' element={<Navigate replace to='/' />} />
					</Routes>
				</BrowserRouter>
			</StyledApp>
		</Provider>
	);
}

App.whyDidYouRender = true;

export default App;
