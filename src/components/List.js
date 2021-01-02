import React, {useState, useEffect} from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';


import Container from 'components/Container';
 
const List = ({listName} ) => {

	const linkName = "#" + listName.replace(/\s+/g, '');
 
	const data = useStaticQuery(graphql` 
		
			query ListItemsQuery {
				allTestJson {
					edges
						{
					node {
						book
						author


					}		
						}
				}
				}`
      )

	   const [isDisplayed, setDisplay] = useState(true);
	   const [style, setStyle] = useState("none");
	    const handleDisplay = () => {
        setDisplay(!isDisplayed);
		console.log(isDisplayed);
    }

	   useEffect(() => {
	   isDisplayed ?  setStyle("flex") : setStyle("none")
      
   }, [isDisplayed]);

      
       return ( 
		<div>
		<Link onClick={handleDisplay} className="listHeader" to={linkName}> {listName} </Link>
			<ul className="list" id={linkName} style={{display: style} }>{getListNames(data)} </ul> 
			
		</div>


	    
	   );
	      
	   };


	   function getListNames(data) {
			const listArray = []; 

			data.allTestJson.edges.forEach(item => 
				listArray.push(<li key={item.node.book}> {item.node.book} by {item.node.author} </li> )
			);
			return listArray;

	   };
          




export default List;