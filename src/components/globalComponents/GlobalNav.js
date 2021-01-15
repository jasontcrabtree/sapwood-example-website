import React from 'react';
import { Link } from 'gatsby';

const GlobalNav = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Page 1</Link>
      </li>
      <li>
        <Link to="/page-2">Page 2</Link>
      </li>
    </ul>
  </nav>
);

export default GlobalNav;
