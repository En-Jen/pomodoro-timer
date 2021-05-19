import { configureStore } from '@reduxjs/toolkit';
import soundEnabledReducer from '../features/soundEnabled/soundEnabledSlice';
import themeReducer from '../features/theme/themeSlice';

export const store = configureStore({
	reducer: {
		soundEnabled: soundEnabledReducer,
		theme: themeReducer,
	},
});
