import React from 'react';
import {BrowserRouter , Switch , Route} from 'react-router-dom';
import Shop from './Shop';
import App from './App';
import Notfound from './Notfound';

class Router extends React.Component{
    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Shop}/>
                    <Route path="/shop/:shopId" component={App}/>
                    <Route component={Notfound}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router;