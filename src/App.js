import React from 'react';
import './App.css';
import PromptPage from './components/PromptPage'
import {
  Switch,
  Route,
  BrowserRouter as Router
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
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
