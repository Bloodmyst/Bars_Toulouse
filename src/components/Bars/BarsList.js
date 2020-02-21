import React from "react";
import { Link } from "react-router-dom";

import Bar from "../Pages/Bar";

const BarsList = props => {
	if (!props.allBarsList || !props.allBarsList) {
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
		<div>
			<React.Fragment>
				<ul key="{props.allBarsList.id}">
					{props.allBarsList.map(item => {
						return (
							<Bar
								id={item.id}
								title={item.title}
								address={item.address}
								description={item.description}
								nbLike={item.nbLike}
							/>
						);
					})}
				</ul>
			</React.Fragment>
		</div>
	);
};
export default BarsList;
