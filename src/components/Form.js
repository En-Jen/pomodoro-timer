import React from 'react';
import styled from 'styled-components/macro';

import VisuallyHidden from './VisuallyHidden';
import Button from './Button';
import NumberInput from './NumberInput';
import RadioInput from './RadioInput';

function Form({
	setShowDialog,
    timerLength,
    setTimerLength,
    theme,
    setTheme,
	setIsTimerOn,
}) {
	const handleSubmit = e => {
		e.preventDefault();
		setShowDialog(false);
	};

	return (
		<div>
			<Header>
				<h2>Settings</h2>
				<Button onClick={() => setShowDialog(false)}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="14"
						height="14"
					>
						<path
							fill="#1E213F"
							fillRule="evenodd"
							d="M11.95.636l1.414 1.414L8.414 7l4.95 4.95-1.414 1.414L7 8.414l-4.95 4.95L.636 11.95 5.586 7 .636 2.05 2.05.636 7 5.586l4.95-4.95z"
							opacity=".5"
						/>
					</svg>
                    <VisuallyHidden>Close settings pane</VisuallyHidden>
				</Button>
			</Header>
			<StyledForm action="" onSubmit={handleSubmit}>
				<Fieldset>
					<TimeHeading>Time (minutes)</TimeHeading>
                    <NumberInputWrapper>
                        <NumberInput
                            type="pomodoro"
                            min="5"
                            max="60"
                            value={timerLength.pomo}
                            setIsTimerOn={setIsTimerOn}
                            timerLength={timerLength}
                            setTimerLength={setTimerLength}
                        />
                        <NumberInput
                            type="short break"
                            min="1"
                            max="20"
                            value={timerLength.short}
                            setIsTimerOn={setIsTimerOn}
                            timerLength={timerLength}
                            setTimerLength={setTimerLength}
                        />
                        <NumberInput
                            type="long break"
                            min="5"
                            max="45"
                            value={timerLength.long}
                            setIsTimerOn={setIsTimerOn}
                            timerLength={timerLength}
                            setTimerLength={setTimerLength}
                        />
                    </NumberInputWrapper>
				</Fieldset>
				<RadioFieldset>
					<RadioHeading>Font</RadioHeading>
                    <RadioInputWrapper>
                        <RadioInput
                            prefName="kumbh sans"
                            setting="font"
                            value="'Kumbh Sans', sans-serif"
                            theme={theme}
                            setTheme={setTheme}
                        />
                        <RadioInput
                            prefName="roboto slab"
                            setting="font"
                            value="'Roboto Slab', serif"
                            theme={theme}
                            setTheme={setTheme}
                        />
                        <RadioInput
                            prefName="space mono"
                            setting="font"
                            value="'Space Mono', monospace"
                            theme={theme}
                            setTheme={setTheme}
                        />
                    </RadioInputWrapper>
				</RadioFieldset>
				<RadioFieldset>
					<RadioHeading>Color</RadioHeading>
                    <RadioInputWrapper>
                        <RadioInput
                            prefName="salmon"
                            setting="color"
                            value="hsl(0, 91%, 71%)"
                            theme={theme}
                            setTheme={setTheme}
                        />
                        <RadioInput
                            prefName="blue"
                            setting="color"
                            value="hsl(182, 91%, 71%)"
                            theme={theme}
                            setTheme={setTheme}
                        />
                        <RadioInput
                            prefName="purple"
                            setting="color"
                            value="hsl(284, 89%, 74%)"
                            theme={theme}
                            setTheme={setTheme}
                        />
                    </RadioInputWrapper>
				</RadioFieldset>
                <ButtonWrapper>
                    <Button variant="modal" type="submit">
                        Apply
                    </Button>
                </ButtonWrapper>
			</StyledForm>
		</div>
	);
}

const Header = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 24px;
	padding-bottom: 28px;
	border-bottom: 1px solid var(--color-grey-border);

	@media (min-width: 600px) {
        padding: 34px 40px;
		padding-bottom: 31px;
	}
`;

const StyledForm = styled.form`
	padding: 0 24px;

    @media (min-width: 600px) {
		padding: 0 40px;
	}
`;

const Fieldset = styled.fieldset`
    border: none;
    padding: 24px 0;

    &:not(:last-of-type) {
        border-bottom: 1px solid var(--color-grey-border);
    }

    &:last-of-type {
        padding-bottom: 59px;
    }
`;

const RadioFieldset = styled(Fieldset)`
    @media (min-width: 600px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
	}
`;

const SettingHeading = styled.h3`
    margin-bottom: 18px;
    text-align: center;

    @media (min-width: 600px) {
        text-align: revert;
	}
`;

const TimeHeading = styled(SettingHeading)`
    @media (min-width: 600px) {
        margin-bottom: 26px;
	}
`;

const RadioHeading = styled(SettingHeading)`
    @media (min-width: 600px) {
        margin-bottom: 0;
	}
`;

const NumberInputWrapper = styled.div`
    display: grid;
    gap: 8px;

    @media (min-width: 600px) {
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
	}
`;

const RadioInputWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 40px);
    grid-template-rows: 40px;
    gap: 16px;
    justify-content: center;
`;

const ButtonWrapper = styled.div`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
`;

export default Form;
