import React from "react";

const UnBar = props => {
	if (!props.bar || !props.bar) {
		return (
			<div className="loader">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
		);
	}
	return (
		<React.Fragment>
			<div className="main-content div-name">
				<h3 key="{props.bar.id}"></h3>
				<h1>{props.bar.title}</h1>
				<h3>{props.bar.address}</h3>
				<p className="bar-content">{props.bar.description}</p>
				<a href="#" href="#">
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					{`Likes  ${props.bar.nbLike}`}
				</a>
			</div>
			;
		</React.Fragment>
	);
};

export default UnBar;
