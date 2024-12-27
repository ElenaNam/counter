import React, { useState } from 'react';
import { Button } from './Button';
import { Tablo } from './Tablo';

export const Counter = () => {
	const minCount = 0
	const maxCount = 5
	const [counter, setCounter] = useState<number>(minCount)
	

	const increaseCounter = () => {
		counter <= maxCount && setCounter(counter + 1);
	}
	const resetCounter = () => {
		setCounter(0);
	}

	return (
		<div className='counter'>
			<Tablo 
				value={counter} 
				warning={counter === maxCount} 
			/>

			<div className='counter__control'>
				<Button 
					title='inc' 
					disabled={counter === maxCount} 
					callback={increaseCounter}
				/>
				<Button 
					title='reset' 
					disabled={counter === minCount} 
					callback={resetCounter} 
				/>
			</div>
		</div>
	);
};
