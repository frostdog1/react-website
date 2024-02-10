import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Services from './pages/Services';
import EnergyBuilder from './pages/EnergyBuilder';
import EnergyComponents from './pages/EnergyComponents';
import Metis from './pages/Metis';
import Contact from './pages/Contact';

function App() {
	let component;
	switch (window.location.pathname) {
		case '/':
			component = <Home />;
			break;
		case '/solutions':
			component = <Solutions />;
			break;
		case '/energybuilder':
			component = <EnergyBuilder />;
			break;
		case '/energycomponents':
			component = <EnergyComponents />;
			break;
		case '/metis':
			component = <Metis />;
			break;
		case '/services':
			component = <Services />;
			break;
		case '/contact':
			component = <Contact />;
			break;
	}
	return (
		<>
			<Navbar />
			{component}
		</>
	);
	// <Router>
	//
	// 	<Routes>
	// 		<Route
	// 			path='/'
	// 			exact
	// 			component={Home}
	// 		/>
	// 		<Route
	// 			path='/solutions'
	// 			exact
	// 			component={Solutions}
	// 		/>
	// 		<Route
	// 			path='/services'
	// 			exact
	// 			component={Services}
	// 		/>
	// 		<Route
	// 			path='/energybuilder'
	// 			exact
	// 			component={EnergyBuilder}
	// 		/>
	// 		<Route
	// 			path='/energycomponents'
	// 			exact
	// 			component={EnergyComponents}
	// 		/>
	// 		<Route
	// 			path='/metis'
	// 			component={Metis}
	// 		/>
	// 		<Route
	// 			path='/contact'
	// 			exact
	// 			component={Contact}
	// 		/>
	// 	</Routes>
	// </Router>
}

export default App;
