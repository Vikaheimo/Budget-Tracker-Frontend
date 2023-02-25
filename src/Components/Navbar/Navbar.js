import React from "react"
import Button from "../Button/Button"
import { NavLink } from "react-router-dom"
import { nanoid } from "nanoid"

import "./Navbar.scss"

const Navbar = ({ navitems }) => {
    return (
        <div className="navbar">
            <nav>
                {navitems.map((item) => (
                    <li className="navitem" key={nanoid()}>
                        <NavLink className="navlink" to={item.link}>
                            {item.text}
                        </NavLink>
                    </li>
                ))}
            </nav>
            <Button text={"Contact Me"} onClick={() => console.log("TODO!")} />
        </div>
    )
}
export default Navbar
