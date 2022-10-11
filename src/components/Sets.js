import React, { useState, useEffect } from "react";
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
        <div className="setList">
            {setCards()}
        </div>
    )
}

export default Sets;