import { configureStore } from '@reduxjs/toolkit';
import soundEnabledReducer from '../features/soundEnabled/soundEnabledSlice';

export const store = configureStore({
	reducer: {
		soundEnabled: soundEnabledReducer,
	},
});
