import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
    return (
        <nav>
            <div className="site-title">MINIATURE TRACKER</div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/sets">Sets</NavLink>
            <NavLink to="/miniatures">Miniatures</NavLink>
        </nav>
    )
}

export default Navigation;