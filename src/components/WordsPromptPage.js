import React from 'react';
import Generator from './Generator';
import {words} from '../assets/words';

const WordsPromptPage = () => {
  return (
    <div>
      <Generator dataset={words}/>
    </div>
  );
}

export default WordsPromptPage;
