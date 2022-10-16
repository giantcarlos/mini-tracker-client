import './App.css';
import React from "react";
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

function App() {
    return (
    <div className = "App">
      <Navigation/>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/sets" element={<Sets />}/>
          <Route exact path="/sets/:id" element={<SetPage />}/>
          <Route exact path="/newset" element={<NewSet />}/>
          <Route exact path="/sets/:id/edit" element={<EditSet />}/>
          <Route exact path="/miniatures" element={<Miniatures />}/>
          <Route exact path="/miniatures/:id" element={<MiniaturePage />}/>
          <Route exact path="/sets/:miniatureSetId/miniatures/new" element={<NewMiniature/>}/>
        </Routes>
    </div>

)
}

export default App;
