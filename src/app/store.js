import { configureStore } from '@reduxjs/toolkit';
import timerReducer from '../features/timerSlice';
import soundEnabledReducer from '../features/soundEnabledSlice';
import themeReducer from '../features/themeSlice';

export const store = configureStore({
	reducer: {
		timer: timerReducer,
		soundEnabled: soundEnabledReducer,
		theme: themeReducer,
	},
});
