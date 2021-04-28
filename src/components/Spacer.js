// Borrowed and tweaked from https://www.joshwcomeau.com/react/modern-spacer-gif/
// Used to create space between components

import styled from 'styled-components/macro';

function getResponsiveSpace(breakpoint) {
	return typeof breakpoint === 'number' ? breakpoint + 'px' : undefined;
}

const Spacer = styled.span`
	display: block;
	width: ${p => p.size}px;
	min-width: ${p => p.size}px;
	height: ${p => p.size}px;
	min-height: ${p => p.size}px;

	// Make Spacer responsive
	@media (min-width: 600px) {
		width: ${p => getResponsiveSpace(p.mobileLargeAndUp)};
		min-width: ${p => getResponsiveSpace(p.mobileLargeAndUp)};
		height: ${p => getResponsiveSpace(p.mobileLargeAndUp)};
		min-height: ${p => getResponsiveSpace(p.mobileLargeAndUp)};
	}

	@media (min-width: 1024px) {
		width: ${p => getResponsiveSpace(p.desktopAndUp)};
		min-width: ${p => getResponsiveSpace(p.desktopAndUp)};
		height: ${p => getResponsiveSpace(p.desktopAndUp)};
		min-height: ${p => getResponsiveSpace(p.desktopAndUp)};
	}
`;

export default Spacer;
