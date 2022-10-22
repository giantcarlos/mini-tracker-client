import './App.css';
import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Sets from './components/Sets';
import SetPage from './components/SetPage';
import NewSet from './components/NewSet';
import EditSet from './components/EditSet';
import Miniatures from './components/Miniatures';
import MiniaturePage from './components/MiniaturePage';
import NewMiniature from './components/NewMiniature';
import EditMiniature from './components/EditMiniature.js';

function App() {
  const [ sets, setSets ] = useState([]);
  const [ miniatures, setMiniatures ] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        const resp = await fetch('http://localhost:9292/miniature_sets')
        const data = await resp.json();
        setSets(data)
        }
        fetchData()
            .catch(console.error);
        }, [])
    
    useEffect(() => {
        const fetchData = async () => {
        const resp = await fetch('http://localhost:9292/miniatures/alphabetical')
        const data = await resp.json();
        setMiniatures(data)
        }
        fetchData()
            .catch(console.error);
        }, [])

    return (
    <div className = "App">
      <Navigation/>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/sets" element={<Sets sets={ sets }/>}/>
          <Route exact path="/sets/:id" element={<SetPage sets={ sets } setSets={ setSets } />}/>
          <Route exact path="/newset" element={<NewSet sets={ sets } setSets={ setSets }/>}/>
          <Route exact path="/sets/:id/edit" element={<EditSet />}/>
          <Route exact path="/miniatures" element={<Miniatures miniatures={ miniatures }/>}/>
          <Route exact path="/miniatures/:id" element={<MiniaturePage miniatures={ miniatures } setMiniatures={ setMiniatures } />}/>
          <Route exact path="/sets/:miniatureSetId/miniatures/new" element={<NewMiniature/>}/>
          <Route exact path="/miniatures/:id/edit" element={<EditMiniature />}/>
        </Routes>
    </div>

)
}

export default App;
