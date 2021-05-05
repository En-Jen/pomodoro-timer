import React from 'react';
import styled from 'styled-components/macro';
import useSound from 'use-sound';

import switchSfx from '../sounds/switch.mp3';
import CheckIcon from './CheckIcon';
import VisuallyHidden from './VisuallyHidden';

function RadioInput({ theme, setTheme, prefName, setting, value }) {
    const [switchSetting] = useSound(switchSfx);

	const handleChange = e => {
        switchSetting();
		if (e.target.name === 'font') {
			setTheme({ ...theme, font: e.target.value });
		}
		if (e.target.name === 'color') {
			setTheme({ ...theme, color: e.target.value });
		}
	};

	let Label, checked, LabelContent;
	if (setting === 'font') {
		Label = FontLabel;
		checked = theme.font === value;
        LabelContent = 'Aa';
	} else if (setting === 'color') {
		Label = ColorLabel;
		checked = theme.color === value;
        LabelContent = checked ? <CheckIcon /> : '';
	} else {
		throw new Error(`Unrecognized Label setting: ${setting}`);
	}

	return (
		<div>
			<Input
				type="radio"
				id={prefName}
				name={setting}
				value={value}
				defaultChecked={checked}
				onChange={handleChange}
			/>
            <Label htmlFor={prefName} value={value}>{LabelContent}</Label>
            <VisuallyHidden>{prefName}</VisuallyHidden>
		</div>
	);
}

const Input = styled.input`
    // hide radio inputs so the labels can be styled 
    opacity: 0;
    position: fixed;
    width: 0;
`;

const BaseLabel = styled.label`
    position: relative;
	cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: background-color .4s;

    ${Input}:focus + & {
        outline: 2px dotted var(--color-modal-outline);
        outline-offset: 2px;
    }

    // Ring around labels that starts out opaque before hover
    &::before {
        content: '';
        position: absolute;
        display: inline-block;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 1px solid var(--color-grey);
        opacity: 0;
        transform: scale(.6);
        transition: transform .3s ease, opacity .3s ease;
    }

    &:hover:before {
        opacity: 1;
        transform: scale(1);
    }
`;

const FontLabel = styled(BaseLabel)`
    background-color: var(--color-grey);
    font-family: ${p => p.value};
    color: var(--color-navy-opaque);

    &:nth-child(2) {
        font-weight: 400;
    }

    ${Input}:checked + & {
        background-color: var(--color-dark-navy);
        color: var(--color-white);
    }
`;

const ColorLabel = styled(BaseLabel)`
    background-color: ${p => p.value};
`;

export default RadioInput;