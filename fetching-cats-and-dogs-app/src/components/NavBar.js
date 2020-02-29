import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/NavBar.css'

class NavBar extends React.Component {
    render() {
        return(
            <nav>
                <NavLink exact to ={"/"} className="home">Home</NavLink>
                <NavLink exact to ={"/dog/random"} className="dog">Dog</NavLink>
                <NavLink exact to ={"/cat/random"} className={"cat"}>Cat</NavLink>
            </nav>
        )
    }
}

export default NavBar;