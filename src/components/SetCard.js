import React from 'react';
import { NavLink } from 'react-router-dom';

function SetCard({ set }) {
  return (
    <li>
        <NavLink to={`/sets/${set.id}`}>{ set.name }</NavLink>
    </li>
  )
}

export default SetCard