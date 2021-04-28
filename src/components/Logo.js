import React from 'react';
import styled from 'styled-components/macro';

import logo from '../assets/logo.svg';

function Logo() {
	return (
		<h1>
			<Image src={logo} alt="pomodoro" />
		</h1>
	);
}

const Image = styled.img`
	width: 117px;
	height: auto;

    @media (min-width: 600px) {
        width: 156px;
    }
`;

export default Logo;
