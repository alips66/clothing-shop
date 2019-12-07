import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/HomePage";
import {Route, Switch} from 'react-router'

function App() {

    return (
        <div className="App">
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/hats' component={HomePage}/>
            </Switch>
        </div>
    );
}

export default App;