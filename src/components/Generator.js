import React, { useState } from 'react';

const Generator = (props) => {

  const [prompt, setPrompt] = useState("Click to generate a prompt!")



  const generate = () => {
    return props.dataset[Math.floor(Math.random() * props.dataset.length)];
  }

  return (
    <div>
      <p>{prompt}</p>
      <button onClick={() => setPrompt(generate())}>Generate</button>
    </div>
  );
}

export default Generator;
