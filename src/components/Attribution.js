import React from 'react';
import styled from 'styled-components/macro';

function Attribution() {
	return (
		<Wrapper>
			Challenge by{' '}
			<Link
				href="https://www.frontendmentor.io/solutions"
				target="_blank"
			>
				Frontend Mentor
			</Link>
			. Coded by{' '}
			<Link href="https://github.com/En-Jen" target="_blank">
				Jen Speak
			</Link>
			.
		</Wrapper>
	);
}

const Wrapper = styled.div`
    position: absolute;
    bottom: 8px;
	font-size: 0.75rem;
    font-weight: 400;
	text-align: center;
	color: var(--color-grey-blue);
`;

const Link = styled.a`
	color: var(--color-salmon);
	transition: color 0.3s;

	&:hover {
		color: var(--color-purple);
	}
`;

export default Attribution;
