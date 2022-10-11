import React from 'react'
import { NavLink } from 'react-router-dom';

function MiniatureCard({ miniature }) {
  return (
    <li>
        <NavLink to={`/miniatures/${miniature.id}`}>{ miniature.name }</NavLink>
    </li>
  )
}

export default MiniatureCard