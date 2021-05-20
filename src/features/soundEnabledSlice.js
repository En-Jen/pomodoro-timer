import { createSlice } from '@reduxjs/toolkit';

const initialState = true;

export const soundEnabledSlice = createSlice({
	name: 'soundEnabled',
	initialState,
	reducers: {
		toggleSound: state => (state ? false : true),
	},
});

export const { toggleSound } = soundEnabledSlice.actions;

export default soundEnabledSlice.reducer;
