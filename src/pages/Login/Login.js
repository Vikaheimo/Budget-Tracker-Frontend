import React, { useState } from "react"
import Button from "../../Components/Button/Button"
import backendAPI from "../../Service/instance"

import "./Login.scss"
const Login = ({ setToken }) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loginStatus, setLoginStatus] = useState("")

    const isValidForm = () => {
        return username.length > 0 && password.length > 0
    }

    const handlesubmit = (event) => {
        event.preventDefault()
        if (!isValidForm()) {
            setLoginStatus("Login fields cannot be empty!")
            return
        }
        backendAPI
            .post("login")
            .then((res) => {})
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className="login">
            <form onSubmit={handlesubmit}>
                <div className="loginfield">
                    <label htmlFor="username">Username</label>
                    <input
                        onChange={(e) => setUsername(e.target.value)}
                        id="username"
                        type="text"
                        value={username}
                    />
                </div>
                <div className="loginfield">
                    <label htmlFor="password">Password</label>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        id="password"
                        type="password"
                        value={password}
                    />
                </div>
                <div className="loginstatus">
                    <div className="status-text">{loginStatus}</div>
                    <Button text={"Login"} type={"submitform"} />
                </div>
            </form>
        </div>
    )
}

export default Login
