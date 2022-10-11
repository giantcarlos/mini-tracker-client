import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MiniatureCard from './MiniatureCard';

function SetPage() {
    const [ set, setSet ] = useState({});
    const { id } = useParams();

    useEffect (() => {
        fetch(`http://localhost:9292/miniature_sets/${id}`)
        .then(res => res.json())
        .then(data => setSet(data))
        }, [])

    const miniatureCards = set.miniatures?.map((miniature, index)  => <MiniatureCard key={ index } miniature={ miniature }/>)

  return (
    <div className="setPage">
        <h2>{ set.name }</h2>
        <h3>Release Date: { set.year }</h3>
        { miniatureCards }
    </div>
  )
}

export default SetPage