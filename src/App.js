import React from "react"
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from "react-router-dom"

import RootLayout from "./Layouts/RootLayout"

// Routes
import Home from "./pages/Home"
import Login from "./pages/Login"
import Upload from "./pages/Upload"

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
    return <RouterProvider router={router} />
}

export default App
