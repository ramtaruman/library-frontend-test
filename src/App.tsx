import React from 'react';

import './App.css';
import {Navbar} from "./layouts/NavbarAndFooter/Navbar";
import {ExploreTop} from "./layouts/HomePage/ExploreTop";
import {Carousel} from "./layouts/HomePage/Carousel";
import {Heros} from "./layouts/HomePage/Heros";
import {LibServ} from "./layouts/HomePage/LibServ";
import {Footer} from "./layouts/NavbarAndFooter/Footer";

function App() {
    return (
        <div>
            <Navbar/>
            <ExploreTop/>
            <Carousel/>
            <Heros/>
            <LibServ/>
            <Footer/>
        </div>
    );
}

export default App;
