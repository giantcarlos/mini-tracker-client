import React from 'react';
import { NavLink } from 'react-router-dom';

function SetCard({ set }) {
  return (
    <div>
        <NavLink to={`/sets/${set.id}`}>{ set.name }</NavLink>
    </div>
  )
}

export default SetCard