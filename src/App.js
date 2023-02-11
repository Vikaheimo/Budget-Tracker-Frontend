import React from "react"
import Navbar from "./Components/Navbar/Navbar"
import NavItem from "./Components/Navbar/NavItem"
import Button from "./Components/Button/Button"
import FileUploader from "./Components/FileUploader/FileUploader"
import Expenses from "./Service/Expenses"
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
            <Button text={"kissa"} onClick={() => console.log("Kissa")} />
            <FileUploader text={"kissa koira"} submitFile={Expenses.update} />
        </div>
    )
}

export default App
