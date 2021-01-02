/** @format */

import React from "react";
import NotFound from "./components/NotFound/NotFound";
import { Route, Switch } from "react-router-dom";

// Pages
import Home from "./pages/Home/Home";
import Planets from "./pages/Planets/Planets";

const App = () => {
	return (
		<div className='App'>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/planets' component={Planets} />
				<Route render={() => <NotFound />} />
			</Switch>
		</div>
	);
};

export default App;
