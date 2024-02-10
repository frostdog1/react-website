import React from 'react';
import './About.css';

import whoWeAre from '../assets/who-we-are.svg';
import { Button } from '../components/Button';

function About() {
	<div className='about-section'>
		<div className='left-section'>
			<img
				className='about-img'
				src={whoWeAre}
				alt='Global experts in hydrocarbon accountancy'
			></img>
		</div>
		<div className='right-section'>
			<div className='section-body'>
				<h1 className='about-title'>Who we are</h1>

				<p className='about-desc'>
					We combine our decades of deep industry knowledge with the
					opportunities modern technologies have to offer us.{' '}
				</p>

				<p className='about-desc'>
					That's how we prepare for tomorrow: By being knowledgeable and highly
					adaptive. We are represented all over the globe and focus on improving
					your business and lowering your Total Cost of Ownership.
				</p>

				<p className='about-desc'>
					GSES is a world-renowned consultancy firm in the HCA domain with a
					strong ecosystem of innovative partners.
				</p>

				<br />

				<Button
					btnText='View More'
					link='metis'
				/>
			</div>
		</div>
	</div>;
}

export default About;
