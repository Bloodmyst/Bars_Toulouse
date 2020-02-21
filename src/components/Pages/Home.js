import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import BarsList from "../Bars/BarsList";

const Home = props => {
	//   const DisplayText = () => {
	//     if (!barslist) {

	//   }
	// }

	return (
		<main>
			<div className="home-title">Les Meilleurs Bars de Toulouse</div>
			<BarsList allBarsList={props.allBarsList} />
		</main>
	);
};

export default Home;
