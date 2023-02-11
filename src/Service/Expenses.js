import axios from "axios"

const baseURL =
    process.env.NODE_ENV == "production"
        ? "/api/"
        : "http://localhost:3001/api/"
const backendAPI = axios.create({
    baseURL: baseURL,
    timeout: 2000
})

const getAll = () => {
    console.log("getall: TODO!")
}

const create = () => {
    console.log("create: TODO!")
}

const update = () => {
    console.log("update: TODO!")
}

export default { getAll, create, update }
