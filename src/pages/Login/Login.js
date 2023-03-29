import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import Button from "../../Components/Button/Button"
import backendAPI from "../../Service/instance"
import TextInput from "../../Components/Textinput/Textinput"

import "./Login.scss"

const Login = ({ setToken }) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const { t } = useTranslation()

    const hasEmpty = () => {
        return username.length === 0 || password.length === 0
    }

    const handlesubmit = (event) => {
        event.preventDefault()
        if (hasEmpty()) {
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
                window.location.href = "/"
            })
            .catch((err) => {
                // this handles invalid credentials
                if (err.response && err.response.status === 403) {
                    // todo
                } else {
                    // todo
                }
            })
    }

    return (
        <div className="login">
            <form onSubmit={handlesubmit}>
                <div className="top-text">{t("sign-in")}</div>
                <div className="loginfield">
                    <TextInput
                        onChange={(e) => setUsername(e.target.value)}
                        id="username"
                        type="text"
                        value={username}
                        placeholder={t("username")}
                    />
                </div>
                <div className="loginfield">
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
                    text={t("login")}
                    type={"submitform"}
                    divId={"full-size"}
                />
                <div className="create-account-helper">
                    <div>{t("no-account-helper-text")}</div>
                    <a href="/signup">{t("sign-up")}</a>
                </div>
            </form>
        </div>
    )
}

export default Login
