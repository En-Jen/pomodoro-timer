import React, { useState } from 'react';
import styled from 'styled-components/macro';

import GlobalStyles from './components/GlobalStyles';
import Logo from './components/Logo';
import Controls from './components/Controls';
import Timer from './components/Timer';
import Spacer from './components/Spacer';
import Modal from './components/Modal';

function App() {
	const [pomoLength, setPomoLength] = useState(25);
	const [shortLength, setShortLength] = useState(5);
	const [longLength, setLongLength] = useState(15);
	const [isTimerOn, setIsTimerOn] = useState(false);
	const [secondsLeft, setSecondsLeft] = useState(pomoLength * 60);
	const [timerMode, setTimerMode] = useState('pomodoro');

	return (
		<Wrapper>
			<GlobalStyles />
			<Logo />
			<Spacer size={45} mobileLargeAndUp={55} />
			<Controls
				setSecondsLeft={setSecondsLeft}
				timerMode={timerMode}
				setTimerMode={setTimerMode}
				pomoLength={pomoLength}
				shortLength={shortLength}
				longLength={longLength}
				setIsTimerOn={setIsTimerOn}
			/>
			<Spacer size={48} mobileLargeAndUp={109} desktopAndUp={45} />
			<Timer
				pomoLength={pomoLength}
				secondsLeft={secondsLeft}
				setSecondsLeft={setSecondsLeft}
				isTimerOn={isTimerOn}
				setIsTimerOn={setIsTimerOn}
			/>
			<Spacer size={79} mobileLargeAndUp={144} desktopAndUp={63} />
			<Modal
				pomoLength={pomoLength}
				setPomoLength={setPomoLength}
				shortLength={shortLength}
				setShortLength={setShortLength}
				longLength={longLength}
				setLongLength={setLongLength}
			/>
		</Wrapper>
	);
}

const Wrapper = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export default App;
