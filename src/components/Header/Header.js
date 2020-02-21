import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div>
			<nav>
				<span >
					<Link to="/" className="header">Home</Link>
				</span>
				<span>
					<Link to="/Me" className="header">Me</Link>
				</span>
			</nav>
		</div>
	);
};

export default Header;
