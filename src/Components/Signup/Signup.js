import React, { useState } from "react"
import "./Signup.scss"
import Popup from "../Popup/Popup"
import Button from "../Button/Button"
import backendAPI from "../../Service/instance"

const Signup = (props) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const [signupStatus, setSignupStatus] = useState("")

    const hasNoEmpty = () => {
        return username.length > 0 && password.length > 0 && email.length > 0
    }

    const handlesubmit = (event) => {
        event.preventDefault()

        if (!hasNoEmpty()) {
            setSignupStatus("No empty fields allowed!")
            return
        } else if (!email.includes("@")) {
            setSignupStatus("Email address needs an '@' symbol!")
            return
        }

        backendAPI
            .post("user/signup", {
                username: username,
                password: password,
                email: email
            })
            .then((res) => {
                props.setToken(res.data.token)
            })
            .catch((err) => {
                // this handles invalid credentials
                if (err.response && err.response.status === 403) {
                    setSignupStatus(err.response.data.error)
                } else {
                    setSignupStatus("Server error")
                }
            })
    }

    return (
        <div className="signup">
            <Popup show={props.show} toggle={props.toggle}>
                <form onSubmit={handlesubmit}>
                    <div className="signupfield">
                        <label htmlFor="username">Username</label>
                        <input
                            onChange={(e) => setUsername(e.target.value)}
                            id="username"
                            type="text"
                            value={username}
                        />
                    </div>
                    <div className="signupfield">
                        <label htmlFor="email">Email</label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            id="email"
                            type="text"
                            value={email}
                        />
                    </div>
                    <div className="signupfield">
                        <label htmlFor="password">Password</label>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            id="password"
                            type="password"
                            value={password}
                        />
                    </div>
                    <div className="signup-info">
                        <div className="status-text">{signupStatus}</div>
                        <Button text={"Sign Up"} type={"submitform"} />
                    </div>
                </form>
            </Popup>
        </div>
    )
}

export default Signup
