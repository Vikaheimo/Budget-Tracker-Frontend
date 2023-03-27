import React from "react"
import "./Button.scss"
const Button = (props) => {
    return (
        <div className={"default-button"} id={props.divId}>
            <button
                id={props.identity}
                className="button-pushable"
                onClick={props.onClick}
                type={props.type}
            >
                {props.text}
            </button>
        </div>
    )
}

export default Button
