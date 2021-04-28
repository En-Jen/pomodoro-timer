import React from 'react';
import styled from 'styled-components/macro';

function Button({ variant = 'unstyled', onClick, active, children }) {
	let Component;
	if (variant === 'unstyled') {
		Component = UnstyledBtn;
	} else if (variant === 'controls') {
		Component = ControlsBtn;
	} else if (variant === 'modal') {
		Component = ModalBtn;
	} else {
		throw new Error(`Unrecognized Button variant: ${variant}`);
	}

	return (
		<Component onClick={onClick} active={active}>
			{children}
		</Component>
	);
}

const BaseBtn = styled.button`
	border: none;
	cursor: pointer;
	font: inherit;
	color: inherit;
`;

const UnstyledBtn = styled(BaseBtn)`
	background: transparent;
`;

const ControlsBtn = styled(BaseBtn)`
	border-radius: 26.5px;
    background-color: ${p => p.active ? p.theme.color : 'transparent'};
    width: 105px;
	height: 48px;
	color: ${p => (p.active ? 'var(--color-navy)' : 'var(--color-grey-blue-opaque)')};
    font-size: var(--font-size-controls);

    @media (min-width: 600px) {
        width: 120px;
    }
`;

const ModalBtn = styled(BaseBtn)`
	border-radius: 26.5px;
    background-color: ${p => p.theme.color};
    font-size: var(--font-size-apply);
    color: var(--color-white);
    width: 140px;
    height: 53px;
`;

export default Button;
