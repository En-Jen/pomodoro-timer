import React, { useEffect } from 'react';
//import styled from 'styled-components/macro';

function Timer({
	secondsLeft,
	setSecondsLeft,
	isTimerOn,
	setIsTimerOn,
	timerMode,
	timerLength,
    timerText,
    setTimerText
}) {
	useEffect(() => {
		if (isTimerOn) {
			var tick = setInterval(() => {
				setSecondsLeft(secondsLeft => secondsLeft - 1);
			}, 1000);
		}

		if (secondsLeft === 0) {
			setIsTimerOn(false);
			setTimerText('restart');
			clearInterval(tick);
		}

		return () => clearInterval(tick);
	}, [isTimerOn, secondsLeft, setSecondsLeft, setIsTimerOn, setTimerText]);

    const resetSecondsLeft = () => {
        if (timerMode === 'pomodoro') {
            setSecondsLeft(timerLength.pomo * 60);
        } else if (timerMode === 'short break') {
            setSecondsLeft(timerLength.short * 60);
        } else if (timerMode === 'long break') {
            setSecondsLeft(timerLength.long * 60);
        }
    }

	const handleClick = () => {
		setIsTimerOn(prevState => !prevState);

		if (timerText === 'start' || timerText === 'resume' || timerText === 'restart') {
			setTimerText('pause');
		} else if (timerText === 'pause') {
			setTimerText('resume');
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

	return (
		<button onClick={handleClick}>
			<div>
				{formatTimeLeft(secondsLeft)}
				<h4>{timerText}</h4>
			</div>
		</button>
	);
}

export default Timer;
