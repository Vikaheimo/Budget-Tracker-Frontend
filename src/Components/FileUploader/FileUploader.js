import React, { useState } from "react"
import Button from "../Button/Button"
import backendAPI from "../../Service/instance"

import "./FileUploader.scss"

const FileUploader = () => {
    const [file, setFile] = useState(null)

    const handleFileInput = (event) => {
        if (!event.target.files) return

        setFile(event.target.files[0])
    }

    const uploadfile = () => {
        if (!file) return
        backendAPI.post("data/upload", { file: file }).catch(() => {
            //todo!
        })
    }

    return (
        <div className="file-uploader">
            <input
                type={"file"}
                onChange={handleFileInput}
                id="fileupload-field"
                accept=".csv"
            />
            <Button
                text={"Upload"}
                onClick={uploadfile}
                buttonType={"secondary"}
            />
        </div>
    )
}

export default FileUploader
