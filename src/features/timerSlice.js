import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	timerLength: {
		pomo: 25,
		short: 5,
		long: 15,
	},
	isTimerOn: false,
	timerMode: 'pomodoro',
	timerText: 'start',
	secondsLeft: 25 * 60, // pomo length * 60 seconds
};

export const timerSlice = createSlice({
	name: 'timer',
	initialState,
	reducers: {
		changeTimerMode: (state, action) => {
			return { ...state, timerMode: action.payload, timerText: 'start' };
		},
		resetTimerSecondsLeft: state => {
			switch (state.timerMode) {
				case 'pomodoro':
					return {
						...state,
						secondsLeft: state.timerLength.pomo * 60,
					};
				case 'short break':
					return {
						...state,
						secondsLeft: state.timerLength.short * 60,
					};
				case 'long break':
					return {
						...state,
						secondsLeft: state.timerLength.long * 60,
					};
				default:
					return state;
			}
		},
		toggleTimer: state => {
			return { ...state, isTimerOn: !state.isTimerOn };
		},
		startTimer: state => {
			return { ...state, timerText: 'pause' };
		},
		pauseTimer: state => {
			return { ...state, timerText: 'resume' };
		},
		timesUp: state => {
			return { ...state, isTimerOn: false, timerText: 'restart' };
		},
		countDown: state => {
			state.secondsLeft -= 1;
		},
		changeNumberInput: {
			reducer: (state, action) => {
				const { id, value } = action.payload;

				state.isTimerOn = false;

				if (id === 'pomodoro') {
					state.timerLength.pomo = value;
				}
				if (id === 'short break') {
					state.timerLength.short = value;
				}
				if (id === 'long break') {
					state.timerLength.long = value;
				}
			},
			prepare: (id, value) => {
				return { payload: { id, value } };
			},
		},
	},
});

export const {
	changeTimerMode,
	resetTimerSecondsLeft,
	toggleTimer,
	startTimer,
	pauseTimer,
	timesUp,
	countDown,
	changeNumberInput,
} = timerSlice.actions;

export const selectTimer = state => state.timer;

export default timerSlice.reducer;
