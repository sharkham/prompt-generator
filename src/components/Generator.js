import React, { useEffect, useState } from 'react';
import {words} from '../assets/words';

const Generator = () => {

  // useEffect(() => {

  // })

  const [prompt, setPrompt] = useState("test")



  const generate = () => {
    // const randomElement = array[Math.floor(Math.random() * array.length)];
    // console.log(words[Math.floor(Math.random() * words.length)])
    let selectedPrompt = words[Math.floor(Math.random() * words.length)];
    console.log(selectedPrompt)
    // currently logs two prompts instead of one??
    return selectedPrompt;
  }

  return (
    <div>
      <p>{prompt}</p>
      <button onClick={() => setPrompt(generate())}>Generate</button>
    </div>
  );
}

export default Generator;
