import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar'
import FetchDog from './components/FetchDog'
import Home from './components/Home'
import FetchCat from './components/FetchCat'
import FetchMultipleDogs from './components/FetchMultipleDogs'
import FetchMultipleCats from './components/FetchMultipleCats';

function App() {
  return (
    <div className="App">
      <NavBar/> 
      <Switch>
      <Route exact path={"/"}>
        <Home/>
      </Route>
        <Route exact path={"/dog/random"} component={FetchDog}/>
        <Route path={"/dog/random/:num"} component={FetchMultipleDogs}/>
        <Route exact path={"/cat/random"} component={FetchCat}/>
        <Route path={"/cat/random/:num"} component={FetchMultipleCats}/>
    
      </Switch>
    </div>
  );
}

export default App;
