import React, { useState, useEffect } from 'react';
import MiniatureCard from './MiniatureCard';

function Home() {
    const [ newMinis, setNewMinis ] = useState([]);

    useEffect (() => {
        fetch('http://localhost:9292/miniatures/new')
        .then(res => res.json())
        .then(data => setNewMinis(data))
        }, [])

    const miniatureCards = newMinis.map((miniature, index)  => <MiniatureCard key={ index } miniature={ miniature }/>)

    return (
        <div className="setPage">
            <h3><br></br><i>"Stop using Excel spreadsheets. Miniature Tracker exists!"</i> - Gian, creator of the Miniature Tracker</h3><br></br><br></br><br></br>
            <h3>Latest miniatures in your collection:</h3>
            <div className="card-grid">{ miniatureCards }</div>
        </div>
    )
}

export default Home;