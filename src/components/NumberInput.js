import React from 'react';

function NumberInput({
	setIsTimerOn,
    timerLength,
    setTimerLength,
	type,
	min,
	max,
	value,
}) {
	const handleChange = e => {
		setIsTimerOn(false);
		if (e.target.id === 'pomodoro') {
            setTimerLength({...timerLength, pomo: e.target.value});
		}
		if (e.target.id === 'short break') {
            setTimerLength({...timerLength, short: e.target.value});
		}
		if (e.target.id === 'long break') {
            setTimerLength({...timerLength, long: e.target.value});
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
