import React, { useEffect } from 'react';
import styled from 'styled-components/macro';

import Button from './Button';

function Controls({
	timerMode,
	setTimerMode,
	setSecondsLeft,
	pomoLength,
	shortLength,
	longLength,
	setIsTimerOn,
}) {
	const handleClick = e => {
		setTimerMode(e.target.innerHTML);
		setIsTimerOn(false);
	};

	useEffect(() => {
		if (timerMode === 'pomodoro') {
			setSecondsLeft(pomoLength * 60);
		} else if (timerMode === 'short break') {
			setSecondsLeft(shortLength * 60);
		} else if (timerMode === 'long break') {
			setSecondsLeft(longLength * 60);
		}
	}, [timerMode]);

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
