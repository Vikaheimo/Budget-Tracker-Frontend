import React from "react"
import "./Fileinput.scss"

const Fileinput = ({ onSubmitFunction }) => {
    const handlesubmit = (event) => {
        event.preventDefault()
        const files = event.target.files

        // Drop empty submits
        if (!files) {
            return
        }
        onSubmitFunction(files)
    }
    return (
        <label htmlFor="fileinput" className="drop-container">
            <span className="drop-title">Drop files here</span>
            or
            <input
                type="file"
                id="fileinput"
                accept="*.csv"
                required
                multiple
                onChange={handlesubmit}
            />
        </label>
    )
}

export default Fileinput
