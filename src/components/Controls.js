import React, { useEffect } from 'react';
import styled from 'styled-components/macro';

import Button from './Button';

function Controls({
	setSecondsLeft,
	timerLength,
	setIsTimerOn,
	timerMode,
	setTimerMode,
    setTimerText
}) {
    // TODO: reuse resetSecondsLeft function used below (found in Timer.js)
    // to make more DRY
	const handleClick = e => {
		setTimerMode(e.target.innerHTML);
		setIsTimerOn(false);
        setTimerText('start');

        // Reset seconndsLeft
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

	return (
		<Wrapper>
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
	background-color: var(--color-dark-navy);
	padding: 5px 6px;
	border-radius: 31.5px;
	width: fit-content;
	text-align: center;

	@media (min-width: 600px) {
		padding: 8px 7px;
	}
`;

export default Controls;
