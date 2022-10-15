import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import SetCard from "./SetCard";

function Sets() {
    const [ sets, setSets ] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        const resp = await fetch('http://localhost:9292/miniature_sets')
        const data = await resp.json();
        setSets(data)
        }
        fetchData()
            .catch(console.error);
        }, [])
  
    const setCards = () => sets?.map((set, index) => <SetCard key={index} set={set} />) 

    return (
        <div>
            <div className="counter">You own miniatures from {sets?.length} different sets.
                <Link to={"/newset"}>
                    <button className="form-link" >Add Set</button>
                </Link>
            </div>
            <div className="set-list">{setCards()}</div>
        </div>
    )
}

export default Sets;