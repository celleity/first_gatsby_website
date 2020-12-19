import React from 'react';
import { Link } from 'gatsby';

import Container from 'components/Container';

const Header = () => {
  return (
    <header>
      <Container>
        <p>
          <Link to="/">Celine's Web Site</Link>
        </p>
		</Container>
		
        <ul>
		<div  class="nav-right">
          <li>
            <Link to="/">Home</Link>
          </li>
		  <li>
            <Link to="/art/">Art</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
		    <li>
            <Link to="/fashion/">Fashion</Link>
          </li>
		  <li>
            <Link to="/lists/">Lists</Link>
          </li>
		  </div>
        </ul>
		
      
    </header>
  );
};

export default Header;