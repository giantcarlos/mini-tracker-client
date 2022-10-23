import React from 'react';
import MiniatureCard from './MiniatureCard';

function Home({ miniatures }) {
    const newMinis = miniatures.slice(0, 6)
    const miniatureCards = newMinis.map((miniature, index)  => <MiniatureCard key={ index } miniature={ miniature }/>)

    return (
        <div className="set-page">
            <div className="quote"><b>
                <p><i>"Stop using Excel spreadsheets. Miniature Tracker exists!"</i></p></b>
                <p>- Gian, creator of the Miniature Tracker</p></div>
            <h3>Latest miniatures in your collection:</h3>
            <div className="card-grid">{ miniatureCards }</div>
        </div>
    )
}

export default Home;