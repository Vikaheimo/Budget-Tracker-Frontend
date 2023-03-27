import React from "react"
import "./TextInput.scss"

const TextInput = (props) => {
    return (
        <input
            className="rounded-corners-gradient-borders"
            onChange={props.onChange}
            id={props.id || ""}
            type={props.type || "text"}
            value={props.value || ""}
            placeholder={props.placeholder || ""}
        />
    )
}

export default TextInput
