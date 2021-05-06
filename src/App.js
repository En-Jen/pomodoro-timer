import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components/macro';

import GlobalStyles from './components/GlobalStyles';
import Logo from './components/Logo';
import ToggleSound from './components/ToggleSound';
import Controls from './components/Controls';
import Timer from './components/Timer';
import Spacer from './components/Spacer';
import Modal from './components/Modal';
import Attribution from './components/Attribution';

function App() {
	const [timerLength, setTimerLength] = useState({
		pomo: 25,
		short: 5,
		long: 15,
	});
	const [isTimerOn, setIsTimerOn] = useState(false);
	const [timerMode, setTimerMode] = useState('pomodoro');
	const [timerText, setTimerText] = useState('start');
	const [secondsLeft, setSecondsLeft] = useState(timerLength.pomo * 60);
	const [soundEnabled, setSoundEnabled] = useState(true);
	const [theme, setTheme] = useState({
		font: "'Kumbh Sans', sans-serif",
		color: 'hsl(0, 91%, 71%)',
	});

	return (
		<Wrapper>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<Logo />
				<ToggleSound
					soundEnabled={soundEnabled}
					setSoundEnabled={setSoundEnabled}
				/>
				<Spacer size={45} mobileLargeAndUp={55} />
				<Controls
					setSecondsLeft={setSecondsLeft}
					timerLength={timerLength}
					setIsTimerOn={setIsTimerOn}
					timerMode={timerMode}
					setTimerMode={setTimerMode}
					setTimerText={setTimerText}
          soundEnabled={soundEnabled}
				/>
				<Spacer size={48} mobileLargeAndUp={109} desktopAndUp={45} />
				<Timer
					timerLength={timerLength}
					secondsLeft={secondsLeft}
					setSecondsLeft={setSecondsLeft}
					isTimerOn={isTimerOn}
					setIsTimerOn={setIsTimerOn}
					timerMode={timerMode}
					timerText={timerText}
					setTimerText={setTimerText}
					theme={theme}
          soundEnabled={soundEnabled}
				/>
				<Spacer size={79} mobileLargeAndUp={144} desktopAndUp={63} />
				<Modal
					timerLength={timerLength}
					setTimerLength={setTimerLength}
					theme={theme}
					setTheme={setTheme}
					setIsTimerOn={setIsTimerOn}
          soundEnabled={soundEnabled}
				/>
        {/* <Spacer size={45} mobileLargeAndUp={109} desktopAndUp={45} /> */}
        <Attribution />
			</ThemeProvider>
		</Wrapper>
	);
}

const Wrapper = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export default App;
