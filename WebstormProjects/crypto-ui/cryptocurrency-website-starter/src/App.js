import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Header from './components/Header';
import NavMobile from './components/NavMobile';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Stats from './components/Stats'
import Why from "./components/Why";
import Calculate from "./components/Calculate";
import Trade from "./components/Trade";
import Features from "./components/Features";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import WalletContext from "./components/WalletContext";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AccountBtns from "./components/AccountBtns";
import ComingSoon from "./components/ComingSoon/ComingSoon";
import Home from "./Home";

const App = () => {
    // const [navMobile, setNavMobile] = useState(false); // State to control mobile menu visibility
    //
    // useEffect(() => {
    //     Aos.init({
    //         duration: 2500,
    //         delay: 400
    //     });
    // }, []);

    return (
        // Wrap the entire app with Router
        <Router>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/ComingSoon" element={<ComingSoon />} />
            </Routes>
        </Router>

    );
};

export default App;
