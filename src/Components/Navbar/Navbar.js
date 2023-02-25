import React from "react"
import "./Navbar.scss"
import Button from "../Button/Button"

const Navbar = ({ navitems }) => {
    return (
        <div className="navbar">
            <nav>
                {navitems.map((item) => (
                    <li className="navitem" key={item.id}>
                        <a className="navlink" href={item.link}>
                            {item.text}
                        </a>
                    </li>
                ))}
            </nav>
            <Button text={"Contact Me"} onClick={() => console.log("TODO!")} />
        </div>
    )
}
export default Navbar
