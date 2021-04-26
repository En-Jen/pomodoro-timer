import React, { useEffect } from 'react';
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
		<div>
			<Button onClick={handleClick}>pomodoro</Button>
			<Button onClick={handleClick}>short break</Button>
			<Button onClick={handleClick}>long break</Button>
		</div>
	);
}

export default Controls;
