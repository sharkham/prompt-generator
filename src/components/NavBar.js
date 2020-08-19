import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

  return (
    <nav role="navigation">
          <Link className="nav-link" to="/">Words</Link>
          <Link className="nav-link" to="/nauticalwords">Nautical Words</Link>
          <Link className="nav-link" to="/about">About</Link>
    </nav>
  );
}

export default NavBar;
