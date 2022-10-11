import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Sets from './components/Sets';
import SetPage from './components/SetPage';
import Miniatures from './components/Miniatures';
import MiniaturePage from './components/MiniaturePage';

function App() {

return (
  <div className = "App">
      <Navigation/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/sets" element={<Sets/>}/>
        <Route exact path="/sets/:id" element={<SetPage/>}/>
        <Route exact path="/miniatures" element={<Miniatures/>}/>
        <Route exact path="/miniatures/:id" element={<MiniaturePage/>}/>
      </Routes>
  </div>

)
}

export default App;
