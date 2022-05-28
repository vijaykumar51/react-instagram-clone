/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	posts: [],
};

export const uploadedPosts = createSlice({
	name: 'uploadedPosts',
	initialState,
	reducers: {
		addPost: (state, action) => {
			state.posts = [action.payload, ...state.posts];
		},
	},
});

export const { addPost } = uploadedPosts.actions;

export default uploadedPosts.reducer;
