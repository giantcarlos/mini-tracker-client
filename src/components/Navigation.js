import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
    return (
        <nav>
            <div className="site-title">MINIATURE TRACKER</div>
            <NavLink exact to="/">Home</NavLink>
            <NavLink exact to="/sets">Sets</NavLink>
            <NavLink exact to="/miniatures">Miniatures</NavLink>
        </nav>
    )
}

export default Navigation;