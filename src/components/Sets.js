import React, { useState, useEffect } from "react";

function Sets() {
    const [ sets, setSets ] = useState([]);

    useEffect (() => {
        fetch('http://localhost:9292/miniature_sets')
        .then(res => res.json())
        .then(data => setSets(data))
        })
    

    return (
        <p></p>
    )
}

export default Sets;