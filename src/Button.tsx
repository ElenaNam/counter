import React from 'react';

type ButtonPropsType = {
	title: string
	disabled?: boolean
	callback: () => void
}

export const Button = (props: ButtonPropsType) => {
	return (
		<button disabled={props.disabled} onClick={props.callback}>
			{props.title}
		</button>
	);
};
