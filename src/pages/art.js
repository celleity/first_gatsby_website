import React from 'react';
import Helmet from 'react-helmet';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Layout from 'components/Layout';
import Gallery from 'components/PhotoGrid';
import Container from 'components/Container';

const ArtPage = () => {
  return (
    <Layout pageName="art" titleName="Art">
      <Helmet>
        <title>Art</title>
      </Helmet>
      <Container>
            

			  <div className="artwork"> 
			   <Gallery/> 
			 
			   </div> 
				
      </Container>
    </Layout>
  );
};

export default ArtPage;