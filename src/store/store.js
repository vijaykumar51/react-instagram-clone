import { configureStore } from '@reduxjs/toolkit';
import newPostReducer from './slices/newPostSlice';
import uploadedPostsReducer from './slices/uploadedPosts';
import userProfileReducer from './slices/userProfileSlice';

export const store = configureStore({
	reducer: {
		userProfile: userProfileReducer,
		newPost: newPostReducer,
		uploadedPosts: uploadedPostsReducer,
	},
});
