import React from "react";
import MiniatureCard from "./MiniatureCard";

function Miniatures({ miniatures }) {
    const miniatureCards = () => miniatures.map((miniature, index) => <MiniatureCard key={index} miniature={miniature}/>)

    return (
        <div>
            <div className="mini-header">
                <h3 className="counter">You have {miniatures.length} unique miniatures in your collection.</h3>
            </div>
            <div className="card-grid">{miniatureCards()}</div>
        </div>
    )
}

export default Miniatures;