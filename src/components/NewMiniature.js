import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function NewMiniature() {
    const navigate = useNavigate();
    const [ set, setSet ] = useState({})
    const { miniatureSetId } = useParams();
    const [ formData, setFormData ] = useState({
        name: "",
        rarity: "",
        size: "",
        units: "",
        img_url: ""
    });

    useEffect (() => {
        fetch(`http://localhost:9292/miniature_sets/${miniatureSetId}`)
        .then(res => res.json())
        .then(data => setSet(data))
        }, [])

    const handleSubmit = async (e)  => {
        e.preventDefault();
        const headers = {
            "Content-Type": "application/json"
        }
        const options = {
            method: "POST",
            headers,
            body: JSON.stringify(formData)
        }
        await fetch(`http://localhost:9292/miniature_sets/${miniatureSetId}/miniatures`, options)
        navigate(`/sets/${miniatureSetId}`);
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }

  return (
    <form className="set-form" onSubmit={handleSubmit}>
        <h2>New Miniature for {set.name}</h2>
        <div className="form-text">
            <label htmlFor="name">Name: 
                <input type="textarea" id="name" value={formData.name} onChange={handleChange} autoFocus={true} /><br />
            </label>
            <label htmlFor="rarity">Rarity: 
                <input type="textarea" id="rarity" value={formData.rarity} onChange={handleChange} /><br />
            </label>
            <label htmlFor="size">Size: 
                <input type="textarea" id="size" value={formData.size} onChange={handleChange} /><br />
            </label>
            <label htmlFor="units">Units: 
                <input type="number" id="units" value={formData.units} onChange={handleChange} /><br />
            </label>
            <label htmlFor="img_url">Image URL: 
                <input type="textarea" id="img_url" value={formData.img_url} onChange={handleChange} /><br />
            </label>
            <input type="submit" value="Submit" className="form-btn" />
        </div>
    </form>
  )
}

export default NewMiniature;