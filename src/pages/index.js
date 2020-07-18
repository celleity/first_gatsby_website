import React from 'react';
import Helmet from 'react-helmet';

import Layout from 'components/Layout';
import Container from 'components/Container';
import { Link } from 'gatsby';
import img_gatsby from 'assets/images/easel_icon2.svg';
import img_gatsby_hover from 'assets/images/easel_icon_hover.svg';
import img_gatsby_hover2 from 'assets/images/sewing_icon_hover.svg';
import img_gatsby_hover3 from 'assets/images/list_icon_hover.svg';
import img_gatsby_hover4 from 'assets/images/user_hover.svg';


import img_gatsby2 from 'assets/images/sewing_icon2.svg';
import img_gatsby3 from 'assets/images/list_icon2.svg';
import img_gatsby4 from 'assets/images/user.svg';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const IndexPage = () => {
  return (
    <Layout pageName="home">
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Container>
	 
         <Link to="/art/"><img class="icon" src={img_gatsby} alt="Build with Gatsby!" /></Link>
		<Link to="/fashion/"><img class="icon" src={img_gatsby2} alt="Build with Gatsby!" /></Link> 				
		<Link to="/lists/"><img class="icon" src={img_gatsby3} alt="Build with Gatsby!" /></Link>
		 <Link to="/about/"><img class="icon" src={img_gatsby4} alt="Build with Gatsby!" /></Link> 	
        <h1>Celine's Sassy Page</h1>
        <p>
          A web page to share my creations 
        </p>

        
        
        
        
     	 </Container>
    </Layout>
  );
};

export default IndexPage;
