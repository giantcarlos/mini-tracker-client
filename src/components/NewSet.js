import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NewSet({ sets, setSets }) {
    const navigate = useNavigate();
    const [ formData, setFormData ] = useState({
        name: "",
        year: ""
    });

    const handleSubmit = e => {
        e.preventDefault();
        fetch("http://localhost:9292/miniature_sets", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
             body: JSON.stringify(formData)
        })
            .then(r => r.json())
            .then((data) => addSet(data))
            .then(() => navigate("/sets"));
        }

    const addSet = (data) => {
        setSets([...sets, data])
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }

  return (
    <form className="set-form" onSubmit={handleSubmit}>
        <h2>New Set Submission</h2>
        <div className="form-text">
            <label htmlFor="name">Name: 
                <input type="textarea" id="name" value={formData.name} onChange={handleChange} required="required" autoFocus={true}/><br />
            </label>
            <label htmlFor="year">Year: 
                <input type="integer" id="year" value={formData.year} onChange={handleChange} required="required" /><br />
            </label>
            <input type="submit" value="Submit" className="form-btn" />
        </div>
    </form>
  )
}

export default NewSet;