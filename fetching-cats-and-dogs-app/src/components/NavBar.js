import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/NavBar.css'

class NavBar extends React.Component {
    render() {
        return(
            <nav>
                <NavLink exact to ={"/"} className="home">Home</NavLink>
                <NavLink exact to ={"/dog/random"} className="dog">Random Dog</NavLink>
                <NavLink exact to ={"/dog/random/:num"} className="multipleDogs">Multiple Dogs</NavLink>
                <NavLink exact to ={"/cat/random"} className={"cat"}>Random Cat</NavLink>
                <NavLink exact to ={"/cat/random/:num"} className={"multipleCats"}>Multiple Cats</NavLink>
            </nav>
        )
    }
}

export default NavBar;