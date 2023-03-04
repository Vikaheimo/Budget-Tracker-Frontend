import React from "react"
import Button from "../Button/Button"
import "./Popup.scss"

const Popup = (props) => {
    return props.show ? (
        <div className="popup-base">
            <div className="popup-inner">
                <Button
                    text={"close"}
                    onClick={props.toggle}
                    identity={"close-button"}
                    buttonType={"secondary"}
                />
                {props.children}
            </div>
        </div>
    ) : (
        ""
    )
}

export default Popup
