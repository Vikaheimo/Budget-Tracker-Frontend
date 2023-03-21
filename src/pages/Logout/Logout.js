import React, { useEffect } from "react"

const Logout = () => {
    useEffect(() => {
        if (window.localStorage.getItem("loggedBudgetTrackerToken")) {
            window.localStorage.removeItem("loggedBudgetTrackerToken")
        }
        document.location.href = "/"
    })
    return <></>
}

export default Logout
