import React, { useState, useEffect } from "react";
import MiniatureCard from "./MiniatureCard";

function Miniatures() {
    const [ miniatures, setMiniatures ] = useState([]);

    useEffect (() => {
        fetch('http://localhost:9292/miniatures')
        .then(res => res.json())
        .then(data => setMiniatures(data))
        }, [])

        const miniatureCards = () => miniatures.map((miniature, index) => <MiniatureCard key={index} miniature={miniature}/>)

    return (
        <div className="miniatureList">
            {miniatureCards()}
        </div>
    )
}

export default Miniatures;