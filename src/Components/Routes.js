import React from 'react';
import { BrowserRouter , Route, Switch} from 'react-router-dom';



import Confirmation from './Confirmation';
import Home from './Home';



const Routes  = () => (
    <BrowserRouter>
        <Switch>
            
            <Route exact path='/' component={Home}/>
            <Route path='/confirmation' component={Confirmation}/>
        </Switch>
    </BrowserRouter>
    

)
   


export default Routes;