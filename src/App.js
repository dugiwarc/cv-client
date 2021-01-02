/** @format */

import React from "react";
import NotFound from "./components/NotFound/NotFound";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home/Home";
import Planets from "./pages/Planets/Planets";

const App = () => {
	return (
		<div className='App'>
			<Router>
				<Route exact path='/' component={Home} />
				<Route exact path='/planets' component={Planets} />
			</Router>
		</div>
	);
};

export default App;
