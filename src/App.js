import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { useParams } from "react-router-dom";

import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Pages/Home";
import Me from "./components/Pages/Me";
import useBars from "./components/Bars/useBars";
import useLikes from "./components/Likes/useLikes";
import addLike from "./components/Likes/Likes";
import BarPage from "./components/Pages/BarPage";

function App() {
	const [allBarsList] = useBars();
	const [likes, setLikes] = useLikes();

	//Pour envoyer sur un serveur pour stocker les likes, voir la partie serveur
	// const addLikes = id => {
	// 	fetch("https://control-server.now.sh/Likes", {
	// 		method: "POST",
	// 		headers: {
	// 			"Content-Type": "application/json"
	// 		},
	// 		body: JSON.stringify({ id })
	// 	})
	// 		.then(body => body.json())
	// 		.then(response => {
	// 			setBars(response);
	// 		});
	// };

	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route path="/" exact>
					<Home
						allBarsList={allBarsList}
						likes={likes}
						setLikes={setLikes}
						useLikes={useLikes}
					/>
				</Route>
				<Route path="/me" exact>
					<Me />
				</Route>
				<Route path="/bar/:id" exact>
					<BarPage
						allBarsList={allBarsList}
						likes={likes}
						setLikes={setLikes}
						useLikes={useLikes}
					/>
				</Route>
			</Switch>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
