import React from 'react';

type TabloPropsType = {
	value: number
	warning: boolean
	message?: string | null
	alert?: boolean
}
export const Tablo = ({value, warning, message, alert} : TabloPropsType) => {
	return (
		<>
			{message ? <div className={alert ? 'counter__screen counter__screen-msg color-red' : 'counter__screen counter__screen-msg'}>{message}</div> : <div className={warning ? 'counter__screen color-red' : 'counter__screen'} >
				{value}
			</div>}
		</>
	);
};
