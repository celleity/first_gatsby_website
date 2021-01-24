import React, {useState, useEffect} from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';



import Container from 'components/Container';
 
const List = ({data, listName, className} ) => {
		
	const linkName = "#" + listName.replace(/\s+/g, '');
 
	 


      
       return ( 

		<div >
		
		
			<ul className={className} id={linkName} >{getListItems(data)} </ul> 
			
		</div>


	    
	   );
	      
	   };


	   function getListItems(data) {
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