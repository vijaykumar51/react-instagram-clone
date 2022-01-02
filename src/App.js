import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { LoginPage, ProfilePage } from './pages';
import { StyledApp } from './App.styled';

function App() {
	return (
		<StyledApp>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<LoginPage />} />
					<Route path='/profile' element={<ProfilePage />} />
					<Route path='*' element={<LoginPage />} />
				</Routes>
			</BrowserRouter>
		</StyledApp>
	);
}

App.whyDidYouRender = true;

export default App;
