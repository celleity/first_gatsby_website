import React from 'react';
import Helmet from 'react-helmet';

import Layout from 'components/Layout';
import Container from 'components/Container';
import { Link } from 'gatsby';
import img_gatsby from 'assets/images/easel_icon2.svg';
import img_gatsby_hover from 'assets/images/easel_icon_hover.svg';
import img_gatsby_hover2 from 'assets/images/sewing_icon_hover.svg';
import img_gatsby_hover3 from 'assets/images/list_icon_hover.svg';
import img_gatsby_hover4 from 'assets/images/new_user_hover.png';
import img_gatsby_hover5 from 'assets/images/thoughts_hover.png';

import HoverImage from 'react-hover-image'
import img_gatsby2 from 'assets/images/sewing_icon2.svg';
import img_gatsby3 from 'assets/images/list_icon2.svg';
import img_gatsby4 from 'assets/images/new_user.png';
import img_gatsby5 from 'assets/images/thoughts.png';
//import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const IndexPage = () => {

 const styling = {
	 position: "relative", 
	 top: "25%",
	 bottom: "50%"


 }


  return (
    <Layout pageName="home">
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Container>
	
	<div className="columns" id="one"><Link to="/art/">	<h1> Art </h1><HoverImage  className="icon" style={styling} src={img_gatsby} hoverSrc={img_gatsby_hover}  alt="Build with Gatsby!" /></Link>	</div>
	<div className="columns" id="two"><Link to="/fashion/"><h1> Fashion </h1><HoverImage  className="icon" src={img_gatsby2} hoverSrc={img_gatsby_hover2}  alt="Build with Gatsby!" /></Link>  </div>
	<div className="columns" id="three"><Link to="/lists/"><h1> Lists </h1><HoverImage  className="icon" src={img_gatsby3} hoverSrc={img_gatsby_hover3}  alt="Build with Gatsby!" /></Link>  </div>
	<div className="columns" id="four"> <Link to="/about/"><h1> About </h1><HoverImage   className="icon" src={img_gatsby4} hoverSrc={img_gatsby_hover4}  alt="Build with Gatsby!" /></Link>  </div>
	<div className="columns" id="five"> <Link to="/thoughts/"><h1> Thoughts </h1><HoverImage   className="icon" src={img_gatsby5} hoverSrc={img_gatsby_hover5}  alt="Build with Gatsby!" /></Link>  </div>
		
	 
	</Container>
    </Layout>
  );
};

export default IndexPage;
