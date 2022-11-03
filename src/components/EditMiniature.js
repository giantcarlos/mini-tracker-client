import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditMiniature({ miniatures, setMiniatures, sets, setSets }) {
    const navigate = useNavigate();
    const { id } = useParams();
    const miniature = miniatures.find(mini => mini.id===parseInt(id))
    const set = sets.find(s => s.id===parseInt(miniature.miniature_set_id))
    const [ formData, setFormData ] = useState({
        name: "",
        rarity: "",
        size: "",
        units: "",
        img_url: ""
    });

    useEffect(() => {
        setFormData(miniature);
        }, [])

    const handleSubmit = e => {
        e.preventDefault();
        fetch(`http://localhost:9292/miniatures/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
             body: JSON.stringify(formData)
        })
            .then(r => r.json())
            .then((data) => updateMiniature(data))
            .then(() => navigate(`/miniatures/${id}`));
        }

    const updateMiniature = (data) => {
        setMiniatures(miniatures.map(mini => mini.id===data.id ? data : mini));
        const updatedSet = {...set, miniatures: [...(set.miniatures.map(mini => mini.id===data.id ? data : mini))]}
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
        <h2>Edit {miniature.name}</h2>
        <div className="form-text">
            <label htmlFor="name">Name: 
                <input type="textarea" id="name" value={formData.name} onChange={handleChange} autoFocus={true} /><br />
            </label>
            <label htmlFor="rarity">Rarity: 
                <select className="new-select" type="textarea" id="rarity" value={formData?.rarity} onChange={handleChange}>
                    <option value="Common">Common</option>
                    <option value="Uncommon">Uncommon</option>
                    <option value="Rare">Rare</option>
                    <option value="Unique">Unique</option>
                </select><br />
            </label>
            <label htmlFor="size">Size: 
                <select className="new-select" type="textarea" id="size" value={formData.size} onChange={handleChange}>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                    <option value="Huge">Huge</option>
                    <option value="Gargantuan">Gargantuan</option>
                </select><br />
            </label>
            <label htmlFor="units">Number of units: 
                <input type="number" id="units" min="1" value={formData.units} onChange={handleChange} /><br />
            </label>
            <label htmlFor="img_url">Image URL: 
                <input type="textarea" id="img_url" value={formData.img_url} onChange={handleChange} /><br />
            </label>
            <input type="submit" value="Submit" className="form-btn" />
        </div>
    </form>
  )
}

export default EditMiniature;