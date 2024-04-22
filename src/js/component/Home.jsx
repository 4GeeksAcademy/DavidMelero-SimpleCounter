import React from "react";

import { SimpleCounter } from "./SimpleCounter";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<SimpleCounter/>
		</div>
	)
};

export default Home;