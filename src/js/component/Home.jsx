import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar"; //componente con export default
import { Footer } from "./Footer"; //componente con export const
import { Jumbotron } from "./Jumbotron";
import { Alert } from "./Alert";
import { Spinner } from "./Spinner";
import { Card } from "./Card";
import { Title } from "./Title";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			
			<Navbar />

			<Alert />

			<Spinner />

			<Title />
			<Title text= 'Subtitulo'/>
			<Title text= 'otro titulo' color= 'success'/>

			{/* <h1 className="text-center mt-2">Intro React</h1> */}

			<Card />
			<Card title= "Dog" imageUrl= "https://plus.unsplash.com/premium_photo-1694819488591-a43907d1c5cc?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D"/>
			{/* <Jumbotron /> */}
			{/* <p>
				<img src={rigoImage} />
			</p> */}

			<Footer />

		</div>
	);
};

export default Home;
