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
			<input
				type="radio"
				id={prefName}
				name={setting}
				value={value}
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
