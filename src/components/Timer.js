import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import useSound from 'use-sound';
import {
	CircularProgressbarWithChildren,
	buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import {
	resetTimerSecondsLeft,
	selectTimer,
	toggleTimer,
	startTimer,
	pauseTimer,
	timesUp,
	countDown,
} from '../features/timerSlice';
import { selectTheme } from '../features/themeSlice';
import timesUpSfx from '../sounds/timesUp.mp3';
import startSfx from '../sounds/start.mp3';
import pauseSfx from '../sounds/pause.mp3';

function Timer() {
	const {
		timerMode,
		secondsLeft,
		timerText,
		isTimerOn,
		timerLength,
	} = useSelector(selectTimer);
	const theme = useSelector(selectTheme);
	const soundEnabled = useSelector(state => state.soundEnabled);
	const dispatch = useDispatch();
	const [timesUpSound] = useSound(timesUpSfx, { soundEnabled });
	const [start] = useSound(startSfx, { soundEnabled });
	const [pause] = useSound(pauseSfx, { soundEnabled });

	useEffect(() => {
		if (isTimerOn) {
			var tick = setInterval(() => {
				dispatch(countDown());
			}, 1000);
		}

		if (secondsLeft === 0) {
			timesUpSound();
			dispatch(timesUp());
			clearInterval(tick);
		}

		return () => clearInterval(tick);
	}, [isTimerOn, secondsLeft, timesUp]);

	const resetSecondsLeft = () => {
		dispatch(resetTimerSecondsLeft());
	};

	const handleClick = () => {
		dispatch(toggleTimer());

		if (
			timerText === 'start' ||
			timerText === 'resume' ||
			timerText === 'restart'
		) {
			start();
			dispatch(startTimer());
		} else if (timerText === 'pause') {
			pause();
			dispatch(pauseTimer());
		}

		if (secondsLeft === 0) {
			resetSecondsLeft();
		}
	};

	const formatTimeLeft = secondsLeft => {
		let mins = Math.floor(secondsLeft / 60);
		let secs = secondsLeft - mins * 60;
		if (mins < 10) {
			mins = '0' + mins;
		}
		if (secs < 10) {
			secs = '0' + secs;
		}

		return `${mins}:${secs}`;
	};

	const getProgBarMaxVal = () => {
		let maxVal;
		if (timerMode === 'pomodoro') {
			maxVal = timerLength.pomo * 60;
		} else if (timerMode === 'short break') {
			maxVal = timerLength.short * 60;
		} else if (timerMode === 'long break') {
			maxVal = timerLength.long * 60;
		}
		return maxVal;
	};

	return (
		<Wrapper>
			<TimerDisplay onClick={handleClick} aria-label="timer">
				<CircularProgressbarWithChildren
					value={secondsLeft}
					maxValue={getProgBarMaxVal()}
					strokeWidth={3}
					styles={buildStyles({
						pathTransitionDuration: 0.8,
						pathColor: theme.color,
						trailColor: 'transparent',
					})}
				>
					{formatTimeLeft(secondsLeft)}
					<h4>{timerText}</h4>
				</CircularProgressbarWithChildren>
			</TimerDisplay>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	height: 300px;
	width: 300px;
	border-radius: 50%;
	background-image: var(--linear-gradient);
	box-shadow: var(--box-shadow);
	display: flex;
	justify-content: center;
	align-items: center;

	@media (min-width: 600px) {
		height: 410px;
		width: 410px;
	}
`;

const TimerDisplay = styled.button`
	border: none;
	height: 267.8px;
	width: 267.8px;
	border-radius: 50%;
	padding: 8px;
	background-color: var(--color-dark-navy);
	color: var(--color-grey-blue);
	font-size: var(--font-size-timer);
	cursor: pointer;

	@media (min-width: 600px) {
		height: 366px;
		width: 366px;
		padding: 13.5px;
	}

	&:focus {
		outline: none;

		h4 {
			outline: 2px dotted var(--color-grey-blue);
			outline-offset: 2px;
		}
	}

	&:active {
		transform: scale(0.98);
	}
`;

export default Timer;
