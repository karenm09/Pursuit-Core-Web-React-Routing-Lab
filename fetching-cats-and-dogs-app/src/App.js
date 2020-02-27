import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import FetchDog from './components/FetchDog'

function App() {
  return (
    <div className="App">
      <NavBar/> 
      <Route>
        <Route path={"/dog/random"} component={FetchDog}/>
      </Route>
    </div>
  );
}

export default App;
