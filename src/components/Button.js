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
    position: relative;
	border-radius: 26.5px;
    background-color: ${p => p.active ? p.theme.color : 'transparent'};
    width: 105px;
	height: 48px;
	color: ${p => (p.active ? 'var(--color-navy)' : 'var(--color-grey-blue-opaque)')};
    font-size: var(--font-size-controls);
    z-index: 2;
    transition: color .4s ease;

    @media (min-width: 375px) {
        background-color: transparent;
    }

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
    transition: transform .3s ease;

    &:focus {
        outline: 2px dotted var(--color-modal-outline);
        outline-offset: 2px;
    }

    &:hover {
        transform: scale(1.1);
    }
`;

export default Button;
