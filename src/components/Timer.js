import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Timer({
	secondsLeft,
	setSecondsLeft,
	isTimerOn,
	setIsTimerOn,
	timerMode,
	timerLength,
	timerText,
	setTimerText,
    theme
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
	};

	const handleClick = () => {
		setIsTimerOn(prevState => !prevState);

		if (
			timerText === 'start' ||
			timerText === 'resume' ||
			timerText === 'restart'
		) {
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

    const getProgBarMaxVal = () => {
        let maxVal;
        if (timerMode === 'pomodoro') {
            maxVal = timerLength.pomo * 60;
		} else if (timerMode === 'short break') {
            maxVal = timerLength.short * 60
		} else if (timerMode === 'long break') {
            maxVal = timerLength.long * 60;
		}
        return maxVal;
    }

	return (
		<Wrapper>
			<TimerDisplay onClick={handleClick}>
				<CircularProgressbarWithChildren
					value={secondsLeft}
					maxValue={getProgBarMaxVal()}
                    strokeWidth={3}
                    styles={buildStyles({
                        pathTransitionDuration: .8,
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
	background-color: var(--color-dark-navy);
	color: var(--color-grey-blue);
	font-size: var(--font-size-timer);
	cursor: pointer;

	@media (min-width: 600px) {
		height: 366px;
		width: 366px;
	}
`;

export default Timer;
