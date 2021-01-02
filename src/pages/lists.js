import React from 'react';
import Helmet from 'react-helmet';
import List from 'components/List';
import Layout from 'components/Layout';
import Container from 'components/Container';

const ListsPage = () => {




  return (
    <Layout pageName="lists" titleName="Lists">
      <Helmet>
        <title>Lists</title>
      </Helmet>
      <Container>
		
        <h1>Lists</h1>
		<div id="lists">
			<List listName="Best Books" /> 
			<List listName="Best Movies" /> 
			<List listName="Best Songs" /> 
			<List listName="Best TV Shows" /> 
			<List listName="Best Artworks" /> 
			<List listName="Best Memories" /> 
			</div>

      </Container>
    </Layout>
  );
};

export default ListsPage;