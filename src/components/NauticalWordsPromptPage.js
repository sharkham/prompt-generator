import React from 'react';
import Generator from './Generator';
import {nautical} from '../assets/nautical';

const NauticalWordsPromptPage = () => {
  return (
    <div>
      <Generator dataset={nautical}/>
    </div>
  );
}

export default NauticalWordsPromptPage;
