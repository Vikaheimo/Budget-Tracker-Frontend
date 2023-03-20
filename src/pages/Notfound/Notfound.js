import React from "react"
import "./Notfound.scss"
const Notfound = () => {
    return (
        <div className="not-found-outer">
            The page you reguested for cannot be found!
            <img
                src={require("../../Images/mogus.gif")}
                alt="loading..."
                className="not-found-image"
            />
        </div>
    )
}

export default Notfound
