import React from 'react'
import {Navbar,Nav} from 'react-bootstrap';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { Routes, Route } from 'react-router-dom';
import NavbarComp from './components/NavbarComp';


const App = () => {
  return (
    <div>
       <NavbarComp/>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/contact" element={<Contact/>}/>
</Routes>
    </div>
  )
}

export default App;
