import React from "react"
import "./Button.scss"
const Button = (props) => {
    return (
        <button
            id={props.identity}
            className={`Button-pushable ${
                props.buttonType ? props.buttonType : ""
            }`}
            onClick={props.onClick}
            type={props.type}
        >
            <span
                className={`Button-front ${
                    props.buttonType ? props.buttonType : ""
                }`}
            >
                {props.text}
            </span>
        </button>
    )
}

export default Button
