import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar/Navbar"
import "./RootLayout.scss"
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
        link: "/logout",
        text: "Logout"
    }
]

const RootLayout = () => {
    return (
        <div className="root">
            <Navbar navitems={NAVITEMS} />
            <div className="content">
                <Outlet />
            </div>
        </div>
    )
}

export default RootLayout
