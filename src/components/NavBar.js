import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <Link to="/">Prompts</Link>
      <Link to="/words">More Prompts</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default NavBar;
