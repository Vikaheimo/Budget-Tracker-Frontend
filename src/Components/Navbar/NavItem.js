import React from "react"
import "./NavItem.scss"

const NavItem = (props) => {
    return (
        <li className="nav-item">
            <a href="#" className="nav-link">
                {props.icon}
            </a>
        </li>
    )
}
export default NavItem
