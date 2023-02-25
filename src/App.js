import React from "react"
import Navbar from "./Components/Navbar/Navbar"
import Button from "./Components/Button/Button"
import FileUploader from "./Components/FileUploader/FileUploader"
import Expenses from "./Service/Expenses"
import "./App.scss"

const NAVITEMS = [
    {
        id: 1,
        link: "#",
        text: "Link To 1"
    },
    {
        id: 2,
        link: "#",
        text: "Link To 2"
    },
    {
        id: 3,
        link: "#",
        text: "Link To 3"
    }
]

const App = () => {
    return (
        <div className="root">
            <Navbar navitems={NAVITEMS} />
        </div>
    )
}
/*
            <Button text={"kissa"} onClick={() => console.log("Kissa")} />
            <FileUploader text={"kissa koira"} submitFile={Expenses.update} />
*/

export default App
