import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import useSound from 'use-sound';

import { selectSoundEnabled } from '../features/soundEnabled/soundEnabledSlice';
import switchSfx from '../sounds/switch.mp3';
import Button from './Button';

function Controls({
	setSecondsLeft,
	timerLength,
	setIsTimerOn,
	timerMode,
	setTimerMode,
	setTimerText,
}) {
	const soundEnabled = useSelector(selectSoundEnabled);
	const [switchControl] = useSound(switchSfx, { soundEnabled });

	// TODO: reuse resetSecondsLeft function used below (found in Timer.js)
	// to make more DRY
	const handleClick = e => {
		switchControl();
		setTimerMode(e.target.innerHTML);
		setIsTimerOn(false);
		setTimerText('start');

		// Reset secondsLeft
		if (timerMode === 'pomodoro') {
			setSecondsLeft(timerLength.pomo * 60);
		} else if (timerMode === 'short break') {
			setSecondsLeft(timerLength.short * 60);
		} else if (timerMode === 'long break') {
			setSecondsLeft(timerLength.long * 60);
		}
	};

	useEffect(() => {
		if (timerMode === 'pomodoro') {
			setSecondsLeft(timerLength.pomo * 60);
		} else if (timerMode === 'short break') {
			setSecondsLeft(timerLength.short * 60);
		} else if (timerMode === 'long break') {
			setSecondsLeft(timerLength.long * 60);
		}
	}, [timerMode, timerLength, setSecondsLeft]);

	// Set left position for ActiveBtnBackground
	let mobileLeft, tabletLeft;
	if (timerMode === 'pomodoro') {
		mobileLeft = 6 + 'px';
		tabletLeft = 7 + 'px';
	} else if (timerMode === 'short break') {
		mobileLeft = 111 + 'px';
		tabletLeft = 127 + 'px';
	} else if (timerMode === 'long break') {
		mobileLeft = 216 + 'px';
		tabletLeft = 247 + 'px';
	}

	return (
		<Wrapper>
			<ActiveBtnBackground
				style={{
					'--mobile-left': mobileLeft,
					'--tablet-left': tabletLeft,
				}}
			/>
			<Button
				onClick={handleClick}
				variant="controls"
				active={timerMode === 'pomodoro'}
			>
				pomodoro
			</Button>
			<Button
				onClick={handleClick}
				variant="controls"
				active={timerMode === 'short break'}
			>
				short break
			</Button>
			<Button
				onClick={handleClick}
				variant="controls"
				active={timerMode === 'long break'}
			>
				long break
			</Button>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	position: relative;
	background-color: var(--color-dark-navy);
	padding: 5px 6px;
	border-radius: 31.5px;
	// On small mobile screen widths, this will force a line break
	width: fit-content;
	text-align: center;
	// Create a new stacking context so that timer's box shadow doesn't
	// show on top of Controls
	isolation: isolate;

	@media (min-width: 600px) {
		padding: 8px 7px;
	}
`;

const ActiveBtnBackground = styled.div`
	display: none;
	position: absolute;
	left: var(--mobile-left);
	border-radius: 26.5px;
	background-color: ${p => p.theme.color};
	width: 105px;
	height: 48px;
	z-index: 1;
	transition: left 0.2s ease-in;

	@media (min-width: 375px) {
		display: revert;
	}

	@media (min-width: 600px) {
		width: 120px;
		left: var(--tablet-left);
	}
`;

export default Controls;
