import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function NewMiniature({ miniatures, setMiniatures, sets, setSets }) {
    const navigate = useNavigate();
    const { miniatureSetId } = useParams();
    const set = sets.find(s => s.id===parseInt(miniatureSetId))
    const [ formData, setFormData ] = useState({
        name: "",
        rarity: "",
        size: "",
        units: "",
        img_url: ""
    });

    const handleSubmit = e => {
        e.preventDefault();
        fetch(`http://localhost:9292/miniature_sets/${miniatureSetId}/miniatures`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
             body: JSON.stringify(formData)
        })
            .then(r => r.json())
            .then((data) => addMiniature(data))
            .then(() => navigate(`/sets/${miniatureSetId}`));
            console.log(set.miniatures)
        }

    const addMiniature = (data) => {
        setMiniatures([data, ...miniatures])
        const updatedSet = {...set, miniatures: [data, ...set.miniatures]}
        setSets(sets.map(s => s.id===updatedSet.id ? updatedSet : s))
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
                <input type="textarea" id="name" value={formData.name} onChange={handleChange} required="required" autoFocus={true} /><br />
            </label>
            <label htmlFor="rarity">Rarity: 
                <select className="new-select" type="textarea" id="rarity" value={formData.rarity} onChange={handleChange} >
                    <option value=""></option>
                    <option value="Common">Common</option>
                    <option value="Uncommon">Uncommon</option>
                    <option value="Rare">Rare</option>
                    <option value="Unique">Unique</option>
                </select><br />
            </label>
            <label htmlFor="size">Size: 
                <select className="new-select" type="textarea" id="size" value={formData.size} onChange={handleChange} >
                    <option value=""></option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                    <option value="Huge">Huge</option>
                    <option value="Gargantuan">Gargantuan</option>
                </select><br />
            </label>
            <label htmlFor="units">Units: 
                <input type="number" id="units" value={formData.units} onChange={handleChange} required="required" min="1" max="1000" /><br />
            </label>
            <label htmlFor="img_url">Image URL: 
                <input type="textarea" id="img_url" value={formData.img_url} onChange={handleChange} required="required" /><br />
            </label>
            <input type="submit" value="Submit" className="form-btn" />
        </div>
    </form>
  )
}

export default NewMiniature;