import React from 'react';
import styled from 'styled-components/macro';

import checkIcon from '../assets/icon-check.svg';

function CheckIcon() {
	return (
		<>
			<Image src={checkIcon} alt="selected" />
		</>
	);
}

const Image = styled.img`
	width: 14px;
	height: auto;
`;

export default CheckIcon;
