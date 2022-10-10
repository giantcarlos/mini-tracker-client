import React, { useEffect } from "react";

function Miniatures() {
    useEffect (() => {
        fetch('http://localhost:9292/miniatures')
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    })

    return (
        <p></p>
    )
}

export default Miniatures;