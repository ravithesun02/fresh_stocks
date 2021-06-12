import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Cart from './core/Cart';
import Home from './core/Home';

const MainRouter=()=>{
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/cart" component={Cart}/>
            </Switch>
        </div>
    )
    
}

export default MainRouter;