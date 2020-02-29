import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar'
import FetchDog from './components/FetchDog'
import Home from './components/Home'
import FetchCat from './components/FetchCat'

function App() {
  return (
    <div className="App">
      <NavBar/> 
      <Switch>
      <Route>
        <Route exact path={"/"} component={Home}/>
        <Route exact path={"/dog/random"} component={FetchDog}/>
        <Route exact path={"/cat/random"} component={FetchCat}/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
