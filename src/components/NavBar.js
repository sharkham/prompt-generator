import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <Link className="nav-link" to="/">Words</Link>
      <Link className="nav-link" to="/nauticalwords">Nautical Words</Link>
      <Link className="nav-link" to="/about">About</Link>
    </div>
  );
}

export default NavBar;
