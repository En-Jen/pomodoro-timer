import React from 'react';
import styled from 'styled-components/macro';

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
			setTimerLength({ ...timerLength, pomo: e.target.value });
		}
		if (e.target.id === 'short break') {
			setTimerLength({ ...timerLength, short: e.target.value });
		}
		if (e.target.id === 'long break') {
			setTimerLength({ ...timerLength, long: e.target.value });
		}
	};

	return (
		<Wrapper>
			<Label htmlFor={type}>{type}</Label>
            <Input
                type="number"
                name={type}
                id={type}
                min={min}
                max={max}
                value={value}
                onChange={handleChange}
            />
		</Wrapper>
	);
}

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;

    @media (min-width: 600px) {
        grid-template-columns: 1fr;
        gap: 10px;
	}
`;

const Label = styled.label`
    color: var(--color-navy);
    opacity: 40%;
    font-size: var(--font-size-label);
`;

const Input = styled.input`
	width: 140px;
	height: 40px;
	border-radius: 10px;
	border: none;
	background-color: var(--color-grey);
	padding: 0 16px;
	color: var(--color-navy);
	font-size: var(--font-size-num-input);

    &:focus {
        outline: 2px dotted var(--color-modal-outline);
        outline-offset: 2px;
    }

	&::-webkit-outer-spin-button,
	&::-webkit-inner-spin-button {
		height: 21px;
		width: 14px;
		opacity: 0.5;
		cursor: pointer;
	}

    &::-webkit-outer-spin-button:hover,
	&::-webkit-inner-spin-button:hover {
		opacity: 1;
	}
`;

export default NumberInput;
