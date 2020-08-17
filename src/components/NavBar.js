import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <Link to="/">📗</Link>
      <Link to="/nauticalwords">⚓️</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default NavBar;
