import React from "react";

export const Title = (props) => {

    console.log(props)

    return (
        <h1 className={`text-center text-${props.color} my-2`}>{props.text}</h1>
    )
}


Title.defaultProps = {
    text: 'Titulo por defecto',
    color: 'danger'
}