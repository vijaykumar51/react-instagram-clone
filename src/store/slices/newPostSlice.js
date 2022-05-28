/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidV4 } from 'uuid';

const initialState = (id = uuidV4()) => ({
	id,
	images: [],
	caption: null,
});

export const newPostSlice = createSlice({
	name: 'newPost',
	initialState: initialState(),
	reducers: {
		setImages: (state, action) => {
			state.images = action.payload.images;
		},
		setCaption: (state, action) => {
			state.caption = action.payload.caption;
		},
		clearNewPost: () => initialState(),
	},
});

export const { setCaption, setImages, clearNewPost } = newPostSlice.actions;

export default newPostSlice.reducer;
