import React, { useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from '../routes/Auth';
import Home from '../routes/Home';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const [isLoggedIn, setisLoggedIn] = useState(false);
    return(
        <Router>
            <Switch>
                {isLoggedIn ? (
                    <>
                        <Route exact path='/'>
                            <Home />    
                        </Route> 
                    </>
                ) : (
                    <Route exact path='/'>
                        <Auth />
                    </Route>
                    )}
            </Switch>
        </Router>
    );
}