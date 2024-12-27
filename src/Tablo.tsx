import React from 'react';

type TabloPropsType = {
	value: number
	warning: boolean
}
export const Tablo = ({value, warning} : TabloPropsType) => {
	return (
		<div className={warning ? 'counter__screen color-red' : 'counter__screen'} >
			{value}
		</div>
	);
};
