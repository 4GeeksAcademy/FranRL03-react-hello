import React from "react";
import logo from "../../img/rigo-baby.jpg";
import { Title } from "./Title";

export const Card = (props) => {

    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={props.imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href="#" className="btn btn-primary">{props.textButtom}</a>
            </div>
        </div>
    )
}

Card.defaultProps = {
    title: 'Title',
    description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
    textButtom: 'Learn more',
    imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*'
}
