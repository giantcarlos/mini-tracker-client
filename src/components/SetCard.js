import React from 'react';
import { Link } from 'react-router-dom';

function SetCard({ set }) {
  return (
    <div>
        <Link to={`/sets/${set.id}`}>{ set.name }</Link>
    </div>
  )
}

export default SetCard