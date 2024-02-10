import React from 'react';

import './Footer.css';
import Call from '../assets/call.png';
import LinkedIn from '../assets/linkedin.png';
import Email from '../assets/email.png';
import footerLogo from '../assets/gses-footer.svg';

function Footer() {
	return (
		<footer className='footer'>
			<div className='footer-left-section'>
				<div className='footer-img-container'>
					<img
						className='footer-img'
						src={footerLogo}
						alt='Business Intelligence and Reporting'
					/>
				</div>
			</div>
			<div className='footer-right-section'>
				<div className='footer-left'>
					<div className='footer-header'>
						<h2 className='footer-header-text'>Locations</h2>
					</div>
					<div className='footer-body'>
						<h3 className='footer-location-title'>GSES Ltd:</h3>
						<p className='footer-address'>
							Arnhall Business Park, <br />
							BlueSky Business Space Ltd, <br /> Prospect Rd, Westhill, AB32 6FJ
						</p>

						<br />

						<h3 className='footer-location-title'>GSES Netherlands:</h3>
						<p className='footer-address'>
							Dorpstraat 15, <br /> 9462PJ Gasselte, <br /> The Netherlands
						</p>
					</div>
				</div>
				<div className='footer-middle'>
					<div className='footer-header'>
						<h2 className='footer-header-text'>Quick Links</h2>
					</div>
					<div className='footer-body'>
						<ul className='link-list'>
							<li className='link-item'>
								<a className='footer-links'>About Us</a>
							</li>
							<li className='link-item'>
								<a className='footer-links'>Services</a>
							</li>
							<li className='link-item'>
								<a className='footer-links'>Partners</a>
							</li>
							<li className='link-item'>
								<a className='footer-links'>Pricing</a>
							</li>
						</ul>
					</div>
				</div>
				<div className='footer-right'>
					<div className='footer-header'>
						<h2 className='footer-header-text'>Contact Us</h2>
					</div>
					<div className='footer-body'>
						<div className='number-container'>
							<div className='icon-wrap'>
								<img
									className='phone-icon'
									src={Call}
									alt='Call us'
								/>
							</div>
							<div className='details'>
								<p>(+44) 7511 685345</p>
							</div>
						</div>
						<div className='email-container'>
							<div className='icon-wrap'>
								<img
									className='phone-icon'
									src={Email}
									alt='Email us'
								/>
							</div>
							<div className='details'>
								<p>info@gsesltd.com</p>
							</div>
						</div>
						<div className='email-container'>
							<div className='icon-wrap'>
								<a
									href='https://uk.linkedin.com/company/gses-ltd.'
									className='social-link'
								>
									<img
										className='phone-icon'
										src={LinkedIn}
										alt='Follow our LinkedIn'
									/>
								</a>
							</div>
							<div className='details'>{/* <p>(+44) 7511 685345</p> */}</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
