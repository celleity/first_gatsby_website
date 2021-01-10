import React, {useState, useEffect} from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';



import Container from 'components/Container';
 
const List = ({data, listName} ) => {
		console.log(data);
		console.log(listName);
	const linkName = "#" + listName.replace(/\s+/g, '');
 
	 
	   const [isDisplayed, setDisplay] = useState(false);
	   const [style, setStyle] = useState("none");
	    const handleDisplay = () => {
        setDisplay(!isDisplayed);
		console.log(isDisplayed);
    }

	   useEffect(() => {
	   isDisplayed ?  setStyle("grid") : setStyle("none")
      
   }, [isDisplayed]);

      
       return ( 

		<div className="listdiv">
		
		<Link onClick={handleDisplay} className="listHeader" to={linkName}> {listName} </Link>
			<ul className="list" id={linkName} style={{display: style} }>{getListNames(data)} </ul> 
			
		</div>


	    
	   );
	      
	   };


	   function getListNames(data) {
			const listArray = []; 

			if (data.allBookJson){
			data.allBookJson.edges.forEach(item => 
				listArray.push(<li key={item.node.book}> "{item.node.book}" by {item.node.author} </li> )
			);}
			if (data.allMoviesJson){
			data.allMoviesJson.edges.forEach(item => 
				listArray.push(<li key={item.node.movie}> "{item.node.movie}" directed by {item.node.director} </li> )
			);}
			if (data.allArtworksJson){
			data.allArtworksJson.edges.forEach(item => 
				listArray.push(<li key={item.node.artwork}> "{item.node.artwork}" by {item.node.artist} </li> )
			);}
			if (data.allSongsJson){
			data.allSongsJson.edges.forEach(item => 
				listArray.push(<li key={item.node.song}> "{item.node.song}" by {item.node.band} </li> )
			);}
			if (data.allShowsJson){
			data.allShowsJson.edges.forEach(item => 
				listArray.push(<li key={item.node.show}> "{item.node.show}" by {item.node.director} </li> )
			);}

			return listArray;

	   };
          




export default List;