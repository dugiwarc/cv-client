/** @format */

import React from "react";
import Header from "../../components/Header/Header";

import Pricing from "../../components/Pricing/Pricing";
import Order from "../../components/Order/Order";
import LandingPage from "../../components/LandingPage/LandingPage";

import "./Home.scss";

const Home = () => {
	return (
		<>
			<div className='Home'>
				<Header />
				<Pricing />
				<Order />
				<LandingPage />
			</div>
		</>
	);
};

export default Home;
