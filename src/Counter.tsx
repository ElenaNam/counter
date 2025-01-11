import React, { useEffect, useState } from 'react';
import { Button } from './Button';
import { Tablo } from './Tablo';

type CounterPropsType = {
	id?: string
	msg?: string | null
	alert?: boolean
	startValue?: number
	maxValue?: number
}

export const Counter = ({id, msg, alert, startValue, maxValue} : CounterPropsType) => {
	const maxCount = maxValue ? maxValue : 5

	const [minCount, setMinCount] = useState<number>(0)
	const [counter, setCounter] = useState<number>(minCount)

	const increaseCounter = () => {
		counter <= maxCount && setCounter(counter + 1);
	}
	const resetCounter = () => {
		setCounter(startValue ? startValue : 0);
	}

	useEffect(() => {
		let counterAsString = localStorage.getItem(id ? `simpleCounterValue-${id}` : `simpleCounterValue`);
		if (counterAsString) {
			let newCounter = JSON.parse(counterAsString);
			setCounter(newCounter);
		}
	}, [])

	useEffect(() => {
		localStorage.setItem(id ? `simpleCounterValue-${id}` : `simpleCounterValue`, JSON.stringify(counter))
	}, [counter])

	useEffect(() => {
		if(startValue) {
			setMinCount(startValue)
			setCounter(startValue)
		}
	}, [startValue]);

	return (
		<div className='counter'>
			<Tablo 
				value={counter} 
				warning={counter === maxCount} 
				message={msg}
				alert={alert}
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
			{/* <div>
				<div>Counter: {counter}</div>
				<div>StartValue: {startValue}</div>
				<div>MaxValue: {maxValue}</div>
				<div>MinCount: {minCount}</div>
				<div>MaxCount: {maxCount}</div>
			</div> */}
		</div>
	);
};
