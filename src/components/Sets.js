import React, { useEffect } from "react";

function Sets() {
    useEffect (() => {
        fetch('http://localhost:9292/miniature_sets')
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    })

    return (
        <p></p>
    )
}

export default Sets;