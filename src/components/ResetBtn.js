import React from 'react';
import './ResetBtn.css';

const ResetBtn = ({ resetBoard }) => {
	return (
		<button className="reset-button" onClick={resetBoard}>
			Reset Game
		</button>
	);
};

export default ResetBtn;
