import React from 'react';
import Helmet from 'react-helmet';
import { Gallery } from "gatsby-theme-gallery";

import Layout from 'components/Layout';
import Container from 'components/Container';

const FashionPage = () => {
  return (
    <Layout pageName="fashion" titleName="Fashion">
      <Helmet>
     
      </Helmet>
      <Container>
		
        <p >This is the fashion page</p>
		
		<Gallery galleryMedium="Sewing" /> 
		
      </Container>
    </Layout>
  );
};

export default FashionPage;