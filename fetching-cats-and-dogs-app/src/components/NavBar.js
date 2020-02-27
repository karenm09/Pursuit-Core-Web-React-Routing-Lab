import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/NavBar.css'

class NavBar extends React.Component {
    render() {
        return(
            <nav>
                <NavLink exact to ={"./"}>Home</NavLink>
                <NavLink exact to ={"./dog"}>Dog</NavLink>
                <NavLink exact to ={"./cat"}>Cat</NavLink>
            </nav>
        )
    }
}

export default NavBar;