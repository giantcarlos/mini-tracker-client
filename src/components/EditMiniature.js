import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditMiniature() {
    const navigate = useNavigate();
    const [ miniature, setMiniature ] = useState({})
    const { id } = useParams();
    const [ formData, setFormData ] = useState({
        name: "",
        rarity: "",
        size: "",
        units: "",
        img_url: ""
    });

    useEffect (() => {
        const fetchData = async () => {
        const resp = await fetch(`http://localhost:9292/miniatures/${id}`);
        const data = await resp.json();
        setMiniature(data);
        setFormData(data);
        }
        fetchData()
            .catch(console.error);
    }, [])


    const handleSubmit = async (e)  => {
        e.preventDefault();
        const headers = {
            "Accept": 'application/json',
            "Content-Type": "application/json"
        }
        const options = {
            method: "PATCH",
            headers,
            body: JSON.stringify(formData)
        }
        await fetch(`http://localhost:9292/miniatures/${id}`, options)
        navigate(`/miniatures/${id}`);
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
                <input type="textarea" id="rarity" value={formData.rarity} onChange={handleChange} /><br />
            </label>
            <label htmlFor="size">Size: 
                <input type="textarea" id="size" value={formData.size} onChange={handleChange} /><br />
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

export default EditMiniature;