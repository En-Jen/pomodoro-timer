import React from 'react';

function NumberInput({
	setIsTimerOn,
	setPomoLength,
	setShortLength,
	setLongLength,
	type,
	min,
	max,
	value,
}) {
	const handleChange = e => {
		setIsTimerOn(false);
		if (e.target.id === 'pomodoro') {
			setPomoLength(e.target.value);
		}
		if (e.target.id === 'short break') {
			setShortLength(e.target.value);
		}
		if (e.target.id === 'long break') {
			setLongLength(e.target.value);
		}
	};

	return (
		<div>
			<label htmlFor={type}>{type}</label>
			<input
				type="number"
				name={type}
				id={type}
				min={min}
				max={max}
				value={value}
				onChange={handleChange}
			/>
		</div>
	);
}

export default NumberInput;
