import React, { useEffect, useState } from "react";
import MiniatureCard from "./MiniatureCard";

function Miniatures() {
    const [ miniatures, setMiniatures ] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
        const resp = await fetch('http://localhost:9292/miniatures')
        const data = await resp.json();
        setMiniatures(data)
        }
        fetchData()
            .catch(console.error);
        }, [])

    const miniatureCards = () => miniatures.map((miniature, index) => <MiniatureCard key={index} miniature={miniature}/>)

    return (
        <div>
            <h3 className="counter">You have {miniatures.length} unique miniatures in your collection.</h3>
            <div className="card-grid">{miniatureCards()}</div>
        </div>
    )
}

export default Miniatures;