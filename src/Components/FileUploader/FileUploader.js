import React, { useState } from "react"
import Button from "../Button/Button"

import "./FileUploader.scss"

const FileUploader = (props) => {
    const [file, setFile] = useState(null)

    const handleFileInput = (event) => {
        if (!event.target.files) return
        setFile(event.target.files[0])
        props.submitFile(event.target.files[0])
    }

    return (
        <div className="file-uploader">
            <div>Upload a file:</div>
            <input type={"file"} onChange={handleFileInput} />
            <Button text={"Upload"} />
        </div>
    )
}

export default FileUploader
