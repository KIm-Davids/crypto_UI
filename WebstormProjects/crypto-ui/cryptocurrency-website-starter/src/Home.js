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

const Home = () => {
    const [navMobile, setNavMobile] = useState(false); // State to control mobile menu visibility

    useEffect(() => {
        Aos.init({
            duration: 2500,
            delay: 400
        });
    }, []);

    return (
        // Wrap the entire app with Router
        // <Router>
        <div className="overflow-hidden">
            <Header setNavMobile={setNavMobile}/>
            <Hero/>
            {/* Conditionally render NavMobile */}
            {navMobile && (
                <div
                    className={`${navMobile ? 'right-0' : 'right-[-100%]'} fixed z-10 top-0 h-full transition-all duration-200`}
                >
                    <NavMobile setNavMobile={setNavMobile}/>
                </div>
            )}
            <Stats/>
            {/*<WalletContext/>*/}
            <Why/>
            <Calculate/>
            <Trade/>
            <Features/>
            <Newsletter/>
            <Footer/>
        </div>

    );
};

export default Home;
