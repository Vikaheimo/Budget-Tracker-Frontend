import React, { useState } from "react"
import { Form } from "react-router-dom"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const validateForm = () => {
        return email.length > 0 && password.length > 0
    }

    const handlesubmit = (event) => {
        console.log(event)
    }

    return (
        <div className="Login">
            <Form onSubmit={handlesubmit}>
                <label>Name:</label>
            </Form>
        </div>
    )
}

export default Login
