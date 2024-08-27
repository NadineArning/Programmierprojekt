import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
import Contact from './Contact';
import Documentation from './Documentation';
import Home from './Home';
import './Website.css';


function Website(){
    return (
        <Router>
        <div className="Website">
            <header className='Website-header'>

                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/documentation" element={<Documentation />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </header>
        </div>
        </Router>
    );
}

export default Website; 

