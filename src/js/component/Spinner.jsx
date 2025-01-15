import React from "react";

export const Spinner = () => {

    const spinner = {
        style: 'danger',
        visible: false
    }

    return (
        <div classNameName="container">
            <div className={`spinner-border text-${spinner.style} ${spinner.visible ? '' : 'd-none'}`} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}