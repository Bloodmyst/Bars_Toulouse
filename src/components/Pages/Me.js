import React, { useEffect, useState } from "react";

const DescripMe = () => {
	const [bioMe, setBioMe] = useState();
	const [isLoading, setIsloading] = useState(true);

	useEffect(() => {
		fetch(`https://control-server.now.sh/me`)
			.then(body => body.json())
			.then(response => {
				setBioMe(response);
			})
			.finally(() => {
				setIsloading(false);
			});
	}, []);
	return [bioMe];
};

const Me = () => {
	const [bioMe] = DescripMe();
	return (
		<div>
			<h1 className="me-header">A props 2 moi</h1>
			<div className="me-content">{bioMe}</div>
		</div>
	);
};

export default Me;
