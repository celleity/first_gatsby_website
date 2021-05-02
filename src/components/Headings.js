import React from 'react';
import { Link } from 'gatsby';

import Container from 'components/Container';

const Headings = ({headingNames, page}) => {



  return (

  

  
	<div className="headingNames">
	 
	 {headingNames.map((name) => (
       <a key={name} href={"#" + name}> <h1>  {name} </h1> </a>
		 ))
   }
      </div>
   
   
   
  
   );
   };

export default Headings;