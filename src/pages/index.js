import React from 'react';
import Helmet from 'react-helmet';

import Layout from 'components/Layout';
import Container from 'components/Container';

import img_gatsby from 'assets/images/easel_icon.svg';
import img_gatsby2 from 'assets/images/sewing_icon.svg';
import img_gatsby3 from 'assets/images/list_icon.svg';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const IndexPage = () => {
  return (
    <Layout pageName="home">
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Container>
        <img class="icon" src={img_gatsby} alt="Build with Gatsby!" />
		<img class="icon" src={img_gatsby2} alt="Build with Gatsby!" />
		<img class="icon" src={img_gatsby3} alt="Build with Gatsby!" />
        <h1>Celine's Sassy Page</h1>
        <p>
          A web page to share my creations 
        </p>

        
        
        
        
      </Container>
    </Layout>
  );
};

export default IndexPage;
