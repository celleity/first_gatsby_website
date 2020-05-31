import React from 'react';
import { Link } from 'gatsby';

import Container from 'components/Container';

const Header = () => {
  return (
    <header>
      <Container>
        <p>
         Celine's Web Site
        </p>
		</Container>
		
        <ul>
		<div  class="nav-right">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
		  </div>
        </ul>
		
      
    </header>
  );
};

export default Header;