import React from 'react';
import styled from 'styled-components/macro';

import Button from './Button';
import NumberInput from './NumberInput';

function Form({
	setShowDialog,
	pomoLength,
	setPomoLength,
	shortLength,
	setShortLength,
	longLength,
	setLongLength,
}) {
	const handleSubmit = () => {
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
						defaultValue={pomoLength}
					/>
                    <NumberInput
						type="short break"
						min="1"
						max="20"
						defaultValue={shortLength}
					/>
                    <NumberInput
						type="long break"
						min="5"
						max="45"
						defaultValue={longLength}
					/>
				</div>
				<Button variant="modal" onClick={handleSubmit}>
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
