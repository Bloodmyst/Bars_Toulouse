import React, { useState, useEffect } from "react";

//faire comme pour la quantité dans l'autre exos on stocke les like dans l'objet du bar

const useLikes = () => {
	const [likes, setLikes] = useState(0);
	useEffect(() => {
		setLikes(likes + 1);
	}, 0);
	return [likes, setLikes];
};

export default useLikes;
