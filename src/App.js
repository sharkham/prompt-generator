import React from 'react';
import './App.css';
import PromptPage from './components/PromptPage'
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/"><PromptPage/></Route>
        <Route exact path="/words"><PromptPage/></Route>
      </Switch>
    </div>
  );
}

export default App;
