import React from "react";

const addLike = props => {
	return (
		<span>
			<a
				href="#"
				onClick={() => {
					props.setLikes(props.likes + 1);
				}}
			>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				{`Liker  ${props.likes}`}
			</a>
		</span>
	);
};

export default addLike;
