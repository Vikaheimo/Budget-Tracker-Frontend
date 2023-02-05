import React from "react"
import "./NavItem.scss"

const NavItem = (props) => {
    return (
        <li className="nav-item">
            <a href={props.link ? props.link : "#"} className="nav-link">
                {props.text}
            </a>
        </li>
    )
}
export default NavItem
