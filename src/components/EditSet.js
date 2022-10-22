import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function EditSet({ sets, setSets }) {
    const navigate = useNavigate();
    const [ set, setSet ] = useState({});
    const { id } = useParams();
    const [ formData, setFormData ] = useState({
        name: "",
        year: ""
    });

    useEffect (() => {
        const fetchData = async () => {
        const resp = await fetch(`http://localhost:9292/miniature_sets/${id}`);
        const data = await resp.json();
        setSet(data);
        setFormData(data);
        }
        fetchData()
            .catch(console.error);
    }, [])

    const handleSubmit = async e  => {
        e.preventDefault();
        const headers = {
            "Content-Type": "application/json"
        }
        const options = {
            method: "PATCH",
            headers,
            body: JSON.stringify(formData)
        }
        const resp = await fetch(`http://localhost:9292/miniature_sets/${id}`, options);
        const data = await resp.json();
        updateSets(data);
        navigate(`/sets/${id}`);
    }

    const updateSets = (data) => {
        setSets(sets?.map(s => s.id===data.id ? data : s));
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }

  return (
    <form className="set-form" onSubmit={handleSubmit}>
        <h2>Edit {set.name}</h2>
        <div className="form-text">
            <label htmlFor="name">Name: 
                <input type="textarea" id="name" value={formData.name} onChange={handleChange} autoFocus={true}/><br />
            </label>
            <label htmlFor="year">Year: 
                <input type="number" id="year" value={formData.year} onChange={handleChange} /><br />
            </label>
            <input type="submit" value="Submit" className="form-btn" />
        </div>
    </form>
  )
}

export default EditSet;