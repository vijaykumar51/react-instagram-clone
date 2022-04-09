/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	image: null,
	caption: null,
};

export const newPostSlice = createSlice({
	name: 'newPost',
	initialState,
	reducers: {
		setImage: (state, action) => {
			state.image = action.payload.image;
		},
		setCaption: (state, action) => {
			state.caption = action.payload.caption;
		},
	},
});

export const { setCaption, setImage } = newPostSlice.actions;

export default newPostSlice.reducer;
