import React from 'react';
import Helmet from 'react-helmet';

import Layout from 'components/Layout';
import Container from 'components/Container';
import PhotoGrid from 'components/PhotoGrid';
//import eclipse from 'assets/images/eclipse.jpg';
import Img from "gatsby-image"


const ArtPage = () => {
  return (
    <Layout pageName="art" titleName="Art" >
      <Helmet>
        <title>Art</title>
      </Helmet>
	  <div id="background">
	  <p id="artP">  </p>
	  
	 
	 
	  </div>
    </Layout>
	
  );
};

export default ArtPage;

//add grid/flex component for art pics
//check out other websites, put in some js magic before return