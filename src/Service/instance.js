import axios from "axios"

const backendConfig = {
    baseURL: "/api",
    timeout: 3000
}

// Handles bearer tokens when logged in
const loggedUserToken = window.localStorage.getItem("loggedBudgetTrackerToken")
if (loggedUserToken) {
    backendConfig.headers = { bearer: loggedUserToken }
}

if (process.env.NODE_ENV !== "production") {
    backendConfig.baseURL = "http://localhost:8000/api"
}

const backendAPI = axios.create(backendConfig)

export default backendAPI
