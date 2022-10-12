import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import SetCard from "./SetCard";

function Sets() {
    const [ sets, setSets ] = useState([]);

    useEffect (() => {
        fetch('http://localhost:9292/miniature_sets')
        .then(res => res.json())
        .then(data => setSets(data))
        }, [])

    const setCards = () => sets.map((set, index) => <SetCard key={index} set={set} />)

    return (
        <div>
            <h3 className="counter">You own miniatures from {sets.length} different sets.</h3>
            <Link to={"/newset"}>
                    <button className="form-link" >Add a set.</button>
            </Link>
            <div className="setList">{setCards()}</div>
        </div>
    )
}

export default Sets;