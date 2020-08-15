import React from 'react';
import './App.css';
import WordsPromptPage from './components/WordsPromptPage'
import {
  Switch,
  Route
} from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <h1>Prompt Generator</h1>
      <Switch>
        <Route exact path="/"><WordsPromptPage/></Route>
        <Route exact path="/words"><WordsPromptPage/></Route>
      </Switch>
    </div>
  );
}

export default App;
