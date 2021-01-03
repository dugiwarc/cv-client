/** @format */

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home/Home";
import NotFound from "./components/NotFound/NotFound";

const App = () => {
	return (
		<div className='App'>
			<Router>
				<Route exact path='/' component={Home} />
				<Route component={NotFound} />
			</Router>
		</div>
	);
};

export default App;
