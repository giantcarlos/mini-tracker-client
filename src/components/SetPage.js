import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import MiniatureCard from './MiniatureCard';

function SetPage({ sets, setSets }) {
    const navigate = useNavigate();
    const { id } = useParams();
    const [ set, setSet ] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        const resp = await fetch(`http://localhost:9292/miniature_sets/${id}`)
        const data = await resp.json();
        setSet(data)
        }
        fetchData()
            .catch(console.error);
        }, [])

    const miniatureCards = set.miniatures?.map((miniature, index)  => <MiniatureCard key={ index } miniature={ miniature }/>)

    const handleDelete = async () => {
        await fetch(`http://localhost:9292/miniature_sets/${id}`, 
            { method: "DELETE" })
        removeSet(id);
        navigate("/sets");
    }

    const removeSet = id => {
        setSets(sets.filter(s => s.id !=id))
    }

  return (
    <div className="set-page">
        <h2>{ set.name }</h2>
        <h3>Release Date: { set.year }</h3>
        <Link to={`/sets/${id}/miniatures/new`}>
            <button className="form-link" >Add Miniature</button>
        </Link>
        <Link to={`/sets/${id}/edit`}>
            <button className="form-link" >Edit Set</button>
        </Link>
        <button className="form-link" onClick={handleDelete}>Delete Set</button><br /><br />
        <div className="card-grid">{miniatureCards}</div>
    </div>
  )
}

export default SetPage;