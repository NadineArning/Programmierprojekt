import React from 'react';
import { BrowserRouter as router, Route, Routes} from 'react-router-dom';
import Navbar from './Navbar';
import './Website.css';


function Website(){
    return (
        <router>
        <div className="Website">
            <header className='Website-header'>
                <p>
                    Hier entsteht der Header der Website
                </p>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/documentation" element={<Documentation />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </header>
        </div>
        </router>
    );
}

export default Website; 

