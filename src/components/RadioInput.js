import React from 'react';

function RadioInput({ font, fontName }) {
	return (
		<div>
			<input
				type="radio"
				id={fontName}
				name="font"
				value={fontName}
				defaultChecked={font === fontName}
			/>
			<label htmlFor={fontName}>{fontName} font</label>
		</div>
	);
}

export default RadioInput;
