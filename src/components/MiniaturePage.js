import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function MiniaturePage() {
    const [ miniature, miniatureSet ] = useState({});
    const { id } = useParams();

    useEffect (() => {
        fetch(`http://localhost:9292/miniatures/${id}`)
        .then(res => res.json())
        .then(data => miniatureSet(data))
        }, [])

  return (
    <div className="mini-container">
        <div className="mini-image">
             <img src={miniature.img_url} alt="Photo needed."/>
        </div>
        <h2>{ miniature.name }</h2>
        <div className="mini-details">
            <p>Rarity: {miniature.rarity}</p>
            <p>Size: {miniature.size}</p>
            <p className="set-link">Set: 
                <Link to={`/sets/${miniature.miniature_set?.id}`}> {miniature.miniature_set?.name}</Link>
            </p>
            <p>Release date: {miniature.miniature_set?.year}</p>
            <p>Number of units in collection: {miniature.units}</p>
        </div>
    </div>
  )
}

export default MiniaturePage