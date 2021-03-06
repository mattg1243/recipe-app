import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import App from '../App';
import Recipe from './Recipe';

const Router = () => (

    <BrowserRouter>
        <Route path="/" component={App} />
        <Route path="/recipe" component={Recipe} />
    </BrowserRouter>

)

export default Router;