import React from 'react';
import {words} from '../assets/words';

const Generator = () => {

  const generate = () => {
    // const randomElement = array[Math.floor(Math.random() * array.length)];
    console.log(words[Math.floor(Math.random() * words.length)])
    // return words[Math.floor(Math.random() * words.length)];
  }

  return (
    <div>
      <p>Prompt here</p>
      <button onClick={generate}>Generate</button>
    </div>
  );
}

export default Generator;
