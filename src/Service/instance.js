import axios from "axios"

const backendConfig = {
    baseURL: "/api",
    timeout: 3000
}

if (process.env.NODE_ENV !== "production") {
    backendConfig.baseURL = "http://localhost:3001/api"
}

const backendAPI = axios.create(backendConfig)

export default backendAPI
