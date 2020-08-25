import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';

const Routes = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Switch>

            </Switch>
        </BrowserRouter>
    )
}

export default Routes;