import React from "react";
import useBars from "../../components/Bars/useBars";
import useLikes from "../../components/Likes/useLikes";
import { useParams } from "react-router-dom";
import UnBar from "../Bars/UnBar";

const Barpage = props => {
	const { id } = useParams();
	const bar = props.allBarsList.find(item => item.id === id);

	return (
		<React.Fragment>
			<UnBar bar={bar}></UnBar>
		</React.Fragment>
	);
};

export default Barpage;
