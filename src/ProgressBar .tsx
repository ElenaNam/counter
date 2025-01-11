import React, { useState } from 'react';
import { v1 } from 'uuid';

type ProgressBarPropsType = {
	count: number
	value: number
}

export const ProgressBar  = ({count, value} : ProgressBarPropsType) => {
	const [countFillItem, setCountFillItem] = useState(0)

	const arrayFromCount = Array(count).fill(1);
	const widthItem = 100/count

	return (
		<div className = 'progressbar'>
			{arrayFromCount.map((_, i) => <div key={v1()} className={i < value ? 'progressbar__item progressbar__item-fill' : 'progressbar__item'} style={{ width: `${widthItem}%`, flexGrow: i === arrayFromCount.length - 1 ? 1 : 0}} ></div>) }
		</div>
	);
};
