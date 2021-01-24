import React from 'react';
import { Link } from 'gatsby';

import Container from 'components/Container';

const Header = () => {
  return (
    <header>
      <nav>
	  <ul >
	  <div className="leftNav">
        <li id="right" >
          <Link to="/">Celine's Web Site</Link>
        </li>      
		</div>
		<div className="rightNav">
          <li >
            <Link to="/">Home</Link>
          </li>
		  <li >
            <Link to="/art/">Art</Link>
          </li>
          <li >
            <Link to="/about/">About</Link>
          </li >
		    <li >
            <Link to="/fashion/">Fashion</Link>
          </li>
		  <li >
            <Link to="/lists/">Lists</Link>
          </li>
		  <li >
            <Link to="/thoughts/">Thoughts</Link>
          </li>
		 </div>
        </ul>
		</nav>
      
    </header>
  );
};

export default Header;