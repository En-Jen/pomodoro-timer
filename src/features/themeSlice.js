import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	font: "'Kumbh Sans', sans-serif",
	color: 'hsl(0, 91%, 71%)',
};

export const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		setFont: (state, action) => {
			return { ...state, font: action.payload };
		},
		setColor: (state, action) => {
			return { ...state, color: action.payload };
		},
	},
});

export const { setFont, setColor } = themeSlice.actions;

export const selectTheme = state => state.theme;

export default themeSlice.reducer;
