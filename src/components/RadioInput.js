import React from 'react';
import styled from 'styled-components/macro';

function RadioInput({ font, setFont, color, setColor, prefName, setting }) {
	const handleChange = e => {
		if (e.target.name === 'font') {
            setFont(e.target.value);
        }
        if (e.target.name === 'color') {
            setColor(e.target.value);
        }
	};

	let Component;
	let checked;
	if (setting === 'font') {
		Component = FontRadioInput;
		checked = font === prefName;
	} else if (setting === 'color') {
		Component = ColorRadioInput;
		checked = color === prefName;
	} else {
		throw new Error(`Unrecognized RadioInput setting: ${setting}`);
	}

	return (
		<Component>
			<input
				type="radio"
				id={prefName}
				name={setting}
				value={prefName}
				defaultChecked={checked}
				onChange={handleChange}
			/>
			<label htmlFor={prefName}>{prefName}</label>
		</Component>
	);
}

const BaseRadioInput = styled.div``;

const FontRadioInput = styled(BaseRadioInput)``;

const ColorRadioInput = styled(BaseRadioInput)``;

export default RadioInput;
