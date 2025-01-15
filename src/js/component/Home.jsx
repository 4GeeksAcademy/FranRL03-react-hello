import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar"; //componente con export default
import { Footer } from "./Footer"; //componente con export const
import { Jumbotron } from "./Jumbotron";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			
			<Navbar />

			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<Jumbotron />
			{/* <p>
				<img src={rigoImage} />
			</p> */}

			<Footer />

		</div>
	);
};

export default Home;
