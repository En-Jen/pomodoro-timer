import React, { useState } from 'react';
import Controls from './components/Controls';
import Timer from './components/Timer';

function App() {
	const [pomoLength, setPomoLength] = useState(25);
  const [shortLength, setShortLength] = useState(5);
  const [longLength, setLongLength] = useState(15);
  const [isTimerOn, setIsTimerOn] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(pomoLength * 60);
  const [timerMode, setTimerMode] = useState('pomodoro');

	return (
		<div>
			<Controls
        setSecondsLeft={setSecondsLeft}
        timerMode={timerMode}
        setTimerMode={setTimerMode}
        pomoLength={pomoLength}
        shortLength={shortLength}
        longLength={longLength}
        setIsTimerOn={setIsTimerOn}
			/>
			<Timer
				pomoLength={pomoLength}
				secondsLeft={secondsLeft}
				setSecondsLeft={setSecondsLeft}
        isTimerOn={isTimerOn}
        setIsTimerOn={setIsTimerOn}
			/>
		</div>
	);
}

export default App;
