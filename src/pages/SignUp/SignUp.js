import React, { useState } from "react"
import backendAPI from "../../Service/instance"
import TextInput from "../../Components/Textinput/Textinput"
import Button from "../../Components/Button/Button"

import "./SignUp.scss"

const SignUp = ({ setToken }) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const hasEmpty = () => {
        return username.length === 0 || password.length === 0 || email.length
    }

    const handlesubmit = (event) => {
        event.preventDefault()
        if (hasEmpty()) {
            return
        }
        backendAPI
            .post("signup", {
                username: username,
                password: password,
                email: email
            })
            .then((res) => {
                setToken(res.data.token)
                window.localStorage.setItem(
                    "loggedBudgetTrackerToken",
                    res.data.token
                )
            })
            .catch((err) => {
                // this handles bad / malformed requests
                if (err.response && err.response.status === 403) {
                    // todo
                } else {
                    // todo
                }
            })
    }

    return (
        <div className="signup">
            <form onSubmit={handlesubmit}>
                <div className="top-text">Sign Up</div>
                <div className="signupfield">
                    <TextInput
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        id="email"
                        type="text"
                        value={email}
                        placeholder="Email"
                    />
                </div>
                <div className="signupfield">
                    <TextInput
                        onChange={(e) => setUsername(e.target.value)}
                        id="username"
                        type="text"
                        value={username}
                        placeholder="Username"
                    />
                </div>
                <div className="signupfield">
                    <TextInput
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        id="password"
                        type="password"
                        value={password}
                        placeholder="Password"
                    />
                </div>
                <Button
                    text={"Create account"}
                    type={"submitform"}
                    divId={"full-size"}
                />
                <div className="create-account-helper">
                    <div>Already have an account?</div>
                    <a href="/login">Sign in</a>
                </div>
            </form>
        </div>
    )
}

export default SignUp
