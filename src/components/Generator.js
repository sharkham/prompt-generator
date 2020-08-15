import React, { useEffect, useState } from 'react';
// import {words} from '../assets/words';

const Generator = (props) => {

  // useEffect(() => {

  // })

  const [prompt, setPrompt] = useState("Click to generate a prompt!")



  const generate = () => {
    // const randomElement = array[Math.floor(Math.random() * array.length)];
    // console.log(words[Math.floor(Math.random() * words.length)])
    let selectedPrompt = props.dataset[Math.floor(Math.random() * props.dataset.length)];
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
