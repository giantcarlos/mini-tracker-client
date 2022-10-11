import React from 'react'
import { NavLink } from 'react-router-dom';

function MiniatureCard({ miniature }) {
  return (
     <NavLink to={`/miniatures/${miniature.id}`}>
        <div className="card">
            <div className="card-image">
                <img src={miniature.img_url} alt="cover"/>
            </div>
            <div className="card-name">{miniature.name}</div>
        </div>
    </NavLink>
  )
}

export default MiniatureCard