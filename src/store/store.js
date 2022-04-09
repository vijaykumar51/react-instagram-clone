import { configureStore } from '@reduxjs/toolkit';
import newPostReducer from './slices/newPostSlice';

export const store = configureStore({
	reducer: {
		newPost: newPostReducer,
	},
});
