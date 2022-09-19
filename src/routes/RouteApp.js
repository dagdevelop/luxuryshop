import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Success from '../api/stripe/Success';
import Home from '../components/Home';


const Animated = () => {
    const location = useLocation();

    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/success' element={<Success />} />
                <Route path='*' element={<Navigate to={'/'} />} />
            </Routes>
        </AnimatePresence>
    );
}

const RouteApp = () => {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Animated />
        </Router>
    );
};

export default RouteApp;