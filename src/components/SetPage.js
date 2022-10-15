import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import MiniatureCard from './MiniatureCard';

function SetPage() {
    const navigate = useNavigate();
    const [ set, setSet ] = useState({});
    const { id } = useParams();

    useEffect (() => {
        fetch(`http://localhost:9292/miniature_sets/${id}`)
        .then(res => res.json())
        .then(data => setSet(data))
        }, [])

    const miniatureCards = set.miniatures?.map((miniature, index)  => <MiniatureCard key={ index } miniature={ miniature }/>)

    const handleDelete = async () => {
        const resp = await fetch(`http://localhost:9292/miniature_sets/${id}`, 
            { method: "DELETE" })
        navigate("/sets");
    }

  return (
    <div className="set-page">
        <h2>{ set.name }</h2>
        <h3>Release Date: { set.year }</h3>
        <Link to={`/sets/${id}/miniatures/new`}>
            <button className="form-link" >Add Miniature</button>
        </Link>
        <button className="form-link" onClick={handleDelete}>Delete Set</button>
        <div className="card-grid">{miniatureCards}</div>
    </div>
  )
}

export default SetPage;