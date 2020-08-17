import React from 'react';
import Generator from './Generator';
import {words} from '../assets/words';

const WordsPromptPage = () => {
  return (
    <div>
      <p>Write 250 words about:</p>
      <Generator dataset={words}/>
    </div>
  );
}

export default WordsPromptPage;
