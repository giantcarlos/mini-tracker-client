import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MiniatureCard from "./MiniatureCard";

function Miniatures() {
    const [ miniatures, setMiniatures ] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        const fetchData = async () => {
        const resp = await fetch('http://localhost:9292/miniatures/alphabetical')
        const data = await resp.json();
        setMiniatures(data)
        }
        fetchData()
            .catch(console.error);
        }, [])

    const miniatureCards = () => miniatures.map((miniature, index) => <MiniatureCard key={index} miniature={miniature}/>)

    const handleChange = async (e) => {
        const resp = await fetch(`http://localhost:9292/miniatures/${e.target.value}`);
        const data = await resp.json();
        setMiniatures(data);
        navigate("/miniatures")
        }

    return (
        <div>
            <div className="mini-header">
                <h3 className="counter">You have {miniatures.length} unique miniatures in your collection.</h3>
                <div className="sort-by">
                    <label>Sort by:</label>
                    <select name="sort-by" id="sort-by" onChange={handleChange}>
                        <option value="alphabetical" defaultValue>Alphabetical</option>
                        <option value="oldest">Oldest</option>
                        <option value="latest">Latest</option>
                    </select>
                </div>
            </div>
            <div className="card-grid">{miniatureCards()}</div>
        </div>
    )
}

export default Miniatures;