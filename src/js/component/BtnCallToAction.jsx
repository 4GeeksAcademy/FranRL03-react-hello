import React from "react";

export const BtnCallToAction = () => {

    const handleClick = () => {
        alert("presiono el boton")
    }
    const action = {
        text: 'Regístrate',
        background: 'warning'
    }

    return (
        <button className={`btn btn-${action.background} px-5 mb-5`} 
        type="button"  onClick={handleClick}>

            {action.text}
        </button >
    )
}