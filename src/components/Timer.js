import React, { useEffect } from 'react';
//import styled from 'styled-components/macro';

function Timer({
	secondsLeft,
	setSecondsLeft,
	isTimerOn,
	setIsTimerOn,
}) {
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

	useEffect(() => {
		if (isTimerOn) {
			var tick = setInterval(() => {
				setSecondsLeft(secondsLeft => secondsLeft - 1);
			}, 1000);
		}

		if (secondsLeft === 0) {
			clearInterval(tick);
		}

		return () => clearInterval(tick);
	}, [isTimerOn, secondsLeft, setSecondsLeft]);

	return (
		<button onClick={() => setIsTimerOn(prevState => !prevState)}>
			{formatTimeLeft(secondsLeft)}
		</button>
	);
}

export default Timer;
