import React from "react"
import Navbar from "./Components/Navbar/Navbar"
import NavItem from "./Components/Navbar/NavItem"
import "./App.scss"

const App = () => {
    return (
        <div className="root">
            <Navbar>
                <NavItem icon={"Link somewhere"} />
                <NavItem icon={"Link somewhere"} />
                <NavItem icon={"Link somewhere"} />
                <NavItem icon={"Link somewhere"} />
            </Navbar>
            <h1>Hello world! I am using React</h1>
        </div>
    )
}

export default App
