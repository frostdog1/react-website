import React from 'react';
import './InfoBox.css';

import Hours from '../assets/hours.svg';
import Phone from '../assets/phone.svg';
import Location from '../assets/location.svg';

export default function InfoBox() {
	return (
		<div className='infobox-container'>
			<div className='container-box'>
				<div className='left-box'>
					<div className='left-circle'>
						<img
							className='infobox-img'
							src={Hours}
							alt='Working hours'
						/>
					</div>
					<div className='info-header'>
						<h1 className='infobox-header-text'>Working Hours</h1>
					</div>

					<div className='info-body'>
						<p>Monday - Friday: 8:30AM to 5:00PM</p>

						<p>Weekend support available</p>
					</div>
				</div>

				<div className='middle-box'>
					<div className='middle-circle'>
						<img
							className='infobox-img'
							src={Location}
							alt='Headquarters location'
						/>
					</div>

					<div className='info-header'>
						<h1 className='infobox-header-text'>Our Address</h1>
					</div>

					<div className='info-body'>
						<p>
							<b>UK Headquarters</b>
						</p>

						<p>
							Arnhall Business Park, BlueSky Business Space Ltd, Prospect Rd,
							Westhill, Aberdeen, AB32 6FJ
						</p>
					</div>
				</div>

				<div className='right-box'>
					<div className='right-circle'>
						<img
							className='infobox-img'
							src={Phone}
							alt='Contact us by phone or email'
						/>
					</div>
					<div className='info-header'>
						<h1 className='infobox-header-text'>Contact Us</h1>
					</div>

					<div className='info-body'>
						<p>
							<b>Phone:</b> (+44) 7511 584765
						</p>

						<br />
						<p>
							<b>Email:</b> info@gsesltd.com
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
