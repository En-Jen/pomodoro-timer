import React from 'react';
import styled from 'styled-components/macro';

function RadioInput({ theme, setTheme, prefName, setting, value }) {
	const handleChange = e => {
		if (e.target.name === 'font') {
			setTheme({ ...theme, font: e.target.value });
		}
		if (e.target.name === 'color') {
			setTheme({ ...theme, color: e.target.value });
		}
	};

	let Component;
	let checked;
	if (setting === 'font') {
		Component = FontRadioInput;
		checked = theme.font === value;
	} else if (setting === 'color') {
		Component = ColorRadioInput;
		checked = theme.color === value;
	} else {
		throw new Error(`Unrecognized RadioInput setting: ${setting}`);
	}

	return (
		<Component>
			<Input
				type="radio"
				id={prefName}
				name={setting}
				value={value}
				defaultChecked={checked}
				onChange={handleChange}
			/>
			<Label htmlFor={prefName} value={value}>{prefName}</Label>
		</Component>
	);
}

const BaseRadioInput = styled.div``;

const FontRadioInput = styled(BaseRadioInput)``;

const ColorRadioInput = styled(BaseRadioInput)``;

const Input = styled.input`
    //opacity: 0;
`;

const Label = styled.label`
	position: relative;
	display: inline-block;
	cursor: pointer;

    // Custom radio button
	&::before {
		content: '';
		position: absolute;
		display: inline-block;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background-color: var(--color-grey);

        ${Input}:checked + & {
            background-color: var(--color-dark-navy);
        }

        ${Input}:focus + & {
            outline: 2px dotted var(--color-modal-outline);
            outline-offset: 2px;
        }
	}

    // Content inside custom radio button
    &::after {
        content: 'Aa';
        font-family: ${p => p.value};
        font-size: 0.9375rem;
        color: var(--color-navy-opaque);
        position: absolute;
        display: inline-block;
        top: 8px;
        left: 10px;

        ${Input}:checked ~ & {
            color: white;
        }
    }
`;

export default RadioInput;
