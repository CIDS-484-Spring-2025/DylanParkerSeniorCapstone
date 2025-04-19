import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import './Home.css';  // Import the new styles
import Home from './Home';
import Scores from './Scores';
import TeamInfo from './TeamInfo';

function App() {
  return (
    <div className="App">
       <Routes>
        {/* Updated route to handle both sport and league */}
        <Route path="/" element={<Home />} />
        <Route path="/scores/:sport/:league" element={<Scores />} />
        <Route path="/teaminfo" element={<TeamInfo />} />
      </Routes>
    </div>
  );
}

export default App;



