import React from "react"
import "./Button.scss"
const Button = (props) => {
    return (
        <button className="Button-pushable" onClick={props.onClick}>
            <span className="Button-front ">{props.text}</span>
        </button>
    )
}

export default Button
