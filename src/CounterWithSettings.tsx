import React, { useEffect, useState } from 'react';
import Grid2 from '@mui/material/Grid2';
import { MessageType, SettingsBlock } from './SettingsBlock';
import { Counter } from './Counter';

export const CounterWithSettings = () => {
	const minCount = 0
	const maxCount = 6
	const id = '3';
	const [counter, setCounter] = useState<number>(minCount)
	const [maxValue, setMaxValue] = useState<number>(maxCount)
	const [message, setMessage] = useState<MessageType | null>(null) //текст сообщения
	const [isAlert, setIsAlert] = useState<boolean>(false) //состояние ошибки
	
	const setValuesHandler = (start: number, max: number) => {
		setCounter(start);
		setMaxValue(max);
	}

	const showMessage = (message: MessageType | null, alert: boolean) => {
		setMessage(message)
		setIsAlert(alert)
	}

	useEffect(() => {
		console.log('Counter or maxValue updated:', counter, maxValue);
	}, [counter, maxValue]);


	useEffect(() => {
		let valuesAsString = localStorage.getItem('valuesSettings');
		if (valuesAsString) {
			let newValues = JSON.parse(valuesAsString);
			setCounter(newValues.startValue.value);
			setMaxValue(newValues.maxValue.value);
		}
	}, [])

	return (
		<Grid2 container spacing={6} columns={12} >
			<Grid2 size={6}>
				<SettingsBlock setMsg={showMessage} alert={isAlert} getValues={setValuesHandler} />
			</Grid2>
			<Grid2 size={6}>
				<Counter id={id} msg={message} alert={isAlert} startValue={counter} maxValue={maxValue}/>
			</Grid2>
		</Grid2>
	);
};
