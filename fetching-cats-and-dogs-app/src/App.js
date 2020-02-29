import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar'
import FetchDog from './components/FetchDog'
import Home from './components/Home'
import FetchCat from './components/FetchCat'
import FetchMultipleDogs from './components/FetchMultipleDogs'

function App() {
  return (
    <div className="App">
      <NavBar/> 
      <Switch>
      <Route exact path={"/"}>
        <Home/>
      </Route>
        <Route path={"/dog/random"} component={FetchDog}>
          <Route path={"/dog/random/:num"}> 
          <FetchMultipleDogs/>
          </Route>
        </Route>
        <Route path={"/cat/random"} component={FetchCat}/>
    
      </Switch>
    </div>
  );
}

export default App;
