import React, {useState, useEffect} from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';



import Container from 'components/Container';
 
const ListHeader = ({listName} ) => {
		
	const linkName = "#" + listName.replace(/\s+/g, '');
 
	 
	  
      
       return ( 

		<div >
		
		<Link className="listHeader" to={linkName}> {listName} </Link>
			
			
		</div>


	    
	   );
	      
	   };


	 
          




export default ListHeader;