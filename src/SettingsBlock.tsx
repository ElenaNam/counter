import React, { useEffect, useState } from 'react';
import { Button } from './Button';

type SettingsBlockPropsType = {
	setMsg: (msg: MessageType | null, alert: boolean) => void
	alert: boolean
	getValues: (start: number, max:number) => void
}

export type MessageType = "enter values and press 'set'" | "incorrect value!" | "max value must be greater than start value!" | "start value must be less than max value!"

export const SettingsBlock = ({setMsg, alert, getValues} : SettingsBlockPropsType) => {
	const [isSetDisabled, setIsSetDisabled] = useState<boolean>(true)
	const [isError, setIsError] = useState<boolean>(alert)

	const [values, setValues] = useState({
			startValue: {
				value: 0,
				isError: false
			}, 
			maxValue: {
				value: 4, 
				isError: false
			}
		}
	)

	useEffect(() => {
		let valuesAsString = localStorage.getItem('valuesSettings');
		if (valuesAsString) {
			let newValues = JSON.parse(valuesAsString);
			setValues(newValues);
		}
	}, [])
	
	useEffect(() => {
		localStorage.setItem('valuesSettings', JSON.stringify(values))
	}, [values])

	const getValuesHandler = () => {
		setMsg(null, false)
		getValues(values.startValue.value, values.maxValue.value)
		setIsSetDisabled(true)
	}

	const changeStartValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const val = +e.target.value

		if(val < 0) {
			setValues({...values, startValue: {value: val, isError: true}})
			setMsg("incorrect value!", true)
			setIsError(true)
			setIsSetDisabled(true)
		} else if(val >= values.maxValue.value) {
			setValues({...values, startValue: {value: val, isError: true}})
			setMsg("start value must be less than max value!", true)
			setIsError(true)
			setIsSetDisabled(true)
		} else {
			setValues({...values, startValue: {value: val, isError: false}, maxValue: {...values.maxValue, isError: values.maxValue.value < 0 ? true : false}})
			setMsg("enter values and press 'set'", false)
			setIsError(false)
			setIsSetDisabled(false)
		}
	}

	const changeMaxValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const val = +e.target.value

		if(val < 0) {
			setValues({...values, maxValue: {value: val, isError: true}})
			setMsg("incorrect value!", true)
			setIsError(true)
			setIsSetDisabled(true)
		} else if(val <= values.startValue.value) {
			setValues({...values, maxValue: {value: val, isError: true}})
			setMsg("max value must be greater than start value!", true)
			setIsError(true)
			setIsSetDisabled(true)
		} else {
			setValues({...values, maxValue: {value: val, isError: false}, startValue: {...values.startValue, isError: values.startValue.value >= 0 ? false : true}})
			setMsg("enter values and press 'set'", false)
			setIsError(false)
			setIsSetDisabled(false)
		}
		
	}

	return (
		<div className='counter'>
			<div className='counter__set'>
				<div className="counter__formfield">
					<label>
						max value: 
						<input 
							type="number"
							value={values.maxValue.value}
							onChange={changeMaxValueHandler}
							className={values.maxValue.isError ? 'error' : ''}
						/>
					</label>
				</div>
				<div className="counter__formfield">
					<label>
						start value: 
						<input 
							type="number"
							value={values.startValue.value}
							onChange={changeStartValueHandler}
							className={values.startValue.isError ? 'error' : ''}
						/>
					</label>
				</div>
			</div>

			<div className='counter__control'>
				<div className="btn__wrapper">
					<Button 
						title='set' 
						disabled={isSetDisabled} 
						callback={getValuesHandler}
					/>
				</div>
				
			</div>
		</div>
	);
};
