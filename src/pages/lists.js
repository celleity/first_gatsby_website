import React, {useState, useEffect} from 'react';
import Helmet from 'react-helmet';
import List from 'components/List';
import ListHeader from 'components/ListHeader';
import Layout from 'components/Layout';
import Container from 'components/Container';
import { Link, useStaticQuery, graphql } from 'gatsby';

import { useBookData } from "../hooks/use-book-data"
import { useMovieData } from "../hooks/use-movie-data"
import { useArtworkData } from "../hooks/use-artwork-data"
import { useSongData } from "../hooks/use-songs-data"
import { useShowData } from "../hooks/use-shows-data"





const ListsPage = () => {
//set state for all? or make seprate components/method
   const [isDisplayed, setDisplay] = useState(false);
   const [bookStyle, setBookStyle] = useState("list");
   const [movieStyle, setMovieStyle] = useState("list");
   const [showStyle, setShowStyle] = useState("list");
   const [memoryStyle, setMemoryStyle] = useState("list");
   const [artStyle, setArtStyle] = useState("list");
    const [songStyle, setSongStyle] = useState("list");


 

	    const handleDisplay = name => {
		
			if (name === "book"){			
				if (bookStyle === "list") {
				 setBookStyle("listVisible");
				 setMovieStyle("list")
				 setShowStyle("list")
				 setMemoryStyle("list")
				 setSongStyle("list")
				 setArtStyle("list")
				 }
				else
				{ setBookStyle("list");}
				} 

			if (name === "movie") { 
				if (movieStyle === "list") { 
				setMovieStyle("listVisible")
				setBookStyle("list");
				 
				 setShowStyle("list")
				 setMemoryStyle("list")
				 setSongStyle("list")
				 setArtStyle("list")
				
				} else {setMovieStyle("list")}
				}
			if (name === "show") {
				if (showStyle === "list") { 
				
				setShowStyle("listVisible")
				setMovieStyle("list")
				setBookStyle("list");
				setMemoryStyle("list")
				 setSongStyle("list")
				 setArtStyle("list")
				
				
				
				} else {setShowStyle("list")}
				}
			if (name === "memory") {
				if (memoryStyle === "list") {
				setMemoryStyle("listVisible")
				setShowStyle("list")
				setMovieStyle("list")
				setBookStyle("list");
				setSongStyle("list")
				 setArtStyle("list")
				
				
				} else {setMemoryStyle("list")}

				}

				if (name === "song") {
			
				if (songStyle === "list") { 
				
				setSongStyle("listVisible")
				setMemoryStyle("list")
				setShowStyle("list")
				setMovieStyle("list")
				setBookStyle("list");
				 setArtStyle("list")
				} else {setSongStyle("list")}
				}
				if (name === "art") {
			
				if (artStyle === "list") { 
				setArtStyle("listVisible")
				setSongStyle("list")
				setMemoryStyle("list")
				setShowStyle("list")
				setMovieStyle("list")
				setBookStyle("list");
				
				
				
				} else {setArtStyle("list")}
				}
       }
		
	/*
	   useEffect(() => {

	   if(tempName)
	   isDisplayed ?  setStyle("listVisible") : setStyle("list")
      
   }, [isDisplayed]);

*/

  return (
    <Layout pageName="lists" titleName="Lists">
      <Helmet>
        <title>Lists</title>
      </Helmet>
      <Container>
		
        <h1>Lists</h1>
		
	
		
		<div id="lists">
			<Link className="listHeader" to="#BestBooks" onClick={() => handleDisplay("book")}> Best Books </Link>
			<Link  className="listHeader" to="#BestMovies" onClick={() => handleDisplay("movie")}> Best Movies </Link> 
			<Link className="listHeader" to="#BestSongs" onClick={() => handleDisplay("song")}> Best Songs</Link> 
			<Link className="listHeader" to="#BestTVShows" onClick={() => handleDisplay("show")}> Best TV Shows  </Link> 
			<Link className="listHeader" to="#BestArtworks" onClick={() => handleDisplay("art")}> Best Artwork </Link> 
			<Link className="listHeader" to="#BestMemories" onClick={() => handleDisplay("memory")}> Best Memories </Link> 
			
			</div>
			 <div className="aboutsection"> 
			<List data={useBookData()} href="#BestBooks" listName="Best Books" className={bookStyle} />  
			<List  data={useMovieData()}listName="Best Movies" className={movieStyle}/> 
			<List data={useSongData()}listName="Best Songs"className={songStyle} /> 
			<List data={useShowData()}listName="Best TV Shows" className={showStyle}/> 
			<List data={useArtworkData()}listName="Best Artworks" className={artStyle}/> 
			<List data={useBookData()}listName="Best Memories" className={memoryStyle}/> 
			</div>
			 
			
			
      </Container>
    </Layout>
  );
};






export default ListsPage;