import React from 'react';

const Generator = () => {

  const generate = () => {
    console.log("generate function firing")
  }

  return (
    <div>
      <p>Generator here</p>
      <button onClick={generate}>Generate</button>
    </div>
  );
}

export default Generator;
