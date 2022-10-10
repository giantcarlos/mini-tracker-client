import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Sets from './components/Sets';
import Miniatures from './components/Miniatures';

function App() {

return (
  <div className = "App">
      <Navigation/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/sets" element={<Sets/>}/>
        <Route exact path="/miniatures" element={<Miniatures/>}/>
      </Routes>
  </div>

)
}

export default App;
