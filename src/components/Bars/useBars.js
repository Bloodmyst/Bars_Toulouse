import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const useBars = () => {
	const [allBarsList, setallBarsList] = useState([]);
	// const { id } = useParams();


	
	// const barList = allBarsList.find(item => {
	// 	return item.id === id;
	// });

	useEffect(() => {
		fetch(`https://control-server.now.sh/`)
			.then(body => body.json())
			.then(response => {
				setallBarsList(response);
			});
	}, []);

	return [allBarsList];
};

export default useBars;
