import React, { useState, useEffect } from 'react';
import { Button } from './Button';
// import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import GsesLogo from '../assets/gses-logo.svg';

function Navbar() {
	const [position, setPosition] = useState(window.pageYOffset);
	const [visible, setVisible] = useState(true);
	useEffect(() => {
		const handleScroll = () => {
			let moving = window.pageYOffset;
			setPosition(moving);

			setVisible(position > moving);
			setPosition(moving);
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	const cls = visible ? 'visible' : 'hidden';

	// logic for animated open/close button for nav bar at min width
	const [click, setClick] = useState(false);
	const [dropdown, setDropdown] = useState(false);

	const handleClick = () => setClick(!click);

	const closeMobileMenu = () => setClick(false);

	const onMouseEnter = () => {
		if (window.innerWidth < 960) {
			setDropdown(false);
		} else {
			setDropdown(true);
		}
	};

	const onMouseLeave = () => {
		if (window.innerWidth < 960) {
			setDropdown(false);
		} else {
			setDropdown(false);
		}
	};

	return (
		<div className={cls}>
			<nav className='navbar'>
				<a
					href='/'
					className='navbar-img-logo'
				>
					<img
						className='navbar-img'
						src={GsesLogo}
						alt='Grace Scott Energy Solutions Logo'
					/>
				</a>

				<div
					className='menu-icon'
					onClick={handleClick}
				>
					<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
				</div>

				<ul className={click ? 'nav-menu active' : 'nav-menu'}>
					{/* <li
						className='nav-item'
						onMouseEnter={onMouseEnter}
						onMouseLeave={onMouseLeave}
					>
						<a
							href='/solutions'
							className='nav-links'
							onClick={closeMobileMenu}
						>
							Solutions <i className='fas fa-caret-down' />
						</a>
						
						{dropdown && <Dropdown />}
					</li> */}

					<li className='nav-item'>
						<a
							href='/services'
							className='nav-links'
							onClick={closeMobileMenu}
						>
							Services
						</a>
					</li>

					<li className='nav-item'>
						<a
							href='/contact'
							className='nav-links'
							onClick={closeMobileMenu}
						>
							Contact
						</a>
					</li>

					<li className='nav-item'>
						<a
							href='/services'
							className='nav-links-mobile'
							onClick={closeMobileMenu}
						>
							Explore Metis
						</a>
					</li>
				</ul>
				{/* <Button btnText='Explore Metis' /> */}
			</nav>
		</div>
	);
}

export default Navbar;
