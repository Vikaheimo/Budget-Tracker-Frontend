import React, { useEffect } from "react"

const Logout = () => {
    useEffect(() => {
        if (!window.localStorage.getItem("loggedBudgetTrackerToken")) {
            return
        }
        window.localStorage.removeItem("loggedBudgetTrackerToken")
        window.location.reload()
    })
    return <></>
}

export default Logout
