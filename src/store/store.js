import { configureStore } from '@reduxjs/toolkit';
import newPostReducer from './slices/newPostSlice';
import uploadedPostsReducer from './slices/uploadedPosts';

export const store = configureStore({
	reducer: {
		newPost: newPostReducer,
		uploadedPosts: uploadedPostsReducer,
	},
});
