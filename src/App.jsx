import React from 'react'
import { Route, Routes } from "react-router-dom"
import './App.css';
import Home from './components/Home';
import Publisher from './components/Publisher';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Publishers
        <Search />
      </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:publisherId" element={<Publisher />} />
        </Routes>        
    </div>
  );
}

export default App;
