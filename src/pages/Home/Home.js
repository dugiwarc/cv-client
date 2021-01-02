/** @format */

import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Spinner from "../../components/Spinner/Spinner";

import Pricing from "../../components/Pricing/Pricing";
import Order from "../../components/Order/Order";
import LandingPage from "../../components/LandingPage/LandingPage";

import "./Home.scss";

const Home = () => {
	const [hasLoaded, setLoaded] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setLoaded(true);
		}, 900);
	}, []);

	return (
		<>
			{hasLoaded ? (
				<div className='Home'>
					<Header />
					<Pricing />
					<Order />
					<LandingPage />
				</div>
			) : (
				<Spinner />
			)}
		</>
	);
};

export default Home;
