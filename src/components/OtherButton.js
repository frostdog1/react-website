import React from 'react';
import './OtherButton.css';

export function OtherButton(props) {
	return (
		<a href={props}>
			<button className='btn'>{props.btnText}</button>
		</a>
	);
}
