import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Website from './components/pages/Website';
import Tickets from './components/pages/Tickets';
import UnityPage from './components/pages/UnityPage';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={ <Home />}/>
          <Route path='/website' element={ <Website/>}/>
          <Route path='/tickets' element={<Tickets/>} />
          <Route path='/unitypage' element={<UnityPage/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
