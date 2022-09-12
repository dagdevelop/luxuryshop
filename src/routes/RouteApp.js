import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from '../components/Home';

const RouteApp = () => {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='*' element={<Navigate to={'/'} />} />
            </Routes>
        </Router>
    );
};

export default RouteApp;