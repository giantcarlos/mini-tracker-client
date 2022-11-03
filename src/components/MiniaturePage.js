import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

function MiniaturePage({ miniatures, setMiniatures, sets, setSets }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const miniature = miniatures.find(mini => mini.id===parseInt(id))
    const set = sets.find(s => s.id===parseInt(miniature?.miniature_set_id))

    const handleDelete = () => {
        fetch(`http://localhost:9292/miniatures/${id}`, 
            { method: "DELETE" })
        .then(() => removeMiniature(id))
        .then(() => navigate(`/sets/${miniature.miniature_set_id}`));
    }

    const removeMiniature = id => {
        setMiniatures(miniatures.filter(mini => mini.id !=id));
        const updatedSet = {...set, miniatures: [...(set.miniatures.filter(mini => mini.id !=id))]};
        setSets(sets.map(s => s.id===updatedSet.id ? updatedSet : s));
    }

  return (
    <div className="mini-container">
        <div className="mini-image">
             <img src={miniature?.img_url} alt=""/>
        </div>
        <h2>{ miniature?.name }</h2>
        <div className="mini-details">
            <p>Rarity: {miniature?.rarity}</p>
            <p>Size: {miniature?.size}</p>
            <p className="set-link">Set: 
                <Link to={`/sets/${miniature?.miniature_set_id}`}> {set?.name}</Link>
            </p>
            <p>Release date: {set?.year}</p>
            <p>Number of units in collection: {miniature?.units}</p>
            <Link to={`/miniatures/${id}/edit`}>
                <button className="mini-btn">Edit Miniature</button>
            </Link>
            <button className="mini-btn" onClick={handleDelete}>Delete Miniature</button>
        </div>
    </div>
  )
}

export default MiniaturePage