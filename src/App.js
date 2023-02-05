import React from "react"
import Navbar from "./Components/Navbar/Navbar"
import NavItem from "./Components/Navbar/NavItem"
import Button from "./Components/Button/Button"
import "./App.scss"

const App = () => {
    return (
        <div className="root">
            <Navbar>
                <NavItem text={"Link somewhere"} />
                <NavItem text={"Link somewhere"} />
                <NavItem text={"Link somewhere"} />
                <NavItem text={"Link somewhere"} />
            </Navbar>
            <Button text={"kissa"} onClick={() => console.log("kissa")} />
        </div>
    )
}

export default App
