import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NewMiniature() {
    const navigate = useNavigate();
    const [ formData, setFormData ] = useState({
        name: "",
        rarity: "",
        size: "",
        units: "",
        img_url: ""
    });

    const handleSubmit = async e  => {
        e.preventDefault();
        const headers = {
            "Accept": 'application/json',
            "Content-Type": "application/json"
        }
        const options = {
            method: "POST",
            headers,
            body: JSON.stringify(formData)
        }
        await fetch("http://localhost:9292/miniature_sets", options)
        navigate("/miniatures");
    }

    const handleChange = (e) => {
        const key = e.target.id
        const value = e.target.value
        setFormData({
            ...formData,
            [key]: value
        })
    }

  return (
    <form className="set-form" onSubmit={handleSubmit}>
        <h2>New Miniature Submission</h2>
        <div className="form-text">
            <label htmlFor="name">Name: 
                <input type="textarea" id="name" value={formData.name} onChange={handleChange} autoFocus={true} /><br />
            </label>
            <label htmlFor="rarity">Rarity: 
                <input type="textarea" id="rarity" value={formData.rarity} onChange={handleChange} /><br />
            </label>
            <label htmlFor="year">Year: 
                <input type="textarea" id="year" value={formData.year} onChange={handleChange} /><br />
            </label>
            <label htmlFor="units">Units: 
                <input type="textarea" id="units" value={formData.units} onChange={handleChange} /><br />
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