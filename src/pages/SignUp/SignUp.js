import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import backendAPI from "../../Service/instance"
import TextInput from "../../Components/Textinput/Textinput"
import Button from "../../Components/Button/Button"

import "./SignUp.scss"

const SignUp = ({ setToken }) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const { t } = useTranslation()

    const hasEmpty = () => {
        return (
            username.length === 0 || password.length === 0 || email.length === 0
        )
    }

    const handlesubmit = (event) => {
        event.preventDefault()
        if (hasEmpty()) {
            return
        }
        backendAPI
            .post("user/signup", {
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
                window.location.href = "/"
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
                        placeholder={t("email")}
                    />
                </div>
                <div className="signupfield">
                    <TextInput
                        onChange={(e) => setUsername(e.target.value)}
                        id="username"
                        type="text"
                        value={username}
                        placeholder={t("username")}
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
                        placeholder={t("password")}
                    />
                </div>
                <Button
                    text={t("create-account")}
                    type={"submitform"}
                    divId={"full-size"}
                />
                <div className="create-account-helper">
                    <div>{t("have-account-helper-text")}</div>
                    <a href="/login">{t("login")}</a>
                </div>
            </form>
        </div>
    )
}

export default SignUp
