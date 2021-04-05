import React from 'react';
import Helmet from 'react-helmet';

import Layout from 'components/Layout';
import Container from 'components/Container';



const AboutPage = () => {
  return (
    <Layout pageName="about" titleName="About">
	  
      <Helmet>
       
      </Helmet>
    
	  
		  <div id="background">
        <p id="about-content">I am a creative person. I studied applied arts and computer science. I grew up in the woods with my family, and had my own rock and tree (designated to me by my older sister). </p>
		</div>
     
	
    </Layout>

	 
  );
};

export default AboutPage;