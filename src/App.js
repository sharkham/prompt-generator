import React from 'react';
import './App.css';
import PromptPage from './components/PromptPage'
import {
  Switch,
  Route,
  BrowserRouter as Router
} from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Router>
        <Switch>
          <Route exact path="/"><PromptPage/></Route>
          <Route exact path="/words"><PromptPage/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
