/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { doc, getDoc } from 'firebase/firestore';
import { firebaseDb } from '../../services/auth/firebase-setup';

const initialState = {
	data: {
		userId: '',
		name: '',
		email: '',
	},
	loading: false,
};

export const getUserProfileFromAPI = createAsyncThunk(
	'userProfile',
	async (userUid) => {
		const userProfileResponse = await getDoc(doc(firebaseDb, 'users', userUid));
		if (!userProfileResponse.exists()) {
			return {};
		}
		return { ...userProfileResponse.data() };
	}
);

export const userProfileSlice = createSlice({
	name: 'userProfile',
	initialState,
	extraReducers: {
		[getUserProfileFromAPI.fulfilled]: (state, action) => {
			const { userId, name, email } = action.payload;
			state.data.userId = userId;
			state.data.name = name;
			state.data.email = email;
			state.loading = false;
		},
		[getUserProfileFromAPI.pending]: (state) => {
			state.loading = true;
		},
	},
});

export default userProfileSlice.reducer;
