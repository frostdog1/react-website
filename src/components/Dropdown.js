import React, { useState } from 'react';
import { MenuItems } from '../pages/MenuItems';
// import { Link } from 'react-router-dom';
import './Dropdown.css';

function Dropdown() {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);

	return (
		<>
			<ul
				onClick={handleClick}
				className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
			>
				{MenuItems.map((item, index) => {
					return (
						<li key={index}>
							<a
								className={item.style}
								href={item.path}
								onClick={() => setClick(false)}
							>
								{item.title}
							</a>
							{/* <Link
								className={item.style}
								to={item.path}
								onClick={() => setClick(false)}
							>
								{item.title}
							</Link> */}
						</li>
					);
				})}
			</ul>
		</>
	);
}

export default Dropdown;
