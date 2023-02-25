import React, { useState } from "react"
import axios from "axios"
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from "react-router-dom"

import RootLayout from "./Layouts/RootLayout"

// Routes
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import Upload from "./pages/Upload/Upload"

import "./App.scss"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/upload" element={<Upload />} />
        </Route>
    )
)

//<Navbar navitems={routes} />
const App = () => {
    const [token, setToken] = useState()

    if (!token) {
        return <Login setToken={setToken} />
    }
    return <RouterProvider router={router} />
}

export default App
