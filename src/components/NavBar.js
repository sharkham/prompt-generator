import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <Link to="/"><span role="img" aria-label="Words">📗</span></Link>
      <Link to="/nauticalwords"><span role="img" aria-label="Nautical Words">⚓️</span></Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default NavBar;
