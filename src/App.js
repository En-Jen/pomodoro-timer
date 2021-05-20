import React from 'react';
import { useSelector } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components/macro';

import { selectTheme } from './features/themeSlice';
import GlobalStyles from './components/GlobalStyles';
import Logo from './components/Logo';
import ToggleSound from './components/ToggleSound';
import Controls from './components/Controls';
import Timer from './components/Timer';
import Spacer from './components/Spacer';
import Modal from './components/Modal';
import Attribution from './components/Attribution';

function App() {
	const theme = useSelector(selectTheme);

	return (
		<Wrapper>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<Logo />
				<ToggleSound />
				<Spacer size={45} mobileLargeAndUp={55} />
				<Controls />
				<Spacer size={48} mobileLargeAndUp={109} desktopAndUp={45} />
				<Timer />
				<Spacer size={79} mobileLargeAndUp={144} desktopAndUp={63} />
				<Modal />
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
