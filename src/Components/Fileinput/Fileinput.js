import React from "react"
import { useTranslation } from "react-i18next"
import "./Fileinput.scss"

const Fileinput = ({ onSubmitFunction, accept }) => {
    const { t } = useTranslation()

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
            <span className="drop-title">{t("drop-files-here")}</span>
            {t("or")}
            <input
                type="file"
                id="fileinput"
                accept={accept || ""}
                required
                multiple
                onChange={handlesubmit}
            />
        </label>
    )
}

export default Fileinput
