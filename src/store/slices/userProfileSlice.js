/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAuth } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
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
	'userProfile/get',
	async (userUid) => {
		const userProfileResponse = await getDoc(doc(firebaseDb, 'users', userUid));
		if (!userProfileResponse.exists()) {
			return {};
		}
		return { ...userProfileResponse.data() };
	}
);

export const saveUserProfilewithAPI = createAsyncThunk(
	'userProfile/save',
	async (payload = {}) => {
		const currentUserId = getAuth().currentUser.uid;
		payload.userId = currentUserId;
		await setDoc(doc(firebaseDb, 'users', currentUserId), payload);
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
		[saveUserProfilewithAPI.fulfilled]: (state) => {
			state.loading = false;
		},
		[saveUserProfilewithAPI.pending]: (state) => {
			state.loading = true;
		},
	},
});

export default userProfileSlice.reducer;
