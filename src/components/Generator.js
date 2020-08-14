import React from 'react';

const Generator = () => {

  const generate = () => {
    // const randomElement = array[Math.floor(Math.random() * array.length)];
    console.log("generate function firing")
  }

  return (
    <div>
      <p>Prompt here</p>
      <button onClick={generate}>Generate</button>
    </div>
  );
}

export default Generator;
