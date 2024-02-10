import React from 'react';
import './Button.css';
// import { Link } from 'react-router-dom';

export function Button(props) {
	return (
		<a href={props}>
			<button className='btnNav'>{props.btnText}</button>
		</a>
	);
}
