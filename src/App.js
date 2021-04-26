import React, { useState } from 'react';
import Timer from './components/Timer';

function App() {
  const [pomoLength, setPomoLength] = useState(25);

	return (
		<div>
			<Timer pomoLength={pomoLength} setPomoLength={setPomoLength} />
		</div>
	);
}

export default App;
