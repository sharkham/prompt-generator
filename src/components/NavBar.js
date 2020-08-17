import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <Link to="/">Words</Link>
      <Link to="/words">More Words</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default NavBar;
