import React from "react"
import Fileinput from "../../Components/Fileinput/Fileinput"
import "./Upload.scss"
import backendAPI from "../../Service/instance"

const Upload = () => {
    const uploadfile = (file) => {
        // TODO!
        backendAPI
            .post("data/upload", { file: file })
            .then(() => {
                // Add clue to user that input was succesfull
            })
            .catch((err) => {
                // this handles bad / malformed requests
                if (!err.response) {
                    // server offline
                }
            })
    }
    return (
        <div className="upload-page-outer">
            <p className="info-text">
                Please selct a file to upload. The file has to be of CSV format.
                Examples can be found <a href="/api/file-examples">here</a>.
            </p>
            <Fileinput
                accept={".csv"}
                onSubmitFunction={(file) => uploadfile(file)}
            />
        </div>
    )
}

export default Upload
