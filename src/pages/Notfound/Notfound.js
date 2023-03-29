import React from "react"
import { useTranslation } from "react-i18next"
import "./Notfound.scss"
const Notfound = () => {
    const { t } = useTranslation()
    return (
        <div className="not-found-outer">
            {t("page-not-found")}
            <img
                src={require("../../Images/mogus.gif")}
                alt={t("loading")}
                className="not-found-image"
            />
        </div>
    )
}

export default Notfound
