import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import useSound from 'use-sound';

import { selectTheme, setFont, setColor } from '../features/themeSlice';
import switchSfx from '../sounds/switch.mp3';
import CheckIcon from './CheckIcon';

function RadioInput({ prefName, setting, value }) {
	const theme = useSelector(selectTheme);
	const soundEnabled = useSelector(state => state.soundEnabled);
	const dispatch = useDispatch();
	const [switchSetting] = useSound(switchSfx, { soundEnabled });

	const handleChange = e => {
		const { name, value } = e.target;

		switchSetting();
		if (name === 'font') {
			dispatch(setFont(value));
		}
		if (name === 'color') {
			dispatch(setColor(value));
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
			<Label htmlFor={prefName} value={value} aria-label={prefName}>
				{LabelContent}
			</Label>
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
	transition: background-color 0.4s;

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
		transform: scale(0.6);
		transition: transform 0.3s ease, opacity 0.3s ease;
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
