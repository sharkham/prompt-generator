import React from 'react';
import './App.css';
import WordsPromptPage from './components/WordsPromptPage';
import NauticalWordsPromptPage from './components/NauticalWordsPromptPage';
import {
  Switch,
  Route
} from 'react-router-dom';
import NavBar from './components/NavBar';
import AboutPage from './components/AboutPage';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <h1>Prompt Generator</h1>
      <Switch>
        <Route exact path="/nauticalwords"><NauticalWordsPromptPage/></Route>
        <Route exact path="/about"><AboutPage/></Route>
        <Route path="/"><WordsPromptPage/></Route>
      </Switch>
    </div>
  );
}

export default App;
