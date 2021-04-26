import React from 'react';
import styled from 'styled-components/macro';

function Button({ width, onClick, children }) {
	return (
		<Wrapper width={width} onClick={onClick}>
			{children}
		</Wrapper>
	);
}

const Wrapper = styled.button`
	width: ${p => (p.width ? `${p.width}px` : 'auto')};

`;

export default Button;
