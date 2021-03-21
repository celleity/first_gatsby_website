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
				listArray.push(<li key={item.node.book}>  <a href={item.node.link}> "{item.node.book}" by {item.node.author} </a> </li> )
			);}
			if (data.allMoviesJson){
			data.allMoviesJson.edges.forEach(item => 
				listArray.push(<li key={item.node.movie}> <a href={item.node.link}> "{item.node.movie}" directed by {item.node.director} </a> </li> )
			);}
			if (data.allArtworksJson){
			data.allArtworksJson.edges.forEach(item => 
				listArray.push(<li key={item.node.artwork}>  <a href={item.node.link}> "{item.node.artwork}" by {item.node.artist} </a> </li> )
			);}
			if (data.allSongsJson){
			data.allSongsJson.edges.forEach(item => 
				listArray.push(<li key={item.node.song}>  <a href={item.node.link}>  "{item.node.song}" by {item.node.band} </a> </li> )
			);}
			if (data.allShowsJson){
			data.allShowsJson.edges.forEach(item => 
				listArray.push(<li key={item.node.show}>  <a href={item.node.link}> "{item.node.show}" by {item.node.director} </a> </li> )
			);}

			return listArray;

	   };
          




export default List;