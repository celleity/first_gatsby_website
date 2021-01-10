import React from 'react';
import Helmet from 'react-helmet';
import List from 'components/List';
import Layout from 'components/Layout';
import Container from 'components/Container';
import { useBookData } from "../hooks/use-book-data"
import { useMovieData } from "../hooks/use-movie-data"
import { useArtworkData } from "../hooks/use-artwork-data"
import { useSongData } from "../hooks/use-songs-data"
import { useShowData } from "../hooks/use-shows-data"

const ListsPage = () => {




  return (
    <Layout pageName="lists" titleName="Lists">
      <Helmet>
        <title>Lists</title>
      </Helmet>
      <Container>
		
        <h1>Lists</h1>
		
		<div className="listcontent">
		
		<div id="lists">

			<List data={useBookData()} listName="Best Books" /> 
			<List  data={useMovieData()}listName="Best Movies" /> 
			<List data={useSongData()}listName="Best Songs" /> 
			<List data={useShowData()}listName="Best TV Shows" /> 
			<List data={useArtworkData()}listName="Best Artworks" /> 
			<List data={useBookData()}listName="Best Memories" /> 
			</div>
			 <div className="aboutsection"> 
			<p > 
				This is really the best way to get to know me 
			</p> 
			</div>
			 
			
			</div>
      </Container>
    </Layout>
  );
};

export default ListsPage;