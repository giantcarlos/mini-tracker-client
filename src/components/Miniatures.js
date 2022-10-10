import React, { useState, useEffect } from "react";

function Miniatures() {
    const [ miniatures, setMiniatures ] = useState([]);

    useEffect (() => {
        fetch('http://localhost:9292/miniatures')
        .then(res => res.json())
        .then(data => setMiniatures(data))
        })

    return (
        <p></p>
    )
}

export default Miniatures;