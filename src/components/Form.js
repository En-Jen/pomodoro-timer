import React from 'react';
import styled from 'styled-components/macro';

import Button from './Button';
import NumberInput from './NumberInput';
import RadioInput from './RadioInput';

function Form({
	setShowDialog,
	pomoLength,
	setPomoLength,
	shortLength,
	setShortLength,
	longLength,
	setLongLength,
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
				</Button>
			</Header>
			<StyledForm action="" onSubmit={handleSubmit}>
				<div>
					<h3>Time (minutes)</h3>
					<NumberInput
						type="pomodoro"
						min="5"
						max="60"
						value={pomoLength}
						setIsTimerOn={setIsTimerOn}
						setPomoLength={setPomoLength}
					/>
					<NumberInput
						type="short break"
						min="1"
						max="20"
						value={shortLength}
						setIsTimerOn={setIsTimerOn}
						setShortLength={setShortLength}
					/>
					<NumberInput
						type="long break"
						min="5"
						max="45"
						value={longLength}
						setIsTimerOn={setIsTimerOn}
						setLongLength={setLongLength}
					/>
				</div>
				<div>
					<h3>Font</h3>
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
				</div>
				<div>
					<h3>Color</h3>
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
				</div>
				<Button variant="modal" type="submit">
					Apply
				</Button>
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
		padding-bottom: 31px;
	}
`;

const StyledForm = styled.form`
	padding: 24px;
`;

export default Form;
