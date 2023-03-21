import React from "react"
import Fileuploader from "../../Components/FileUploader/FileUploader"
import "./Upload.scss"

const Upload = () => {
    return (
        <div className="upload-page-outer">
            <div className="info-text">
                Please selct a file to upload. The file has to be of CSV format.
                Examples can be found <a href="/api/file-examples">here</a>.
            </div>
            <Fileuploader />
        </div>
    )
}

export default Upload
