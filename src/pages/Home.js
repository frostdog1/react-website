import React from 'react';
import './home.css';
import Footer from '../components/Footer';
// import header from '../assets/gses-header.jpg';
import projectManagement from '../assets/project-management.svg';
import businessConsulting from '../assets/business-consulting.svg';
import reporting from '../assets/reporting.svg';
import mitacron from '../assets/mitacron.svg';
import wipro from '../assets/wipro.svg';
import dataviz from '../assets/dataviz.svg';
import support from '../assets/support.svg';
import hydrocarbon from '../assets/hydrocarbon.svg';
import { OtherButton } from '../components/OtherButton';
import InfoBox from '../components/InfoBox';
import whoWeAre from '../assets/who-we-are.svg';
import EnergyBuilder from '../assets/EnergyBuilder.svg';
import EnergyComponents from '../assets/Energy_Components.svg';
import Metis from '../assets/metis.svg';
import Call from '../assets/call.png';
import LinkedIn from '../assets/linkedin.png';
import Email from '../assets/email.png';
import footerLogo from '../assets/gses-footer.svg';

function Home() {
	return (
		<>
			<div className='home'>
				{/* <div className='header-container'>
					<img
						className='header-image'
						src={header}
						alt='gses-header'
					></img>
				</div> */}

				<div className='parallax-header'></div>

				<div className='info-boxes'>
					<InfoBox />
				</div>

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
								That's how we prepare for tomorrow: By being knowledgeable and
								highly adaptive. We are represented all over the globe and focus
								on improving your business and lowering your Total Cost of
								Ownership.
							</p>

							<p className='about-desc'>
								GSES is a world-renowned consultancy firm in the HCA domain with
								a strong ecosystem of innovative partners.
							</p>

							<br />

							<OtherButton btnText='View More' />
						</div>
					</div>
				</div>

				<div className='parallax-break'></div>

				<div className='services-container'>
					<h1 className='services-title'>Our Services</h1>

					<p className='services-desc'>
						We deliver business value by supporting our customers in controlling
						and continuously improving business processes and solutions
						architecture. We aim to deliver solutions that create single sources
						of truth for production data and a controlled and auditable business
						process and automated dataflow, against lower costs.
					</p>

					<div className='service-list'>
						<div className='service'>
							<img
								className='service-icon'
								src={businessConsulting}
								alt='Businenss Consulting'
							/>

							<h2 className='service-name'>Business Consulting</h2>

							<p className='service-info'>
								Experienced consultants who understand the industries business
								processes in detail and help to analyse and improve business
								processes and supporting solutions.
							</p>
						</div>

						<div className='service'>
							<img
								className='service-icon'
								src={projectManagement}
								alt='Project Management'
							/>

							<h2 className='service-name'>Project Management</h2>

							<p className='service-info'>
								Proven track record in worldwide implementations, no matter what
								scale or location.
							</p>
						</div>

						<div className='service'>
							<img
								className='service-icon'
								src={support}
								alt='Support and Implementation'
							/>

							<h2 className='service-name'>Support and Implementation</h2>

							<p className='service-info'>
								We implement, upgrade and support a wide range of industry
								standard solutions, including our own solution Metis.
							</p>
						</div>

						<div className='service'>
							<img
								className='service-icon'
								src={reporting}
								alt='Business Intelligence and Reporting'
							/>

							<h2 className='service-name'>
								Business Intelligence and Reporting
							</h2>

							<p className='service-info'>
								We have experience with a multitude of solutions that help
								visualise, report and analyse data.
							</p>
						</div>

						<div className='service'>
							<img
								className='service-icon'
								src={hydrocarbon}
								alt='Hydrocarbon Accounting and Dispatching Services'
							/>

							<h2 className='service-name'>
								Hydrocarbon Accounting and Dispatching Services
							</h2>

							<p className='service-info'>
								For smaller operators we offer Hydrocarbon accounting and
								Dispatching services. We run the day-to-day processes, our
								customer has continuous access to dashboards, reports and data.
							</p>
						</div>
					</div>
				</div>

				{/* <div className='parallax-break'></div>

				<div className='solutions-container'>
					<h1 className='services-title'>Our Solutions</h1>

					<p className='solutions-desc'>
						We work independent of solutions and vendors. If necessary we use a
						proven methodology to determine the best solution for each
						situation.
					</p>

					<p className='solutions-desc1'>
						We both implement as well as support Production Data Management
						solutions, if necessary 24/7.
					</p>

					<div className='solutions-box-container'>
						<div className='solutions-box-EB'>
							<div className='solutions-circle'>
								<img
									className='solutionsImg'
									src={EnergyBuilder}
									alt='EnergyBuilder Logo'
								/>
							</div>
							<div className='solutions-box-body'>
								<h1 className='solutions-box-title'>EnergyBuilder</h1>

								<p className='solutions-box-desc'>
									Off-the-shelf ready to deploy solution or customizable
									end-to-end
								</p>
								<div className='solutions-button'>
									<OtherButton btnText='View More' />
								</div>
							</div>
						</div>

						<div className='solutions-box-EC'>
							<div className='solutions-circle'>
								<img
									className='solutionsImg-EC'
									src={EnergyComponents}
									alt='EnergyBuilder Logo'
								/>
							</div>
							<div className='solutions-box-body'>
								<h1 className='solutions-box-title'>Energy Components</h1>

								<p className='solutions-box-desc'>
									Integrated hydrocarbon management solution offering
									fully-integrated functionalities.
								</p>
								<div className='solutions-button'>
									<OtherButton btnText='View More' />
								</div>
							</div>
						</div>

						<div className='solutions-box-metis'>
							<div className='solutions-circle'>
								<img
									className='solutionsImg-EC'
									src={Metis}
									alt='EnergyBuilder Logo'
								/>
							</div>
							<div className='solutions-box-body'>
								<h1 className='solutions-box-title'>Metis</h1>

								<p className='solutions-box-desc'>
									Short build and delivery times allowing for rapid delivery
									against low costs.
								</p>
								<div className='solutions-button'>
									<OtherButton btnText='View More' />
								</div>
							</div>
						</div>
					</div>
				</div> */}

				<div className='parallax-break'></div>

				<div className='partners-container'>
					<h1 className='services-title'>Our Partners</h1>

					<p className='services-desc'>
						We deliver business value by supporting our customers in controlling
						and continuously improving business processes and solutions
						architecture. We aim to deliver solutions that create single sources
						of truth for production data and a controlled and auditable business
						process and automated dataflow, against lower costs.
					</p>

					<div className='partners-list'>
						<div className='partner'>
							<img
								className='partner-icon'
								src={dataviz}
								alt='Business Intelligence and Reporting'
							/>
						</div>

						<div className='partner'>
							<img
								className='partner-icon'
								src={wipro}
								alt='Business Intelligence and Reporting'
							/>
						</div>

						<div className='partner'>
							<img
								className='partner-icon'
								src={mitacron}
								alt='Business Intelligence and Reporting'
							/>
						</div>
					</div>
				</div>

				<Footer />
			</div>
		</>
	);
}

export default Home;
