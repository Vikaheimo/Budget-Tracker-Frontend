import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar/Navbar"

const NAVITEMS = [
    {
        link: "/",
        text: "Home"
    },
    {
        link: "/upload",
        text: "Upload"
    },
    {
        link: "/login",
        text: "Login"
    }
]

const RootLayout = () => {
    return (
        <div className="root">
            <Navbar navitems={NAVITEMS} />
            <Outlet />
        </div>
    )
}

export default RootLayout
