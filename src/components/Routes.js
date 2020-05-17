import React from 'react';
import { Switch, Router, Route } from "react-router";
import Home from '../pages/Home/index';
import Login from '../pages/Login/index';
import Register from '../pages/Register/index';
import NotFound from './NotFound';
import PrivateRoutes from './PrivateRoutes';


import {history} from '../history';

const Routes = () => (
    <Router history={history}>
        <Switch>
            <PrivateRoutes exact path='/' component={Home}/>
            <Route exact path='/login' component={Login}/>
            <Route exacty path='/register' component={Register}/>
            <PrivateRoutes component={NotFound} />
        </Switch>
    </Router>
)

export default Routes;