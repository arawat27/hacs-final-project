import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import FormPage from './FormPage';
import Googlemap from './Googlemap';
import { Route, Routes } from "react-router-dom"


function App() {
  
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path = "/Home" element = {<Home />}/>
          <Route path = "/About" element = {<About />}/>
          <Route path = "/Contact" element = {<Contact />}/>
          <Route path="/form" element={<FormPage />} />
          <Route path="/map" element={<Googlemap />} />
        </Routes>
    </div>
  );
}

export default App;
