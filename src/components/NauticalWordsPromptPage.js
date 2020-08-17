import React from 'react';
import Generator from './Generator';
import {nautical} from '../assets/nautical';

const NauticalWordsPromptPage = () => {
  return (
    <div>
      <p>Write 250 words about:</p>
      <Generator dataset={nautical}/>
    </div>
  );
}

export default NauticalWordsPromptPage;
