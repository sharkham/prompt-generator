import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav role="navigation">
      <ul className="menu">
        <li>
          <Link className="nav-link" to="/">Words</Link>
        </li>
        <li>
          <Link className="nav-link" to="/nauticalwords">Nautical Words</Link>
        </li>
        <li>
          <Link className="nav-link" to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
