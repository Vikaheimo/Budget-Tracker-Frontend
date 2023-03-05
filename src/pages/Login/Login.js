import React, { useState } from "react"
import Button from "../../Components/Button/Button"
import Signup from "../../Components/Signup/Signup"
import backendAPI from "../../Service/instance"

import "./Login.scss"
const Login = ({ setToken }) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loginStatus, setLoginStatus] = useState("")
    const [show, setShow] = useState(false)

    const togglePopup = () => {
        setShow(!show)
    }

    const hasEmpty = () => {
        return username.length === 0 || password.length === 0
    }

    const handlesubmit = (event) => {
        event.preventDefault()
        if (hasEmpty()) {
            setLoginStatus("Login fields cannot be empty!")
            return
        }
        backendAPI
            .post("user/login", { username: username, password: password })
            .then((res) => {
                setToken(res.data.token)
                window.localStorage.setItem(
                    "loggedBudgetTrackerToken",
                    res.data.token
                )
            })
            .catch((err) => {
                // this handles invalid credentials
                if (err.response && err.response.status === 403) {
                    setLoginStatus(err.response.data.error)
                } else {
                    setLoginStatus("Serverside Error")
                }
            })
    }

    return (
        <div>
            <Signup show={show} toggle={togglePopup} setToken={setToken} />
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
                    <div className="login-buttons">
                        <a onClick={togglePopup}>Create Account</a>
                        <Button text={"Login"} type={"submitform"} />
                    </div>
                    <div className="infotext">
                        <small>{loginStatus}</small>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
