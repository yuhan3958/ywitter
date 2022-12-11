/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from '../routes/Auth';
import Home from '../routes/Home';

// eslint-disable-next-line import/no-anonymous-default-export
const AppRouter =  ({ isLoggedIn }) => {
    return(
        <Router>
            <Routes>
                {isLoggedIn ? (
                    <>
                        <Route path="/" element={<Home />} />
                    </>
                ) : (
                    <Route path="/" element={<Auth />} />
                    )}
            </Routes>
        </Router>
    );
}
export default AppRouter;