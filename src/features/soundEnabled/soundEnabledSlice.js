import { createSlice } from '@reduxjs/toolkit';

const initialState = true;

export const soundEnabledSlice = createSlice({
	name: 'soundEnabled',
	initialState,
	reducers: {
		toggleSound: state => {
			return state ? false : true;
		},
	},
});

export const { toggleSound } = soundEnabledSlice.actions;

export const selectSoundEnabled = state => state.soundEnabled;

export default soundEnabledSlice.reducer;
