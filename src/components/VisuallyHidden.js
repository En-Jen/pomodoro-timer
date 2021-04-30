// Borrowed from https://www.joshwcomeau.com/snippets/react-components/visually-hidden/
// For wrapping around text only available to screen readers

import React from 'react';
import styled from 'styled-components/macro';

const VisuallyHidden = ({ children, ...delegated }) => {
	const [forceShow, setForceShow] = React.useState(false);

	React.useEffect(() => {
		if (process.env.NODE_ENV !== 'production') {
			const handleKeyDown = ev => {
				if (ev.key === 'Alt') {
					setForceShow(true);
				}
			};

			const handleKeyUp = () => {
				setForceShow(false);
			};

			window.addEventListener('keydown', handleKeyDown);
			window.addEventListener('keyup', handleKeyUp);

			return () => {
				window.removeEventListener('keydown', handleKeyDown);
				window.removeEventListener('keydown', handleKeyUp);
			};
		}
	}, []);

	if (forceShow) {
		return children;
	}

	return <Wrapper {...delegated}>{children}</Wrapper>;
};

const Wrapper = styled.span`
	position: absolute;
	overflow: hidden;
	clip: rect(0 0 0 0);
	height: 1px;
	width: 1px;
	margin: -1px;
	padding: 0;
	border: 0;
`;

export default VisuallyHidden;